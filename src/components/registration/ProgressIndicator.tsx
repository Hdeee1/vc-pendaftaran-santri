import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export function ProgressIndicator({ currentStep, totalSteps, stepTitles }: ProgressIndicatorProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-4">
        {stepTitles.map((title, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          const isInactive = stepNumber > currentStep;

          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                {index > 0 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5 transition-colors duration-300",
                      isCompleted || (isActive && index > 0) ? "bg-step-completed" : "bg-step-inactive"
                    )}
                  />
                )}
                <div
                  className={cn(
                    "relative flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300",
                    isCompleted && "bg-step-completed text-white shadow-step animate-step-bounce",
                    isActive && "bg-step-active text-white shadow-step scale-110",
                    isInactive && "bg-step-inactive text-white"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </div>
                {index < stepTitles.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5 transition-colors duration-300",
                      isCompleted ? "bg-step-completed" : "bg-step-inactive"
                    )}
                  />
                )}
              </div>
              <div className="mt-2 text-center">
                <p
                  className={cn(
                    "text-xs font-medium transition-colors duration-300",
                    isActive ? "text-step-active" : isCompleted ? "text-step-completed" : "text-step-inactive"
                  )}
                >
                  {title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}