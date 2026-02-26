import { useEffect, useRef } from 'react';

export function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: -100, y: -100 });
    const ring = useRef({ x: -100, y: -100 });
    const rafRef = useRef<number>(0);
    const isHovering = useRef(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };

        const enterHover = () => { isHovering.current = true; };
        const leaveHover = () => { isHovering.current = false; };

        document.addEventListener('mousemove', move);

        const addHoverListeners = () => {
            document.querySelectorAll('a, button, [role="button"], input, [data-cursor="hover"]')
                .forEach(el => {
                    el.addEventListener('mouseenter', enterHover);
                    el.addEventListener('mouseleave', leaveHover);
                });
        };
        addHoverListeners();
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        const animate = () => {
            // Dot follows instantly
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
            }
            // Ring lerps behind
            ring.current.x += (pos.current.x - ring.current.x) * 0.12;
            ring.current.y += (pos.current.y - ring.current.y) * 0.12;
            if (ringRef.current) {
                const size = isHovering.current ? 48 : 32;
                const offset = size / 2;
                ringRef.current.style.transform = `translate(${ring.current.x - offset}px, ${ring.current.y - offset}px)`;
                ringRef.current.style.width = `${size}px`;
                ringRef.current.style.height = `${size}px`;
                ringRef.current.style.opacity = isHovering.current ? '1' : '0.6';
                ringRef.current.style.borderColor = isHovering.current
                    ? 'rgba(139,92,246,0.9)'
                    : 'rgba(139,92,246,0.5)';
                ringRef.current.style.background = isHovering.current
                    ? 'rgba(139,92,246,0.08)'
                    : 'transparent';
            }
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', move);
            cancelAnimationFrame(rafRef.current);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
                style={{ background: '#7c3aed', willChange: 'transform' }}
            />
            {/* Ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border-2"
                style={{
                    width: 32, height: 32,
                    borderColor: 'rgba(139,92,246,0.5)',
                    willChange: 'transform, width, height',
                    transition: 'width 0.25s ease, height 0.25s ease, border-color 0.2s ease, background 0.2s ease',
                }}
            />
        </>
    );
}
