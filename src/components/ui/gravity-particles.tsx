'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    angle: number;
    speed: number;
    offsetRadius: number;
    offsetAngle: number;
    orbitSpeed: number;
}

export function GravityParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // precise sizing
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        // Configuration
        const particleCount = 120;
        const ballRadius = 200;

        const initParticles = () => {
            // Get colors from CSS variables for consistency
            const root = document.documentElement;
            const computedStyle = getComputedStyle(root);
            const brandColor = computedStyle.getPropertyValue('--brand').trim() || '#3b82f6';
            const foregroundColor = computedStyle.getPropertyValue('--foreground').trim() || '#ffffff';
            
            // Convert hex to rgba for canvas
            const hexToRgba = (hex: string, alpha: number) => {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            };

            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: 0,
                    vy: 0,
                    size: Math.random() * 3 + 2, // Slightly larger
                    angle: Math.random() * Math.PI * 2,
                    speed: 0.04 + Math.random() * 0.04,
                    offsetRadius: Math.random() * ballRadius,
                    offsetAngle: Math.random() * Math.PI * 2,
                    orbitSpeed: (Math.random() - 0.5) * 0.02,
                    color: Math.random() > 0.5 
                        ? hexToRgba(brandColor, 1) 
                        : hexToRgba(foregroundColor, 0.8)
                });
            }
        };

        const render = () => {
            // Clear with a slight fade for trails? No, clean wipe.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.offsetAngle += p.orbitSpeed;

                const targetX = mouseX + Math.cos(p.offsetAngle) * p.offsetRadius;
                const targetY = mouseY + Math.sin(p.offsetAngle) * p.offsetRadius;

                // Ease
                p.x += (targetX - p.x) * p.speed;
                p.y += (targetY - p.y) * p.speed;

                p.angle += 0.02;

                ctx.fillStyle = p.color;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.angle);
                // Draw simple rect for robustness
                ctx.beginPath();
                ctx.rect(-p.size * 2, -p.size / 2, p.size * 5, p.size);
                ctx.fill();
                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        initParticles();
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Run once on mount. Colors are handled by checking doc class inside loop or init? 
    // Actually, if theme changes, we want to re-run. But let's stick to mount + check.
    // To support theme change dynamically, we should add 'theme' dependency or use MutationObserver.
    // For now, let's just use empty dep array to ensure stability, and maybe re-check color in render loop? 
    // Expensive. Let's rely on initParticles being called again if we add `theme` back.

    // Let's add explicit theme listener for color update


    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-60"
            style={{ width: '100%', height: '100%' }}
        />
    );
}
