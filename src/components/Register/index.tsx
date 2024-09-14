"use cleint";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MuiTelInput } from "mui-tel-input";
import {
  MultiStepForm,
  MultiStepFormContextProvider,
  MultiStepFormHeader,
  MultiStepFormStep,
  createStepSchema,
  useMultiStepFormContext,
} from "@/components/ui/multi-step-form";
import Stepper from "@/components/ui/stepper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  PaymentInfoStepProps,
  RegistrationResponse,
  RegistrationSettings,
} from "@/lib/types";
import {
  DialogComponent,
  ErrorDialogComponent,
} from "../Commons/DialogComponent";
import { useDispatch, useSelector } from "react-redux";
import { setRegRef, setRegError } from "@/state/registerSlice";
import { RootState } from "@/state/store";
import {
  closeErrorDialog,
  closeSuccessDialog,
  openErrorDialog,
  openSuccessDialog,
} from "@/state/dialogSlice";
import Unavailable from "../Commons/Unavailable";
import ProgramsUnavailable from "../Commons/programsNotAvailable";
import Loader from "@/app/loading";

const FormSchema = createStepSchema({
  personalInfo: z.object({
    fullName: z.string().min(1, ""),
    age: z.coerce.number().min(1, ""),
    address: z.string().min(1, ""),
    sex: z.string().min(1, ""),
  }),
  schoolInfo: z.object({
    educationStatus: z.string().min(1, ""),
    previousSchool: z.string().min(1, ""),
    averageResultInPreviousSchool: z.string().min(1, ""),
    behaviorInPreviousSchool: z.string().min(1, ""),
    anyDisease: z.string().optional(),
  }),
  familyInfo: z.object({
    fatherName: z.string().min(1, ""),
    fatherPhone: z.string().min(10, ""),
    motherName: z.string().min(1, ""),
    motherPhone: z.string().min(10, ""),
    emergencyResponderName: z.string().min(1, ""),
    emergencyResponderPhone: z.string().min(10, ""),
  }),
  paymentInfo: z.object({
    tx_ref: z.string().min(10, ""),
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export function MultiStepFormDemo() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [registerSettings, setRegisterSettings] =
    useState<RegistrationSettings | null>(null);

  const dispatch = useDispatch();
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      personalInfo: { fullName: "", age: 0, address: "", sex: "" },
      schoolInfo: {
        educationStatus: "",
        previousSchool: "",
        averageResultInPreviousSchool: "",
        behaviorInPreviousSchool: "",
        anyDisease: "",
      },
      familyInfo: {
        fatherName: "",
        fatherPhone: "",
        motherName: "",
        motherPhone: "",
        emergencyResponderName: "",
        emergencyResponderPhone: "",
      },
      paymentInfo: {
        tx_ref: "",
      },
    },
    reValidateMode: "onBlur",
    mode: "onBlur",
  });

  useEffect(() => {
    const fetchRegisterSettings = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_BACKEND_API}/user/setting`
        );
        const data: RegistrationSettings = await response.json();
        setRegisterSettings(data);
      } catch (error) {
        console.error("Error fetching registration settings:", error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRegisterSettings();
  }, []);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setSuccess(false);

    const formatPhone = (phone: string) => phone.replace(/\s+/g, "");

    const payload = {
      fullName: data.personalInfo.fullName,
      age: data.personalInfo.age,
      address: data.personalInfo.address,
      educationStatus: data.schoolInfo.educationStatus,
      previousSchool: data.schoolInfo.previousSchool,
      averageResultInPreviousSchool:
        data.schoolInfo.averageResultInPreviousSchool,
      behaviorInPreviousSchool: data.schoolInfo.behaviorInPreviousSchool,
      anyDisease: data.schoolInfo.anyDisease,
      fatherName: data.familyInfo.fatherName,
      fatherPhone: formatPhone(data.familyInfo.fatherPhone),
      motherName: data.familyInfo.motherName,
      motherPhone: formatPhone(data.familyInfo.motherPhone),
      emergencyResponderName: data.familyInfo.emergencyResponderName,
      emergencyResponderPhone: formatPhone(
        data.familyInfo.emergencyResponderPhone
      ),
      tx_ref: data.paymentInfo.tx_ref,
      sex: data.personalInfo.sex,
    };

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_API}/registration`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result: RegistrationResponse = await response.json();

      if (!response.ok) {
        dispatch(setRegError(result.error));
        dispatch(openErrorDialog());
        throw new Error(result.error);
      }

      dispatch(setRegRef(result.reference));
      dispatch(openSuccessDialog());
      setSuccess(true);
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (hasError)
    return (
      <Unavailable message="Unable to load registration details, try again" />
    );
  if (registerSettings?.maintenanceMode) {
    return (
      <div className="w-full bg-black">
        <ProgramsUnavailable message="Registration is currently unavailable" />
      </div>
    );
  }

  return (
    <MultiStepForm
      className="space-y-10 p-8 rounded-xl border"
      schema={FormSchema}
      form={form}
      onSubmit={onSubmit}
    >
      <MultiStepFormHeader className="flex w-full flex-col justify-center space-y-6">
        <h2 className="text-xl font-bold">Registration Form</h2>

        <MultiStepFormContextProvider>
          {({ currentStepIndex }) => (
            <Stepper
              variant="numbers"
              steps={["Personal Info", "School Info", "Family Info", "Payment"]}
              currentStep={currentStepIndex}
            />
          )}
        </MultiStepFormContextProvider>
      </MultiStepFormHeader>

      <MultiStepFormStep name="personalInfo">
        <PersonalInfoStep />
      </MultiStepFormStep>

      <MultiStepFormStep name="schoolInfo">
        <SchoolInfoStep />
      </MultiStepFormStep>

      <MultiStepFormStep name="familyInfo">
        <FamilyInfoStep />
      </MultiStepFormStep>

      <MultiStepFormStep name="paymentInfo">
        <PaymentInfoStep loading={loading} success={success} />
      </MultiStepFormStep>
    </MultiStepForm>
  );
}

function PersonalInfoStep() {
  const { form, nextStep, isStepValid } = useMultiStepFormContext();

  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          name="personalInfo.fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="personalInfo.age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" {...field} className="text-gray-600" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="personalInfo.address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="personalInfo.sex"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sex</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="m">Male</SelectItem>
                    <SelectItem value="f">Female</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex justify-end mt-8">
        <Button onClick={nextStep} disabled={!isStepValid()}>
          Next
        </Button>
      </div>
    </Form>
  );
}

