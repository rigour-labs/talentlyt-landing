'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
}

export function BlueParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to match parent container
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };
        resizeCanvas();

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Create particles
        const initParticles = () => {
            particles = [];
            const particleCount = 150;
            
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.3,
                });
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Draw particle as small irregular shape
                ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity})`;
                ctx.beginPath();
                
                // Draw irregular shape (small dash/rectangle)
                const angle = Math.atan2(p.vy, p.vx);
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(angle);
                ctx.fillRect(-p.size * 2, -p.size / 2, p.size * 4, p.size);
                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const handleResize = () => {
            resizeCanvas();
            initParticles();
        };

        // Use ResizeObserver to watch parent container size
        const resizeObserver = new ResizeObserver(() => {
            resizeCanvas();
            initParticles();
        });

        const parent = canvas.parentElement;
        if (parent) {
            resizeObserver.observe(parent);
        }

        window.addEventListener('resize', handleResize);
        initParticles();
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (parent) {
                resizeObserver.unobserve(parent);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ width: '100%', height: '100%' }}
        />
    );
}
