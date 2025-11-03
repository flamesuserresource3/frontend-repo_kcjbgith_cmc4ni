import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-gray-900 transition-colors duration-500" />

      {/* Faint animated overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay">
        <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-gradient-to-br from-white to-gray-300 blur-3xl animate-pulse" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tl from-gray-200 to-white dark:from-gray-800 dark:to-gray-600 blur-3xl" />
      </div>

      {/* Floating shapes */}
      <motion.div
        aria-hidden
        className="absolute top-24 left-10 h-24 w-24 rounded-3xl border border-black/5 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: [0, -8, 0], opacity: 1 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 max-w-3xl text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
          Hello, I am Mumtaz Abdul Rosyid
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-200 transition-colors duration-500">
          Create. Connect. Lead.
        </p>
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          A creative leader passionate about communication, clarity, and collaboration.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#about" className="rounded-xl border border-gray-800/20 dark:border-white/20 px-5 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 bg-white/30 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 shadow-sm transition-colors duration-300">
            About Me
          </a>
          <a href="#contact" className="rounded-xl px-5 py-3 text-sm font-medium text-gray-100 bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 dark:from-gray-200 dark:to-gray-400 dark:text-gray-900 transition-all duration-300 shadow">
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
