'use client';

import React from 'react';
import { Play, Pause, Shield } from 'lucide-react';
import { analytics } from '@/lib/analytics';

interface MayaVoiceWidgetProps {
    isPlaying: boolean;
    onToggle: () => void;
    isSentinelMode?: boolean;
    onToggleSentinel?: () => void;
}

export function MayaVoiceWidget({ isPlaying, onToggle, isSentinelMode, onToggleSentinel }: MayaVoiceWidgetProps) {
    const handleTogglePlay = () => {
        analytics.track({
            event: 'feature_toggled',
            properties: {
                feature_name: 'maya_voice',
                enabled: !isPlaying,
                location: 'hero',
            },
        });
        onToggle();
    };

    const handleToggleSentinel = () => {
        if (onToggleSentinel) {
            analytics.track({
                event: 'feature_toggled',
                properties: {
                    feature_name: 'sentinel_mode',
                    enabled: !isSentinelMode,
                    location: 'hero',
                },
            });
            onToggleSentinel();
        }
    };

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
                    {/* Sentinel Mode Toggle */}
                    {onToggleSentinel && (
                        <button
                            onClick={handleToggleSentinel}
                            title="Forensic Sentinel Mode"
                            className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all ${isSentinelMode
                                ? 'bg-brand/20 border-brand text-brand shadow-[0_0_15px_rgba(0,102,255,0.4)]'
                                : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            <div className="relative">
                                <Shield className={`w-4 h-4 ${isSentinelMode ? 'animate-pulse' : ''}`} />
                                {isSentinelMode && (
                                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                                    </span>
                                )}
                            </div>
                        </button>
                    )}

                    {/* Play Button */}
                    <button
                        onClick={handleTogglePlay}
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
                            <div
                                key={i}
                                className={`w-1 rounded-full ${isPlaying ? 'bg-brand' : 'bg-white/20'}`}
                                style={{ height: isPlaying ? `${30 + (i * 10)}%` : '20%' }}
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
