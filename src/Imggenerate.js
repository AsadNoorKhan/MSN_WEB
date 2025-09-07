// Certificate Image Generation System
import studentClean from "@/assets/Certificates_Designs/student_clean.png";
import internClean from "@/assets/Certificates_Designs/intern_clean.png";
import competitorClean from "@/assets/Certificates_Designs/competetor_clean.png";

// Helper function to get the correct template image
const getTemplateImage = (role) => {
  switch(role) {
    case 'student': return studentClean;
    case 'intern': return internClean;
    case 'competetor': return competitorClean;
    default: return studentClean;
  }
};

export const generateCertificateImage = async (certificateData, role ) => {
    return new Promise((resolve, reject) => {
      try {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Load the base certificate image
        const baseImage = new Image();
        baseImage.crossOrigin = 'anonymous';
        
        baseImage.onload = () => {
          // Set canvas size to match the certificate image
          canvas.width = baseImage.width;
          canvas.height = baseImage.height;
          
          // Draw the base certificate image
          ctx.drawImage(baseImage, 0, 0);
          
          // Now overlay the dynamic data
          overlayCertificateData(ctx, certificateData, role, canvas.width, canvas.height);
          
          // Convert to data URL
          const dataURL = canvas.toDataURL('image/png');
          resolve(dataURL);
        };
        
        baseImage.onerror = () => {
          reject(new Error('Failed to load certificate template'));
        };
        
        // Load the appropriate certificate template
        baseImage.src = getTemplateImage(role);
        
      } catch (error) {
        reject(error);
      }
    });
  };
  
  // Function to overlay data on the certificate
  const overlayCertificateData = (ctx, data, role, canvasWidth, canvasHeight) => {
    // Set text properties
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Define positions and styles for different roles
    const roleConfig = getRoleConfig(role, canvasWidth, canvasHeight);
    
    // Overlay student name (main recipient name)
    if (data.recipient_name ) {
      ctx.font = roleConfig.nameFont;
      ctx.fillStyle = roleConfig.nameColor;
      ctx.fillText(
        data.recipient_name, 
        roleConfig.namePosition.x, 
        roleConfig.namePosition.y
      );
    }
    
    // Overlay course name
    if (data.course_title || data.courseName) {
      ctx.font = roleConfig.courseFont;
      ctx.fillStyle = roleConfig.courseColor;
      ctx.fillText(
        data.course_title || data.courseName, 
        roleConfig.coursePosition.x, 
        roleConfig.coursePosition.y
      );
    }
    
    // Overlay date
    if (data.date || data.issued_at) {
      ctx.font = roleConfig.dateFont;
      ctx.fillStyle = roleConfig.dateColor;
      ctx.fillText(
        data.date || data.issued_at, 
        roleConfig.datePosition.x, 
        roleConfig.datePosition.y
      );
    }
    
    // Overlay MSN ID
    if ( data.msn_id) {
      ctx.font = roleConfig.idFont;
      ctx.fillStyle = roleConfig.idColor;
      ctx.fillText(
        data.certificateId || data.msn_id, 
        roleConfig.idPosition.x, 
        roleConfig.idPosition.y
      );
    }
    
    // Overlay verification code
    if (data.verificationCode || data.code) {
      ctx.font = roleConfig.verificationFont;
      ctx.fillStyle = roleConfig.verificationColor;
      ctx.textAlign = 'left';
      ctx.fillText(
        data.verificationCode || data.code, 
        roleConfig.verificationPosition.x, 
        roleConfig.verificationPosition.y
      );
    }
  };
  
  // Configuration for different certificate types
  // Update your getRoleConfig function with these corrected positions:

// Update your getRoleConfig function with these corrected positions:

// Configuration for different certificate types
const getRoleConfig = (role, width, height) => {
    // Student certificate configuration
    const studentConfig = {
      // Corrected positions based on the actual certificate template
      namePosition: { x: width / 2, y: height * 0.42 }, // Overlap with "NAME" placeholder
      coursePosition: { x: width / 2, y: height * 0.53 }, // Overlap with "COURSE NAME" placeholder  
      datePosition: { x: width / 2, y: height * 0.65 }, // Overlap with date placeholder
      idPosition: { x: width * 0.94 , y: height * 0.027 }, // Top right ID area
      verificationPosition: { x: width * 0.13, y: height * 0.97255 }, // Bottom left verification code
      
      // Student-specific fonts and colors
      nameFont: 'bold 80px Arial',
      courseFont: 'bold 50px Arial',
      dateFont: '30px Arial',
      idFont: '21px Arial',
      verificationFont: '21px Arial',
      
      nameColor: '#000000', // Black for student name
      courseColor: '#DC2626', // Red for course
      dateColor: '#000000',
      idColor: '#6B7280',
      verificationColor: '#6B7280'
    };
  
    // Intern certificate configuration
    const internConfig = {
      namePosition: { x: width / 2, y: height * 0.46 }, // Slightly different position
      coursePosition: { x: width / 2, y: height * 0.60 }, // Slightly different position
      datePosition: { x: width / 2, y: height * 0.66 }, // Slightly different position
      idPosition: { x: width * 0.94, y: height * 0.027 }, // Different ID position
      verificationPosition: { x: width * 0.125, y: height * 0.0253 }, // Different verification position
      
      // Intern-specific fonts and colors
      nameFont: ' 110px "Brush Script MT", "Lucida Handwriting", cursive, serif',
      courseFont: 'bold 50px Arial',
      dateFont: '30px Arial',
      idFont: '19px Arial',
      verificationFont: '21px Arial',
      
      nameColor: '#DC2626', // RED for intern name
      courseColor: '#DC2626', // RED for course
      dateColor: '#000000',
      idColor: '#6B7280',
      verificationColor: '#6B7280'
    };
  
    // Competitor certificate configuration
    const competitorConfig = {
      namePosition: { x: width / 2, y: height * 0.48 }, // Different position for competitor
      coursePosition: { x: width / 2, y: height * 0.62 }, // Different position for competitor
      datePosition: {x: width * 0.15, y: height * 0.962 }, // Different position for competitor
      idPosition: { x: width * 0.94, y: height * 0.023 }, // Different ID position
      verificationPosition: { x: width/1.87, y: height * 0.968 }, // Different verification position
      
      // Competitor-specific fonts and colors
      nameFont: '120px "Brush Script MT", cursive',
      courseFont: 'bold 50px Arial',
      dateFont: '26px Arial',
      idFont: '20px Arial',
      verificationFont: '18px Arial',
      
      nameColor: '#000000', // BLACK for competitor name
      courseColor: '#000000', // BLACK for course
      dateColor: '##000000',
      idColor: '#6B7280',
      verificationColor: '#6B7280'
    };
  
    // Return the appropriate configuration based on role
    switch (role) {
      case 'student':
        return studentConfig;
      case 'intern':
        return internConfig;
      case 'competetor':
        return competitorConfig;
      default:
        return studentConfig; // Default to student config
    }
  };
  
  // Helper function to download the generated certificate
  export const downloadCertificate = (dataURL, filename = 'certificate.png') => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };