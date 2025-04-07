
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoForm from '@/components/VideoForm';
import VideoResult from '@/components/VideoResult';
import { VideoInfo } from '@/components/VideoResult';
import { processVideoUrl } from '@/services/videoService';
import { useToast } from '@/components/ui/use-toast';

const TikTok = () => {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleVideoSubmit = async (url: string) => {
    if (!url.includes('tiktok.com')) {
      toast({
        title: 'Invalid URL',
        description: 'Please enter a valid TikTok URL.',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);
    try {
      const result = await processVideoUrl(url);
      setVideoInfo(result);
    } catch (error) {
      console.error('Error processing video:', error);
      toast({
        title: 'Processing Error',
        description: 'Could not process this TikTok video. Please try another URL.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="sf-gradient text-white py-16">
          <div className="sf-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                TikTok Video Downloader
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Download TikTok videos without watermark in HD quality
              </p>
              
              <VideoForm 
                onVideoSubmit={handleVideoSubmit} 
                isProcessing={isProcessing}
                placeholder="Paste TikTok video URL here..."
              />
              
              <div className="mt-8 bg-white/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">How to download TikTok videos:</h3>
                <ol className="text-left text-sm space-y-1">
                  <li>1. Open TikTok app or website</li>
                  <li>2. Find the video you want to download</li>
                  <li>3. Click "Share" and copy the link</li>
                  <li>4. Paste the link in the box above and click Download</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        {videoInfo && (
          <section className="py-12 bg-gray-50">
            <div className="sf-container">
              <h2 className="text-2xl font-bold mb-6">Download Options</h2>
              <VideoResult videoInfo={videoInfo} />
            </div>
          </section>
        )}
        
        {/* Features Section */}
        <section className="py-16">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">TikTok Downloader Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">HD</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">High Quality</h3>
                <p className="text-gray-600">
                  Download TikTok videos in the highest quality available
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">NW</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">No Watermark</h3>
                <p className="text-gray-600">
                  Download videos without the TikTok watermark
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">MP3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Audio Download</h3>
                <p className="text-gray-600">
                  Extract and download audio from TikTok videos
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TikTok;
