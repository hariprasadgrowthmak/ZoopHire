import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    life: number;
    maxLife: number;
}

export function FloatingParticles({ count = 60, className = '' }: { count?: number; className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const particlesRef = useRef<Particle[]>([]);

    const colors = [
        'rgba(139,92,246,',   // violet
        'rgba(99,102,241,',   // indigo
        'rgba(59,130,246,',   // blue
        'rgba(6,182,212,',    // cyan
        'rgba(167,139,250,',  // light violet
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        setSize();
        window.addEventListener('resize', setSize);

        // Initialise particles
        const init = () => {
            particlesRef.current = Array.from({ length: count }, () => createParticle(canvas));
        };

        function createParticle(canvas: HTMLCanvasElement, fromBottom = false): Particle {
            const maxLife = 120 + Math.random() * 180;
            return {
                x: Math.random() * canvas.width,
                y: fromBottom ? canvas.height + 10 : Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: -(0.3 + Math.random() * 0.8),
                size: 1 + Math.random() * 2.5,
                opacity: 0,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 0,
                maxLife,
            };
        }

        init();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current = particlesRef.current.map(p => {
                p.life++;
                p.x += p.vx;
                p.y += p.vy;

                // Fade in / fade out
                const halfLife = p.maxLife / 2;
                if (p.life < halfLife) {
                    p.opacity = (p.life / halfLife) * 0.7;
                } else {
                    p.opacity = ((p.maxLife - p.life) / halfLife) * 0.7;
                }

                // Draw
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${p.opacity})`;
                ctx.fill();

                // Reset when dead
                if (p.life >= p.maxLife || p.y < -10) {
                    return createParticle(canvas, true);
                }
                return p;
            });

            animRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', setSize);
        };
    }, [count]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
        />
    );
}
