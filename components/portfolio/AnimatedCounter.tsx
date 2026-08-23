"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
    value: string;
    duration?: number;
}

export default function AnimatedCounter({ value, duration = 1400 }: AnimatedCounterProps) {
    const target = parseInt(value, 10);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el || Number.isNaN(target)) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const startTime = performance.now();

                    const tick = (now: number) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setDisplay(Math.round(eased * target));
                        if (progress < 1) requestAnimationFrame(tick);
                    };

                    requestAnimationFrame(tick);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    if (Number.isNaN(target)) {
        return <span ref={ref}>{value}</span>;
    }

    return <span ref={ref}>{display}</span>;
}
