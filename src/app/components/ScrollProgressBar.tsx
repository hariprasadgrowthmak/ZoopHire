import { useScroll, useSpring, motion } from 'motion/react';

export function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{
                scaleX,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: 'linear-gradient(90deg, #7c3aed, #4f46e5, #06b6d4)',
                transformOrigin: '0%',
                zIndex: 9999,
            }}
        />
    );
}
