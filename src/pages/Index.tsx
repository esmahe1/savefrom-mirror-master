
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
        title: 'هەڵەی پرۆسەکردن',
        description: 'ناتوانرێت ئەم بەستەری ڤیدیۆیە پرۆسە بکرێت. تکایە بەستەرێکی تر تاقی بکەوە.',
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
                داگرتنی ڤیدیۆ لە یوتوب، ئینستاگرام، فەیسبووک، تیک تۆک و زۆری تر
              </h1>
              <p className="text-xl mb-8 opacity-90">
                خێراترین و ئاسانترین ڕێگا بۆ داگرتنی ڤیدیۆ لە هەموو ماڵپەڕە دڵخوازەکانت
              </p>
              
              <VideoForm onVideoSubmit={handleVideoSubmit} isProcessing={isProcessing} />
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="flex items-center gap-2 text-sm px-3 py-1 bg-white/20 rounded-full">
                  <Youtube className="h-4 w-4" /> یوتوب
                </span>
                <span className="flex items-center gap-2 text-sm px-3 py-1 bg-white/20 rounded-full">
                  <Instagram className="h-4 w-4" /> ئینستاگرام
                </span>
                <span className="flex items-center gap-2 text-sm px-3 py-1 bg-white/20 rounded-full">
                  <Facebook className="h-4 w-4" /> فەیسبووک
                </span>
                <span className="flex items-center gap-2 text-sm px-3 py-1 bg-white/20 rounded-full">
                  <Twitter className="h-4 w-4" /> تیک تۆک
                </span>
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
        
        {/* How It Works Section */}
        <section className="py-16">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">چۆن کار دەکات</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">١</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">بەستەرەکە کۆپی بکە</h3>
                <p className="text-gray-600">
                  بەستەری ڤیدیۆکە لە یوتوب، ئینستاگرام، فەیسبووک، تیک تۆک یان هەر ماڵپەڕێکی پشتگیریکراوی تر کۆپی بکە.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">٢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">بەستەرەکە بلکێنە</h3>
                <p className="text-gray-600">
                  بەستەری ڤیدیۆکە بلکێنە ناو خانەی داخڵکردن لە سەرەوەی ئەم لاپەڕەیە.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">٣</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">دایبگرە</h3>
                <p className="text-gray-600">
                  جۆر و کوالێتی دڵخوازت هەڵبژێرە، پاشان ڤیدیۆکەت دابگرە.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">بۆچی ئێمە هەڵبژێری</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">داگرتنی خێرا</h3>
                  <p className="text-gray-600">
                    سێرڤەرەکانمان بە باشی ڕێکخراون بۆ ئەوەی دڵنیابن کە داگرتنەکانت لە چەند چرکەیەکدا تەواو دەبن، نەک چەندین خولەک.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">فۆرماتی فرە</h3>
                  <p className="text-gray-600">
                    داگرتنی ڤیدیۆ بە فۆرماتی جیاواز لەوانە MP4، MP3 و زۆری تر بۆ گونجان لەگەڵ پێویستییەکانت.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">کوالێتی بەرز</h3>
                  <p className="text-gray-600">
                    داگرتنی ڤیدیۆ بە بەرزترین کوالێتی بەردەست، تا ڕیزۆلیوشنی 4K.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">بێ تۆمارکردن</h3>
                  <p className="text-gray-600">
                    پێویست ناکات هەژمارێک دروست بکەی یان هیچ زانیارییەکی کەسی پێشکەش بکەی بۆ داگرتنی ڤیدیۆ.
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
