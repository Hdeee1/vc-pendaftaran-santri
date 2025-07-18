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
            Address Information
          </CardTitle>
          <CardDescription className="text-white/80">
            Please provide your complete address details
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="residenceType">Type of Residence <span className="text-destructive">*</span></Label>
              <Select value={formData.address?.residenceType || ""} onValueChange={(value) => handleInputChange("residenceType", value)}>
                <SelectTrigger className="shadow-input">
                  <SelectValue placeholder="Select residence type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="own">Own House</SelectItem>
                  <SelectItem value="rent">Rental House</SelectItem>
                  <SelectItem value="family">Family House</SelectItem>
                  <SelectItem value="boarding">Boarding House</SelectItem>
                  <SelectItem value="dormitory">Dormitory</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullAddress">Full Address <span className="text-destructive">*</span></Label>
              <Textarea
                id="fullAddress"
                value={formData.address?.fullAddress || ""}
                onChange={(e) => handleInputChange("fullAddress", e.target.value)}
                placeholder="Enter complete address (street, house number, RT/RW)"
                className="shadow-input"
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="village">Village/Kelurahan <span className="text-destructive">*</span></Label>
                <Input
                  id="village"
                  value={formData.address?.village || ""}
                  onChange={(e) => handleInputChange("village", e.target.value)}
                  placeholder="Enter village/kelurahan"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District/Kecamatan <span className="text-destructive">*</span></Label>
                <Input
                  id="district"
                  value={formData.address?.district || ""}
                  onChange={(e) => handleInputChange("district", e.target.value)}
                  placeholder="Enter district/kecamatan"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="regency">Regency/Kabupaten <span className="text-destructive">*</span></Label>
                <Input
                  id="regency"
                  value={formData.address?.regency || ""}
                  onChange={(e) => handleInputChange("regency", e.target.value)}
                  placeholder="Enter regency/kabupaten"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="province">Province <span className="text-destructive">*</span></Label>
                <Input
                  id="province"
                  value={formData.address?.province || ""}
                  onChange={(e) => handleInputChange("province", e.target.value)}
                  placeholder="Enter province"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code <span className="text-destructive">*</span></Label>
                <Input
                  id="postalCode"
                  value={formData.address?.postalCode || ""}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  placeholder="Enter postal code"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="distanceToSchool">Distance to School (km)</Label>
                <Input
                  id="distanceToSchool"
                  type="number"
                  step="0.1"
                  value={formData.address?.distanceToSchool || ""}
                  onChange={(e) => handleInputChange("distanceToSchool", e.target.value)}
                  placeholder="Enter distance in km"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transportation">Transportation Used <span className="text-destructive">*</span></Label>
              <Select value={formData.address?.transportation || ""} onValueChange={(value) => handleInputChange("transportation", value)}>
                <SelectTrigger className="shadow-input">
                  <SelectValue placeholder="Select transportation method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="walking">Walking</SelectItem>
                  <SelectItem value="bicycle">Bicycle</SelectItem>
                  <SelectItem value="motorcycle">Motorcycle</SelectItem>
                  <SelectItem value="car">Car</SelectItem>
                  <SelectItem value="public_transport">Public Transportation</SelectItem>
                  <SelectItem value="school_bus">School Bus</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}