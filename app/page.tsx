"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Cpu, Sparkles, Github, Linkedin, Mail, Telescope, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPortfolioData } from "@/lib/utils";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const data = getPortfolioData();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Map icon strings to actual icon components
  const iconMap: Record<string, LucideIcon> = {
    Code2,
    Database,
    Cpu,
  };

  const skills = data.skills.map(skill => ({
    ...skill,
    icon: iconMap[skill.icon] || Code2 // Fallback to Code2 icon if not found
  }));

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-slate-300">Available for Opportunities</span>
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="gradient-text">{data.personal.name}</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
                  {data.personal.title}
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                  {data.personal.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl glow-effect">
                    View My Work
                    <ArrowRight className="w-5 h-5 ml-2 bg-transparent" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a
                  href={data.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-slate-300" />
                </a>
                <a
                  href={data.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-slate-300" />
                </a>
                <a
                  href={`mailto:${data.personal.email}`}
                  className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-slate-300" />
                </a>
              </div>
            </motion.div>

            {/* Right Content - Skills Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:grid grid-cols-1 gap-6"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{skill.label}</h3>
                        <p className="text-slate-400 text-sm mt-1">Expertise Level: {skill.level}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Currently Exploring Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Telescope className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Currently <span className="gradient-text">Exploring</span>
              </h2>
            </div>
            <p className="text-slate-400 text-lg">Expanding my skillset and staying ahead of the curve</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.exploring.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${tech.color} text-center hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: data.stats.experience, label: "Years Experience" },
              { value: data.stats.projects, label: "Projects Completed" },
              { value: data.stats.certifications, label: "Certifications" },
              { value: data.stats.commitment, label: "Commitment" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
