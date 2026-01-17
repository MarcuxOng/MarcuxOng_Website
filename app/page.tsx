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
    <div className="relative overflow-hidden bg-[#F5F3EF]">
      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(201, 160, 99, 0.08), transparent 60%)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 border border-[#9C8B7E]/30 bg-[#E8DED3]/50 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-[#9C8B7E]" />
                <span className="text-sm text-[#6B6B6B] font-medium tracking-wide">Available for Opportunities</span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light serif-display text-[#2D2D2D] leading-[1.1]">
                  Hi, I&apos;m{" "}
                  <span className="gradient-text font-medium">{data.personal.name}</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#6B6B6B] font-light serif-elegant">
                  {data.personal.title}
                </h2>
                <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-xl font-light">
                  {data.personal.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link href="/projects">
                  <Button className="bg-[#2D2D2D] hover:bg-[#1F1F1F] text-white px-10 py-7 text-base font-medium tracking-wide transition-all duration-500 luxury-shadow">
                    View My Work
                    <ArrowRight className="w-5 h-5 ml-3 bg-transparent" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-[#9C8B7E] text-[#2D2D2D] hover:bg-[#9C8B7E] hover:text-white px-10 py-7 text-base font-medium tracking-wide transition-all duration-500">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-5 pt-8">
                <a
                  href={data.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[#9C8B7E] hover:border-[#9C8B7E] bg-[#FFFFFF] hover:bg-[#E8DED3] transition-all duration-500 luxury-shadow"
                >
                  <Github className="w-5 h-5 text-[#6B6B6B]" />
                </a>
                <a
                  href={data.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[#9C8B7E] hover:border-[#9C8B7E] bg-[#FFFFFF] hover:bg-[#E8DED3] transition-all duration-500 luxury-shadow"
                >
                  <Linkedin className="w-5 h-5 text-[#6B6B6B]" />
                </a>
                <a
                  href={`mailto:${data.personal.email}`}
                  className="p-4 border border-[#9C8B7E] hover:border-[#9C8B7E] bg-[#FFFFFF] hover:bg-[#E8DED3] transition-all duration-500 luxury-shadow"
                >
                  <Mail className="w-5 h-5 text-[#6B6B6B]" />
                </a>
              </div>
            </motion.div>

            {/* Right Content - Skills Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:grid grid-cols-1 gap-8"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.8 }}
                    className="p-8 bg-[#FFFFFF] border border-[#9C8B7E] luxury-shadow group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="p-5 bg-[#E8DED3] border border-[#9C8B7E] group-hover:border-[#9C8B7E] transition-all duration-500">
                        <Icon className="w-8 h-8 text-[#9C8B7E]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-light serif-display text-[#2D2D2D]">{skill.label}</h3>
                        <p className="text-[#6B6B6B] text-sm mt-1.5 font-light">{skill.level}</p>
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
      <section className="relative py-32 px-6 sm:px-8 lg:px-12 border-t border-[#9C8B7E]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Telescope className="w-7 h-7 text-[#9C8B7E]" />
              <h2 className="text-4xl md:text-5xl font-light serif-display text-[#2D2D2D]">
                Currently <span className="gradient-text font-medium">Exploring</span>
              </h2>
            </div>
            <p className="text-[#6B6B6B] text-lg font-light">Expanding my skillset and staying ahead of the curve</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.exploring.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="p-12 bg-[#FFFFFF] border border-[#9C8B7E] text-center luxury-shadow group"
              >
                <h3 className="text-2xl font-light serif-display text-[#2D2D2D] group-hover:text-[#9C8B7E] transition-colors duration-500">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-12 bg-[#E8DED3]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { value: data.stats.experience, label: "Years Experience" },
              { value: data.stats.projects, label: "Projects Completed" },
              { value: data.stats.certifications, label: "Certifications" },
              { value: data.stats.commitment, label: "Commitment" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-light serif-display gradient-text mb-4">{stat.value}</div>
                <div className="text-[#6B6B6B] text-sm md:text-base uppercase tracking-widest font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