function SchoolInfoStep() {
  const { form, nextStep, prevStep } = useMultiStepFormContext();

  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          name="schoolInfo.educationStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Education Status</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="schoolInfo.previousSchool"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous School</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="schoolInfo.averageResultInPreviousSchool"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Average Result</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="schoolInfo.behaviorInPreviousSchool"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Behavior in Previous School</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="schoolInfo.anyDisease"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Any Disease</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="w-full flex justify-between items-center space-x-2 mt-8">
        <Button type="button" variant="outline" onClick={prevStep}>
          Previous
        </Button>
        <Button onClick={nextStep}>Next</Button>
      </div>
    </Form>
  );
}

function FamilyInfoStep() {
  const { form, nextStep, prevStep, isStepValid } = useMultiStepFormContext();

  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          name="familyInfo.fatherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father&apos;s Name</FormLabel>
              <FormControl>
                <Input {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Controller
          name="familyInfo.fatherPhone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father&apos;s Phone</FormLabel>
              <FormControl>
                <MuiTelInput
                  {...field}
                  defaultCountry="ET"
                  required
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="familyInfo.motherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mother&apos;s Name</FormLabel>
              <FormControl>
                <Input {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Controller
          name="familyInfo.motherPhone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mother&apos;s Phone</FormLabel>
              <FormControl>
                <MuiTelInput
                  {...field}
                  defaultCountry="ET"
                  required
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="familyInfo.emergencyResponderName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emergency Responder Name</FormLabel>
              <FormControl>
                <Input {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Controller
          name="familyInfo.emergencyResponderPhone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emergency Responder Phone</FormLabel>
              <FormControl>
                <MuiTelInput
                  {...field}
                  defaultCountry="ET"
                  required
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="w-full flex justify-between items-center space-x-2 mt-8">
        <Button type="button" variant="outline" onClick={prevStep}>
          Previous
        </Button>
        <Button onClick={nextStep} disabled={!isStepValid()}>
          Next
        </Button>
      </div>
    </Form>
  );
}

function PaymentInfoStep({ loading, success }: PaymentInfoStepProps) {
  const { form, prevStep } = useMultiStepFormContext();
  const successDialog = useSelector(
    (state: RootState) => state.dialog.successDialog
  );
  const errorDialog = useSelector(
    (state: RootState) => state.dialog.errorDialog
  );
  const dispatch = useDispatch();
  // Open dialog only after registrationRef is updated and not null

  const closeModal = () => {
    dispatch(closeSuccessDialog());
    dispatch(closeErrorDialog());
  };

  return (
    <Form {...form}>
      <div className="flex flex-col gap-4">
        <FormField
          name="paymentInfo.tx_ref"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Reference</FormLabel>
              <FormControl>
                <Input {...field} className="w-full md:w-1/2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="w-full md:w-1/2 text-sm text-gray-700">
          To complete your registration, please enter the transaction reference
          for your <span className="font-bold">payment of 1550 Birr </span>made
          through the Commercial Bank of Ethiopia. Only CBE transaction
          references are valid.{" "}
        </p>
      </div>
      <div className="w-full flex justify-between items-center space-x-2 mt-8">
        <Button type="button" variant="outline" onClick={prevStep}>
          Previous
        </Button>
        <Button disabled={loading} type="submit">
          {loading ? "Loading..." : "Verify Payment"}
        </Button>
      </div>
      {successDialog && <DialogComponent onClose={closeModal} />}
      {errorDialog && <ErrorDialogComponent onClose={closeModal} />}
    </Form>
  );
}
