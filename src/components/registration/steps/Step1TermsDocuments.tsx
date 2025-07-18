import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileUp, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Step1Props {
  formData: any;
  updateFormData: (data: any) => void;
}

export function Step1TermsDocuments({ formData, updateFormData }: Step1Props) {
  const requiredDocuments = [
    { id: "familyCard", label: "Family Card (KK)", required: true },
    { id: "nisn", label: "NISN Document", required: true },
    { id: "npsn", label: "NPSN Document", required: true },
    { id: "paymentProof", label: "Payment Proof (Rp 200.000)", required: true },
  ];

  const optionalDocuments = [
    { id: "kis", label: "KIS Document", required: false },
    { id: "pkh", label: "PKH Document", required: false },
    { id: "kip", label: "KIP Document", required: false },
  ];

  const handleFileUpload = (documentId: string, file: File | null) => {
    updateFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [documentId]: file
      }
    });
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <Card className="shadow-card">
        <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <FileUp className="w-5 h-5" />
            Terms & Supporting Documents
          </CardTitle>
          <CardDescription className="text-white/80">
            Please upload all required documents and review the terms
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Terms Agreement */}
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-3">Registration Terms & Conditions</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• All information provided must be accurate and complete</p>
                <p>• Required documents must be clear and legible</p>
                <p>• Registration fee of Rp 200.000 is non-refundable</p>
                <p>• By submitting this form, you agree to our terms and conditions</p>
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                Required Documents 
                <Badge variant="destructive">Required</Badge>
              </h3>
              <div className="grid gap-4">
                {requiredDocuments.map((doc) => (
                  <div key={doc.id} className="space-y-2">
                    <Label htmlFor={doc.id} className="text-sm font-medium">
                      {doc.label} {doc.required && <span className="text-destructive">*</span>}
                    </Label>
                    <div className="flex items-center gap-3">
                      <Input
                        id={doc.id}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-hover"
                        onChange={(e) => handleFileUpload(doc.id, e.target.files?.[0] || null)}
                      />
                      {formData.documents?.[doc.id] && (
                        <Badge variant="outline" className="text-success border-success">
                          Uploaded
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Documents */}
            <div>
              <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                Optional Documents
                <Badge variant="secondary">Optional</Badge>
              </h3>
              <div className="grid gap-4">
                {optionalDocuments.map((doc) => (
                  <div key={doc.id} className="space-y-2">
                    <Label htmlFor={doc.id} className="text-sm font-medium">
                      {doc.label}
                    </Label>
                    <div className="flex items-center gap-3">
                      <Input
                        id={doc.id}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-secondary-foreground"
                        onChange={(e) => handleFileUpload(doc.id, e.target.files?.[0] || null)}
                      />
                      {formData.documents?.[doc.id] && (
                        <Badge variant="outline" className="text-success border-success">
                          Uploaded
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-accent-foreground">
                <strong>Note:</strong> All files should be in PDF, JPG, JPEG, or PNG format with maximum size of 5MB each.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}