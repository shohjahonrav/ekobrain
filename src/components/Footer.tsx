import { Brain, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">EcoBrain</h3>
                  <p className="text-emerald-300 text-sm">Uzbekistan</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Sun'iy intellekt asosida yosh ekologlarni yetishtirish milliy platformasi. 
                Ekologiyani fan sifatida emas, kelajak kasbiga aylantiramiz.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-4">Tezkor havolalar</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Loyiha haqida</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Qanday ishlaydi</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Yosh ekologlar</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Investorlar</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Aloqa</a></li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-4">Aloqa</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Toshkent sh., O'zbekiston</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">+998 90 123 45 67</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">info@ecobrain.uz</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-white/10 pt-8 mb-8"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10">
              <p className="text-xl md:text-2xl font-bold mb-2 text-emerald-300">
                "Biz ekologiya haqida gapirmadik. Biz O'zbekistonning yashil kelajagini qanday qurishni ko'rsatdik."
              </p>
              <p className="text-gray-400">
                EcoBrain Uzbekistan — bu tabiatni saqlaydigan emas, kelajakni yaratadigan loyiha
              </p>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 EcoBrain Uzbekistan. Barcha huquqlar himoyalangan.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Maxfiylik siyosati</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Foydalanish shartlari</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
