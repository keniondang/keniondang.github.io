import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, AlertTriangle, TrendingUp, Info } from 'lucide-react';

/**
 * ChurnExplorer
 * An interactive customer-segment & churn explorer built in pure SVG + React
 * (no charting library needed). Pick a segment to see its profile, churn risk,
 * and the top behavioral drivers update live.
 *
 * NOTE: the numbers below are REPRESENTATIVE SAMPLE DATA for demonstration.
 * Swap them for your real segment outputs when ready — structure stays the same.
 */

// --- SAMPLE DATA (replace values with your real model outputs) ---
const SEGMENTS = [
  {
    id: 'champions',
    name: 'Champions',
    blurb: 'Recent, frequent, high-spend buyers — your most valuable customers.',
    size: 18,            // % of base
    churnRisk: 12,       // % predicted to churn
    metrics: { Recency: 92, Frequency: 88, Monetary: 95, Engagement: 84 },
    drivers: [
      { label: 'Days since last order', impact: -0.42 },
      { label: 'Avg. order value', impact: 0.31 },
      { label: 'Loyalty tier', impact: 0.22 },
    ],
  },
  {
    id: 'loyal',
    name: 'Loyal Regulars',
    blurb: 'Consistent repeat buyers with steady, mid-range spend.',
    size: 26,
    churnRisk: 24,
    metrics: { Recency: 70, Frequency: 78, Monetary: 60, Engagement: 66 },
    drivers: [
      { label: 'Order frequency', impact: 0.34 },
      { label: 'Days since last order', impact: -0.29 },
      { label: 'Discount sensitivity', impact: 0.18 },
    ],
  },
  {
    id: 'atrisk',
    name: 'At-Risk',
    blurb: 'Previously active customers whose engagement is dropping fast.',
    size: 31,
    churnRisk: 67,
    metrics: { Recency: 28, Frequency: 40, Monetary: 52, Engagement: 25 },
    drivers: [
      { label: 'Days since last order', impact: 0.55 },
      { label: 'Sessions (last 30d)', impact: -0.38 },
      { label: 'Cart abandonment rate', impact: 0.27 },
    ],
  },
  {
    id: 'hibernating',
    name: 'Hibernating',
    blurb: 'Long inactive, low frequency — mostly already gone.',
    size: 25,
    churnRisk: 83,
    metrics: { Recency: 12, Frequency: 18, Monetary: 22, Engagement: 10 },
    drivers: [
      { label: 'Days since last order', impact: 0.61 },
      { label: 'Email open rate', impact: -0.30 },
      { label: 'Tenure', impact: -0.15 },
    ],
  },
];

const riskColor = (r) =>
  r >= 65 ? '#ef4444' : r >= 35 ? '#f59e0b' : '#22c55e';

// --- Radar chart (pure SVG) ---
const Radar = ({ metrics }) => {
  const keys = Object.keys(metrics);
  const n = keys.length;
  const size = 220, cx = size / 2, cy = size / 2, R = 80;

  const point = (i, val) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (val / 100) * R;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  };
  const axisPoint = (i) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + R * Math.cos(angle), cy + R * Math.sin(angle)];
  };

  const poly = keys.map((k, i) => point(i, metrics[k]).join(',')).join(' ');

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[260px] mx-auto">
      {/* rings */}
      {[0.25, 0.5, 0.75, 1].map((f, i) => (
        <circle key={i} cx={cx} cy={cy} r={R * f} fill="none" stroke="#1e293b" strokeWidth="1" />
      ))}
      {/* axes + labels */}
      {keys.map((k, i) => {
        const [x, y] = axisPoint(i);
        const [lx, ly] = (() => {
          const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
          return [cx + (R + 22) * Math.cos(angle), cy + (R + 22) * Math.sin(angle)];
        })();
        return (
          <g key={k}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="#1e293b" strokeWidth="1" />
            <text x={lx} y={ly} fontSize="9" fill="#94a3b8" textAnchor="middle" dominantBaseline="middle">{k}</text>
          </g>
        );
      })}
      {/* data polygon */}
      <motion.polygon
        key={poly}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: 'center' }}
        points={poly}
        fill="rgba(59,130,246,0.25)"
        stroke="#3b82f6"
        strokeWidth="2"
      />
      {keys.map((k, i) => {
        const [x, y] = point(i, metrics[k]);
        return <circle key={k} cx={x} cy={y} r="3" fill="#3b82f6" />;
      })}
    </svg>
  );
};

