import React, { useState, useEffect } from 'react';

const LazyBackground = ({ src, className, children, style }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => {
      setLoaded(false);
    };
  }, [src]);

  const combinedStyle = {
    ...style,
    backgroundImage: loaded ? `url(${src})` : 'none',
    transition: 'background-image 0.5s ease-in-out',
  };

  return (
    <div className={className} style={combinedStyle}>
      {children}
    </div>
  );
};

export default LazyBackground;
