import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface ProjectVideoProps {
  src: string;
}

const ProjectVideo = ({ src }: ProjectVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const fullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  return (
    <div className="group relative overflow-hidden bg-black">

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="aspect-video w-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Overlay */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Controls */}

      <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between opacity-0 transition duration-500 group-hover:opacity-100">

        <div className="flex gap-4">

          <button
            type="button"
            onClick={togglePlay}
          >
            {playing ? (
              <Pause
                size={22}
                className="text-white"
              />
            ) : (
              <Play
                size={22}
                className="text-white"
              />
            )}
          </button>

          <button
            type="button"
            onClick={toggleMute}
          >
            {muted ? (
              <VolumeX
                size={22}
                className="text-white"
              />
            ) : (
              <Volume2
                size={22}
                className="text-white"
              />
            )}
          </button>

        </div>

        <button
          type="button"
          onClick={fullscreen}
        >
          <Maximize2
            size={22}
            className="text-white"
          />
        </button>

      </div>

    </div>
  );
};

export default ProjectVideo;