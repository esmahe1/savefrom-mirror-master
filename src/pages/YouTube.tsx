
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoForm from '@/components/VideoForm';
import { Youtube } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const YouTube = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleVideoSubmit = (url: string) => {
    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
      toast({
        title: 'Invalid URL',
        description: 'Please enter a valid YouTube URL.',
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
        <section className="bg-red-600 text-white py-16">
          <div className="sf-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 flex justify-center">
                <Youtube className="h-16 w-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                YouTube Video Downloader
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Download YouTube videos in MP4 and MP3 formats in the highest quality
              </p>
              
              <VideoForm onVideoSubmit={handleVideoSubmit} />
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">How to Download YouTube Videos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Find a YouTube Video</h3>
                <p className="text-gray-600">
                  Browse YouTube and find the video you want to download.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Copy the URL</h3>
                <p className="text-gray-600">
                  Copy the video URL from your browser's address bar.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Paste and Download</h3>
                <p className="text-gray-600">
                  Paste the URL above, click Download, and choose your preferred format.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Download YouTube Videos?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Watch Offline</h3>
                <p className="text-gray-600">
                  Download videos to watch them later without an internet connection.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Save Your Favorites</h3>
                <p className="text-gray-600">
                  Keep your favorite videos forever, even if they get removed from YouTube.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Extract Audio</h3>
                <p className="text-gray-600">
                  Download just the audio from music videos or other content.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Save Data</h3>
                <p className="text-gray-600">
                  Download once, watch multiple times to save on mobile data usage.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Learning Resources</h3>
                <p className="text-gray-600">
                  Download educational videos and tutorials for study purposes.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">Travel Entertainment</h3>
                <p className="text-gray-600">
                  Download videos before a trip to watch during travel.
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

export default YouTube;
