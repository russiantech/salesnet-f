import { useRef } from "react";

interface MediaProps {
  url: string;
  alt: string;
  className?: string;
  isThumb?: boolean; // whether it's in the thumbnail swiper
}

const MediaPreview = ({ url, alt, className, isThumb = false }: MediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const getUrlType = (url: string): "image" | "video" | "youtube" | "vimeo" => {
    if (!url) return "image";
    const ext = url.substring(url.lastIndexOf(".")).toLowerCase();
    if ([".mp4", ".webm", ".ogg", ".mov", ".avi"].includes(ext)) return "video";
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
    if (url.includes("vimeo.com")) return "vimeo";
    return "image";
  };

  const type = getUrlType(url);

  if (type === "image") {
    return (
      <img
        src={url}
        alt={alt}
        className={className}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/assets/img/us/placeholder.png";
        }}
      />
    );
  }

  if (type === "video") {
    return (
      <div
        className="position-relative w-100 h-100"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
      >
        <video
          ref={videoRef}
          src={url}
          className={className}
          muted
          loop
          playsInline
          preload="metadata"
          onError={(e) => {
            (e.currentTarget as HTMLVideoElement).poster = "/assets/img/us/placeholder.png";
          }}
          style={{ objectFit: "cover" }}
        />
        {/* Play button overlay bottom-left */}
        <div
          className="position-absolute d-flex align-items-center justify-content-center"
          style={{
            bottom: "8px",
            left: "8px",
            width: isThumb ? "18px" : "24px",
            height: isThumb ? "18px" : "24px",
            backgroundColor: "rgba(0,0,0,0.7)",
            borderRadius: "50%",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <i
            className="ci-play text-white"
            style={{ fontSize: isThumb ? "10px" : "14px" }}
          />
        </div>
      </div>
    );
  }

  // Fallback for YouTube / Vimeo → static placeholder with play icon
  return (
    <div className="bg-dark position-relative d-flex align-items-center justify-content-center w-100 h-100">
      <i className="ci-video text-white fs-2" />
      <div
        className="position-absolute d-flex align-items-center justify-content-center"
        style={{
          bottom: "8px",
          left: "8px",
          width: isThumb ? "18px" : "24px",
          height: isThumb ? "18px" : "24px",
          backgroundColor: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <i
          className="ci-play text-white"
          style={{ fontSize: isThumb ? "10px" : "14px" }}
        />
      </div>
    </div>
  );
};

export default MediaPreview;
