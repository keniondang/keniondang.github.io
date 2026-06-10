import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, Sparkles } from 'lucide-react';

// --- CONTACT INFO (edit freely) ---
const EMAIL = "keninondang@gmail.com";
const LINKEDIN = "https://linkedin.com/in/keniondang";
const GITHUB = "https://github.com/keniondang";

// Optional: paste a Formspree endpoint to enable the form WITHOUT a backend.
// Get one free at https://formspree.io  -> looks like "https://formspree.io/f/abcdwxyz"
// Leave as the placeholder to fall back to a mailto: link instead.
const FORMSPREE_ENDPOINT = "PLACEHOLDER_FORMSPREE_ENDPOINT";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const formReady = FORMSPREE_ENDPOINT && !FORMSPREE_ENDPOINT.startsWith('PLACEHOLDER');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    // No Formspree configured -> open the user's mail client as a fallback.
    if (!formReady) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus('sending');
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }); }
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen pt-20 px-6 md:px-20 max-w-6xl mx-auto pb-24">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium inline-flex items-center gap-2 mb-6">
          <Sparkles size={14} /> Open to Work
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
          Get in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Touch
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Open to internship and early-career opportunities in research & data analytics. The fastest way to reach me is below.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Direct links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400"><Mail size={22} /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Email</div>
              <div className="text-slate-200 group-hover:text-blue-400 transition-colors">{EMAIL}</div>
            </div>
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400"><Linkedin size={22} /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">LinkedIn</div>
              <div className="text-slate-200 group-hover:text-blue-400 transition-colors">linkedin.com/in/keniondang</div>
            </div>
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400"><Github size={22} /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">GitHub</div>
              <div className="text-slate-200 group-hover:text-blue-400 transition-colors">github.com/keniondang</div>
            </div>
          </a>
          <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400"><MapPin size={22} /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Location</div>
              <div className="text-slate-200">Jakarta, Indonesia</div>
            </div>
          </div>
        </motion.div>

        {/* Message form (no <form> tag — uses click handler) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-lg font-bold text-slate-100 mb-5">Send a message</h3>

          {!formReady && (
            <p className="text-xs text-amber-300/80 bg-amber-500/5 border border-dashed border-amber-500/40 rounded-lg p-3 mb-5">
              This form currently opens your email client. To enable direct sending without a backend,
              paste a free Formspree endpoint into <span className="font-mono">FORMSPREE_ENDPOINT</span> at the top of Contact.jsx.
            </p>
          )}

          <div className="space-y-4">
            <input
              name="name" value={form.name} onChange={handleChange} placeholder="Your name"
              className="w-full bg-slate-950/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <input
              name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email"
              className="w-full bg-slate-950/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <textarea
              name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows={5}
              className="w-full bg-slate-950/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
            />
            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {status === 'sending' ? 'Sending…' : formReady ? 'Send Message' : 'Open in Email'}
            </button>

            {status === 'sent' && <p className="text-sm text-green-400">Thanks — your message was sent.</p>}
            {status === 'error' && <p className="text-sm text-red-400">Something went wrong. Please email me directly.</p>}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
