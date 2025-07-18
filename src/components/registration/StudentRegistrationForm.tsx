import { useState } from "react";
import { ProgressIndicator } from "./ProgressIndicator";
import { StepNavigation } from "./StepNavigation";
import { Step1TermsDocuments } from "./steps/Step1TermsDocuments";
import { Step2StudentInfo } from "./steps/Step2StudentInfo";
import { Step3Address } from "./steps/Step3Address";
import { Step4ParentInfo } from "./steps/Step4ParentInfo";
import { Step5SchoolInfo } from "./steps/Step5SchoolInfo";
import { Step6Confirmation } from "./steps/Step6Confirmation";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  documents: Record<string, string>;
  studentInfo: Record<string, string>;
  address: Record<string, string>;
  parentInfo: {
    family?: { cardNo: string; headOfFamily: string };
    father?: { name: string; nik: string };
    mother?: { name: string; nik: string };
  };
  schoolInfo: Record<string, string>;
  confirmation: {
    dataAccuracy?: boolean;
    documentsValid?: boolean;
    termsAccepted?: boolean;
    communicationConsent?: boolean;
  };
}

const STEP_TITLES = [
  "Dokumen",
  "Info Siswa", 
  "Alamat",
  "Info Orang Tua",
  "Info Sekolah",
  "Konfirmasi"
];

const TOTAL_STEPS = 6;

export function StudentRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    documents: {},
    studentInfo: {},
    address: {},
    parentInfo: {},
    schoolInfo: {},
    confirmation: {}
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const updateFormData = (newData: FormData) => {
    setFormData(newData);
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        const requiredDocs = ['familyCard', 'nisn', 'npsn', 'paymentProof'];
        return requiredDocs.every(doc => formData.documents[doc]);
      case 2:
        const requiredStudentInfo = ['fullName', 'nisn', 'nik', 'educationLevel', 'dateOfBirth', 'gender', 'religion', 'familyStatus', 'phone'];
        return requiredStudentInfo.every(field => formData.studentInfo[field]);
      case 3:
        const requiredAddress = ['residenceType', 'fullAddress', 'village', 'district', 'regency', 'province', 'postalCode', 'transportation'];
        return requiredAddress.every(field => formData.address[field]);
      case 4:
        return !!(formData.parentInfo.family?.cardNo && formData.parentInfo.family?.headOfFamily &&
               formData.parentInfo.father?.name && formData.parentInfo.father?.nik &&
               formData.parentInfo.mother?.name && formData.parentInfo.mother?.nik);
      case 5:
        const requiredSchoolInfo = ['schoolName', 'schoolAddress', 'npsn', 'graduationYear', 'gpaOrGrades'];
        return requiredSchoolInfo.every(field => formData.schoolInfo[field]);
      case 6:
        return !!(formData.confirmation.dataAccuracy && formData.confirmation.documentsValid && 
               formData.confirmation.termsAccepted && formData.confirmation.communicationConsent);
      default:
        return true;
    }
  };

  const handleNextStep = async () => {
    if (currentStep === TOTAL_STEPS) {
      // Submit the form
      await handleSubmit();
      return;
    }

    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, TOTAL_STEPS));
      toast({
        title: "Langkah selesai!",
        description: `Melanjutkan ke langkah ${currentStep + 1}`,
      });
    } else {
      toast({
        title: "Informasi belum lengkap",
        description: "Harap isi semua kolom yang wajib diisi sebelum melanjutkan.",
        variant: "destructive",
      });
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Pendaftaran berhasil dikirim!",
        description: "Aplikasi Anda telah diterima. Anda akan menerima email konfirmasi segera.",
        variant: "default",
      });

      // Here you would normally send data to your backend
      console.log("Form Data:", formData);
      
      // For now, show success message
      setCurrentStep(TOTAL_STEPS + 1); // Move to success state
    } catch (error) {
      toast({
        title: "Pengiriman gagal",
        description: "Terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1TermsDocuments formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Step2StudentInfo formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <Step3Address formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <Step4ParentInfo formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <Step5SchoolInfo formData={formData} updateFormData={updateFormData} />;
      case 6:
        return <Step6Confirmation formData={formData} updateFormData={updateFormData} />;
      default:
        return (
          <div className="text-center py-12">
            <div className="bg-gradient-success text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Pendaftaran Selesai!</h2>
            <p className="text-muted-foreground">Aplikasi Anda telah berhasil dikirim.</p>
          </div>
        );
    }
  };

  if (currentStep > TOTAL_STEPS) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-card rounded-lg shadow-card p-8">
            <div className="bg-gradient-success text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-primary mb-4">Pendaftaran Berhasil!</h1>
            <p className="text-muted-foreground mb-6">
              Pendaftaran siswa Anda telah berhasil dikirim. Anda akan menerima email konfirmasi dengan instruksi lebih lanjut.
            </p>
            <p className="text-sm text-muted-foreground">
              ID Aplikasi: <span className="font-mono font-semibold">REG-{Date.now()}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-bg py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Pendaftaran Siswa</h1>
          <p className="text-muted-foreground">Lengkapi semua langkah untuk mengirim aplikasi Anda</p>
        </div>

        <div className="bg-card rounded-lg shadow-card p-6 mb-6">
          <ProgressIndicator 
            currentStep={currentStep} 
            totalSteps={TOTAL_STEPS} 
            stepTitles={STEP_TITLES}
          />
        </div>

        <div className="bg-card rounded-lg shadow-card p-6">
          {renderCurrentStep()}
          
          {currentStep <= TOTAL_STEPS && (
            <StepNavigation
              currentStep={currentStep}
              totalSteps={TOTAL_STEPS}
              onPreviousStep={handlePreviousStep}
              onNextStep={handleNextStep}
              isNextDisabled={!validateCurrentStep()}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
}