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
            Student Information
          </CardTitle>
          <CardDescription className="text-white/80">
            Please provide complete student information
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name <span className="text-destructive">*</span></Label>
                <Input
                  id="fullName"
                  value={formData.studentInfo?.fullName || ""}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter full name"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nisn">NISN <span className="text-destructive">*</span></Label>
                <Input
                  id="nisn"
                  value={formData.studentInfo?.nisn || ""}
                  onChange={(e) => handleInputChange("nisn", e.target.value)}
                  placeholder="Enter NISN number"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nik">NIK <span className="text-destructive">*</span></Label>
                <Input
                  id="nik"
                  value={formData.studentInfo?.nik || ""}
                  onChange={(e) => handleInputChange("nik", e.target.value)}
                  placeholder="Enter NIK number"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="educationLevel">Education Level <span className="text-destructive">*</span></Label>
                <Select value={formData.studentInfo?.educationLevel || ""} onValueChange={(value) => handleInputChange("educationLevel", value)}>
                  <SelectTrigger className="shadow-input">
                    <SelectValue placeholder="Select education level" />
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
                <Label htmlFor="dateOfBirth">Date of Birth <span className="text-destructive">*</span></Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.studentInfo?.dateOfBirth || ""}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender <span className="text-destructive">*</span></Label>
                <Select value={formData.studentInfo?.gender || ""} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger className="shadow-input">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="religion">Religion <span className="text-destructive">*</span></Label>
                <Select value={formData.studentInfo?.religion || ""} onValueChange={(value) => handleInputChange("religion", value)}>
                  <SelectTrigger className="shadow-input">
                    <SelectValue placeholder="Select religion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="islam">Islam</SelectItem>
                    <SelectItem value="christian">Christian</SelectItem>
                    <SelectItem value="catholic">Catholic</SelectItem>
                    <SelectItem value="hindu">Hindu</SelectItem>
                    <SelectItem value="buddha">Buddha</SelectItem>
                    <SelectItem value="khonghucu">Khonghucu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="familyStatus">Family Status <span className="text-destructive">*</span></Label>
                <Select value={formData.studentInfo?.familyStatus || ""} onValueChange={(value) => handleInputChange("familyStatus", value)}>
                  <SelectTrigger className="shadow-input">
                    <SelectValue placeholder="Select family status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="biological">Biological Child</SelectItem>
                    <SelectItem value="foster">Foster Child</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="siblingOrder">Sibling Order</Label>
                <Input
                  id="siblingOrder"
                  type="number"
                  value={formData.studentInfo?.siblingOrder || ""}
                  onChange={(e) => handleInputChange("siblingOrder", e.target.value)}
                  placeholder="e.g., 1, 2, 3"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paudHistory">PAUD/TK History</Label>
                <Select value={formData.studentInfo?.paudHistory || ""} onValueChange={(value) => handleInputChange("paudHistory", value)}>
                  <SelectTrigger className="shadow-input">
                    <SelectValue placeholder="Select PAUD/TK history" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone/WhatsApp <span className="text-destructive">*</span></Label>
                <Input
                  id="phone"
                  value={formData.studentInfo?.phone || ""}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter phone number"
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
                  placeholder="Enter email address"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hobbies">Hobbies</Label>
              <Textarea
                id="hobbies"
                value={formData.studentInfo?.hobbies || ""}
                onChange={(e) => handleInputChange("hobbies", e.target.value)}
                placeholder="Describe your hobbies and interests"
                className="shadow-input"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dreams">Dreams & Aspirations</Label>
              <Textarea
                id="dreams"
                value={formData.studentInfo?.dreams || ""}
                onChange={(e) => handleInputChange("dreams", e.target.value)}
                placeholder="Share your dreams and future aspirations"
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