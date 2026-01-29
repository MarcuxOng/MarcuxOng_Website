"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Cpu, Github, Linkedin, Mail, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPortfolioData } from "@/lib/utils";

export default function Home() {
  const data = getPortfolioData();

  // Map icon strings to actual icon components
  const iconMap: Record<string, LucideIcon> = {
    Code2,
    Database,
    Cpu,
  };

  const skills = data.skills.map(skill => ({
    ...skill,
    icon: iconMap[skill.icon] || Code2
  }));

  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 sm:px-8 lg:px-12 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content - 7 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="label-mono"
              >
                Software Engineer — Available for Work
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl display-heading text-[#0A0A0A] leading-[1.1]">
                  {data.personal.name}
                </h1>
                <p className="text-xl md:text-2xl text-[#737373] font-light max-w-xl">
                  {data.personal.subtitle}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/projects">
                  <Button className="bg-[#0A0A0A] hover:bg-[#2563EB] text-white px-8 py-6 text-sm font-medium tracking-wide transition-all duration-200">
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border border-[#E5E5E5] text-[#0A0A0A] hover:border-[#0A0A0A] px-8 py-6 text-sm font-medium tracking-wide transition-all duration-200">
                    Contact Me
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <span className="label-mono">Find me on</span>
                <div className="flex items-center gap-2">
                  <a
                    href={data.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#E5E5E5] hover:border-[#0A0A0A] hover:bg-[#F5F5F5] transition-all duration-200"
                  >
                    <Github className="w-4 h-4 text-[#0A0A0A]" />
                  </a>
                  <a
                    href={data.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#E5E5E5] hover:border-[#0A0A0A] hover:bg-[#F5F5F5] transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A0A0A]" />
                  </a>
                  <a
                    href={`mailto:${data.personal.email}`}
                    className="p-3 border border-[#E5E5E5] hover:border-[#0A0A0A] hover:bg-[#F5F5F5] transition-all duration-200"
                  >
                    <Mail className="w-4 h-4 text-[#0A0A0A]" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Content - 5 columns - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="space-y-4">
                <div className="label-mono mb-6">Core Skills</div>
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                      className="p-6 border border-[#E5E5E5] hover:border-[#0A0A0A] transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Icon className="w-5 h-5 text-[#737373] group-hover:text-[#2563EB] transition-colors" />
                          <span className="text-[#0A0A0A] font-medium">{skill.label}</span>
                        </div>
                        <span className="text-xs text-[#737373] mono-text">{skill.level}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Currently Exploring Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="label-mono mb-4">Currently Learning</div>
            <h2 className="text-3xl md:text-4xl display-heading text-[#0A0A0A]">
              Exploring New Technologies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.exploring.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 border border-[#E5E5E5] hover:border-[#2563EB] transition-all duration-200 group"
              >
                <span className="label-mono text-[#2563EB]">0{index + 1}</span>
                <h3 className="text-xl font-medium text-[#0A0A0A] mt-4 group-hover:text-[#2563EB] transition-colors">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: data.stats.experience, label: "Years Experience" },
              { value: data.stats.projects, label: "Projects" },
              { value: data.stats.certifications, label: "Certifications" },
              { value: data.stats.commitment, label: "Commitment" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs text-[#737373] uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
