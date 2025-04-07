
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
        title: 'بەستەری نادروست',
        description: 'تکایە بەستەرێکی دروستی ئینستاگرام بنووسە.',
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
                داگری ڤیدیۆی ئینستاگرام
              </h1>
              <p className="text-xl mb-8 opacity-90">
                داگرتنی ڤیدیۆی ئینستاگرام، ڕیلز، چیرۆکەکان و زیاتر بە ئاسانی
              </p>
              
              <VideoForm onVideoSubmit={handleVideoSubmit} placeholder="بەستەری ڤیدیۆی ئینستاگرام لێرە دابنێ..." />
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="sf-container">
            <h2 className="text-3xl font-bold text-center mb-12">چۆن ڤیدیۆی ئینستاگرام داگری</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-4">
                  <span className="text-2xl font-bold">١</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">ناوەڕۆکی ئینستاگرام بدۆزەوە</h3>
                <p className="text-gray-600">
                  لە ئینستاگرام بگەڕێ و ئەو ڤیدیۆ، ڕیل یان IGTV ـە بدۆزەوە کە دەتەوێ دایبگری.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-4">
                  <span className="text-2xl font-bold">٢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">بەستەرەکە کۆپی بکە</h3>
                <p className="text-gray-600">
                  کرتە لەسەر سێ خاڵەکان بکە و "کۆپی بەستەر" هەڵبژێرە یان لە وێبگەڕەکەتەوە کۆپی بکە.
                </p>
              </div>
              
              <div className="sf-card p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-4">
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
            <h2 className="text-3xl font-bold text-center mb-12">چی دەتوانی دابگری</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">ڕیلزی ئینستاگرام</h3>
                <p className="text-gray-600">
                  ڤیدیۆ کورت و خۆشەکان لە ڕیلزی ئینستاگرام داگرە.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">ڤیدیۆی IGTV</h3>
                <p className="text-gray-600">
                  ڤیدیۆ درێژەکان لە پلاتفۆرمی IGTV ـی ئینستاگرام هەڵبگرە.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">چیرۆکەکان</h3>
                <p className="text-gray-600">
                  چیرۆکەکانی ئینستاگرام داگرە پێش ئەوەی دوای ٢٤ کاتژمێر بسڕدرێنەوە.
                </p>
              </div>
              
              <div className="sf-card p-6">
                <h3 className="text-xl font-semibold mb-3">ڤیدیۆی فید</h3>
                <p className="text-gray-600">
                  ئەو ڤیدیۆیانەی لە فیدی ئاسایی ئینستاگرام بڵاوکراونەتەوە هەڵبگرە.
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
