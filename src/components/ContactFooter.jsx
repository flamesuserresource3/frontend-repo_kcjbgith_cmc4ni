import { Mail, MessageSquare, Instagram } from 'lucide-react';

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Let’s Connect</h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300">Open to collaborations, projects, and meaningful conversations.</p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-2xl px-8 py-3 text-sm font-medium text-gray-100 bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 shadow transition-colors duration-300"
          >
            Let’s Connect
          </a>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur p-5">
              <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
                <Mail className="h-5 w-5" />
                <span className="font-medium">Email</span>
              </div>
              <a href="mailto:mumtazabdulrosyid@gmail.com" className="mt-2 block text-sm text-gray-700 dark:text-gray-300 hover:underline">
                mumtazabdulrosyid@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur p-5">
              <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
                <MessageSquare className="h-5 w-5" />
                <span className="font-medium">WhatsApp</span>
              </div>
              <a href="https://wa.me/6282130516614" target="_blank" rel="noreferrer" className="mt-2 block text-sm text-gray-700 dark:text-gray-300 hover:underline">
                082130516614
              </a>
            </div>

            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur p-5">
              <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
                <Instagram className="h-5 w-5" />
                <span className="font-medium">Instagram</span>
              </div>
              <a href="https://instagram.com/aabdrsyd" target="_blank" rel="noreferrer" className="mt-2 block text-sm text-gray-700 dark:text-gray-300 hover:underline">
                @aabdrsyd
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-black/10 dark:border-white/10 bg-gray-50/60 dark:bg-black/40 backdrop-blur">
        © 2025 Mumtaz Abdul Rosyid — Designed with clarity and purpose.
      </footer>
    </>
  );
}
