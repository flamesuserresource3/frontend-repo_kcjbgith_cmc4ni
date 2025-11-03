import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Lightbulb, Award, Users, Megaphone, Camera, BookOpen, Cpu, Sparkles } from 'lucide-react';

function GlassCard({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur p-6 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

export default function Sections() {
  const [modal, setModal] = useState(null);

  const experience = [
    { icon: Users, title: 'Organizational Leadership', text: 'Guiding teams with calm focus, shared goals, and clarity.' },
    { icon: Megaphone, title: 'Public Relations & Communication', text: 'Crafting messages that connect brands with people.' },
    { icon: Camera, title: 'Creative Strategy & Photography', text: 'Translating ideas into visual narratives with purpose.' },
    { icon: BookOpen, title: 'Teaching & Mentoring', text: 'Helping others grow through structure, feedback, and care.' },
    { icon: Cpu, title: 'Vibe-Coding & AI Exploration', text: 'Exploring human-centered workflows with thoughtful automation.' },
  ];

  const skills = [
    { icon: Shield, title: 'Leadership', text: 'Steady, responsible, clear-minded.' },
    { icon: Megaphone, title: 'Communication', text: 'Simple, human, on-message.' },
    { icon: Lightbulb, title: 'Creativity', text: 'Curious, intentional, disciplined.' },
    { icon: Users, title: 'Collaboration', text: 'Listening, aligning, delivering.' },
  ];

  const values = ['Responsibility.', 'Clarity.', 'Connection.'];

  const posts = [
    {
      title: 'On Leadership and Listening',
      summary: 'Leadership begins with attention. Listening builds trust, reduces noise, and allows teams to do their best work.'
    },
    {
      title: 'AI & Creative Flow',
      summary: 'AI is a partner, not a replacement. It helps us iterate faster, discover patterns, and ship with intention.'
    },
    {
      title: 'Designing with Clarity',
      summary: 'Remove the unnecessary. Keep what serves the goal. Clear design respects time and creates momentum.'
    },
  ];

  return (
    <>
      {/* About */}
      <section id="about" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-950" />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-stretch">
          <GlassCard className="md:col-span-2">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">About Me</h2>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  A communicator, organizer, and learner who values clarity and collaboration. I’ve grown through leadership
                  experiences — learning how people connect, work together, and bring ideas to life.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
                {[
                  { Icon: Shield, label: 'Authenticity' },
                  { Icon: Heart, label: 'Empathy' },
                  { Icon: Lightbulb, label: 'Innovation' },
                  { Icon: Award, label: 'Excellence' },
                ].map(({ Icon, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -4 }}
                    className="rounded-xl p-4 text-center bg-white/30 dark:bg-white/10 border border-black/10 dark:border-white/10 backdrop-blur"
                  >
                    <Icon className="mx-auto h-6 w-6 text-gray-900 dark:text-gray-200" />
                    <div className="mt-2 text-xs font-medium text-gray-800 dark:text-gray-200 opacity-90">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Experience & Projects */}
      <section id="experience" className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-transparent dark:from-gray-900/50" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="mb-8 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">Experience & Projects</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="group"
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/40 dark:bg-white/10 border border-black/10 dark:border-white/10">
                      <item.icon className="h-5 w-5 text-gray-900 dark:text-gray-200 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</div>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.text}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Development */}
      <section id="skills" className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/60 to-transparent dark:via-gray-900/40" />
        <div className="relative max-w-6xl mx-auto px-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">Skills & Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((s) => (
              <GlassCard key={s.title} className="text-center">
                <s.icon className="mx-auto h-6 w-6 text-gray-900 dark:text-gray-200" />
                <div className="mt-3 font-medium text-gray-900 dark:text-gray-100">{s.title}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300">{s.text}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Values */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
            animate={{ opacity: [0.8, 1, 0.9, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            {values.join(' ')}
          </motion.p>
        </div>
      </section>

      {/* Blog / Insights */}
      <section id="insights" className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-950" />
        <div className="relative max-w-6xl mx-auto px-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">Insights</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, idx) => (
              <motion.button
                key={p.title}
                onClick={() => setModal(idx)}
                whileHover={{ y: -6 }}
                className="text-left"
              >
                <GlassCard>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/40 dark:bg-white/10 border border-black/10 dark:border-white/10">
                      <Sparkles className="h-4 w-4 text-gray-900 dark:text-gray-200" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">{p.title}</div>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                        {p.summary}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Modal */}
        {modal !== null && (
          <div className="fixed inset-0 z-50 grid place-items-center p-6">
            <div className="absolute inset-0 bg-black/50" onClick={() => setModal(null)} />
            <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-gray-50/80 dark:bg-black/60 backdrop-blur p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{posts[modal].title}</h4>
                <button
                  onClick={() => setModal(null)}
                  className="text-sm px-3 py-1 rounded-lg border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200"
                >
                  Close
                </button>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{posts[modal].summary}</p>
              <a
                href="#"
                className="mt-6 inline-block text-sm text-gray-900 dark:text-gray-100 underline opacity-80 hover:opacity-100"
                onClick={(e) => e.preventDefault()}
              >
                External post coming soon
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
