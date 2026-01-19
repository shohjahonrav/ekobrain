import { Award, BookOpen, Lightbulb, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function YoungEcologists() {
  const students = [
    {
      name: "Aziza Karimova",
      school: "Toshkent 32-maktab",
      project: "Qishloq suvini tozalash tizimi",
      achievement: "Grant oldi",
      image: "https://images.unsplash.com/photo-1666280963024-5da21c9be270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY4NzQ4NDM5fDA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      name: "Javohir Aliyev",
      school: "Samarqand 15-maktab",
      project: "Plastik chiqindilardan energiya",
      achievement: "Startap yaratdi",
      image: "https://images.unsplash.com/photo-1666280963024-5da21c9be270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY4NzQ4NDM5fDA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      name: "Malika Nurmatova",
      school: "Buxoro 8-kollej",
      project: "Havo sifatini monitoring qilish",
      achievement: "Investor topdi",
      image: "https://images.unsplash.com/photo-1666280963024-5da21c9be270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY4NzQ4NDM5fDA&ixlib=rb-4.1.0&q=80&w=400"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Nazariya + Amaliyot",
      description: "Ilmiy bilim va real loyihalarda amaliy tajriba"
    },
    {
      icon: Lightbulb,
      title: "Ijodiy yechimlar",
      description: "O'z g'oyalarini hayotga tatbiq etish imkoniyati"
    },
    {
      icon: Target,
      title: "Real natijalar",
      description: "Ekologik muammolarni hal qilish va ta'sir ko'rsatish"
    },
    {
      icon: Award,
      title: "Mukofotlar",
      description: "Grant, investitsiya va professional rivojlanish"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20" />
      
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
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Bizning qahramon yoshlar</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Yosh Ekologlar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EcoBrain orqali ekologiya — zamonaviy kasb va kelajak imkoniyatiga aylandi
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-emerald-100"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Students Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {students.map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-emerald-100">
                    <ImageWithFallback
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {student.achievement}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {student.name}
                    </h3>
                    <p className="text-emerald-600 text-sm font-medium mb-3">
                      {student.school}
                    </p>
                    <div className="flex items-start gap-2 mb-4">
                      <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        {student.project}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>EcoBrain ishtirokchisi</span>
                        <Award className="w-4 h-4 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 p-8 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold text-white mb-3">
                Sen ham yosh ekolog bo'lmoqchimisan?
              </p>
              <button className="px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
                EcoBrain'ga qo'shil
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
