"use client";

import { Github, Twitter, Linkedin, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-black/[0.96] text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Medicinal Plant AI</h3>
                        <p className="text-sm text-gray-400">
                            Empowering healthcare through AI-driven plant identification and natural remedies.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#features" className="hover:text-green-400 transition-colors">Features</a></li>
                            <li><a href="#plants" className="hover:text-green-400 transition-colors">Plants</a></li>
                            <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
                            <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-green-400 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <motion.a
                                href="#"
                                whileHover={{ y: -2 }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Github className="h-5 w-5" />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ y: -2 }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ y: -2 }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Medicinal Plant AI. All rights reserved.
                        </p>
                        <div className="flex items-center mt-4 md:mt-0">
                            <span className="text-sm text-gray-400 flex items-center">
                                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Plant AI Team
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}