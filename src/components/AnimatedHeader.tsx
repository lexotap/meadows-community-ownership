import { useState, useEffect } from "react";

const AnimatedHeader = () => {
  const brands = ['Wyndham', 'Marriott', 'Hyatt', 'Hilton'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
      Own a hotel room in{" "}
      <span className="inline-block relative h-[1.2em] w-auto align-bottom overflow-hidden">
        <span
          key={currentIndex}
          className="absolute left-0 text-accent animate-flip-in"
        >
          {brands[currentIndex]}
        </span>
      </span>
    </h1>
  );
};

export default AnimatedHeader;
