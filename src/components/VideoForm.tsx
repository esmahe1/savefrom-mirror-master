
import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const VideoForm = ({ onVideoSubmit }: { onVideoSubmit: (url: string) => void }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoUrl) {
      toast({
        title: 'URL Required',
        description: 'Please enter a video URL to download.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Submit the URL to the parent component
      onVideoSubmit(videoUrl);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while processing your request.',
        variant: 'destructive',
      });
      console.error('Error processing URL:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaste = () => {
    navigator.clipboard.readText()
      .then(text => {
        setVideoUrl(text);
        toast({
          title: 'URL Pasted',
          description: 'Video URL has been pasted from clipboard.',
        });
      })
      .catch(() => {
        toast({
          title: 'Paste Failed',
          description: 'Could not access clipboard. Please paste manually.',
          variant: 'destructive',
        });
      });
  };

  const handleClear = () => {
    setVideoUrl('');
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Paste YouTube, Instagram or Facebook video URL here..."
            className="sf-input pr-28"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
            <button
              type="button"
              onClick={handlePaste}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded"
            >
              Paste
            </button>
            {videoUrl && (
              <button
                type="button"
                onClick={handleClear}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="sf-button w-full flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Download Now
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default VideoForm;
