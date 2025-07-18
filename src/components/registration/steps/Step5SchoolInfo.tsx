import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap } from "lucide-react";

interface Step5Props {
  formData: any;
  updateFormData: (data: any) => void;
}

export function Step5SchoolInfo({ formData, updateFormData }: Step5Props) {
  const handleInputChange = (field: string, value: string) => {
    updateFormData({
      ...formData,
      schoolInfo: {
        ...formData.schoolInfo,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <Card className="shadow-card">
        <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Informasi Sekolah Sebelumnya
          </CardTitle>
          <CardDescription className="text-white/80">
            Harap berikan informasi tentang sekolah sebelumnya
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="schoolName">Nama Sekolah <span className="text-destructive">*</span></Label>
              <Input
                id="schoolName"
                value={formData.schoolInfo?.schoolName || ""}
                onChange={(e) => handleInputChange("schoolName", e.target.value)}
                placeholder="Masukkan nama sekolah sebelumnya"
                className="shadow-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="schoolAddress">Alamat Sekolah <span className="text-destructive">*</span></Label>
              <Textarea
                id="schoolAddress"
                value={formData.schoolInfo?.schoolAddress || ""}
                onChange={(e) => handleInputChange("schoolAddress", e.target.value)}
                placeholder="Masukkan alamat lengkap sekolah"
                className="shadow-input"
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="npsn">NPSN <span className="text-destructive">*</span></Label>
                <Input
                  id="npsn"
                  type="number"
                  value={formData.schoolInfo?.npsn || ""}
                  onChange={(e) => handleInputChange("npsn", e.target.value)}
                  placeholder="Masukkan NPSN sekolah"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Tahun Lulus <span className="text-destructive">*</span></Label>
                <Input
                  id="graduationYear"
                  type="number"
                  min="2000"
                  max="2030"
                  value={formData.schoolInfo?.graduationYear || ""}
                  onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                  placeholder="Masukkan tahun lulus"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gpaOrGrades">IPK atau Nilai Rata-rata <span className="text-destructive">*</span></Label>
              <Input
                id="gpaOrGrades"
                type="number"
                step="0.01"
                value={formData.schoolInfo?.gpaOrGrades || ""}
                onChange={(e) => handleInputChange("gpaOrGrades", e.target.value)}
                placeholder="Masukkan IPK (mis. 3.5) atau nilai rata-rata (mis. 85)"
                className="shadow-input"
              />
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-accent-foreground">
                <strong>Catatan:</strong> Pastikan semua informasi sesuai dengan catatan akademik resmi Anda. 
                Informasi ini akan diverifikasi selama proses penerimaan.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}