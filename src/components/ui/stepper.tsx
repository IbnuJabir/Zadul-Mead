import React from "react";

type StepperProps = {
  steps: string[];
  currentStep: number;
  variant?: "numbers" | "dots"; // Optional variant for different stepper styles
};

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  variant = "numbers",
}) => {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`rounded-full h-8 w-8 flex items-center justify-center font-bold ${
              index <= currentStep
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-600"
            } ${index + 1 <= currentStep ? "md:ml-0 -ml-40" : "ml-0"}`}
          >
            {variant === "numbers" ? index + 1 : "•"}
          </div>
          <span
            className={`ml-2 ${
              index <= currentStep ? "text-blue-600" : "text-gray-600"
            }`}
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <div className="w-8 h-px bg-gray-300 mx-4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
