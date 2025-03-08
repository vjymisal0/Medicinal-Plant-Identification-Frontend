"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Spotlight } from "@/components/ui/spotlight";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";
import { Leaf, Upload, Search, BookOpen, BarChart2, Brain, Database, Award } from "lucide-react";
import { useState } from "react";
import { UploadDialog } from "@/components/ui/upload-dialog";

const products = [
  {
    title: "Aloe Vera",
    link: "/plants/aloe-vera",
    thumbnail: "./AloeVera.png",
  },
  {
    title: "Tulsi (Holy Basil)",
    link: "/plants/tulsi",
    thumbnail: "./Tulsi.png",
  },
  {
    title: "Hibiscus",
    link: "/plants/hibiscus",
    thumbnail: "./Hibiscus.png",
  },
  {
    title: "Neem",
    link: "/plants/neem",
    thumbnail: "./Neem.png",
  },
  {
    title: "Turmeric",
    link: "/plants/turmeric",
    thumbnail: "./Turmeric.png",
  },
  {
    title: "Mint",
    link: "/plants/mint",
    thumbnail: "./mint.jpg",
  },
  {
    title: "Lavender",
    link: "/plants/lavender",
    thumbnail: "./Lavender.png",
  },
  {
    title: "Chamomile",
    link: "/plants/chamomile",
    thumbnail: "./Chamomile.png",
  },
  {
    title: "Rosemary",
    link: "/plants/rosemary",
    thumbnail: "./Rosemary.png",
  },
  {
    title: "Eucalyptus",
    link: "/plants/eucalyptus",
    thumbnail: "./Eucalyptus.png",
  },
  {
    title: "Sage",
    link: "/plants/sage",
    thumbnail: "./sage.png",
  },
  {
    title: "Thyme",
    link: "/plants/thyme",
    thumbnail: "./thyme.png",
  },
  {
    title: "Rose",
    link: "/plants/rose",
    thumbnail: "./rose.png",
  },
  {
    title: "Mint",
    link: "/plants/mint",
    thumbnail: "./mint.png",
  },
];

const features = [
  {
    icon: <Upload className="h-6 w-6" />,
    title: "Easy Upload",
    description: "Simply upload a photo of any plant you want to identify.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "AI Recognition",
    description: "Our advanced AI instantly identifies the plant species.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Medicinal Info",
    description: "Get detailed information about the plant's healing properties.",
  },
];

const modelMetrics = [
  {
    icon: <BarChart2 className="h-12 w-12 text-green-500" />,
    title: "Accuracy",
    value: "93.75%",
    description: "Overall model accuracy on test dataset",
  },
  {
    icon: <Brain className="h-12 w-12 text-green-500" />,
    title: "Training Data",
    value: "50,000+",
    description: "High-quality plant images used for training",
  },
  {
    icon: <Database className="h-12 w-12 text-green-500" />,
    title: "Plant Species",
    value: "1,000+",
    description: "Medicinal plants in our database",
  },
  {
    icon: <Award className="h-12 w-12 text-green-500" />,
    title: "Validation",
    value: "95%",
    description: "Precision on validation dataset",
  },
];

export default function Home() {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section id="hero" className="h-screen">
          <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Medicinal Plant <br /> Identification
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                  Discover the healing power of nature with our AI-powered plant identification system.
                  Upload any plant image and instantly learn about its medicinal properties.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                  <motion.button
                    onClick={() => setUploadDialogOpen(true)}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                  <motion.a
                    href="#features"
                    className="bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Key Features
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-neutral-800/50 p-6 rounded-xl hover:bg-neutral-800/70 transition-colors"
                  >
                    <div className="text-green-500 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-neutral-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="plants">
          <HeroParallax products={products} />
        </section>

        <section id="about" className="bg-neutral-950 text-white">
          <TracingBeam className="px-6 py-32">
            <div className="max-w-6xl mx-auto antialiased">
              <div className="mb-20">
                <motion.h2
                  className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  About Our Technology
                </motion.h2>
                <motion.p
                  className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Connecting Nature&apos;s Wisdom with Modern Technology
                </motion.p>
                <motion.div
                  className="prose prose-lg prose-invert"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xl text-neutral-300">
                    Our advanced AI system combines deep learning with traditional knowledge
                    to help you identify medicinal plants and understand their healing properties.
                    With state-of-the-art CNN architecture and extensive training data, we provide
                    reliable information about natural remedies that have been used for generations.
                  </p>
                </motion.div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {modelMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-black/50 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors"
                    >
                      <div className="mb-4">{metric.icon}</div>
                      <h3 className="text-2xl font-bold text-green-400 mb-2">{metric.value}</h3>
                      <h4 className="text-lg font-semibold text-white mb-2">{metric.title}</h4>
                      <p className="text-neutral-400">{metric.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-20">
                  <h3 className="text-2xl font-bold mb-6">Model Architecture</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                      className="bg-black/30 p-6 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-lg font-semibold mb-4">Training Process</h4>
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
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-lg font-semibold mb-4">Validation Methods</h4>
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
                  </div>
                </div>
              </div>
            </div>
          </TracingBeam>
        </section>

        <section id="contact" className="py-20 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                className="text-neutral-400 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Have questions about our plant identification system? We&apos;re here to help you
                discover the healing potential of medicinal plants.
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
          </div>
        </section>

        <Footer />

        <UploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} />
      </main>
    </>
  );
}