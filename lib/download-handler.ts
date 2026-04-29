/**
 * Utility function to download the resume PDF
 */
export const downloadResume = async () => {
  try {
    const response = await fetch('/api/download-resume');
    
    if (!response.ok) {
      throw new Error('Failed to download resume');
    }

    // Create a blob from the response
    const blob = await response.blob();
    
    // Create a temporary URL for the blob
    const url = window.URL.createObjectURL(blob);
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MarcuxOng_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading resume:', error);
    alert('Failed to download resume. Please try again.');
  }
};
