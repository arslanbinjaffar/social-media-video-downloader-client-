import React from 'react';
import styles from './HowToSave.module.css';
import howtodownloadyoutube from '../../assets/howtodownloadytvideos.jpg'
import howtodownloadfacebook from '../../assets/howtosavefacebookvideo.png'
import howtodownloadtwitter from '../../assets/howtosavetwitervideo.webp'
import howtodownloadtiktok from '../../assets/howtodownloadtiktok.png'

const InstagramGuide = () => {
  return (
    <div className={styles.container}>
      <h1>How to Save from Instagram with Vidown Instagram Downloader</h1>
      <p><strong>Note:</strong> The IG video or photo you download must be from a public Instagram account.</p>

      <div className={styles.step}>
        <button><strong>Step 01</strong></button>
        <p>Copy the URL of Instagram Photos & Videos</p>
        <h3>On the Instagram app:</h3>
        <p>Tap on the three dots above the post, then hit "Copy Link." The link will be saved to your clipboard.</p>
        <h3>On PC / Mac:</h3>
        <p>Right-click on the date of the video or photo on Instagram and then click "Copy Link Address."</p>
      </div>
    <img src="https://snapinsta.app/assets/img/how-to-download-from-Instagram.jpg" alt="how to download" />
      <div className={styles.step}>
        <button><strong>Step 02</strong></button>
        <p>Paste the URL into Vidown's Instagram Downloader in the text box above.</p>
      </div>

      <div className={styles.step}>
        <button><strong>Step 03</strong></button>
        <p>Hit the "Download" button to save your Instagram video or photo.</p>
      </div>
    </div>
  );
};

const YouTubeGuide = () => {
  return (
    <div className={styles.container}>
      <h1>How to Save Videos from YouTube with Vidown</h1>
      <div className={styles.step}>
        <button><strong>Step 01</strong></button>
        <p>Copy the URL of the YouTube Video</p>
        <h3>On the YouTube app:</h3>
        <p>Tap on the "Share" button below the video, and then select "Copy Link."</p>
        <h3>On PC / Mac:</h3>
        <p>Right-click on the video or use the browser address bar to copy the video URL.</p>
      </div>
      <img src={howtodownloadyoutube} alt="how to download" />

      <div className={styles.step}>
        <button><strong>Step 02</strong></button>
        <p>Paste the URL into the Vidown YouTube Downloader in the input field above.</p>
      </div>

      <div className={styles.step}>
        <button><strong>Step 03</strong></button>
        <p>Click the "Download" button and choose the desired format and resolution.</p>
      </div>
    </div>
  );
};

const FacebookGuide = () => {
  return (
    <div className={styles.container}>
      <h1>How to Save Videos from Facebook with Vidown</h1>
      <div className={styles.step}>
        <button><strong>Step 01</strong></button>
        <p>Copy the URL of the Facebook Video</p>
        <h3>On the Facebook app:</h3>
        <p>Tap on the "Share" button and then select "Copy Link."</p>
        <h3>On PC / Mac:</h3>
        <p>Right-click on the video or use the browser address bar to copy the video URL.</p>
      </div>
      <img src={howtodownloadfacebook} alt="how to download" />

      <div className={styles.step}>
        <button><strong>Step 02</strong></button>
        <p>Paste the URL into the Vidown Facebook Downloader in the input field above.</p>
      </div>

      <div className={styles.step}>
        <button><strong>Step 03</strong></button>
        <p>Click the "Download" button and save the video to your device.</p>
      </div>
    </div>
  );
};

const TikTokGuide = () => {
  return (
    <div className={styles.container}>
      <h1>How to Save Videos from TikTok with Vidown</h1>
      <div className={styles.step}>
        <button><strong>Step 01</strong></button>
        <p>Copy the URL of the TikTok Video</p>
      </div>

      <div className={styles.step}>
        <h3>On the TikTok app:</h3>
        <p>Tap on the "Share" button, then hit "Copy Link."</p>
      </div>
      <img src={howtodownloadtiktok} alt="how to download" />

      <div className={styles.step}>
        <button><strong>Step 02</strong></button>
        <p>Paste the URL into the Vidown TikTok Downloader in the text box above.</p>
      </div>

      <div className={styles.step}>
        <button><strong>Step 03</strong></button>
        <p>Click the "Download" button to save the TikTok video to your device.</p>
      </div>
    </div>
  );
};

const TwitterGuide = () => {
  return (
    <div className={styles.container}>
      <h1>How to Save Videos from Twitter with Vidown</h1>
      <div className={styles.step}>
        <button><strong>Step 01</strong></button>
        <p>Copy the URL of the Twitter Video</p>
        <h3>On the Twitter app:</h3>
        <p>Tap on the "Share" icon, then select "Copy Link."</p>
      </div>

      <div className={styles.step}>
        <h3>On PC / Mac:</h3>
        <p>Right-click on the video or use the browser address bar to copy the video URL.</p>
      </div>
      <img src={howtodownloadtwitter} alt="how to download" />

      <div className={styles.step}>
        <button><strong>Step 02</strong></button>
        <p>Paste the URL into the Vidown Twitter Downloader in the text box above.</p>
      </div>

      <div className={styles.step}>
        <button><strong>Step 03</strong></button>
        <p>Click the "Download" button to save the Twitter video to your device.</p>
      </div>
    </div>
  );
};

const HowToSave = () => {
  return (
    <div>
      <InstagramGuide />
      <YouTubeGuide />
      <FacebookGuide />
      <TikTokGuide />
      <TwitterGuide />
    </div>
  );
};

export default HowToSave;
