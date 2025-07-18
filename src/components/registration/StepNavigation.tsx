import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPreviousStep: () => void;
  onNextStep: () => void;
  isNextDisabled?: boolean;
  isLoading?: boolean;
}

export function StepNavigation({
  currentStep,
  totalSteps,
  onPreviousStep,
  onNextStep,
  isNextDisabled = false,
  isLoading = false
}: StepNavigationProps) {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex justify-between items-center pt-6 border-t border-border">
      <Button
        type="button"
        variant="outline"
        onClick={onPreviousStep}
        disabled={isFirstStep || isLoading}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Previous
      </Button>

      <div className="text-sm text-muted-foreground">
        Step {currentStep} of {totalSteps}
      </div>

      <Button
        type="button"
        onClick={onNextStep}
        disabled={isNextDisabled || isLoading}
        className="flex items-center gap-2 bg-gradient-primary hover:bg-primary-hover"
      >
        {isLastStep ? "Submit Registration" : "Next"}
        {!isLastStep && <ArrowRight className="w-4 h-4" />}
      </Button>
    </div>
  );
}