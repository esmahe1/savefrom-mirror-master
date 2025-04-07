
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoForm from '@/components/VideoForm';
import { Instagram as InstagramIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Instagram = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleVideoSubmit = (url: string) => {
    if (!url.includes('instagram.com')) {
      toast({
        title: 'Invalid URL',
        description: 'Please enter a valid Instagram URL.',
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
        <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white py-16">
          <div className="sf-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 flex justify-center">
                <InstagramIcon className="h-16 w-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instagram Video Downloader
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Download Instagram videos, Reels, Stories, and more with ease
              </p>
              
              <VideoForm onVideoSubmit={handleVideoSubmit} />
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">How to Download Instagram Videos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Find Instagram Content</h3>
                <p className="text-gray-600">
                  Browse Instagram and locate the video, Reel or IGTV you want to download.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Copy the Link</h3>
                <p className="text-gray-600">
                  Tap on the three dots and select "Copy Link" or copy from your browser.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-4">
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
            <h2 className="text-3xl font-bold text-center mb-12">What You Can Download</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Instagram Reels</h3>
                <p className="text-gray-600">
                  Download short, entertaining videos from Instagram Reels.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">IGTV Videos</h3>
                <p className="text-gray-600">
                  Save longer videos from Instagram's IGTV platform.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Stories</h3>
                <p className="text-gray-600">
                  Download Instagram Stories before they disappear after 24 hours.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Feed Videos</h3>
                <p className="text-gray-600">
                  Save videos posted to regular Instagram feeds.
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

export default Instagram;
