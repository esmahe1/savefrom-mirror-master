
import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface VideoFormProps {
  onVideoSubmit: (url: string) => void;
  isProcessing?: boolean;
  placeholder?: string;
}

const VideoForm = ({ 
  onVideoSubmit, 
  isProcessing = false,
  placeholder = "بەستەری ڤیدیۆی یوتوب، ئینستاگرام یان فەیسبووک لێرە دابنێ..." 
}: VideoFormProps) => {
  const [videoUrl, setVideoUrl] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoUrl) {
      toast({
        title: 'بەستەر پێویستە',
        description: 'تکایە بەستەری ڤیدیۆیەک بنووسە بۆ داگرتن.',
        variant: 'destructive',
      });
      return;
    }

    try {
      // Submit the URL to the parent component
      onVideoSubmit(videoUrl);
    } catch (error) {
      toast({
        title: 'هەڵە',
        description: 'هەڵەیەک ڕوویدا لە کاتی جێبەجێکردنی داواکارییەکەتدا.',
        variant: 'destructive',
      });
      console.error('Error processing URL:', error);
    }
  };

  const handlePaste = () => {
    navigator.clipboard.readText()
      .then(text => {
        setVideoUrl(text);
        toast({
          title: 'بەستەر لکێندرا',
          description: 'بەستەری ڤیدیۆ لە کلیپبۆردەوە لکێندرا.',
        });
      })
      .catch(() => {
        toast({
          title: 'لکاندن سەرکەوتوو نەبوو',
          description: 'ناتوانرێت دەستگەیشتن بە کلیپبۆرد بکرێت. تکایە بە دەستی بینووسە.',
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
            placeholder={placeholder}
            className="sf-input pr-28"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
            <button
              type="button"
              onClick={handlePaste}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded"
            >
              لکاندن
            </button>
            {videoUrl && (
              <button
                type="button"
                onClick={handleClear}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded"
              >
                سڕینەوە
              </button>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={isProcessing}
          className="sf-button w-full flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              جێبەجێ دەکرێت...
            </>
          ) : (
            <>
              داگرتن
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default VideoForm;
