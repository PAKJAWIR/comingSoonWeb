import { useEffect, useRef } from "react";

export default function PingPongVideo({ src, className = "" }) {
  const videoRef = useRef(null);
  const directionRef = useRef(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    const handleEnded = () => {
      directionRef.current *= -1;

      // Reverse playback
      if (directionRef.current === -1) {
        video.currentTime = Math.max(0, video.duration - 0.001);
        video.playbackRate = -1;
      } else {
        video.currentTime = 0.001;
        video.playbackRate = 1;
      }

      video.play().catch(() => {});
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return <video ref={videoRef} className={className} src={src} muted playsInline preload="auto" />;
}
