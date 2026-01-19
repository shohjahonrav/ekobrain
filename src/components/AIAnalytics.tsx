import { Activity, Droplet, Trash2, Wind } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function AIAnalytics() {
  const [activeTab, setActiveTab] = useState(0);

  const analytics = [
    {
      id: 0,
      icon: Droplet,
      title: "Suv isrofi tahlili",
      color: "bg-blue-500",
      value: "30%",
      status: "Yuqori daraja",
      recommendations: [
        "Quvurlar tizimini tekshirish",
        "Sug'orish jadvalini optimallashtirish",
        "Suv hisoblagichlarini o'rnatish"
      ],
      chart: [
        { day: "Dush", value: 35 },
        { day: "Sesh", value: 40 },
        { day: "Chor", value: 30 },
        { day: "Pay", value: 25 },
        { day: "Jum", value: 28 },
        { day: "Shan", value: 32 },
        { day: "Yak", value: 30 }
      ]
    },
    {
      id: 1,
      icon: Trash2,
      title: "Chiqindilar tahlili",
      color: "bg-orange-500",
      value: "45 kg",
      status: "Kunlik miqdor",
      recommendations: [
        "Qayta ishlash dasturini boshlash",
        "Organik chiqindilarni ajratish",
        "Plastikdan foydalanishni kamaytirish"
      ],
      chart: [
        { day: "Dush", value: 42 },
        { day: "Sesh", value: 48 },
        { day: "Chor", value: 45 },
        { day: "Pay", value: 40 },
        { day: "Jum", value: 50 },
        { day: "Shan", value: 52 },
        { day: "Yak", value: 45 }
      ]
    },
    {
      id: 2,
      icon: Wind,
      title: "Havo sifati monitoring",
      color: "bg-purple-500",
      value: "AQI 85",
      status: "O'rtacha daraja",
      recommendations: [
        "Ko'kalamzorlarni ko'paytirish",
        "Transport emissiyasini kamaytirish",
        "Sanoat chiqindilarini nazorat qilish"
      ],
      chart: [
        { day: "Dush", value: 80 },
        { day: "Sesh", value: 90 },
        { day: "Chor", value: 85 },
        { day: "Pay", value: 75 },
        { day: "Jum", value: 82 },
        { day: "Shan", value: 88 },
        { day: "Yak", value: 85 }
      ]
    }
  ];

  const currentAnalytic = analytics[activeTab];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full mb-4 border border-emerald-500/30">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">Sun'iy intellekt tahlili</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI Monitoring Dashboardi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real vaqtda ekologik ko'rsatkichlarni kuzatish va tahlil qilish
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {analytics.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === index
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{item.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Dashboard Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Stats & Recommendations */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${currentAnalytic.color} rounded-2xl flex items-center justify-center`}>
                    <currentAnalytic.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentAnalytic.title}</h3>
                    <p className="text-gray-300">{currentAnalytic.status}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-5xl font-bold mb-2">{currentAnalytic.value}</div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className={`${currentAnalytic.color} h-3 rounded-full`}
                      style={{ width: '70%' }}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">AI Tavsifalari:</h4>
                  <ul className="space-y-3">
                    {currentAnalytic.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-200">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Chart */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Haftalik statistika</h4>
                <div className="flex items-end justify-between h-64 gap-2">
                  {currentAnalytic.chart.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${item.value}%` }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div className={`w-full ${currentAnalytic.color} rounded-t-lg relative group cursor-pointer`}>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-2 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {item.value}
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{item.day}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-emerald-300 text-lg">
              💡 <span className="font-semibold">Ma'lumot → Qaror → Yechim</span> — AI asosida real natijalar
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
