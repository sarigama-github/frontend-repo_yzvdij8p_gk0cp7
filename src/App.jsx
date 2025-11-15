import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, ShieldAlert, LineChart, Sparkles } from 'lucide-react'
import './index.css'

const GradientGlow = () => (
  <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(64%_64%_at_50%_0%,#000_40%,transparent_70%)]">
    <div className="absolute -inset-24 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(0,209,255,0.25),transparent),radial-gradient(800px_400px_at_20%_20%,rgba(0,245,196,0.18),transparent)]" />
  </div>
)

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-primary/60 backdrop-blur-xl">
    <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-xl bg-gradient-to-br from-neonBlue/30 to-electricCyan/30 border border-white/10 grid place-items-center">
          <Sparkles className="text-electricCyan" size={18} />
        </div>
        <span className="font-display text-white/90 tracking-wide text-lg">CodeBoard</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#features" className="hover:text-white transition">Features</a>
        <a href="#pricing" className="hover:text-white transition">Pricing</a>
        <a href="#faq" className="hover:text-white transition">FAQ</a>
      </nav>
      <button className="inline-flex items-center gap-2 rounded-xl border border-neonBlue/40 bg-primary/60 px-4 py-2 text-white hover:border-neonBlue hover:bg-primary/40 transition shadow-[0_0_24px_rgba(0,209,255,0.15)]">
        <Github size={18} /> Sign in
      </button>
    </div>
  </header>
)

const Hero = () => (
  <section className="relative min-h-[92vh] w-full overflow-hidden bg-primary pt-24">
    <GradientGlow />

    <div className="absolute inset-0" aria-hidden>
      <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-12">
      <div className="flex flex-col gap-6">
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-5xl md:text-6xl leading-tight text-white">
          <span className="block text-white/90">CodeBoard</span>
          <span className="bg-gradient-to-r from-neonBlue to-electricCyan bg-clip-text text-transparent">AI-Driven Pull Request Reviews</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-white/70 text-lg max-w-xl">
          Automate code reviews with precision. Catch risks earlier, ship faster, and present analytics that prove impact.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4">
          <a href="#" className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-neonBlue to-electricCyan text-primary font-medium px-6 py-3 shadow-[0_0_40px_rgba(0,209,255,0.35)]">
            <Github size={18} /> Sign in with GitHub
            <ArrowRight className="transition -translate-x-1 group-hover:translate-x-0" size={18} />
          </a>
          <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white/80 hover:text-white hover:bg-white/10 transition">Live Demo</button>
        </motion.div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { icon: <ShieldAlert className="text-danger" size={18} />, title: 'Auto Risk Analysis', desc: 'AI flags critical issues instantly' },
            { icon: <LineChart className="text-electricCyan" size={18} />, title: 'Trends & Insights', desc: 'KPIs for velocity & quality' },
            { icon: <Sparkles className="text-success" size={18} />, title: 'Smart Suggestions', desc: 'Actionable review comments' },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="rounded-2xl border border-white/10 bg-panel/70 backdrop-blur-xl p-4 text-white/80">
              <div className="mb-2">{f.icon}</div>
              <div className="font-medium text-white/90">{f.title}</div>
              <div className="text-sm text-white/60">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-neonBlue/20 to-electricCyan/20 blur-2xl" aria-hidden />
        <div className="relative rounded-2xl border border-white/10 bg-panel/60 backdrop-blur-xl p-6">
          <motion.div initial={{ rotateX: 12, rotateY: -8, opacity: 0 }} animate={{ rotateX: 0, rotateY: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="grid gap-4">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-primary/60 p-4 text-white/80 hover:shadow-[0_0_40px_rgba(0,209,255,0.15)] transition">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">/src/components/Card{i}.tsx</span>
                  <span className="text-xs rounded-full px-2 py-1 bg-danger/10 text-danger border border-danger/30">High risk</span>
                </div>
                <div className="mt-2 h-20 rounded-md bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="border-t border-white/5 bg-primary py-10 text-center text-white/50">
    <div className="mx-auto max-w-7xl px-6">
      Built for elite engineering teams. No purple. All signal.
    </div>
  </footer>
)

export default function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}
