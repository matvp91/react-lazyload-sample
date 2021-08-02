import React from "react";

export default function LazyLoadObserverImage({ src, width, height }) {
  return <img src={src} width={width} height={height} />;
}
