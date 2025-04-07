
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
        title: 'بەستەری نادروست',
        description: 'تکایە بەستەرێکی دروستی فەیسبووک بنووسە.',
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
                داگری ڤیدیۆی فەیسبووک
              </h1>
              <p className="text-xl mb-8 opacity-90">
                داگرتنی ڤیدیۆی فەیسبووک، ڕیلز و چیرۆکەکان بە کوالێتی بەرز
              </p>
              
              <VideoForm onVideoSubmit={handleVideoSubmit} placeholder="بەستەری ڤیدیۆی فەیسبووک لێرە دابنێ..." />
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">چۆن ڤیدیۆی فەیسبووک داگری</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">١</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">ڤیدیۆی فەیسبووک بدۆزەوە</h3>
                <p className="text-gray-600">
                  لە فەیسبووک بگەڕێ و ئەو ڤیدیۆیە بدۆزەوە کە دەتەوێ دایبگری.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">٢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">بەستەرەکە کۆپی بکە</h3>
                <p className="text-gray-600">
                  کرتە لەسەر سێ خاڵەکان بکە و "کۆپی بەستەر" هەڵبژێرە یان بەستەرەکە لە وێبگەڕەکەتەوە کۆپی بکە.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-2xl font-bold">٣</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">بیلکێنە و دایبگرە</h3>
                <p className="text-gray-600">
                  بەستەرەکە لە سەرەوە بلکێنە، کرتە لە داگرتن بکە، و ڤیدیۆکەت هەڵبگرە.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">ئامۆژگاری ڤیدیۆی فەیسبووک</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">ڤیدیۆی تایبەت</h3>
                <p className="text-gray-600">
                  داگەرەکەمان تەنها دەتوانێت ڤیدیۆ بەردەستەکان بە گشتی یان ئەوانەی لەگەڵ تۆ هاوبەشکراون بگات.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">ڤیدیۆی ڕاستەوخۆ</h3>
                <p className="text-gray-600">
                  ڤیدیۆی ڕاستەوخۆی فەیسبووک دوای تەواوبوون و بڵاوکردنەوەی لە پەڕەکەدا داگرە.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">ڤیدیۆی "واتچ"</h3>
                <p className="text-gray-600">
                  داگەرەکەمان بەکاربهێنە بۆ ئەو ڤیدیۆیانەی لە Facebook Watch کە دەتەوێ هەڵیانبگری.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">ڤیدیۆی گرووپ</h3>
                <p className="text-gray-600">
                  ڤیدیۆکانی گروپەکانی فەیسبووکیش دەتوانرێت داگیرێن ئەگەر دەستگەیشتنت پێیان هەبێت.
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
