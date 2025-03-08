'use client';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { Spotlight } from '@/components/ui/spotlight';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import {
  Leaf,
  Upload,
  Search,
  BookOpen,
  BarChart2,
  Brain,
  Database,
  Award,
  Camera,
  Scan,
  BookOpenCheck,
} from 'lucide-react';
import { useState, useRef } from 'react';
import { UploadDialog } from '@/components/ui/upload-dialog';

const products = [
  {
    title: 'Aloe Vera',
    description: 'Known for its healing properties and skin benefits.',
    thumbnail:
      'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=3540&auto=format&fit=crop',
  },
  {
    title: 'Tulsi (Holy Basil)',
    description: 'Sacred plant with numerous medicinal properties.',
    thumbnail:
      'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=3540&auto=format&fit=crop',
  },
  {
    title: 'Turmeric',
    description: 'Powerful anti-inflammatory and antioxidant properties.',
    thumbnail:
      'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=3540&auto=format&fit=crop',
  },
  {
    title: 'Neem',
    description: 'Natural antibacterial and medicinal properties.',
    thumbnail:
      'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=3540&auto=format&fit=crop',
  },
  {
    title: 'Ginger',
    description: 'Natural remedy for digestive issues and inflammation.',
    thumbnail:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=3540&auto=format&fit=crop',
  },
];

const features = [
  {
    icon: <Upload className="h-6 w-6" />,
    title: 'Easy Upload',
    description: 'Simply upload a photo of any plant you want to identify.',
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: 'AI Recognition',
    description: 'Our advanced AI instantly identifies the plant species.',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Medicinal Info',
    description: "Get detailed information about the plant's healing properties.",
  },
];

const modelMetrics = [
  {
    icon: <BarChart2 className="h-12 w-12 text-green-500" />,
    title: 'Accuracy',
    value: '93.75%',
    description: 'Overall model accuracy on test dataset',
  },
  {
    icon: <Brain className="h-12 w-12 text-green-500" />,
    title: 'Training Data',
    value: '50,000+',
    description: 'High-quality plant images used for training',
  },
  {
    icon: <Database className="h-12 w-12 text-green-500" />,
    title: 'Plant Species',
    value: '1,000+',
    description: 'Medicinal plants in our database',
  },
  {
    icon: <Award className="h-12 w-12 text-green-500" />,
    title: 'Validation',
    value: '95%',
    description: 'Precision on validation dataset',
  },
];

const howToUseSteps = [
  {
    icon: <Camera className="h-12 w-12" />,
    title: 'Take a Photo',
    description: 'Capture a clear image of the plant you want to identify',
  },
  {
    icon: <Upload className="h-12 w-12" />,
    title: 'Upload Image',
    description: 'Upload the photo to our AI-powered system',
  },
  {
    icon: <Scan className="h-12 w-12" />,
    title: 'Get Results',
    description: 'Receive instant identification results',
  },
  {
    icon: <BookOpenCheck className="h-12 w-12" />,
    title: 'Learn More',
    description: 'Explore detailed medicinal properties and uses',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <AnimatePresence>
          <section id="hero" className="h-screen">
            <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
              <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Medicinal Plant <br /> Identification
                  </h1>
                  <div className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    <TextGenerateEffect words="Discover the healing power of nature with our AI-powered plant identification system. Upload any plant image and instantly learn about its medicinal properties." />
                  </div>
                  <motion.div
                    className="mt-8 flex justify-center space-x-4"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.button
                      onClick={() => setUploadDialogOpen(true)}
                      className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={fadeInUp}
                    >
                      Get Started
                    </motion.button>
                    <motion.a
                      href="#features"
                      className="bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={fadeInUp}
                    >
                      Learn More
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="features" className="py-20 bg-neutral-900" ref={containerRef}>
            <motion.div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              style={{ opacity, scale }}
            >
              <div className="text-center">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white mb-12"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  Key Features
                </motion.h2>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      variants={fadeInUp}
                      className="bg-neutral-800/50 p-6 rounded-xl hover:bg-neutral-800/70 transition-colors transform-gpu"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-green-500 mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-400">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </section>

          <section id="plants" className="bg-black py-20">
            <div className="max-w-7xl mx-auto px-4">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                Discover Medicinal Plants
              </motion.h2>
              <StickyScroll content={products} />
            </div>
          </section>

          <section id="about" className="bg-neutral-950 text-white">
            <TracingBeam className="px-6 py-32">
              <motion.div
                className="max-w-6xl mx-auto antialiased"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="mb-20">
                  <motion.h2
                    className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    About Our Technology
                  </motion.h2>
                  <motion.p
                    className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    Connecting Nature&apos;s Wisdom with Modern Technology
                  </motion.p>
                  <motion.div
                    className="prose prose-lg prose-invert"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <TextGenerateEffect words="
                      Our advanced AI system combines deep learning with traditional
                      knowledge to help you identify medicinal plants and understand
                      their healing properties. With state-of-the-art CNN
                      architecture and extensive training data, we provide reliable
                      information about natural remedies that have been used for
                      generations"/>

                  </motion.div>

                  <motion.div
                    className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {modelMetrics.map((metric, index) => (
                      <motion.div
                        key={metric.title}
                        variants={fadeInUp}
                        className="bg-black/50 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors transform-gpu"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className="mb-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {metric.icon}
                        </motion.div>
                        <h3 className="text-2xl font-bold text-green-400 mb-2">
                          {metric.value}
                        </h3>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {metric.title}
                        </h4>
                        <p className="text-neutral-400">{metric.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="mt-20">
                    <h3 className="text-2xl font-bold mb-6">Model Architecture</h3>
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-12"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="bg-black/30 p-6 rounded-xl"
                        variants={fadeInUp}
                      >
                        <h4 className="text-lg font-semibold mb-4">
                          Training Process
                        </h4>
                        <ul className="space-y-3 text-neutral-300">
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Data collection from verified sources</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Image preprocessing and augmentation</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Transfer learning with ResNet50</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Fine-tuning on medicinal plant dataset</span>
                          </li>
                        </ul>
                      </motion.div>
                      <motion.div
                        className="bg-black/30 p-6 rounded-xl"
                        variants={fadeInUp}
                      >
                        <h4 className="text-lg font-semibold mb-4">
                          Validation Methods
                        </h4>
                        <ul className="space-y-3 text-neutral-300">
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Cross-validation with 5 folds</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Real-world testing with botanists</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Continuous model improvement</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Expert verification of results</span>
                          </li>
                        </ul>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </TracingBeam>
          </section>

          <section id="how-to-use" className="bg-neutral-950">
            {/* <BackgroundBeamsWithCollision> */}
            <motion.div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-green-600"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  How to Use
                </motion.h2>
                <motion.p
                  className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  Get started with our plant identification system in just a few
                  simple steps
                </motion.p>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {howToUseSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      variants={fadeInUp}
                      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl transform-gpu"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-green-400 mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/60">{step.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
            {/* </BackgroundBeamsWithCollision> */}
          </section>

          <section id="contact" className="py-20 bg-neutral-900">
            <motion.div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white mb-8"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  Get in Touch
                </motion.h2>
                <motion.p
                  className="text-neutral-400 mb-12 max-w-2xl mx-auto"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  Have questions about our plant identification system? We&apos;re
                  here to help you discover the healing potential of medicinal
                  plants.
                </motion.p>
                <motion.a
                  href="mailto:contact@mediplant.com"
                  className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </section>
        </AnimatePresence>

        <Footer />

        <UploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} />
      </main>
    </>
  );
}