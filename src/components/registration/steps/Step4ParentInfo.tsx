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
            Parent/Guardian Information
          </CardTitle>
          <CardDescription className="text-white/80">
            Please provide complete information about parents and guardians
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            {/* Family Card Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Family Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="familyCardNo">Family Card Number <span className="text-destructive">*</span></Label>
                  <Input
                    id="familyCardNo"
                    value={formData.parentInfo?.family?.cardNo || ""}
                    onChange={(e) => handleInputChange("family", "cardNo", e.target.value)}
                    placeholder="Enter family card number"
                    className="shadow-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="headOfFamily">Head of Family Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="headOfFamily"
                    value={formData.parentInfo?.family?.headOfFamily || ""}
                    onChange={(e) => handleInputChange("family", "headOfFamily", e.target.value)}
                    placeholder="Enter head of family name"
                    className="shadow-input"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Father Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Father Information</h3>
              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fatherName">Father's Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="fatherName"
                      value={formData.parentInfo?.father?.name || ""}
                      onChange={(e) => handleInputChange("father", "name", e.target.value)}
                      placeholder="Enter father's name"
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherNik">Father's NIK <span className="text-destructive">*</span></Label>
                    <Input
                      id="fatherNik"
                      value={formData.parentInfo?.father?.nik || ""}
                      onChange={(e) => handleInputChange("father", "nik", e.target.value)}
                      placeholder="Enter father's NIK"
                      className="shadow-input"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fatherDob">Father's Date of Birth</Label>
                    <Input
                      id="fatherDob"
                      type="date"
                      value={formData.parentInfo?.father?.dateOfBirth || ""}
                      onChange={(e) => handleInputChange("father", "dateOfBirth", e.target.value)}
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherStatus">Father's Status</Label>
                    <Select value={formData.parentInfo?.father?.status || ""} onValueChange={(value) => handleInputChange("father", "status", value)}>
                      <SelectTrigger className="shadow-input">
                        <SelectValue placeholder="Select father's status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alive">Alive</SelectItem>
                        <SelectItem value="deceased">Deceased</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fatherEducation">Father's Education</Label>
                    <Select value={formData.parentInfo?.father?.education || ""} onValueChange={(value) => handleInputChange("father", "education", value)}>
                      <SelectTrigger className="shadow-input">
                        <SelectValue placeholder="Select education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no_education">No Education</SelectItem>
                        <SelectItem value="elementary">Elementary (SD)</SelectItem>
                        <SelectItem value="junior_high">Junior High (SMP)</SelectItem>
                        <SelectItem value="senior_high">Senior High (SMA)</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="doctorate">Doctorate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherJob">Father's Job</Label>
                    <Input
                      id="fatherJob"
                      value={formData.parentInfo?.father?.job || ""}
                      onChange={(e) => handleInputChange("father", "job", e.target.value)}
                      placeholder="Enter father's job"
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherIncome">Father's Monthly Income (Rp)</Label>
                    <Input
                      id="fatherIncome"
                      type="number"
                      value={formData.parentInfo?.father?.income || ""}
                      onChange={(e) => handleInputChange("father", "income", e.target.value)}
                      placeholder="Enter monthly income"
                      className="shadow-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Mother Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Mother Information</h3>
              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="motherName">Mother's Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="motherName"
                      value={formData.parentInfo?.mother?.name || ""}
                      onChange={(e) => handleInputChange("mother", "name", e.target.value)}
                      placeholder="Enter mother's name"
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherNik">Mother's NIK <span className="text-destructive">*</span></Label>
                    <Input
                      id="motherNik"
                      value={formData.parentInfo?.mother?.nik || ""}
                      onChange={(e) => handleInputChange("mother", "nik", e.target.value)}
                      placeholder="Enter mother's NIK"
                      className="shadow-input"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="motherDob">Mother's Date of Birth</Label>
                    <Input
                      id="motherDob"
                      type="date"
                      value={formData.parentInfo?.mother?.dateOfBirth || ""}
                      onChange={(e) => handleInputChange("mother", "dateOfBirth", e.target.value)}
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherStatus">Mother's Status</Label>
                    <Select value={formData.parentInfo?.mother?.status || ""} onValueChange={(value) => handleInputChange("mother", "status", value)}>
                      <SelectTrigger className="shadow-input">
                        <SelectValue placeholder="Select mother's status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alive">Alive</SelectItem>
                        <SelectItem value="deceased">Deceased</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="motherEducation">Mother's Education</Label>
                    <Select value={formData.parentInfo?.mother?.education || ""} onValueChange={(value) => handleInputChange("mother", "education", value)}>
                      <SelectTrigger className="shadow-input">
                        <SelectValue placeholder="Select education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no_education">No Education</SelectItem>
                        <SelectItem value="elementary">Elementary (SD)</SelectItem>
                        <SelectItem value="junior_high">Junior High (SMP)</SelectItem>
                        <SelectItem value="senior_high">Senior High (SMA)</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="doctorate">Doctorate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherJob">Mother's Job</Label>
                    <Input
                      id="motherJob"
                      value={formData.parentInfo?.mother?.job || ""}
                      onChange={(e) => handleInputChange("mother", "job", e.target.value)}
                      placeholder="Enter mother's job"
                      className="shadow-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherIncome">Mother's Monthly Income (Rp)</Label>
                    <Input
                      id="motherIncome"
                      type="number"
                      value={formData.parentInfo?.mother?.income || ""}
                      onChange={(e) => handleInputChange("mother", "income", e.target.value)}
                      placeholder="Enter monthly income"
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