// --- Churn gauge (semi-circle, pure SVG) ---
const Gauge = ({ value }) => {
  const r = 70, cx = 90, cy = 95;          // center near bottom of the arc area
  const circumference = Math.PI * r;        // length of a semicircle
  const dash = (value / 100) * circumference;
  const color = riskColor(value);

  // full semicircle path from left (180°) to right (0°), drawn left→right
  const leftX = cx - r, rightX = cx + r;
  const semicircle = `M ${leftX} ${cy} A ${r} ${r} 0 0 1 ${rightX} ${cy}`;

  return (
    <svg viewBox="0 0 180 140" className="w-full max-w-[230px] mx-auto">
      {/* track */}
      <path d={semicircle} fill="none" stroke="#1e293b" strokeWidth="14" strokeLinecap="round" />
      {/* value arc — animated via stroke-dash (reliable across browsers) */}
      <motion.path
        key={value}
        d={semicircle}
        fill="none"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: circumference - dash }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />
      {/* readout sits BELOW the arc, in clear space */}
      <text x={cx} y={cy + 26} fontSize="30" fontWeight="bold" fill={color} textAnchor="middle">{value}%</text>
      <text x={cx} y={cy + 42} fontSize="10" fill="#94a3b8" textAnchor="middle">predicted churn</text>
    </svg>
  );
};

const ChurnExplorer = () => {
  const [activeId, setActiveId] = useState('atrisk');
  const seg = useMemo(() => SEGMENTS.find((s) => s.id === activeId), [activeId]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <Users size={20} className="text-blue-400" /> Customer Segment & Churn Explorer
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full px-2 py-1">
          Sample data — interactive demo
        </span>
      </div>
      <p className="text-sm text-slate-400 mb-6">
        Pick a segment to see its behavioral profile, churn risk, and the top drivers update live.
      </p>

      {/* Segment selector */}
      <div className="flex flex-wrap gap-2 mb-7">
        {SEGMENTS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
              activeId === s.id
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-slate-800/40 border-slate-700 text-slate-300 hover:border-blue-500/50'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Blurb + size */}
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
        <Info size={15} className="text-blue-400 shrink-0" />
        <span>{seg.blurb} <span className="text-slate-500">({seg.size}% of customer base)</span></span>
      </div>

      {/* Visual grid */}
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Radar */}
        <div className="md:col-span-1">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2 text-center">Behavioral Profile</div>
          <Radar metrics={seg.metrics} />
        </div>

        {/* Gauge */}
        <div className="md:col-span-1">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2 text-center flex items-center justify-center gap-1">
            <AlertTriangle size={12} /> Churn Risk
          </div>
          <Gauge value={seg.churnRisk} />
        </div>

        {/* Drivers */}
        <div className="md:col-span-1">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-1">
            <TrendingUp size={12} /> Top Churn Drivers (SHAP)
          </div>
          <div className="space-y-3">
            {seg.drivers.map((d) => {
              const pct = Math.min(Math.abs(d.impact) * 140, 100);
              const pushesChurn = d.impact > 0;
              return (
                <div key={d.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{d.label}</span>
                    <span className={pushesChurn ? 'text-red-400' : 'text-green-400'}>
                      {pushesChurn ? '↑ risk' : '↓ risk'}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      key={seg.id + d.label}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full rounded-full"
                      style={{ background: pushesChurn ? '#ef4444' : '#22c55e' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-[11px] text-slate-600 mt-6 leading-relaxed">
        Built with React + SVG (no charting library). Segmentation via K-Means, churn scoring via XGBoost,
        driver attribution via SHAP — mirroring the methodology used in this project.
      </p>
    </div>
  );
};

export default ChurnExplorer;