'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

interface MayaVoiceWidgetProps {
    isPlaying: boolean;
    onToggle: () => void;
}

export function MayaVoiceWidget({ isPlaying, onToggle }: MayaVoiceWidgetProps) {
    return (
        <div className="relative p-5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group">
            {/* Dynamic Background Glow */}
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex items-center justify-between gap-6">

                {/* Status Column */}
                <div>
                    <div className="technical-label text-brand text-[8px] mb-1.5 leading-none">Agent Status</div>
                    <div className="text-white font-bold flex items-center gap-2.5">
                        <span className="relative flex h-2 w-2">
                            {isPlaying ? (
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            ) : null}
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-green-500' : 'bg-red-500/80 transition-colors'}`}></span>
                        </span>
                        {isPlaying ? 'Maya Speaking...' : 'Push to Talk'}
                    </div>
                </div>

                <div className="h-8 w-px bg-white/10" />

                {/* Controls & Visualizer */}
                <div className="flex items-center gap-4">
                    {/* Play Button */}
                    <button
                        onClick={onToggle}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-white group-hover:scale-105 active:scale-95"
                    >
                        {isPlaying ? (
                            <Pause className="w-4 h-4 fill-current" />
                        ) : (
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                        )}
                    </button>

                    {/* Audio Visualizer */}
                    <div className="flex gap-[3px] h-6 items-center">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((bar, i) => (
                            <motion.div
                                key={i}
                                animate={isPlaying ? {
                                    height: [
                                        "20%",
                                        `${30 + Math.random() * 70}%`,
                                        "20%"
                                    ],
                                    backgroundColor: ["rgba(255,255,255,0.2)", "#3b82f6", "rgba(255,255,255,0.2)"]
                                } : {
                                    height: "20%",
                                    backgroundColor: "rgba(255,255,255,0.2)"
                                }}
                                transition={isPlaying ? {
                                    repeat: Infinity,
                                    duration: 0.5 + Math.random() * 0.5,
                                    ease: "easeInOut",
                                    delay: i * 0.05
                                } : { duration: 0.3 }}
                                className="w-1 rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Progress/Data Stream Decorator */}
            <div className="mt-3 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
    );
}
