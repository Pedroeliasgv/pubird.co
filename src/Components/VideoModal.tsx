
import { useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  videoId: string;
  title: string;
  onClose: () => void;
}

const VideoModal = ({
  videoId,
  title,
  onClose,
}: VideoModalProps) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-6xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-sm font-light uppercase tracking-[0.2em] text-white/80 sm:text-base">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar vídeo"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <X size={20} />
          </button>
        </div>

        <div className="aspect-video w-full overflow-hidden bg-black shadow-2xl">
          <iframe
            key={videoId}
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
          PUBIRD FILM PRODUCTION
        </p>
      </div>
    </div>
  );
};

export default VideoModal;
