import { useState, useEffect } from "react";

export function useAnimatedSlider(images = [], delay = 8000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(interval);
  }, [images, delay]);

  return {
    currentIndex,
    currentImage: images[currentIndex],
    goToImage: setCurrentIndex,
  };
}