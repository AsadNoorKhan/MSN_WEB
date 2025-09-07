// Certificate Image Generation System
import studentClean from "@/assets/Certificates_Designs/student_clean.png";
import internClean from "@/assets/Certificates_Designs/Intern_clean.png";
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
    
    // Remove placeholders by drawing white rectangles over them
    if (roleConfig.placeholderRects) {
      ctx.fillStyle = '#FFFFFF';
      Object.values(roleConfig.placeholderRects).forEach(rect => {
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
      });
    }
    
    // Draw name
    if (data.name || data.studentName) {
      ctx.font = roleConfig.nameFont;
      ctx.fillStyle = roleConfig.nameColor;
      ctx.fillText(data.name || data.studentName, roleConfig.namePosition.x, roleConfig.namePosition.y);
    }
    
    // Draw course name
    if (data.course || data.courseName) {
      ctx.font = roleConfig.courseFont;
      ctx.fillStyle = roleConfig.courseColor;
      ctx.fillText(data.course || data.courseName, roleConfig.coursePosition.x, roleConfig.coursePosition.y);
    }
    
    // Draw date
    if (data.date || data.issueDate) {
      ctx.font = roleConfig.dateFont;
      ctx.fillStyle = roleConfig.dateColor;
      ctx.fillText(data.date || data.issueDate, roleConfig.datePosition.x, roleConfig.datePosition.y);
    }
    
    // Draw certificate ID
    if (data.certificateId || data.id) {
      ctx.font = roleConfig.idFont;
      ctx.fillStyle = roleConfig.idColor;
      ctx.fillText(data.certificateId || data.id, roleConfig.idPosition.x, roleConfig.idPosition.y);
    }
    
    // Draw verification code
    if (data.verificationCode) {
      ctx.font = roleConfig.verificationFont;
      ctx.fillStyle = roleConfig.verificationColor;
      ctx.fillText(data.verificationCode, roleConfig.verificationPosition.x, roleConfig.verificationPosition.y);
    }
  };
  
  // Configuration for different certificate types
  const getRoleConfig = (role, width, height) => {
    const studentConfig = {
      namePosition: { x: width / 2, y: height * 0.42 },
      coursePosition: { x: width / 2, y: height * 0.52 },
      datePosition: { x: width / 2, y: height * 0.62 },
      idPosition: { x: width * 0.82, y: height * 0.12 },
      verificationPosition: { x: width * 0.12, y: height * 0.88 },
      nameFont: 'bold 48px "Brush Script MT", cursive',
      courseFont: 'bold 36px "Brush Script MT", cursive',
      dateFont: '24px "Brush Script MT", cursive',
      idFont: '18px Arial',
      verificationFont: '16px Arial',
      nameColor: '#000000',
      courseColor: '#DC2626',
      dateColor: '#000000',
      idColor: '#6B7280',
      verificationColor: '#6B7280',
      placeholderRects: {
        namePlaceholder: { x: width * 0.3, y: height * 0.38, width: width * 0.4, height: 60 },
        coursePlaceholder: { x: width * 0.25, y: height * 0.48, width: width * 0.5, height: 50 },
        datePlaceholder: { x: width * 0.35, y: height * 0.58, width: width * 0.3, height: 40 }
      }
    };
    
    const internConfig = {
      namePosition: { x: width / 2, y: height * 0.40 },
      coursePosition: { x: width / 2, y: height * 0.50 },
      datePosition: { x: width / 2, y: height * 0.60 },
      idPosition: { x: width * 0.85, y: height * 0.10 },
      verificationPosition: { x: width * 0.10, y: height * 0.90 },
      nameFont: 'bold 44px "Brush Script MT", cursive',
      courseFont: 'bold 32px "Brush Script MT", cursive',
      dateFont: '22px "Brush Script MT", cursive',
      idFont: '16px Arial',
      verificationFont: '14px Arial',
      nameColor: '#000000',
      courseColor: '#DC2626',
      dateColor: '#000000',
      idColor: '#6B7280',
      verificationColor: '#6B7280',
      placeholderRects: {
        namePlaceholder: { x: width * 0.3, y: height * 0.36, width: width * 0.4, height: 55 },
        coursePlaceholder: { x: width * 0.25, y: height * 0.46, width: width * 0.5, height: 45 },
        datePlaceholder: { x: width * 0.35, y: height * 0.56, width: width * 0.3, height: 35 }
      }
    };
    
    const competitorConfig = {
      namePosition: { x: width / 2, y: height * 0.44 },
      coursePosition: { x: width / 2, y: height * 0.54 },
      datePosition: { x: width / 2, y: height * 0.64 },
      idPosition: { x: width * 0.80, y: height * 0.14 },
      verificationPosition: { x: width * 0.14, y: height * 0.86 },
      nameFont: 'bold 46px "Brush Script MT", cursive',
      courseFont: 'bold 34px "Brush Script MT", cursive',
      dateFont: '23px "Brush Script MT", cursive',
      idFont: '17px Arial',
      verificationFont: '15px Arial',
      nameColor: '#000000',
      courseColor: '#DC2626',
      dateColor: '#000000',
      idColor: '#6B7280',
      verificationColor: '#6B7280',
      placeholderRects: {
        namePlaceholder: { x: width * 0.3, y: height * 0.40, width: width * 0.4, height: 58 },
        coursePlaceholder: { x: width * 0.25, y: height * 0.50, width: width * 0.5, height: 48 },
        datePlaceholder: { x: width * 0.35, y: height * 0.60, width: width * 0.3, height: 38 }
      }
    };
    
    switch (role) {
      case 'student':
        return studentConfig;
      case 'intern':
        return internConfig;
      case 'competetor':
        return competitorConfig;
      default:
        return studentConfig;
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