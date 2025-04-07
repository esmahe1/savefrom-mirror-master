
import React, { useState } from 'react';
import { CheckCircle, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoForm from '@/components/VideoForm';
import VideoResult from '@/components/VideoResult';
import { VideoInfo } from '@/components/VideoResult';
import { processVideoUrl } from '@/services/videoService';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleVideoSubmit = async (url: string) => {
    setIsProcessing(true);
    try {
      const result = await processVideoUrl(url);
      setVideoInfo(result);
    } catch (error) {
      console.error('Error processing video:', error);
      toast({
        title: 'Processing Error',
        description: 'Could not process this video URL. Please try a different URL.',
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
                Download Videos from YouTube, Instagram, Facebook, TikTok & More
              </h1>
              <p className="text-xl mb-8 opacity-90">
                The fastest and easiest way to download videos from all your favorite websites
              </p>
              
              <VideoForm onVideoSubmit={handleVideoSubmit} isProcessing={isProcessing} />
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="flex items-center gap-2 text-sm px-3 py-1 bg-white/20 rounded-full">
                  <Youtube className="h-4 w-4" /> YouTube
                </span>
                <span className="flex items-center gap-2 text-sm px-3 py-1 bg-white/20 rounded-full">
                  <Instagram className="h-4 w-4" /> Instagram
                </span>
                <span className="flex items-center gap-2 text-sm px-3 py-1 bg-white/20 rounded-full">
                  <Facebook className="h-4 w-4" /> Facebook
                </span>
                <span className="flex items-center gap-2 text-sm px-3 py-1 bg-white/20 rounded-full">
                  <Twitter className="h-4 w-4" /> TikTok
                </span>
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
        
        {/* How It Works Section */}
        <section className="py-16">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Copy the URL</h3>
                <p className="text-gray-600">
                  Copy the video URL from YouTube, Instagram, Facebook, TikTok or any other supported site.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Paste the Link</h3>
                <p className="text-gray-600">
                  Paste the video link into the input box at the top of this page.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Download</h3>
                <p className="text-gray-600">
                  Choose your preferred format and quality, then download your video.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast Downloads</h3>
                  <p className="text-gray-600">
                    Our optimized servers ensure that your downloads are completed in seconds, not minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
                  <p className="text-gray-600">
                    Download videos in various formats including MP4, MP3, and more to suit your needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">High Quality</h3>
                  <p className="text-gray-600">
                    Download videos in the highest quality available, up to 4K resolution.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Registration</h3>
                  <p className="text-gray-600">
                    No need to create an account or provide any personal information to download videos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
