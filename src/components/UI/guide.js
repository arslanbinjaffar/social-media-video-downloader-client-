import React from 'react';
import styles from "./GuideMethods.module.css"
const GuideMethods = () => {
    const instagramGuides = [
        {
            title: "Instagram video downloader",
            description: "Vidown allows you to Download Instagram Video from your own content. Vidown supports downloading videos for many video types from Insta.",
            img: "https://snapinsta.app/assets/img/thumb/insta-video.webp"
        },
        {
            title: "Instagram photo downloader",
            description: "Instagram Photo Downloader from Vidown allows you to save any photo or collage from Instagram without any difficulty. With Vidown you can download a single post image as well as download multiple Instagram photos.",
            img: "https://snapinsta.app/assets/img/thumb/insta-photo.webp"
        },
        {
            title: "Download Instagram Reels",
            description: "Instagram Reels Downloader by Vidown will help you download Reels videos from Instagram posts to your device in the easiest way when Instagram does not support you in this.",
            img: "https://snapinsta.app/assets/img/thumb/insta-reels.webp"
        },
        {
            title: "IGTV downloader",
            description: "IGTV is a long video, in case you can't watch it right now, you can download IGTV video to your computer, to make sure you can return to watch later, no network connection required or delete IGTV.",
            img: "https://snapinsta.app/assets/img/thumb/insta-igtv.webp"
        },
        {
            title: "Download Instagram Stories",
            description: "Instagram stories are a unique way for anyone to share their everyday life with photos and videos with everyone. Sometimes you want to archive a story you like but the feature is not supported in the app. Vidown was created to solve that problem; to help people download Instagram stories and watch them online.",
           img: "https://snapinsta.app/assets/img/thumb/insta-story.webp"
        },
        {
            title: "Instagram Story Viewer",
            description: "vidown's new feature, vidown's Instagram Story Viewer makes it possible for you to view a person's Story on IG anonymously and securely; In addition to viewing the story on Vidown itself, you can also view other parameters (Like, view, follow) like viewing on Instagram itself and can download IG story videos to your device. What are you waiting for, let's experience this IG Story Viewer feature.",
            img: "https://snapinsta.app/assets/img/thumb/insta-story.webp"
        },
    ];
    
    const tiktokGuides = [
        {
            title: "TikTok Video Downloader",
            description: "Download TikTok videos easily using Vidown. Save your favorite videos from TikTok to watch offline, even if the video is no longer available on the platform.",
            img: "https://i.ytimg.com/vi/wBhfCzgVeyY/maxresdefault.jpg"
        },
        {
            title: "TikTok Profile Picture Downloader",
            description: "With Vidown, you can download profile pictures from TikTok accounts in high quality. Perfect for keeping a reference or viewing it offline.",
            img: "https://media.licdn.com/dms/image/v2/D4D12AQGxvtgMbWVgcg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711140212886?e=2147483647&v=beta&t=MLXfx2ADahE9hxYOJcoVZhuYJRuv_zgVG8DMYJfKIVI"
        },
        {
            title: "Save TikTok Reels",
            description: "Vidown allows you to save TikTok reels effortlessly. Never miss out on interesting short videos by downloading them directly to your device.",
            img: "https://i.ytimg.com/vi/WCXz_YAOCKA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwphS40kb0XUlkRrGcuQQk2hj_BQ"
        },
    ];
    
    const facebookGuides = [
        {
            title: "Facebook Video Downloader",
            description: "Download Facebook videos directly to your device with Vidown. Whether it's a shared video or a public post, Vidown supports all types of downloads.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqU9Jz6nH7NqxBzO0SlrpVpJseVfZ221M1A&s"
        },
        {
            title: "Facebook Photo Downloader",
            description: "Vidown allows you to download and save Facebook photos with ease. Capture special moments from public posts and share them offline.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCGVIoZMRPVPQG9ZL2gcqMmrBCyi2GR3Nag&s"
        },
        {
            title: "Download Facebook Stories",
            description: "Save Facebook Stories quickly using Vidown. Archive your favorite stories before they disappear, all in high quality.",
            img: "https://rmupdate.com/wp-content/uploads/2023/09/how-to-download-facebook-stories-1000x600.webp"
        },
    ];
    
    const youtubeGuides = [
        {
            title: "YouTube Video Downloader",
            description: "Download your favorite YouTube videos in high quality using Vidown. Whether it's tutorials, music videos, or vlogs, save them offline with ease.",
            img: "https://www.mediamister.com/images/og/youtube-video-downloader.jpg"
        },
        {
            title: "YouTube Shorts Downloader",
            description: "Save YouTube Shorts videos to your device in seconds. Vidown ensures quick and reliable downloads of all your favorite short videos.",
            img: "https://4ddig.tenorshare.com/images/video-repair/how-to-download-youtube-shorts.jpg?w=839&h=559"
        },
        {
            title: "Download YouTube Playlists",
            description: "Easily download entire YouTube playlists with Vidown. Save your favorite series, educational playlists, or music albums to watch offline.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiG5XTavxNr_w5JWmVjaYo3-0PMpEa6XVXpg&s"
        },
    ];
    
    const allGuides = [
        ...instagramGuides,
        ...tiktokGuides,
        ...facebookGuides,
        ...youtubeGuides
    ];
    
    return (
         <div className={styles.container}>
      <h1 className={styles.title}>All features of Vidown</h1>
      <p className={styles.description}>Vidown supports all social media types of videos/images links</p>
      <div>
        {allGuides.map((guide, index) => (
          <div key={index} className={styles.guide}>
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
            {guide.img && <img src={guide.img} alt={guide.title} />}
          </div>
        ))}
      </div>
    </div>
    );
}

export default GuideMethods;
