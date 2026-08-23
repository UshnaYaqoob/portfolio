"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
    text: string;
    startDelay?: number;
    speed?: number;
    onDone?: () => void;
}

export default function TypewriterText({ text, startDelay = 0, speed = 35, onDone }: TypewriterTextProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let i = 0;
        let interval: ReturnType<typeof setInterval> | undefined;

        const startTimeout = setTimeout(() => {
            interval = setInterval(() => {
                i += 1;
                setCount(i);
                if (i >= text.length) {
                    if (interval) clearInterval(interval);
                    onDone?.();
                }
            }, speed);
        }, startDelay);

        return () => {
            clearTimeout(startTimeout);
            if (interval) clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, startDelay, speed]);

    return <>{text.slice(0, count)}</>;
}
