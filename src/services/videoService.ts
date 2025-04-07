
import { VideoInfo, VideoFormat } from "../components/VideoResult";

// Function to parse YouTube video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Function to determine URL platform
export const detectPlatform = (url: string): string => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'YouTube';
  } else if (url.includes('instagram.com')) {
    return 'Instagram';
  } else if (url.includes('facebook.com') || url.includes('fb.watch')) {
    return 'Facebook';
  } else if (url.includes('tiktok.com')) {
    return 'TikTok';
  } else if (url.includes('twitter.com') || url.includes('x.com')) {
    return 'Twitter';
  } else {
    return 'Unknown';
  }
};

// Mock function to process video URL and return video information
export const processVideoUrl = async (url: string): Promise<VideoInfo> => {
  // In a real implementation, this would call your backend API
  // For this demo, we'll simulate a successful response
  
  const platform = detectPlatform(url);
  
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // For YouTube URLs, use the video ID to create mock data
  if (platform === 'YouTube') {
    const videoId = getYouTubeVideoId(url);
    
    if (!videoId) {
      throw new Error('Invalid YouTube URL');
    }
    
    // Create thumbnail URL from video ID
    const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    
    // Generate mock formats
    const formats: VideoFormat[] = [
      {
        quality: '1080p',
        format: 'Video MP4',
        size: '50.2 MB',
        url: `#download-${videoId}-mp4-1080`,
        extension: 'mp4'
      },
      {
        quality: '720p',
        format: 'Video MP4',
        size: '25.7 MB',
        url: `#download-${videoId}-mp4-720`,
        extension: 'mp4'
      },
      {
        quality: '480p',
        format: 'Video MP4',
        size: '15.3 MB',
        url: `#download-${videoId}-mp4-480`,
        extension: 'mp4'
      },
      {
        quality: 'Audio only',
        format: 'Audio MP3',
        size: '4.8 MB',
        url: `#download-${videoId}-mp3`,
        extension: 'mp3'
      }
    ];
    
    return {
      title: `YouTube Video ${videoId}`,
      thumbnail,
      duration: '10:28',
      platform: 'YouTube',
      formats
    };
  } 
  
  // Mock data for other platforms
  return {
    title: `Video from ${platform}`,
    thumbnail: 'https://via.placeholder.com/640x360.png?text=Video+Thumbnail',
    duration: '2:45',
    platform,
    formats: [
      {
        quality: 'High',
        format: 'Video MP4',
        size: '32.6 MB',
        url: '#download-mock-mp4',
        extension: 'mp4'
      },
      {
        quality: 'Medium',
        format: 'Video MP4',
        size: '18.2 MB',
        url: '#download-mock-mp4-medium',
        extension: 'mp4'
      },
      {
        quality: 'Audio only',
        format: 'Audio MP3',
        size: '3.5 MB',
        url: '#download-mock-mp3',
        extension: 'mp3'
      }
    ]
  };
};
