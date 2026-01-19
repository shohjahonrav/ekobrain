import { BarChart3, Briefcase, DollarSign, Globe, LineChart, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Investors() {
  const benefits = [
    {
      icon: Globe,
      title: "Ijtimoiy foydali",
      description: "Ekologiya va jamiyat rivojiga hissa qo'shish"
    },
    {
      icon: LineChart,
      title: "Uzoq muddatli",
      description: "Barqaror o'sish va rivojlanish modeli"
    },
    {
      icon: BarChart3,
      title: "Texnologik",
      description: "Sun'iy intellekt va zamonaviy IT yechimlar"
    },
    {
      icon: Users,
      title: "Keng auditoriya",
      description: "Respublika miqyosida minglab foydalanuvchilar"
    }
  ];

  const investmentAreas = [
    {
      title: "Platforma rivojlantirish",
      amount: "40%",
      color: "bg-emerald-500"
    },
    {
      title: "AI texnologiyalari",
      amount: "30%",
      color: "bg-blue-500"
    },
    {
      title: "Marketing va kengayish",
      amount: "20%",
      color: "bg-purple-500"
    },
    {
      title: "Yoshlar uchun grantlar",
      amount: "10%",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      
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
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-medium">Investorlar uchun</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bu xarajat emas — kelajakka investitsiya
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EcoBrain loyihasi investorlar uchun juda jozibali imkoniyat
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Investment Allocation */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left: Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Investitsiya taqsimoti</h3>
              </div>
              <div className="space-y-4">
                {investmentAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">{area.title}</span>
                      <span className="font-bold">{area.amount}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: area.amount }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`${area.color} h-2 rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: ROI Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Barqaror o'sish</h4>
                    <p className="text-sm text-gray-600">Yillik 30-40% o'sish</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Ekologiya + IT sohasi tez rivojlanayotgan va davlat tomonidan qo'llab-quvvatlanadigan yo'nalish
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Keng bozor</h4>
                    <p className="text-sm text-gray-600">50,000+ potentsial foydalanuvchi</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Respublika bo'ylab barcha maktab va kollejlar bizning maqsadli auditoriyamiz
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ijtimoiy ta'sir</h4>
                    <p className="text-sm text-gray-600">ESG investitsiyasi</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Daromad bilan birga ekologiya va jamiyatga ijobiy ta'sir ko'rsatish
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-2xl text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">
              Kelajak loyihasiga hamkor bo'ling
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              EcoBrain — bu daromad, ta'sir va O'zbekiston ekologiyasining yashil kelajagi
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Investitsiya qilish
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
