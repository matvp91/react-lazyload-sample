import React from "react";

export default function LazyLoadNativeImage({ src, width, height }) {
  return <img loading="lazy" src={src} width={width} height={height} />;
}
