import { useEffect, useRef } from "react";

const CONVERTKIT_FORM_ID = "eff6441ba2";

export function ConvertKitForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const script = document.createElement("script");
    script.src = `https://rook-computer.kit.com/${CONVERTKIT_FORM_ID}/index.js`;
    script.async = true;
    script.setAttribute("data-uid", CONVERTKIT_FORM_ID);

    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = ""; // cleanup any appended elements
      }
    };
  }, []);

  return <div ref={containerRef} className="h-[513px] max-w-[700px]" />;
}
