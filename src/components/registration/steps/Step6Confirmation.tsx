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
        label: "Dokumen wajib telah diisi",
        isValid: formData.documents?.familyCard && formData.documents?.nisn && formData.documents?.npsn && formData.documents?.paymentProof,
        section: "Dokumen"
      },
      {
        label: "Informasi santri lengkap",
        isValid: formData.studentInfo?.fullName && formData.studentInfo?.nisn && formData.studentInfo?.nik,
        section: "Info Santri"
      },
      {
        label: "Informasi alamat tersedia",
        isValid: formData.address?.fullAddress && formData.address?.village && formData.address?.district,
        section: "Alamat"
      },
      {
        label: "Informasi orang tua lengkap",
        isValid: formData.parentInfo?.father?.name && formData.parentInfo?.mother?.name,
        section: "Info Orang Tua"
      },
      {
        label: "Informasi sekolah tersedia",
        isValid: formData.schoolInfo?.schoolName && formData.schoolInfo?.npsn,
        section: "Info Sekolah"
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
            Konfirmasi Akhir
          </CardTitle>
          <CardDescription className="text-white/80">
            Harap tinjau informasi Anda dan konfirmasi pendaftaran
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Validation Summary */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Ringkasan Pendaftaran</h3>
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
                        {validation.isValid ? "Lengkap" : "Belum Lengkap"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Application Summary */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Ringkasan Aplikasi</h3>
              <div className="grid gap-4">
                {formData.studentInfo?.fullName && (
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Nama Santri:</span>
                    <span className="font-medium">{formData.studentInfo.fullName}</span>
                  </div>
                )}
                {formData.studentInfo?.educationLevel && (
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Jenjang Pendidikan:</span>
                    <span className="font-medium">
                      {formData.studentInfo.educationLevel === 'mts' ? 'MTs (Madrasah Tsanawiyah)' : 'MA (Madrasah Aliyah)'}
                    </span>
                  </div>
                )}
                {formData.address?.village && (
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Lokasi:</span>
                    <span className="font-medium">{formData.address.village}, {formData.address.district}</span>
                  </div>
                )}
                {formData.schoolInfo?.schoolName && (
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Sekolah Sebelumnya:</span>
                    <span className="font-medium">{formData.schoolInfo.schoolName}</span>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Agreement Checkboxes */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">Konfirmasi & Persetujuan</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="dataAccuracy"
                    checked={formData.confirmation?.dataAccuracy || false}
                    onCheckedChange={(checked) => handleAgreementChange("dataAccuracy", checked as boolean)}
                  />
                  <Label htmlFor="dataAccuracy" className="text-sm leading-relaxed">
                    Saya mengkonfirmasi bahwa semua informasi yang diberikan dalam formulir pendaftaran ini akurat dan lengkap. 
                    Saya memahami bahwa memberikan informasi palsu dapat mengakibatkan penolakan aplikasi saya.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="documentsValid"
                    checked={formData.confirmation?.documentsValid || false}
                    onCheckedChange={(checked) => handleAgreementChange("documentsValid", checked as boolean)}
                  />
                  <Label htmlFor="documentsValid" className="text-sm leading-relaxed">
                    Saya mengkonfirmasi bahwa semua nomor dokumen yang dimasukkan valid, asli, dan milik pelamar. 
                    Saya memahami bahwa verifikasi dokumen akan dilakukan.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="termsAccepted"
                    checked={formData.confirmation?.termsAccepted || false}
                    onCheckedChange={(checked) => handleAgreementChange("termsAccepted", checked as boolean)}
                  />
                  <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                    Saya telah membaca dan menyetujui syarat dan ketentuan proses pendaftaran. 
                    Saya memahami bahwa biaya pendaftaran tidak dapat dikembalikan.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="communicationConsent"
                    checked={formData.confirmation?.communicationConsent || false}
                    onCheckedChange={(checked) => handleAgreementChange("communicationConsent", checked as boolean)}
                  />
                  <Label htmlFor="communicationConsent" className="text-sm leading-relaxed">
                    Saya menyetujui untuk menerima komunikasi mengenai status aplikasi saya melalui email, telepon, atau SMS. 
                    Saya memahami bahwa wali saya juga akan diberitahu.
                  </Label>
                </div>
              </div>
            </div>

            {!allValid && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  <span className="font-semibold text-destructive">Informasi Belum Lengkap</span>
                </div>
                <p className="text-sm text-destructive">
                  Harap lengkapi semua bagian yang diperlukan sebelum mengirim pendaftaran Anda.
                </p>
              </div>
            )}

            {allValid && (
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-semibold text-success">Siap untuk Dikirim</span>
                </div>
                <p className="text-sm text-success">
                  Formulir pendaftaran Anda lengkap dan siap untuk dikirim.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}