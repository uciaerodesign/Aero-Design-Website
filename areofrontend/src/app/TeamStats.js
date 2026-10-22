"use client";

import { useEffect, useRef, useState } from "react";

const animationDuration = 1800;

export default function TeamStats({ members, subteams }) {
  const statsRef = useRef(null);
  const [values, setValues] = useState({ members: 0, subteams: 0 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = statsRef.current;

    if (!element || !window.IntersectionObserver) {
      setHasStarted(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionFrame = requestAnimationFrame(() => {
        setValues({ members, subteams });
      });
      return () => cancelAnimationFrame(reducedMotionFrame);
    }

    let animationFrame;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / animationDuration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValues({
        members: Math.round(members * easedProgress),
        subteams: Math.round(subteams * easedProgress),
      });

      if (progress < 1) animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, members, subteams]);

  return (
    <div ref={statsRef} className="team-stats" aria-label={`${members} team members and ${subteams} subteams`}>
      <article className="team-stat">
        <span>Team Members</span>
        <strong aria-hidden="true">{values.members}</strong>
      </article>
      <article className="team-stat">
        <span>Subteams</span>
        <strong aria-hidden="true">{values.subteams}</strong>
      </article>
      <span className="sr-only">{members} team members and {subteams} subteams</span>
    </div>
  );
}
