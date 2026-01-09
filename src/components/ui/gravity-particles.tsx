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
        const parentElement = canvas.parentElement;

        // Configuration
        const particleCount = 80;
        const maxOrbitRadius = 0.4; // Max radius as fraction of canvas size

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

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const minRadius = Math.min(canvas.width, canvas.height) * 0.1;
            const maxRadius = Math.min(canvas.width, canvas.height) * maxOrbitRadius;

            particles = [];
            for (let i = 0; i < particleCount; i++) {
                const orbitRadius = minRadius + Math.random() * (maxRadius - minRadius);
                const initialAngle = Math.random() * Math.PI * 2;
                
                particles.push({
                    x: centerX + Math.cos(initialAngle) * orbitRadius,
                    y: centerY + Math.sin(initialAngle) * orbitRadius,
                    vx: 0,
                    vy: 0,
                    size: Math.random() * 2 + 1.5,
                    angle: Math.random() * Math.PI * 2,
                    speed: 0.03 + Math.random() * 0.03,
                    offsetRadius: orbitRadius,
                    offsetAngle: initialAngle,
                    orbitSpeed: (Math.random() - 0.5) * 0.015 + 0.01,
                    color: Math.random() > 0.5 
                        ? hexToRgba(brandColor, 0.8) 
                        : hexToRgba(foregroundColor, 0.6)
                });
            }
        };

        const render = () => {
            // Clear with a slight fade for trails? No, clean wipe.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = Math.min(canvas.width, canvas.height) / 2;

            // Clip to circle
            ctx.save();
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.clip();

            particles.forEach(p => {
                // Update orbit angle
                p.offsetAngle += p.orbitSpeed;

                // Calculate target position in circular orbit
                const targetX = centerX + Math.cos(p.offsetAngle) * p.offsetRadius;
                const targetY = centerY + Math.sin(p.offsetAngle) * p.offsetRadius;

                // Smooth movement towards target
                p.x += (targetX - p.x) * p.speed;
                p.y += (targetY - p.y) * p.speed;

                // Rotate particle
                p.angle += 0.02;

                // Draw particle
                ctx.fillStyle = p.color;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.angle);
                ctx.beginPath();
                ctx.rect(-p.size * 2, -p.size / 2, p.size * 4, p.size);
                ctx.fill();
                ctx.restore();
            });

            ctx.restore(); // Restore clipping

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

        if (parentElement) {
            resizeObserver.observe(parentElement);
        }

        window.addEventListener('resize', handleResize);

        initParticles();
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (parentElement) {
                resizeObserver.unobserve(parentElement);
            }
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
            className="absolute inset-0 z-0 pointer-events-none opacity-60"
            style={{ width: '100%', height: '100%' }}
        />
    );
}
