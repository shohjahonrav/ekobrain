import { Building2, CheckCircle2, GraduationCap, MapPin, Rocket, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Impact() {
  const requirements = [
    {
      icon: MapPin,
      title: "Respublika miqyosida rivojlanish",
      description: "Har bir maktabda EcoBrain klub",
      status: "100%"
    },
    {
      icon: GraduationCap,
      title: "Yosh ekologlar sonini oshirish",
      description: "Ekologiya = zamonaviy kasb",
      status: "100%"
    },
    {
      icon: TrendingUp,
      title: "Investitsiya jalb qilish",
      description: "IT + ekologiya = investor uchun jozibali",
      status: "100%"
    },
    {
      icon: Rocket,
      title: "Ekologik salohiyat",
      description: "Ilmiy va amaliy loyiha",
      status: "100%"
    }
  ];

  const stats = [
    { number: "14", label: "Viloyat", suffix: "+" },
    { number: "1000", label: "Maktab", suffix: "+" },
    { number: "50000", label: "O'quvchi", suffix: "+" },
    { number: "500", label: "Loyiha", suffix: "+" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-4 border border-white/30">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">Shartlarga mosligi</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Respublika miqyosida ta'sir
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              EcoBrain Uzbekistan barcha talablarga javob beradi
            </p>
          </motion.div>

          {/* Requirements Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <req.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold">{req.title}</h3>
                      <div className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold">
                        ✓ {req.status}
                      </div>
                    </div>
                    <p className="text-emerald-100">{req.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              EcoBrain kelajak ko'rinishi
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}<span className="text-emerald-200">{stat.suffix}</span>
                  </div>
                  <div className="text-emerald-100 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building2 className="w-12 h-12" />
              <h3 className="text-3xl font-bold">O'zbekiston yashil davlatga aylanadi</h3>
            </div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Har bir maktabda EcoBrain klublar ishga tushsa, minglab yosh ekologlar yetishadi 
              va ekologik startaplar paydo bo'ladi
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
