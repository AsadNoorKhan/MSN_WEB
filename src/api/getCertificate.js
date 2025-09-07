// Simple API function to get certificates
export const getCertificates = async (code,role) => {
    try {
      const response = await fetch('https://msn-certificate-application.vercel.app/api/certificate/getbycode/'+code);
      
      // Handle different HTTP status codes
      if (response.status === 200) {
        const data = await response.json();
        if(data.role.toLowerCase() != role.toLowerCase()){
          throw new Error('NO Code Found in this role category - Please check your certificate code');
        }
        return  data ;
      } else if (response.status === 400) {
        throw new Error('Bad Request - Invalid certificate code format');
      } else if (response.status === 404) {
        throw new Error('Certificate Not Found - Please check your certificate code');
      } else if (response.status === 500) {
        throw new Error('Internal Server Error - Please try again later');
      } else {
        throw new Error(`Unexpected error occurred (Status: ${response.status})`);
      }
    } catch (error) {
      throw error;
    }
  };

// Example usage in your component:
// import { getCertificates } from '@/api/getCertificate';
// 
// const fetchData = async () => {
//   try {
//     const certificates = await getCertificates();
//     setCertificates(certificates);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
