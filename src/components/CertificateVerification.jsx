import { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Info, User } from "lucide-react"
import { getCertificates } from '@/api/getCertificate';
import { generateCertificateImage } from "@/Imggenerate"
import student from "@/assets/Certificates_Designs/student.png"
import intern from "@/assets/Certificates_Designs/intern.png"
import participant from "@/assets/Certificates_Designs/competetor.png"

export default function CertificateVerification() {
  const [role, setRole] = useState("student")
  const [certificateId, setCertificateId] = useState("")
  const [error, setError] = useState(null)
  const [certificateData, setCertificateData] = useState(null)
  const [certificateImage, setCertificateImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)

  const handleCertificateSearch = async (code) => {
    setLoading(true)
    setError(null) // Clear previous errors
    setCertificateImage(null) // Clear previous image
    
    try {
      const data = await getCertificates(code,role);
      setCertificateData(data);
      console.log(data); // { certificateId: "123", name: "John", ... }
      
      // Generate certificate image with the fetched data
      const generatedImage = await generateCertificateImage(data, role);
      setCertificateImage(generatedImage);
      
    } catch (err) {
      setError(err.message);
      setCertificateData(null);
      setCertificateImage(null);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = () => {
    if (!certificateId.trim()) {
      setError("Please enter a certificate ID");
      return;
    }
    handleCertificateSearch(certificateId);
  }

  const handleBottomVerify = () => {
    // Focus on the input field and scroll to it
    inputRef.current?.focus();
    inputRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  }

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Certificate Verification</h1>
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            Easily verify your certificate issued by MSN Academy. Just select your role and enter your ID.
          </p>

          {/* Role Selector */}
          <RadioGroup
            value={role}
            onValueChange={setRole}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mb-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intern" id="intern" />
              <Label htmlFor="intern">Intern</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="competetor" id="competetor" />
              <Label htmlFor="competetor">Participant</Label>
            </div>
          </RadioGroup>

          {/* Certificate Input */}
          <Input
            ref={inputRef}
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            className="mb-4"
          />

          <Button onClick={handleVerify} className="w-full" disabled={loading}>
            {loading ? "Verifying..." : "Verify Certificate"}
          </Button>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <div className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
              </div>
            </Alert>
          )}

          {certificateData && (
            <Alert className="mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" style={{ color: '#10b981' }} />
                <AlertDescription className="text-green-500">
                  Certificate Verified! Details are shown on the right.
                </AlertDescription>
              </div>
            </Alert>
          )}
        </div>

        {/* Certificate Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Certificate Preview</CardTitle>
          </CardHeader>
          <CardContent>
            {certificateImage ? (
              <>
              {/* <div className="space-y-2">
                <p><strong>Certificate ID:</strong> {certificateData.certificateId || certificateData.id}</p>
                <p><strong>Name:</strong> {certificateData.name || certificateData.studentName}</p>
                <p><strong>Course:</strong> {certificateData.course || certificateData.courseName}</p>
                <p><strong>Date:</strong> {certificateData.date || certificateData.issueDate}</p>
                <p><strong>Status:</strong> <span className="text-green-600">Verified ✓</span></p>
              </div> */}
             
          
              <img
                src={certificateImage}
                alt="Generated Certificate"
                className="rounded-lg shadow w-full"
              />
              </>
            ) : (
              <img
                src={role==="student" ? student : role==="intern" ? intern : participant}
                alt="Certificate Template"
                className="rounded-lg shadow w-full"
              />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 sm:mt-16 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Certificate Verification Made Simple
        </h2>
        <p className="text-muted-foreground mb-8 text-sm sm:text-base">
          Select your role, enter your ID, and instantly verify your certificate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div className="flex flex-col items-center">
            <User className="h-6 w-6 sm:h-8 sm:w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-sm sm:text-base">Choose Your Role</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Select Student, Intern, or Participant.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-sm sm:text-base">Enter Your ID</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Provide your unique certificate ID.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Info className="h-6 w-6 sm:h-8 sm:w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-sm sm:text-base">See Your Certificate</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Instantly preview and verify your certificate.
            </p>
          </div>
        </div>

        <Button onClick={handleBottomVerify} className="w-full sm:w-auto">Verify</Button>
      </div>
    </div>
  )
}
