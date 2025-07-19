import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileUp } from "lucide-react";

interface Step1Props {
  formData: any;
  updateFormData: (data: any) => void;
}

export function Step1TermsDocuments({ formData, updateFormData }: Step1Props) {
  const requiredDocuments = [
    { id: "familyCard", label: "Nomor Kartu Keluarga (KK)", required: true },
    { id: "nisn", label: "Nomor NISN", required: true },
    { id: "npsn", label: "Nomor NPSN", required: true },
    { id: "paymentProof", label: "Nomor Bukti Pembayaran (Rp 200.000)", required: true },
  ];

  const optionalDocuments = [
    { id: "kis", label: "Nomor KIS", required: false },
    { id: "pkh", label: "Nomor PKH", required: false },
    { id: "kip", label: "Nomor KIP", required: false },
  ];

  const handleInputChange = (documentId: string, value: string) => {
    updateFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [documentId]: value
      }
    });
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <Card className="shadow-card">
        <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <FileUp className="w-5 h-5" />
            Syarat & Dokumen Pendukung
          </CardTitle>
          <CardDescription className="text-white/80">
            Harap masukkan nomor dokumen yang diperlukan dan tinjau syarat & ketentuan
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Terms Agreement */}
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-3">Syarat & Ketentuan Pendaftaran</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• Semua informasi yang diberikan harus akurat dan lengkap</p>
                <p>• Nomor dokumen yang diperlukan harus valid dan terbaca</p>
                <p>• Biaya pendaftaran Rp 200.000 tidak dapat dikembalikan</p>
                <p>• Dengan mengirim formulir ini, Anda menyetujui syarat dan ketentuan kami</p>
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                Dokumen Wajib 
                <Badge variant="destructive">Wajib</Badge>
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
                        type="number"
                        value={formData.documents?.[doc.id] || ""}
                        onChange={(e) => handleInputChange(doc.id, e.target.value)}
                        placeholder="Masukkan nomor dokumen"
                        className="shadow-input"
                      />
                      {formData.documents?.[doc.id] && (
                        <Badge variant="outline" className="text-success border-success">
                          Terisi
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
                Dokumen Opsional
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
                        type="number"
                        value={formData.documents?.[doc.id] || ""}
                        onChange={(e) => handleInputChange(doc.id, e.target.value)}
                        placeholder="Masukkan nomor dokumen (opsional)"
                        className="shadow-input"
                      />
                      {formData.documents?.[doc.id] && (
                        <Badge variant="outline" className="text-success border-success">
                          Terisi
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-accent-foreground">
                <strong>Catatan:</strong> Semua nomor dokumen harus valid dan sesuai dengan dokumen asli yang Anda miliki.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}