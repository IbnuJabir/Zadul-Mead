"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import {
  MultiStepForm,
  MultiStepFormContextProvider,
  MultiStepFormHeader,
  MultiStepFormStep,
  createStepSchema,
  useMultiStepFormContext,
} from "@/components/ui/multi-step-form";
import Stepper from "@/components/ui/stepper";

const FormSchema = createStepSchema({
  personalInfo: z.object({
    fullName: z.string().min(1, "Full Name is required"),
    age: z.coerce.number().min(1, "Age must be at least 1"),
    address: z.string().min(1, "Address is required"),
    sex: z.string().min(1, "Sex is required"),
  }),
  schoolInfo: z.object({
    educationStatus: z.string().min(1, "Education Status is required"),
    previousSchool: z.string().min(1, "Previous School is required"),
    averageResultInPreviousSchool: z
      .string()
      .min(1, "Average Result is required"),
    behaviorInPreviousSchool: z.string().min(1, "Behavior is required"),
    anyDisease: z.string().optional(),
  }),
  familyInfo: z.object({
    fatherName: z.string().min(1, "Father's Name is required"),
    fatherPhone: z.string().min(10, "Valid Phone is required"),
    motherName: z.string().min(1, "Mother's Name is required"),
    motherPhone: z.string().min(10, "Valid Phone is required"),
    emergencyResponderName: z.string().min(1, "Responder Name is required"),
    emergencyResponderPhone: z.string().min(10, "Valid Phone is required"),
    tx_ref: z.string().min(1, "Transaction Reference is required"),
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export function MultiStepFormDemo() {
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
        tx_ref: "",
      },
    },
    reValidateMode: "onBlur",
    mode: "onBlur",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <MultiStepForm
      className="space-y-10 p-6 md:p-8 rounded-xl border"
      schema={FormSchema}
      form={form}
      onSubmit={onSubmit}
    >
      <MultiStepFormHeader className="flex w-full flex-col justify-center space-y-4 md:space-y-6">
        <h2 className="text-lg md:text-xl font-bold">Registration Form</h2>

        <MultiStepFormContextProvider>
          {({ currentStepIndex }) => (
            <Stepper
              variant="numbers"
              steps={["Personal Info", "School Info", "Family Info", "Review"]}
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

      <MultiStepFormStep name="review">
        <ReviewStep />
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
                <Input {...field} className="w-full"/>
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
                <Input type="number" {...field} className="text-gray-600 w-full" />
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
                <Input {...field} className="w-full"/>
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
                <Input {...field} className="w-full"/>
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
                <Input {...field} className="w-full"/>
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
                <Input {...field} className="w-full"/>
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
                <Input {...field} className="w-full"/>
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
                <Input {...field} className="w-full"/>
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
                <Input {...field} className="w-full"/>
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
  const { form, nextStep, prevStep } = useMultiStepFormContext();

  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          name="familyInfo.fatherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father&apos;s Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="familyInfo.fatherPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father&apos;s Phone</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="familyInfo.motherPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mother&apos;s Phone</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="familyInfo.emergencyResponderPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emergency Responder Phone</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="familyInfo.tx_ref"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Reference</FormLabel>
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

function ReviewStep() {
  const { prevStep, form } = useMultiStepFormContext<typeof FormSchema>();
  const values = form.getValues();

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        <div>Great! Please review your information.</div>

        <div className="flex flex-col space-y-2 text-sm">
          <div>
            <span>Full Name</span>: <span>{values.personalInfo.fullName}</span>
          </div>
          <div>
            <span>Age</span>: <span>{values.personalInfo.age}</span>
          </div>
          <div>
            <span>Address</span>: <span>{values.personalInfo.address}</span>
          </div>
          <div>
            <span>Sex</span>: <span>{values.personalInfo.sex}</span>
          </div>
          <div>
            <span>Education Status</span>:{" "}
            <span>{values.schoolInfo.educationStatus}</span>
          </div>
          <div>
            <span>Previous School</span>:{" "}
            <span>{values.schoolInfo.previousSchool}</span>
          </div>
          <div>
            <span>Average Result</span>:{" "}
            <span>{values.schoolInfo.averageResultInPreviousSchool}</span>
          </div>
          <div>
            <span>Behavior</span>:{" "}
            <span>{values.schoolInfo.behaviorInPreviousSchool}</span>
          </div>
          <div>
            <span>Any Disease</span>:{" "}
            <span>{values.schoolInfo.anyDisease}</span>
          </div>
          <div>
            <span>Father&apos;s Name</span>:{" "}
            <span>{values.familyInfo.fatherName}</span>
          </div>
          <div>
            <span>Father&apos;s Phone</span>:{" "}
            <span>{values.familyInfo.fatherPhone}</span>
          </div>
          <div>
            <span>Mother&apos;s Name</span>:{" "}
            <span>{values.familyInfo.motherName}</span>
          </div>
          <div>
            <span>Mother&apos;s Phone</span>:{" "}
            <span>{values.familyInfo.motherPhone}</span>
          </div>
          <div>
            <span>Emergency Responder Name</span>:{" "}
            <span>{values.familyInfo.emergencyResponderName}</span>
          </div>
          <div>
            <span>Emergency Responder Phone</span>:{" "}
            <span>{values.familyInfo.emergencyResponderPhone}</span>
          </div>
          <div>
            <span>Transaction Reference</span>:{" "}
            <span>{values.familyInfo.tx_ref}</span>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center space-x-2 mt-8">
        <Button type="button" variant="outline" onClick={prevStep}>
          Back
        </Button>

        <Button type="submit">Proceed to Payment</Button>
      </div>
    </div>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import {
  MultiStepForm,
  MultiStepFormContextProvider,
  MultiStepFormHeader,
  MultiStepFormStep,
  createStepSchema,
  useMultiStepFormContext,
} from "@/components/ui/multi-step-form";
import Stepper from "@/components/ui/stepper";

const FormSchema = createStepSchema({
  personalInfo: z.object({
    fullName: z.string().min(1, "Full Name is required"),
    age: z.coerce.number().min(1, "Age must be at least 1"),
    address: z.string().min(1, "Address is required"),
    sex: z.string().min(1, "Sex is required"),
  }),
  schoolInfo: z.object({
    educationStatus: z.string().min(1, "Education Status is required"),
    previousSchool: z.string().min(1, "Previous School is required"),
    averageResultInPreviousSchool: z
      .string()
      .min(1, "Average Result is required"),
    behaviorInPreviousSchool: z.string().min(1, "Behavior is required"),
    anyDisease: z.string().optional(),
  }),
  familyInfo: z.object({
    fatherName: z.string().min(1, "Father's Name is required"),
    fatherPhone: z.string().min(10, "Valid Phone is required"),
    motherName: z.string().min(1, "Mother's Name is required"),
    motherPhone: z.string().min(10, "Valid Phone is required"),
    emergencyResponderName: z.string().min(1, "Responder Name is required"),
    emergencyResponderPhone: z.string().min(10, "Valid Phone is required"),
    tx_ref: z.string().min(1, "Transaction Reference is required"),
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export function MultiStepFormDemo() {
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
        tx_ref: "",
      },
    },
    reValidateMode: "onBlur",
    mode: "onBlur",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

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
              steps={["Personal Info", "School Info", "Family Info", "Review"]}
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

      <MultiStepFormStep name="review">
        <ReviewStep />
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
                <Input {...field} />
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
  const { form, nextStep, prevStep } = useMultiStepFormContext();

  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          name="familyInfo.fatherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father's Name</FormLabel>
              <FormControl>
                <Input {...field} className="w-full"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="familyInfo.fatherPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father's Phone</FormLabel>
              <FormControl>
                <Input {...field} className="w-full"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="familyInfo.motherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mother's Name</FormLabel>
              <FormControl>
                <Input {...field} className="w-full"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="familyInfo.motherPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mother's Phone</FormLabel>
              <FormControl>
                <Input {...field} className="w-full"/>
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
                <Input {...field} className="w-full"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="familyInfo.emergencyResponderPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emergency Responder Phone</FormLabel>
              <FormControl>
                <Input {...field} className="w-full"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="familyInfo.tx_ref"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Reference</FormLabel>
              <FormControl>
                <Input {...field} className="w-full"/>
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

function ReviewStep() {
  const { prevStep, form } = useMultiStepFormContext<typeof FormSchema>();
  const values = form.getValues();

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        <div>Great! Please review your information.</div>

        <div className="flex flex-col space-y-3 pb-5 text-sm">
          <div >
            <span >Full Name</span> : <span className="px-1">{values.personalInfo.fullName}</span>
          </div>
          <div>
            <span>Age</span> : <span className="px-1">{values.personalInfo.age}</span>
          </div>
          <div>
            <span>Address</span> : <span className="px-1">{values.personalInfo.address}</span>
          </div>
          <div>
            <span>Sex</span> : <span className="px-1">{values.personalInfo.sex}</span>
          </div>
          <div>
            <span>Education Status</span> :{" "}
            <span className="px-1">{values.schoolInfo.educationStatus}</span>
          </div>
          <div>
            <span>Previous School</span> :{" "}
            <span className="px-1">{values.schoolInfo.previousSchool}</span>
          </div>
          <div>
            <span>Average Result</span> :{" "}
            <span className="px-1">{values.schoolInfo.averageResultInPreviousSchool}</span>
          </div>
          <div>
            <span>Behavior</span> :{" "}
            <span className="px-1">{values.schoolInfo.behaviorInPreviousSchool}</span>
          </div>
          <div>
            <span>Any Disease</span> :{" "}
            <span className="px-1">{values.schoolInfo.anyDisease}</span>
          </div>
          <div>
            <span>Father's Name</span> :{" "}
            <span className="px-1">{values.familyInfo.fatherName}</span>
          </div>
          <div>
            <span>Father's Phone</span> :{" "}
            <span className="px-1">{values.familyInfo.fatherPhone}</span>
          </div>
          <div>
            <span>Mother's Name</span> :{" "}
            <span className="px-1">{values.familyInfo.motherName}</span>
          </div>
          <div>
            <span>Mother's Phone</span> :{" "}
            <span className="px-1">{values.familyInfo.motherPhone}</span>
          </div>
          <div>
            <span>Emergency Responder Name</span> :{" "}
            <span className="px-1">{values.familyInfo.emergencyResponderName}</span>
          </div>
          <div>
            <span>Emergency Responder Phone</span> :{" "}
            <span className="px-1">{values.familyInfo.emergencyResponderPhone}</span>
          </div>
          <div>
            <span>Transaction Reference</span> :{" "}
            <span className="px-1">{values.familyInfo.tx_ref}</span>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center space-x-2 mt-8">
        <Button type="button" variant="outline" onClick={prevStep}>
          Back
        </Button>

        <Button type="submit">Proceed to Payment</Button>
      </div>
    </div>
  );
}
