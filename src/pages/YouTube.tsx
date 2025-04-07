
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
        title: 'بەستەری نادروست',
        description: 'تکایە بەستەرێکی دروستی یوتوب بنووسە.',
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
                داگری ڤیدیۆی یوتوب
              </h1>
              <p className="text-xl mb-8 opacity-90">
                داگرتنی ڤیدیۆی یوتوب بە فۆرماتی MP4 و MP3 بە بەرزترین کوالێتی
              </p>
              
              <VideoForm onVideoSubmit={handleVideoSubmit} placeholder="بەستەری ڤیدیۆی یوتوب لێرە دابنێ..." />
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">چۆن ڤیدیۆی یوتوب داگری</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                  <span className="text-2xl font-bold">١</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">ڤیدیۆیەکی یوتوب بدۆزەوە</h3>
                <p className="text-gray-600">
                  لە یوتوب بگەڕێ و ئەو ڤیدیۆیە بدۆزەوە کە دەتەوێ دایبگری.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                  <span className="text-2xl font-bold">٢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">بەستەرەکە کۆپی بکە</h3>
                <p className="text-gray-600">
                  بەستەری ڤیدیۆکە لە شوێنی ناونیشانی وێبگەڕەکەتەوە کۆپی بکە.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                  <span className="text-2xl font-bold">٣</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">بیلکێنە و دایبگرە</h3>
                <p className="text-gray-600">
                  بەستەرەکە لە سەرەوە بلکێنە، کرتە لە داگرتن بکە، و فۆرماتی دڵخوازت هەڵبژێرە.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">بۆچی ڤیدیۆی یوتوب داگری؟</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">بێ ئینتەرنێت سەیری بکە</h3>
                <p className="text-gray-600">
                  ڤیدیۆ داگرە بۆ ئەوەی دواتر بێ بەکارهێنانی ئینتەرنێت سەیریان بکەی.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">ڤیدیۆ دڵخوازەکانت هەڵبگرە</h3>
                <p className="text-gray-600">
                  ڤیدیۆ دڵخوازەکانت بۆ هەمیشە هەڵبگرە، تەنانەت ئەگەر لە یوتوبیش بسڕدرێنەوە.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">دەنگ دەربهێنە</h3>
                <p className="text-gray-600">
                  تەنها دەنگ لە ڤیدیۆی مۆسیقا یان ناوەڕۆکی تر دەربهێنە.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">داتا هەڵبگرە</h3>
                <p className="text-gray-600">
                  جارێک دایبگرە، چەندین جار سەیری بکە بۆ ئەوەی داتای مۆبایل هەڵبگری.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">سەرچاوەی فێربوون</h3>
                <p className="text-gray-600">
                  ڤیدیۆی فێرکاری و تیوتۆریاڵ داگرە بۆ مەبەستی خوێندن.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">کات بەسەربردن لە گەشت</h3>
                <p className="text-gray-600">
                  پێش گەشت ڤیدیۆ داگرە بۆ ئەوەی لە کاتی گەشتدا سەیریان بکەی.
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
