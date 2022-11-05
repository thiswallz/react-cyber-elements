import React, { CSSProperties } from "react";
type CyberElProps = {
  id?: string,
  className?: string,
  style?: CSSProperties,
  [x: string]: any,
};
const SvgCyberEl75 = (props: CyberElProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={2300}
      height={807}
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "auto",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 232 81"
      {...props}
    >
      <path
        d="M232 39c0 8-7 14-14 14-8 0-14-6-14-14s6-14 14-14c7 0 14 6 14 14z"
        style={{
          fill: "#333",
        }}
      />
      <path
        d="M218 21V5H0v68h218V57c-10 0-18-8-18-18s8-18 18-18z"
        style={{
          fill: "#ccc",
        }}
      />
      <path
        style={{
          fill: "#666",
        }}
        d="M218 81H0v-8h218z"
      />
      <path
        style={{
          fill: "#999",
        }}
        d="M218 9H0V0h218z"
      />
    </svg>
  );
};
export default SvgCyberEl75;
