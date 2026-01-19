import { Brain, Rocket, Search, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Solution() {
  const stages = [
    {
      number: "01",
      icon: Search,
      title: "Yosh ekologlarni aniqlash",
      points: [
        "Maktab va kollej o'quvchilari",
        "Qiziqarli ekologik testlar",
        "Eng faol yoshlar tanlab olinadi"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: Brain,
      title: "AI yordamida o'rganish",
      points: [
        "Sun'iy intellekt suv isrofini hisoblaydi",
        "Chiqindilarni tahlil qiladi",
        "Havo ifloslanishini baholaydi"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Investorga chiqish",
      points: [
        "Eng zo'r loyihalar tanlanadi",
        "Grant va homiylik olish",
        "Startap sifatida rivojlanish"
      ],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
      
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
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Yechim</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              EcoBrain qanday ishlaydi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 bosqichli tizim orqali yosh ekologlardan professional mutaxassislargacha
            </p>
          </motion.div>

          {/* Stages */}
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 md:p-10 border border-gray-100">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                      {stage.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <stage.icon className="w-8 h-8 text-gray-700" />
                        <h3 className="text-2xl font-bold text-gray-900">
                          {stage.title}
                        </h3>
                      </div>

                      <ul className="space-y-3">
                        {stage.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                            <span className="text-gray-700 text-lg">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Icon decoration */}
                    <div className={`hidden md:block w-16 h-16 rounded-xl bg-gradient-to-br ${stage.color} opacity-10`} />
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < stages.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold text-white mb-2">
                "EcoBrain — bu ekologiya uchun kadrlar fabrikasi"
              </p>
              <p className="text-emerald-100">
                Real muammolarga real yechimlar
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
