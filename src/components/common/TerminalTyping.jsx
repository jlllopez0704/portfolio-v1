import { useEffect, useRef, useState } from "react";

export default function TerminalTyping({
  items = [],
  renderItem,
  speed = 100,
  onComplete,
}) {
  const [visibleCount, setVisibleCount] = useState(0);
  const completedRef = useRef(false);

  const serializedItems = JSON.stringify(items);

  useEffect(() => {
    setVisibleCount(0);
    completedRef.current = false;

    if (!items.length) return;

    let current = 0;

    const interval = setInterval(() => {
      current++;

      setVisibleCount(current);

      if (current >= items.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [serializedItems, speed]);

  useEffect(() => {
    if (
      visibleCount === items.length &&
      items.length &&
      !completedRef.current
    ) {
      completedRef.current = true;

      // Wait until React has finished rendering
      queueMicrotask(() => {
        onComplete?.();
      });
    }
  }, [visibleCount, items.length]);

  return <>{items.slice(0, visibleCount).map(renderItem)}</>;
}