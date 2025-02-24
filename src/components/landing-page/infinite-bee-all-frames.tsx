import Image from "next/image";
import { useEffect, useState } from "react";
import frame1 from "../assets/InfiniteBeeAllFrames/pixil-frame-0.png";
import frame2 from "../assets/InfiniteBeeAllFrames/pixil-frame-1.png";
import frame3 from "../assets/InfiniteBeeAllFrames/pixil-frame-2.png";
import frame4 from "../assets/InfiniteBeeAllFrames/pixil-frame-3.png";
import frame5 from "../assets/InfiniteBeeAllFrames/pixil-frame-4.png";
import frame6 from "../assets/InfiniteBeeAllFrames/pixil-frame-5.png";
import frame7 from "../assets/InfiniteBeeAllFrames/pixil-frame-6.png";
import frame8 from "../assets/InfiniteBeeAllFrames/pixil-frame-7.png";
import frame9 from "../assets/InfiniteBeeAllFrames/pixil-frame-8.png";
import frame10 from "../assets/InfiniteBeeAllFrames/pixil-frame-9.png";
import frame11 from "../assets/InfiniteBeeAllFrames/pixil-frame-10.png";
import frame12 from "../assets/InfiniteBeeAllFrames/pixil-frame-11.png";
import frame13 from "../assets/InfiniteBeeAllFrames/pixil-frame-12.png";
import frame14 from "../assets/InfiniteBeeAllFrames/pixil-frame-13.png";
import frame15 from "../assets/InfiniteBeeAllFrames/pixil-frame-14.png";
import frame16 from "../assets/InfiniteBeeAllFrames/pixil-frame-15.png";
import frame17 from "../assets/InfiniteBeeAllFrames/pixil-frame-16.png";
import frame18 from "../assets/InfiniteBeeAllFrames/pixil-frame-17.png";
import frame19 from "../assets/InfiniteBeeAllFrames/pixil-frame-18.png";
import frame20 from "../assets/InfiniteBeeAllFrames/pixil-frame-19.png";
import frame21 from "../assets/InfiniteBeeAllFrames/pixil-frame-20.png";
import frame22 from "../assets/InfiniteBeeAllFrames/pixil-frame-21.png";
import frame23 from "../assets/InfiniteBeeAllFrames/pixil-frame-22.png";
import frame24 from "../assets/InfiniteBeeAllFrames/pixil-frame-23.png";
import frame25 from "../assets/InfiniteBeeAllFrames/pixil-frame-24.png";
import frame26 from "../assets/InfiniteBeeAllFrames/pixil-frame-25.png";
import frame27 from "../assets/InfiniteBeeAllFrames/pixil-frame-26.png";
import frame28 from "../assets/InfiniteBeeAllFrames/pixil-frame-27.png";
import frame29 from "../assets/InfiniteBeeAllFrames/pixil-frame-28.png";
import frame30 from "../assets/InfiniteBeeAllFrames/pixil-frame-29.png";
import frame31 from "../assets/InfiniteBeeAllFrames/pixil-frame-30.png";
import frame32 from "../assets/InfiniteBeeAllFrames/pixil-frame-31.png";
import frame33 from "../assets/InfiniteBeeAllFrames/pixil-frame-32.png";
import frame34 from "../assets/InfiniteBeeAllFrames/pixil-frame-33.png";
import frame35 from "../assets/InfiniteBeeAllFrames/pixil-frame-34.png";
import frame36 from "../assets/InfiniteBeeAllFrames/pixil-frame-35.png";

const frames = [
  frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10,
  frame11, frame12, frame13, frame14, frame15, frame16, frame17, frame18, frame19, frame20,
  frame21, frame22, frame23, frame24, frame25, frame26, frame27, frame28, frame29, frame30,
  frame31, frame32, frame33, frame34, frame35, frame36
];

interface InfiniteBeeAllFramesProps {
  width: number;
  height: number;
  className?: string;
}

export function InfiniteBeeAllFrames({ width, height, className }: InfiniteBeeAllFramesProps) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 100); // Adjust the interval as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={frames[frameIndex]}
      alt="Infinite Bee"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
