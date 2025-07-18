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
            Previous School Information
          </CardTitle>
          <CardDescription className="text-white/80">
            Please provide information about your previous school
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="schoolName">School Name <span className="text-destructive">*</span></Label>
              <Input
                id="schoolName"
                value={formData.schoolInfo?.schoolName || ""}
                onChange={(e) => handleInputChange("schoolName", e.target.value)}
                placeholder="Enter previous school name"
                className="shadow-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="schoolAddress">School Address <span className="text-destructive">*</span></Label>
              <Textarea
                id="schoolAddress"
                value={formData.schoolInfo?.schoolAddress || ""}
                onChange={(e) => handleInputChange("schoolAddress", e.target.value)}
                placeholder="Enter complete school address"
                className="shadow-input"
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="npsn">NPSN <span className="text-destructive">*</span></Label>
                <Input
                  id="npsn"
                  value={formData.schoolInfo?.npsn || ""}
                  onChange={(e) => handleInputChange("npsn", e.target.value)}
                  placeholder="Enter school NPSN"
                  className="shadow-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year <span className="text-destructive">*</span></Label>
                <Input
                  id="graduationYear"
                  type="number"
                  min="2000"
                  max="2030"
                  value={formData.schoolInfo?.graduationYear || ""}
                  onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                  placeholder="Enter graduation year"
                  className="shadow-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gpaOrGrades">GPA or Average Grades <span className="text-destructive">*</span></Label>
              <Input
                id="gpaOrGrades"
                value={formData.schoolInfo?.gpaOrGrades || ""}
                onChange={(e) => handleInputChange("gpaOrGrades", e.target.value)}
                placeholder="Enter GPA (e.g., 3.5) or average grades (e.g., 85)"
                className="shadow-input"
              />
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-accent-foreground">
                <strong>Note:</strong> Please ensure all information matches your official academic records. 
                This information will be verified during the admission process.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}