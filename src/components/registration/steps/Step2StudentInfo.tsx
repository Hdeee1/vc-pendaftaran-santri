import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { User } from "lucide-react";

interface Step2Props {
  formData: any;
  updateFormData: (data: any) => void;
}

export function Step2StudentInfo({ formData, updateFormData }: Step2Props) {
  const handleInputChange = (field: string, value: string) => {
    updateFormData({
      ...formData,
      studentInfo: {
        ...formData.studentInfo,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <Card className="shadow-card">
        <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Informasi Siswa
          </CardTitle>
          <CardDescription className="text-white/80">
            Harap berikan informasi lengkap tentang siswa
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nama Lengkap <span className="text-destructive">*</span></Label>
                <Input
                  id="fullName"
                  value={formData.studentInfo?.fullName || ""}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nisn">NISN <span className="text-destructive">*</span></Label>
                <Input
                  id="nisn"
                  type="number"
                  value={formData.studentInfo?.nisn || ""}
                  onChange={(e) => handleInputChange("nisn", e.target.value)}
                  placeholder="Masukkan nomor NISN"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nik">NIK <span className="text-destructive">*</span></Label>
                <Input
                  id="nik"
                  type="number"
                  value={formData.studentInfo?.nik || ""}
                  onChange={(e) => handleInputChange("nik", e.target.value)}
                  placeholder="Masukkan nomor NIK"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="educationLevel">Jenjang Pendidikan <span className="text-destructive">*</span></Label>
                <Select value={formData.studentInfo?.educationLevel || ""} onValueChange={(value) => handleInputChange("educationLevel", value)}>
                  <SelectTrigger className="shadow-input">
                    <SelectValue placeholder="Pilih jenjang pendidikan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mts">MTs (Madrasah Tsanawiyah)</SelectItem>
                    <SelectItem value="ma">MA (Madrasah Aliyah)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Tanggal Lahir <span className="text-destructive">*</span></Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.studentInfo?.dateOfBirth || ""}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Jenis Kelamin <span className="text-destructive">*</span></Label>
                <Select value={formData.studentInfo?.gender || ""} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger className="shadow-input">
                    <SelectValue placeholder="Pilih jenis kelamin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Laki-laki</SelectItem>
                    <SelectItem value="female">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="religion">Agama <span className="text-destructive">*</span></Label>
                <Select value={formData.studentInfo?.religion || ""} onValueChange={(value) => handleInputChange("religion", value)}>
                  <SelectTrigger className="shadow-input">
                    <SelectValue placeholder="Pilih agama" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="islam">Islam</SelectItem>
                    <SelectItem value="christian">Kristen</SelectItem>
                    <SelectItem value="catholic">Katolik</SelectItem>
                    <SelectItem value="hindu">Hindu</SelectItem>
                    <SelectItem value="buddha">Buddha</SelectItem>
                    <SelectItem value="khonghucu">Khonghucu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="familyStatus">Status dalam Keluarga <span className="text-destructive">*</span></Label>
                <Select value={formData.studentInfo?.familyStatus || ""} onValueChange={(value) => handleInputChange("familyStatus", value)}>
                  <SelectTrigger className="shadow-input">
                    <SelectValue placeholder="Pilih status dalam keluarga" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="biological">Anak Kandung</SelectItem>
                    <SelectItem value="foster">Anak Angkat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="siblingOrder">Anak Ke-</Label>
                <Input
                  id="siblingOrder"
                  type="number"
                  value={formData.studentInfo?.siblingOrder || ""}
                  onChange={(e) => handleInputChange("siblingOrder", e.target.value)}
                  placeholder="contoh: 1, 2, 3"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paudHistory">Riwayat PAUD/TK</Label>
                <Select value={formData.studentInfo?.paudHistory || ""} onValueChange={(value) => handleInputChange("paudHistory", value)}>
                  <SelectTrigger className="shadow-input">
                    <SelectValue placeholder="Pilih riwayat PAUD/TK" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Ya</SelectItem>
                    <SelectItem value="no">Tidak</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon/WhatsApp <span className="text-destructive">*</span></Label>
                <Input
                  id="phone"
                  type="number"
                  value={formData.studentInfo?.phone || ""}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Masukkan nomor telepon"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.studentInfo?.email || ""}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Masukkan alamat email"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hobbies">Hobi</Label>
              <Textarea
                id="hobbies"
                value={formData.studentInfo?.hobbies || ""}
                onChange={(e) => handleInputChange("hobbies", e.target.value)}
                placeholder="Ceritakan hobi dan minat Anda"
                className="shadow-input"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dreams">Cita-cita & Aspirasi</Label>
              <Textarea
                id="dreams"
                value={formData.studentInfo?.dreams || ""}
                onChange={(e) => handleInputChange("dreams", e.target.value)}
                placeholder="Bagikan cita-cita dan aspirasi masa depan Anda"
                className="shadow-input"
                rows={3}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}