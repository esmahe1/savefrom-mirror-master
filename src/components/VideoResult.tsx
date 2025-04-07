
import React from 'react';
import { Download, Video, FileImage, Eye, Clock } from 'lucide-react';

export interface VideoFormat {
  quality: string;
  format: string;
  size: string;
  url: string;
  extension: string;
}

export interface VideoInfo {
  title: string;
  thumbnail: string;
  duration: string;
  platform: string;
  formats: VideoFormat[];
}

const VideoResult = ({ videoInfo }: { videoInfo: VideoInfo }) => {
  const handleDownload = (url: string, format: string) => {
    // Create an anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = `${videoInfo.title.replace(/[^a-z0-9]/gi, '_')}.${format.toLowerCase()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="sf-card">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/5">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img 
                src={videoInfo.thumbnail} 
                alt={videoInfo.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {videoInfo.duration}
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold line-clamp-2">{videoInfo.title}</h3>
            <p className="text-sm text-gray-500 mt-1">Source: {videoInfo.platform}</p>
          </div>
          
          <div className="w-full md:w-3/5">
            <h4 className="text-lg font-semibold mb-4">Download Options</h4>
            <div className="space-y-3">
              {videoInfo.formats.map((format, index) => (
                <div key={index} className="flex items-center justify-between border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    {format.format.toLowerCase().includes('video') ? (
                      <Video className="h-5 w-5 text-blue-500" />
                    ) : (
                      <FileImage className="h-5 w-5 text-green-500" />
                    )}
                    <div>
                      <p className="font-medium">{format.quality} - {format.format}</p>
                      <p className="text-sm text-gray-500">{format.size}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(format.url, format.extension)}
                    className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoResult;
