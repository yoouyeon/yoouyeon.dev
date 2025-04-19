"use client";

import { useEffect, useRef } from "react";

export default function Giscus() {
  const giscusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 이미 스크립트가 있으면 추가하지 않는다.
    if (giscusRef.current?.firstChild) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "yoouyeon/blog-comment");
    script.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkzNjA5NDQ5OTI=");
    script.setAttribute("data-category", "yoouyeon.dev");
    script.setAttribute("data-category-id", "DIC_kwDOFYOVYM4CBAj0");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "noborder_light");
    script.setAttribute("data-lang", "ko");
    script.setAttribute("data-loading", "lazy");
    script.async = true;
    script.crossOrigin = "anonymous";

    giscusRef.current?.appendChild(script);
  }, []);

  return <section ref={giscusRef} id="giscus" />;
}
