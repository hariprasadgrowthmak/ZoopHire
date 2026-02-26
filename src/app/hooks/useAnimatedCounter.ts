import { useEffect, useRef, useState } from 'react';

export function useAnimatedCounter(
    target: number,
    duration = 2000,
    startOnMount = false
) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(startOnMount);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!started) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setStarted(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.3 }
            );
            if (ref.current) observer.observe(ref.current);
            return () => observer.disconnect();
        }
    }, [started]);

    useEffect(() => {
        if (!started) return;
        let startTime: number | null = null;
        const startVal = 0;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(startVal + eased * (target - startVal)));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [started, target, duration]);

    return { count, ref };
}
