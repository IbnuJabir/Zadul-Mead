import React, { Dispatch, ReactNode, SetStateAction } from "react";
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
  mualif: string;
  qireatGivenBy: string;
  schedule: Schedule[];
  isActive: boolean;
  startingDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  type: string;
};

export type TodayProgram = {
  programName: string;
  startTime: string;
  endTime: string;
};
export type NextProgram = {
  programName: string;
  timeLeft: Date;
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

export type SidebarProps = {
  show: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
};

export type MenuItemProps = {
  icon: React.ReactNode;
  name: string;
  route: string;
};
export type LayoutProps = {
  children: ReactNode;
};

export type RegistrationSettings = {
  maintenanceMode: boolean;
  maxRegistrationsMale: number;
  maxRegistrationsFemale: number;
  registrationStartDate: string; // or Date if you prefer to parse it as a Date object
  registrationEndDate: string; // or Date if you prefer to parse it as a Date object
  registrationPaymentAmount: number;
  createdAt: string; // or Date if you prefer to parse it as a Date object
  updatedAt: string; // or Date if you prefer to parse it as a Date object
  __v: number;
  registrationAccountNumber: string;
  registrationPaymentReceiver: string;
};
