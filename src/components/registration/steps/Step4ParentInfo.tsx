import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Step4Props {
  formData: any;
  updateFormData: (data: any) => void;
}

export function Step4ParentInfo({ formData, updateFormData }: Step4Props) {
  const handleInputChange = (section: string, field: string, value: string) => {
    updateFormData({
      ...formData,
      parentInfo: {
        ...formData.parentInfo,
        [section]: {
          ...formData.parentInfo?.[section],
          [field]: value
        }
      }
    });
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <Card className="shadow-card">
        <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Informasi Orang Tua/Wali
          </CardTitle>
          <CardDescription className="text-white/80">
            Harap berikan informasi lengkap tentang orang tua dan wali
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            {/* Family Card Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Informasi Keluarga</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="familyCardNo">Nomor Kartu Keluarga <span className="text-destructive">*</span></Label>
                  <Input
                    id="familyCardNo"
                    type="number"
                    value={formData.parentInfo?.family?.cardNo || ""}
                    onChange={(e) => handleInputChange("family", "cardNo", e.target.value)}
                    placeholder="Masukkan nomor kartu keluarga"
                    className="shadow-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="headOfFamily">Nama Kepala Keluarga <span className="text-destructive">*</span></Label>
                  <Input
                    id="headOfFamily"
                    value={formData.parentInfo?.family?.headOfFamily || ""}
                    onChange={(e) => handleInputChange("family", "headOfFamily", e.target.value)}
                    placeholder="Masukkan nama kepala keluarga"
                    className="shadow-input"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Father Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Informasi Ayah</h3>
              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fatherName">Nama Ayah <span className="text-destructive">*</span></Label>
                    <Input
                      id="fatherName"
                      value={formData.parentInfo?.father?.name || ""}
                      onChange={(e) => handleInputChange("father", "name", e.target.value)}
                      placeholder="Masukkan nama ayah"
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherNik">NIK Ayah <span className="text-destructive">*</span></Label>
                    <Input
                      id="fatherNik"
                      type="number"
                      value={formData.parentInfo?.father?.nik || ""}
                      onChange={(e) => handleInputChange("father", "nik", e.target.value)}
                      placeholder="Masukkan NIK ayah"
                      className="shadow-input"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fatherDob">Tanggal Lahir Ayah</Label>
                    <Input
                      id="fatherDob"
                      type="date"
                      value={formData.parentInfo?.father?.dateOfBirth || ""}
                      onChange={(e) => handleInputChange("father", "dateOfBirth", e.target.value)}
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherStatus">Status Ayah</Label>
                    <Select value={formData.parentInfo?.father?.status || ""} onValueChange={(value) => handleInputChange("father", "status", value)}>
                      <SelectTrigger className="shadow-input">
                        <SelectValue placeholder="Pilih status ayah" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alive">Hidup</SelectItem>
                        <SelectItem value="deceased">Meninggal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fatherEducation">Pendidikan Ayah</Label>
                    <Select value={formData.parentInfo?.father?.education || ""} onValueChange={(value) => handleInputChange("father", "education", value)}>
                      <SelectTrigger className="shadow-input">
                        <SelectValue placeholder="Pilih pendidikan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no_education">Tidak Sekolah</SelectItem>
                        <SelectItem value="elementary">SD</SelectItem>
                        <SelectItem value="junior_high">SMP</SelectItem>
                        <SelectItem value="senior_high">SMA</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelor">Sarjana</SelectItem>
                        <SelectItem value="master">Magister</SelectItem>
                        <SelectItem value="doctorate">Doktor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherJob">Pekerjaan Ayah</Label>
                    <Input
                      id="fatherJob"
                      value={formData.parentInfo?.father?.job || ""}
                      onChange={(e) => handleInputChange("father", "job", e.target.value)}
                      placeholder="Masukkan pekerjaan ayah"
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherIncome">Penghasilan Bulanan Ayah (Rp)</Label>
                    <Input
                      id="fatherIncome"
                      type="number"
                      value={formData.parentInfo?.father?.income || ""}
                      onChange={(e) => handleInputChange("father", "income", e.target.value)}
                      placeholder="Masukkan penghasilan bulanan"
                      className="shadow-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Mother Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Informasi Ibu</h3>
              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="motherName">Nama Ibu <span className="text-destructive">*</span></Label>
                    <Input
                      id="motherName"
                      value={formData.parentInfo?.mother?.name || ""}
                      onChange={(e) => handleInputChange("mother", "name", e.target.value)}
                      placeholder="Masukkan nama ibu"
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherNik">NIK Ibu <span className="text-destructive">*</span></Label>
                    <Input
                      id="motherNik"
                      type="number"
                      value={formData.parentInfo?.mother?.nik || ""}
                      onChange={(e) => handleInputChange("mother", "nik", e.target.value)}
                      placeholder="Masukkan NIK ibu"
                      className="shadow-input"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="motherDob">Tanggal Lahir Ibu</Label>
                    <Input
                      id="motherDob"
                      type="date"
                      value={formData.parentInfo?.mother?.dateOfBirth || ""}
                      onChange={(e) => handleInputChange("mother", "dateOfBirth", e.target.value)}
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherStatus">Status Ibu</Label>
                    <Select value={formData.parentInfo?.mother?.status || ""} onValueChange={(value) => handleInputChange("mother", "status", value)}>
                      <SelectTrigger className="shadow-input">
                        <SelectValue placeholder="Pilih status ibu" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alive">Hidup</SelectItem>
                        <SelectItem value="deceased">Meninggal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="motherEducation">Pendidikan Ibu</Label>
                    <Select value={formData.parentInfo?.mother?.education || ""} onValueChange={(value) => handleInputChange("mother", "education", value)}>
                      <SelectTrigger className="shadow-input">
                        <SelectValue placeholder="Pilih pendidikan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no_education">Tidak Sekolah</SelectItem>
                        <SelectItem value="elementary">SD</SelectItem>
                        <SelectItem value="junior_high">SMP</SelectItem>
                        <SelectItem value="senior_high">SMA</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelor">Sarjana</SelectItem>
                        <SelectItem value="master">Magister</SelectItem>
                        <SelectItem value="doctorate">Doktor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherJob">Pekerjaan Ibu</Label>
                    <Input
                      id="motherJob"
                      value={formData.parentInfo?.mother?.job || ""}
                      onChange={(e) => handleInputChange("mother", "job", e.target.value)}
                      placeholder="Masukkan pekerjaan ibu"
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherIncome">Penghasilan Bulanan Ibu (Rp)</Label>
                    <Input
                      id="motherIncome"
                      type="number"
                      value={formData.parentInfo?.mother?.income || ""}
                      onChange={(e) => handleInputChange("mother", "income", e.target.value)}
                      placeholder="Masukkan penghasilan bulanan"
                      className="shadow-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}