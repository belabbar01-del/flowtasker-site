'use client'

import { useState, useEffect } from 'react'

const NODES = [
  {
    id: 1,
    tag: 'Trigger',
    label: 'Brief reçu dans Notion',
    tagStyle: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
  },
  {
    id: 2,
    tag: 'IA',
    label: 'Rédaction article GPT-4',
    tagStyle: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  },
  {
    id: 3,
    tag: 'IA',
    label: 'Génération image DALL·E',
    tagStyle: 'bg-sky-500/15 text-sky-300 border-sky-500/25',
  },
  {
    id: 4,
    tag: 'CMS',
    label: 'Publication WordPress',
    tagStyle: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  },
  {
    id: 5,
    tag: 'Social',
    label: 'Post LinkedIn automatique',
    tagStyle: 'bg-brand-500/15 text-brand-300 border-brand-500/25',
  },
] as const

export function WorkflowVisual() {
  const [activeIdx, setActiveIdx] = useState(2)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % NODES.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Ambient glow */}
      <div
        className="absolute inset-x-16 top-6 bottom-6 bg-brand-600/8 blur-3xl rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="relative glass rounded-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
          </div>
          <span className="text-xs text-slate-500 font-mono ml-1">pipeline-contenu.workflow</span>
          <div className="ml-auto flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-medium">En cours</span>
          </div>
        </div>

        {/* Nodes */}
        <div className="p-4 space-y-1.5">
          {NODES.map((node, i) => {
            const isDone    = i < activeIdx
            const isRunning = i === activeIdx

            return (
              <div
                key={node.id}
                className={`node-${i + 1} flex items-center gap-3 px-4 py-3 rounded-xl border
                  transition-all duration-500 ${
                    isRunning
                      ? 'bg-brand-600/10 border-brand-500/25'
                      : isDone
                      ? 'bg-white/[0.02] border-white/[0.04]'
                      : 'bg-transparent border-white/[0.03]'
                  }`}
              >
                {/* Status dot */}
                <div
                  className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-500 ${
                    isDone ? 'bg-emerald-400' : isRunning ? 'bg-brand-400 animate-pulse' : 'bg-slate-700'
                  }`}
                />

                {/* Tag */}
                <span className={`text-[11px] px-2 py-0.5 rounded-md border font-semibold shrink-0 ${node.tagStyle}`}>
                  {node.tag}
                </span>

                {/* Label */}
                <span
                  className={`text-sm transition-colors duration-500 ${
                    isDone ? 'text-slate-500' : isRunning ? 'text-white font-medium' : 'text-slate-600'
                  }`}
                >
                  {node.label}
                </span>

                {/* Status indicator */}
                <div className="ml-auto shrink-0">
                  {isDone && <span className="text-emerald-400 text-sm font-semibold">✓</span>}
                  {isRunning && (
                    <div className="flex gap-0.5 items-center">
                      {[0, 1, 2].map((j) => (
                        <div
                          key={j}
                          className="w-1 h-1 rounded-full bg-brand-400 animate-bounce"
                          style={{ animationDelay: `${j * 140}ms` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer stats bar */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/[0.12]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium">
                {activeIdx} / {NODES.length} étapes complétées
              </span>
            </div>
            <span className="text-xs text-slate-600 font-mono">0 action manuelle requise</span>
          </div>
        </div>
      </div>
    </div>
  )
}
