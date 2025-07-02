"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface SliderProps {
  children: React.ReactNode;
  width?: string;
  duration?: number;
  toRight?: boolean;
  pauseOnHover?: boolean;
}

/**
 * Slider component that creates a truly infinite horizontal scrolling effect for its children.
 * @param {React.ReactNode} children - The content to be displayed inside the slider.
 * @param {string} width - The width of each slide. Default is "200px".
 * @param {number} duration - The duration of the animation in seconds. Default is 40 seconds.
 * @param {boolean} toRight - Direction of the animation. If true, slides to the right. Default is false (slides to the left).
 * @param {boolean} pauseOnHover - If true, pauses the animation on hover. Default is false.
 * @returns {JSX.Element} The Slider component.
 * @example
 * <Slider width="300px" duration={60} toRight={false} pauseOnHover={true}>
 *  <h2 className="sm:text-2xl text-lg font-semibold text-foreground w-32">Slide 1</h2>
 *  <h2 className="sm:text-2xl text-lg font-semibold text-foreground w-32">Slide 2</h2>
 *  <h2 className="sm:text-2xl text-lg font-semibold text-foreground w-32">Slide 3</h2>
 * </Slider>
 */
const Slider = ({
  children,
  width = "200px",
  duration = 40,
  toRight = false,
  pauseOnHover = false,
}: SliderProps) => {
  const [idNanoid, setIdNanoid] = useState<string>("");

  useEffect(() => {
    setIdNanoid(Math.random().toString(36).substring(2, 12));
  }, []);

  useEffect(() => {
    const childrenCount = React.Children.count(children);
    const style = document.createElement("style");
    style.type = "text/css";

    if (toRight) {
      // For right direction: start from left position and move right
      style.innerHTML = `
        @keyframes slider_animation_${idNanoid} {
          0% { transform: translateX(calc(-${width} * ${childrenCount})); }
          100% { transform: translateX(0); }
        }
      `;
    } else {
      // For left direction: start from right and move left
      style.innerHTML = `
        @keyframes slider_animation_${idNanoid} {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-${width} * ${childrenCount})); }
        }
      `;
    }

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [toRight, width, children, idNanoid]);

  const handleMouseEnter = () => {
    if (!pauseOnHover) return;
    const sliderElement = document.getElementById(`slider_${idNanoid}`);
    if (sliderElement) sliderElement.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    if (!pauseOnHover) return;
    const sliderElement = document.getElementById(`slider_${idNanoid}`);
    if (sliderElement) sliderElement.style.animationPlayState = "running";
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          animation: `slider_animation_${idNanoid} ${duration}s linear infinite`,
          width: `calc(${width} * ${React.Children.count(children) * 3})`,
        }}
        className="space-x-10"
        id={`slider_${idNanoid}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Array(3)
          .fill(children)
          .flat()
          .map((child, i) => (
            <React.Fragment key={i}>{child}</React.Fragment>
          ))}
      </div>
    </div>
  );
};

interface SlideProps {
  children: React.ReactNode;
  width?: string;
  className?: string;
}

/**
 * Slide component to be used inside the Slider component.
 * It accepts children and an optional width prop.
 * @param {React.ReactNode} children - The content to be displayed inside the slide.
 * @param {string} width - The width of the slide. Default is "200px".
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The Slide component.
 */
const Slide: React.FC<SlideProps> = ({
  children,
  width = "200px",
  className,
}) => {
  return (
    <div
      style={{
        width,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={cn(className)}
    >
      {children}
    </div>
  );
};

Slider.Slide = Slide;

export { Slider };
