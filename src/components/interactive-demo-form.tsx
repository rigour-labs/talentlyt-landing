'use client';

/**
 * Interactive Demo Form - Landing Page
 * 
 * Simplified form that calls main app's demo API.
 * Promotes both Maya AI + AI Sentinel.
 */

import React, { useState } from 'react';
import { 
  Play, 
  Bot, 
  Shield, 
  Loader2,
  ChevronRight,
  Check,
  Code,
  BarChart3,
  Palette,
  Cpu,
  Mic,
  Eye,
  Activity,
} from 'lucide-react';

// API endpoint
const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'http://localhost:3000';

type RoleInterest = 'ENGINEER' | 'PRODUCT_MANAGER' | 'DESIGNER' | 'DATA_SCIENTIST';

const roles: { value: RoleInterest; label: string; icon: React.ReactNode }[] = [
  { value: 'ENGINEER', label: 'Engineer', icon: <Code className="w-4 h-4" /> },
  { value: 'PRODUCT_MANAGER', label: 'Product', icon: <BarChart3 className="w-4 h-4" /> },
  { value: 'DESIGNER', label: 'Designer', icon: <Palette className="w-4 h-4" /> },
  { value: 'DATA_SCIENTIST', label: 'Data', icon: <Cpu className="w-4 h-4" /> },
];

export function InteractiveDemoForm() {
  const [name, setName] = useState('');
  const [role, setRole] = useState<RoleInterest>('ENGINEER');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await fetch(`${PLATFORM_URL}/api/demo/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), roleInterest: role }),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to start demo');
      
      // Redirect to demo room on main platform
      window.location.href = `${PLATFORM_URL}/demo/room/${data.sessionId}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Two Pillars */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {/* Maya AI */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-brand/10 border border-brand/20 rounded-xl">
          <div className="w-8 h-8 bg-brand/20 rounded-lg flex items-center justify-center">
            <Bot className="w-4 h-4 text-brand" />
          </div>
          <div>
            <p className="font-bold text-brand text-sm">Maya AI</p>
            <p className="text-[10px] text-text-muted">Voice Interviewer</p>
          </div>
        </div>

        {/* AI Sentinel */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
          <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="font-bold text-emerald-400 text-sm">AI Sentinel</p>
            <p className="text-[10px] text-text-muted">Integrity Monitor</p>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <form onSubmit={handleStart} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-brand/50 transition-colors"
              disabled={isLoading}
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Interview Role
            </label>
            <div className="grid grid-cols-4 gap-2">
              {roles.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => setRole(r.value)}
                  disabled={isLoading}
                  className={`flex flex-col items-center gap-1 px-2 py-3 rounded-xl border text-xs font-medium transition-all ${
                    role === r.value
                      ? 'bg-brand/20 border-brand/50 text-brand'
                      : 'bg-white/5 border-white/10 text-text-muted hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {r.icon}
                  <span>{r.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading || !name.trim()}
            className="w-full py-4 bg-gradient-to-r from-brand to-emerald-500 hover:from-brand/90 hover:to-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold text-white shadow-lg shadow-brand/20 transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Starting...</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span>Start Live Demo</span>
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Trust */}
          <div className="flex items-center justify-center gap-4 text-xs text-text-muted pt-2">
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3 text-emerald-400" /> No signup
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3 text-emerald-400" /> 3 minutes
            </span>
          </div>
        </form>
      </div>

      {/* Feature Preview */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-text-muted">
        <div className="flex items-center gap-1.5">
          <Mic className="w-3.5 h-3.5 text-brand" />
          <span>Voice</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Code className="w-3.5 h-3.5 text-cyan-400" />
          <span>Coding</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-emerald-400" />
          <span>Attention</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-amber-400" />
          <span>Integrity</span>
        </div>
      </div>
    </div>
  );
}
