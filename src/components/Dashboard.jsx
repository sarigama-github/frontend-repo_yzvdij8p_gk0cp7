import React from 'react'
import { motion } from 'framer-motion'
import { Activity, AlertTriangle, Gauge, GitPullRequest, CheckCircle2 } from 'lucide-react'

const Stat = ({ icon: Icon, label, value, tone }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`rounded-2xl border bg-panel/60 backdrop-blur-xl p-5 ${tone === 'danger' ? 'border-danger/40 shadow-[0_0_32px_rgba(255,0,51,0.08)]' : 'border-white/10'}`}>
    <div className="flex items-center gap-3">
      <div className={`size-9 rounded-xl grid place-items-center ${tone === 'danger' ? 'bg-danger/15 text-danger border border-danger/30' : 'bg-neonBlue/10 text-neonBlue border border-neonBlue/30'}`}>
        <Icon size={18} />
      </div>
      <div className="text-white/60 text-sm">{label}</div>
    </div>
    <div className="mt-3 text-3xl font-semibold">{value}</div>
  </motion.div>
)

export default function Dashboard() {
  return (
    <section className="bg-primary min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat icon={GitPullRequest} label="Total PRs Reviewed" value="1,284" />
          <Stat icon={AlertTriangle} label="High-risk PRs" value="42" tone="danger" />
          <Stat icon={Gauge} label="Avg Quality Score" value="92" />
          <Stat icon={CheckCircle2} label="Merged w/o issues" value="1,010" />
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-panel/60 backdrop-blur-xl p-6">
          <div className="flex items-center justify-between">
            <div className="text-white/80 font-medium">Latest Pull Requests</div>
            <button className="text-sm text-white/60 hover:text-white">View all</button>
          </div>
          <div className="mt-6 grid gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-primary/60 p-4 flex items-center justify-between">
                <div className="text-white/80">feat: optimize database queries (service/payment.ts)</div>
                <div className="text-xs rounded-full px-2 py-1 bg-success/10 text-success border border-success/30">Low</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
