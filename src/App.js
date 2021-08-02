import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const kittens = [];
for (let i = 480; i < 480 + 50; i++) {
  kittens.push(`https://placekitten.com/${i}/${i}`);
}

function useShouldLazyLoad() {
  const { ref, inView } = useInView();
  const loadRef = useRef();

  if (inView && !loadRef.current) {
    loadRef.current = true;
  }

  return {
    ref,
    shouldLazyLoad: loadRef.current,
  };
}

function LazyLoadObserverImage({ src, width, height }) {
  const { ref, shouldLazyLoad } = useShouldLazyLoad();
  return (
    <img
      ref={ref}
      src={shouldLazyLoad ? src : null}
      width={width}
      height={height}
    />
  );
}

function LazyLoadNativeImage({ src, width, height }) {
  return <img loading="lazy" src={src} width={width} height={height} />;
}

export default function App() {
  return kittens.map((src) => (
    <div>
      {/*<LazyLoadNativeImage src={src} width={460} height={460} />*/}
      <LazyLoadObserverImage src={src} width={460} height={460} />
    </div>
  ));
}
