import { useEffect, useRef, useState } from 'react';

function Video() {
  const videoId = window.innerWidth <= 768 ? "LslsbnJh-gM" : "lRSOtbo_n2Y";
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div className='grid grid-cols-1 my-10 md:my-36 p-4 md:p-10 rounded-3xl'>
      <div className="relative h-full w-full overflow-hidden bg-black rounded-3xl">
        <iframe
          ref={iframeRef}
          title="YouTube Video"
          className="top-0 left-0 w-full h-full scale-110"
          style={{
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '-1',
            pointerEvents: 'none',
          }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${isVisible ? 1 : 0}&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
