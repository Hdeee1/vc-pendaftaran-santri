import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Step6Props {
  formData: any;
  updateFormData: (data: any) => void;
}

export function Step6Confirmation({ formData, updateFormData }: Step6Props) {
  const handleAgreementChange = (field: string, checked: boolean) => {
    updateFormData({
      ...formData,
      confirmation: {
        ...formData.confirmation,
        [field]: checked
      }
    });
  };

  // Validation summary
  const getValidationSummary = () => {
    const validations = [
      {
        label: "Required documents uploaded",
        isValid: formData.documents?.familyCard && formData.documents?.nisn && formData.documents?.npsn && formData.documents?.paymentProof,
        section: "Documents"
      },
      {
        label: "Student information completed",
        isValid: formData.studentInfo?.fullName && formData.studentInfo?.nisn && formData.studentInfo?.nik,
        section: "Student Info"
      },
      {
        label: "Address information provided",
        isValid: formData.address?.fullAddress && formData.address?.village && formData.address?.district,
        section: "Address"
      },
      {
        label: "Parent information completed",
        isValid: formData.parentInfo?.father?.name && formData.parentInfo?.mother?.name,
        section: "Parent Info"
      },
      {
        label: "School information provided",
        isValid: formData.schoolInfo?.schoolName && formData.schoolInfo?.npsn,
        section: "School Info"
      }
    ];
    return validations;
  };

  const validations = getValidationSummary();
  const allValid = validations.every(v => v.isValid);

  return (
    <div className="space-y-6 animate-slide-in">
      <Card className="shadow-card">
        <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Final Confirmation
          </CardTitle>
          <CardDescription className="text-white/80">
            Please review your information and confirm your registration
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Validation Summary */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Registration Summary</h3>
              <div className="space-y-3">
                {validations.map((validation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      {validation.isValid ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-destructive" />
                      )}
                      <span className="text-sm font-medium">{validation.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {validation.section}
                      </Badge>
                      <Badge 
                        variant={validation.isValid ? "default" : "destructive"}
                        className={validation.isValid ? "bg-success" : ""}
                      >
                        {validation.isValid ? "Complete" : "Incomplete"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Application Summary */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Application Summary</h3>
              <div className="grid gap-4">
                {formData.studentInfo?.fullName && (
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Student Name:</span>
                    <span className="font-medium">{formData.studentInfo.fullName}</span>
                  </div>
                )}
                {formData.studentInfo?.educationLevel && (
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Education Level:</span>
                    <span className="font-medium">
                      {formData.studentInfo.educationLevel === 'mts' ? 'MTs (Madrasah Tsanawiyah)' : 'MA (Madrasah Aliyah)'}
                    </span>
                  </div>
                )}
                {formData.address?.village && (
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">{formData.address.village}, {formData.address.district}</span>
                  </div>
                )}
                {formData.schoolInfo?.schoolName && (
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Previous School:</span>
                    <span className="font-medium">{formData.schoolInfo.schoolName}</span>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Agreement Checkboxes */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">Confirmation & Agreement</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="dataAccuracy"
                    checked={formData.confirmation?.dataAccuracy || false}
                    onCheckedChange={(checked) => handleAgreementChange("dataAccuracy", checked as boolean)}
                  />
                  <Label htmlFor="dataAccuracy" className="text-sm leading-relaxed">
                    I confirm that all information provided in this registration form is accurate and complete. 
                    I understand that providing false information may result in rejection of my application.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="documentsValid"
                    checked={formData.confirmation?.documentsValid || false}
                    onCheckedChange={(checked) => handleAgreementChange("documentsValid", checked as boolean)}
                  />
                  <Label htmlFor="documentsValid" className="text-sm leading-relaxed">
                    I confirm that all uploaded documents are valid, authentic, and belong to the applicant. 
                    I understand that document verification will be conducted.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="termsAccepted"
                    checked={formData.confirmation?.termsAccepted || false}
                    onCheckedChange={(checked) => handleAgreementChange("termsAccepted", checked as boolean)}
                  />
                  <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                    I have read and agree to the terms and conditions of the registration process. 
                    I understand that the registration fee is non-refundable.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="communicationConsent"
                    checked={formData.confirmation?.communicationConsent || false}
                    onCheckedChange={(checked) => handleAgreementChange("communicationConsent", checked as boolean)}
                  />
                  <Label htmlFor="communicationConsent" className="text-sm leading-relaxed">
                    I consent to receive communications regarding my application status via email, phone, or SMS. 
                    I understand that my guardian will also be notified.
                  </Label>
                </div>
              </div>
            </div>

            {!allValid && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  <span className="font-semibold text-destructive">Incomplete Information</span>
                </div>
                <p className="text-sm text-destructive">
                  Please complete all required sections before submitting your registration.
                </p>
              </div>
            )}

            {allValid && (
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-semibold text-success">Ready to Submit</span>
                </div>
                <p className="text-sm text-success">
                  Your registration form is complete and ready for submission.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}