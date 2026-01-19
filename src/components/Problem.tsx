import { AlertTriangle, TrendingDown, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Problem() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Yosh ekologlar kam",
      description: "O'zbekistonda ekologiya bilan faol shug'ullanuvchi yoshlar soni juda kam"
    },
    {
      icon: Zap,
      title: "IT bilan bog'lanmagan",
      description: "Ekologiya zamonaviy texnologiyalar va sun'iy intellekt bilan integratsiya qilinmagan"
    },
    {
      icon: Users,
      title: "Tizim yo'q",
      description: "Yoshlarning g'oyalari investorlar va mutaxassislarga yetib bormaydi"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Muammo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nega bu loyiha kerak?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O'zbekistonda ekologik muammolar ko'p, ammo ularni hal qiluvchi tizim mavjud emas
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <problem.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-red-600 to-orange-600 p-8 md:p-12 rounded-2xl text-center text-white shadow-2xl"
          >
            <p className="text-2xl md:text-3xl font-bold mb-2">
              "Muammo tabiatda emas, tizim yo'qligida"
            </p>
            <p className="text-lg opacity-90">
              EcoBrain aynan shu bo'shliqni to'ldiradi
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
