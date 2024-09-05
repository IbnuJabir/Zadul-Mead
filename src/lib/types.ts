export type AnnouncementsType = {
  _id: string;
  name: string;
  description: string;
  coverPicture: string;
  isActive: boolean;
  startingDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type FormFields = {
  fullName: string;
  age: number;
  address: string;
  educationStatus: string;
  previousSchool: string;
  averageResultInPreviousSchool: string;
  behaviorInPreviousSchool: string;
  anyDisease: string;
  fatherName: string;
  fatherPhone: string;
  motherName: string;
  motherPhone: string;
  emergencyResponderName: string;
  emergencyResponderPhone: string;
  tx_ref: string;
  sex: string;
};

export type Schedule = {
  day: string;
  startTime: string;
  endTime: string;
  _id: string;
};

export type Program = {
  _id: string;
  name: string;
  coverPicture: string;
  classType: string;
  schedule: Schedule[];
  isActive: boolean;
  startingDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  type: string;
};

export type PaymentInfoStepProps = {
  loading: boolean;
  success: boolean;
};
export type RegistrationResponse = {
  msg: string;
  reference: string;
  error: string;
};

export type RegistrationState = {
  registrationRef: string;
  error: string;
};
export type DialogState = {
  successDialog: boolean;
  errorDialog: boolean;
};
