import React, { CSSProperties } from "react";

type HoverImageProps = {
  src: string;
  alt: string;
  className: string;
  style: CSSProperties;
};

export default function HoverImage({
  src,
  alt,
  style,
  className
}: HoverImageProps) {

  return (
      <div
        style={{
          overflow: 'hidden',
          ...style,
        }}
      >
        <img alt={alt}
          className={className}
          style={{
            width: '100%',
            height: '100%',
          }}
          src={src} />
      </div>
  );
}