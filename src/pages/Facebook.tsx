
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoForm from '@/components/VideoForm';
import { Facebook as FacebookIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Facebook = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleVideoSubmit = (url: string) => {
    if (!url.includes('facebook.com') && !url.includes('fb.watch')) {
      toast({
        title: 'Invalid URL',
        description: 'Please enter a valid Facebook URL.',
        variant: 'destructive',
      });
      return;
    }
    
    // Navigate to home with the URL as a parameter
    navigate('/?url=' + encodeURIComponent(url));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-16">
          <div className="sf-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 flex justify-center">
                <FacebookIcon className="h-16 w-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Facebook Video Downloader
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Download Facebook videos, Reels, and Stories in high quality
              </p>
              
              <VideoForm onVideoSubmit={handleVideoSubmit} />
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">How to Download Facebook Videos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Find Facebook Video</h3>
                <p className="text-gray-600">
                  Browse Facebook and find the video you want to download.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Copy the Link</h3>
                <p className="text-gray-600">
                  Click on the three dots and select "Copy Link" or copy the URL from your browser.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Paste and Download</h3>
                <p className="text-gray-600">
                  Paste the URL above, click Download, and save your video.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">Facebook Video Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Private Videos</h3>
                <p className="text-gray-600">
                  Our downloader can only access videos that are publicly available or shared with you.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Live Videos</h3>
                <p className="text-gray-600">
                  Download Facebook Live videos after they've ended and been posted to the page.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Watch Videos</h3>
                <p className="text-gray-600">
                  Use our downloader for videos from Facebook Watch that you want to save.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Group Videos</h3>
                <p className="text-gray-600">
                  Videos from Facebook Groups can also be downloaded if you have access to them.
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

export default Facebook;
