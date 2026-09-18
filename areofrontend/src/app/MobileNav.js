"use client";

import { useState } from "react";

export default function MobileNav({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animationRun, setAnimationRun] = useState(0);

  function handleToggle(event) {
    const nextOpen = event.currentTarget.open;

    setIsOpen(nextOpen);

    if (nextOpen) {
      setAnimationRun((currentRun) => currentRun + 1);
    }
  }

  return (
    <details className="mobile-nav ml-auto md:hidden" open={isOpen} onToggle={handleToggle}>
      <summary className="mobile-nav-toggle" aria-label="Open navigation menu" aria-expanded={isOpen}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </summary>
      <nav className="mobile-nav-panel" aria-label="Mobile primary">
        {items.map((item) => (
          <a href={item.href} key={`${animationRun}-${item.label}`} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
