import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Trophy, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Landing = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#2a1052] text-white">
      {/* Background patterns - fixed to viewport */}
      <div className="fixed inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1052,#3b1a63,#2a1052)] opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4b2a75]/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.05
        }}></div>
        <div className="absolute inset-0 bg-noise opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen w-full flex items-center pt-24">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/10">
                    <Sparkles className="w-4 h-4 mr-2" />
                    The Future of Academic Collaboration
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-6xl font-bold mb-6 leading-tight"
                >
                  Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0f0f0] via-[#fff] to-[#f0f0f0]">Learning</span> Experience
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl text-white/90 mb-8"
                >
                  Join a vibrant community of students, find study partners, and achieve academic excellence together through our innovative platform.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex gap-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="h-12 px-8 bg-gradient-to-r from-white via-white to-white/90 text-[#2a1052] hover:from-white/90 hover:via-white/90 hover:to-white/80 transition-all duration-300"
                  >
                    <Link to="/auth?mode=signup">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 border-white/20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    <Link to="/auth?mode=login">
                      Sign In
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl backdrop-blur-[2px]"></div>
                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-all duration-300">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                          <p className="text-white/80 text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-32 bg-[#1f0b3f]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#4b2a75]/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.05
          }}></div>
          
          <div className="w-full max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/10">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Join the Revolution
                </span>
              </motion.div>
              <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
              <p className="text-xl text-white/90 mb-12">
                Join thousands of students who are already connecting and succeeding together. Start your journey today.
              </p>
              <Button
                asChild
                size="lg"
                className="h-14 px-10 text-lg bg-gradient-to-r from-white via-white to-white/90 text-[#2a1052] hover:from-white/90 hover:via-white/90 hover:to-white/80 transition-all duration-300"
              >
                <Link to="/auth?mode=signup">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const features = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Find Study Partners",
    description: "Connect with students who share your academic interests and goals."
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Schedule Sessions",
    description: "Easily plan and organize study sessions with your peers."
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Achieve Success",
    description: "Collaborate effectively and reach your academic goals together."
  }
];

export default Landing; 