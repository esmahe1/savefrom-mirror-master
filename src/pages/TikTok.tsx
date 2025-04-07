
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
        title: 'بەستەری نادروست',
        description: 'تکایە بەستەرێکی دروستی تیک تۆک بنووسە.',
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
        title: 'هەڵەی پرۆسەکردن',
        description: 'ناتوانرێت ئەم ڤیدیۆی تیک تۆکە پرۆسە بکرێت. تکایە بەستەرێکی تر تاقی بکەوە.',
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
                داگری ڤیدیۆی تیک تۆک
              </h1>
              <p className="text-xl mb-8 opacity-90">
                داگرتنی ڤیدیۆی تیک تۆک بەبێ واتەرمارک و بە کوالێتی بەرز
              </p>
              
              <VideoForm 
                onVideoSubmit={handleVideoSubmit} 
                isProcessing={isProcessing}
                placeholder="بەستەری ڤیدیۆی تیک تۆک لێرە دابنێ..."
              />
              
              <div className="mt-8 bg-white/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">چۆن ڤیدیۆی تیک تۆک داگری:</h3>
                <ol className="text-right text-sm space-y-1">
                  <li>١. ئەپ یان ماڵپەڕی تیک تۆک بکەوە</li>
                  <li>٢. ئەو ڤیدیۆیە بدۆزەوە کە دەتەوێ دایبگری</li>
                  <li>٣. کرتە لە "هاوبەشکردن" بکە و بەستەرەکە کۆپی بکە</li>
                  <li>٤. بەستەرەکە لە خانەی سەرەوە بلکێنە و کرتە لە داگرتن بکە</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        {videoInfo && (
          <section className="py-12 bg-gray-50">
            <div className="sf-container">
              <h2 className="text-2xl font-bold mb-6">هەڵبژاردنەکانی داگرتن</h2>
              <VideoResult videoInfo={videoInfo} />
            </div>
          </section>
        )}
        
        {/* Features Section */}
        <section className="py-16">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">تایبەتمەندییەکانی داگری تیک تۆک</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">HD</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">کوالێتی بەرز</h3>
                <p className="text-gray-600">
                  ڤیدیۆی تیک تۆک بە بەرزترین کوالێتی بەردەست داگرە
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">NW</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">بەبێ واتەرمارک</h3>
                <p className="text-gray-600">
                  ڤیدیۆکان بەبێ واتەرمارکی تیک تۆک داگرە
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">MP3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">داگرتنی دەنگ</h3>
                <p className="text-gray-600">
                  دەنگ لە ڤیدیۆکانی تیک تۆک دەربهێنە و دایبگرە
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
