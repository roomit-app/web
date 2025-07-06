
import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  originalSrc: string;
  className?: string;
  alt?: string;
}

const LogoProcessor = ({ originalSrc, className, alt }: LogoProcessorProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        
        // Fetch the original image
        const response = await fetch(originalSrc);
        const blob = await response.blob();
        
        // Load as HTMLImageElement
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Create URL for processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
        
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original image
        setProcessedImageUrl(originalSrc);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();

    // Cleanup function
    return () => {
      if (processedImageUrl && processedImageUrl !== originalSrc) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [originalSrc]);

  // Show original image while processing or if processing failed
  const imageUrl = processedImageUrl || originalSrc;

  return (
    <img 
      src={imageUrl} 
      alt={alt || "Roomit Logo"} 
      className={className}
      style={isProcessing ? { opacity: 0.7 } : {}}
    />
  );
};

export default LogoProcessor;
