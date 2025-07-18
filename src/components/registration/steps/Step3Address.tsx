import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

interface Step3Props {
  formData: any;
  updateFormData: (data: any) => void;
}

export function Step3Address({ formData, updateFormData }: Step3Props) {
  const handleInputChange = (field: string, value: string) => {
    updateFormData({
      ...formData,
      address: {
        ...formData.address,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <Card className="shadow-card">
        <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Informasi Alamat
          </CardTitle>
          <CardDescription className="text-white/80">
            Harap berikan detail alamat lengkap Anda
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="residenceType">Jenis Tempat Tinggal <span className="text-destructive">*</span></Label>
              <Select value={formData.address?.residenceType || ""} onValueChange={(value) => handleInputChange("residenceType", value)}>
                <SelectTrigger className="shadow-input">
                  <SelectValue placeholder="Pilih jenis tempat tinggal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="own">Rumah Sendiri</SelectItem>
                  <SelectItem value="rent">Rumah Sewa</SelectItem>
                  <SelectItem value="family">Rumah Keluarga</SelectItem>
                  <SelectItem value="boarding">Rumah Kos</SelectItem>
                  <SelectItem value="dormitory">Asrama</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullAddress">Alamat Lengkap <span className="text-destructive">*</span></Label>
              <Textarea
                id="fullAddress"
                value={formData.address?.fullAddress || ""}
                onChange={(e) => handleInputChange("fullAddress", e.target.value)}
                placeholder="Masukkan alamat lengkap (jalan, nomor rumah, RT/RW)"
                className="shadow-input"
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="village">Desa/Kelurahan <span className="text-destructive">*</span></Label>
                <Input
                  id="village"
                  value={formData.address?.village || ""}
                  onChange={(e) => handleInputChange("village", e.target.value)}
                  placeholder="Masukkan desa/kelurahan"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">Kecamatan <span className="text-destructive">*</span></Label>
                <Input
                  id="district"
                  value={formData.address?.district || ""}
                  onChange={(e) => handleInputChange("district", e.target.value)}
                  placeholder="Masukkan kecamatan"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="regency">Kabupaten/Kota <span className="text-destructive">*</span></Label>
                <Input
                  id="regency"
                  value={formData.address?.regency || ""}
                  onChange={(e) => handleInputChange("regency", e.target.value)}
                  placeholder="Masukkan kabupaten/kota"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="province">Provinsi <span className="text-destructive">*</span></Label>
                <Input
                  id="province"
                  value={formData.address?.province || ""}
                  onChange={(e) => handleInputChange("province", e.target.value)}
                  placeholder="Masukkan provinsi"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="postalCode">Kode Pos <span className="text-destructive">*</span></Label>
                <Input
                  id="postalCode"
                  type="number"
                  value={formData.address?.postalCode || ""}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  placeholder="Masukkan kode pos"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="distanceToSchool">Jarak ke Sekolah (km)</Label>
                <Input
                  id="distanceToSchool"
                  type="number"
                  step="0.1"
                  value={formData.address?.distanceToSchool || ""}
                  onChange={(e) => handleInputChange("distanceToSchool", e.target.value)}
                  placeholder="Masukkan jarak dalam km"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transportation">Transportasi yang Digunakan <span className="text-destructive">*</span></Label>
              <Select value={formData.address?.transportation || ""} onValueChange={(value) => handleInputChange("transportation", value)}>
                <SelectTrigger className="shadow-input">
                  <SelectValue placeholder="Pilih metode transportasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="walking">Jalan Kaki</SelectItem>
                  <SelectItem value="bicycle">Sepeda</SelectItem>
                  <SelectItem value="motorcycle">Sepeda Motor</SelectItem>
                  <SelectItem value="car">Mobil</SelectItem>
                  <SelectItem value="public_transport">Transportasi Umum</SelectItem>
                  <SelectItem value="school_bus">Bus Sekolah</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}