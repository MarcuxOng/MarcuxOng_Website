"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Code2, Database, Cpu, GitBranch, Heart, Telescope, Sparkles, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPortfolioData } from "@/lib/utils";

export default function About() {
  const data = getPortfolioData();
  
  // Map icon strings to actual icon components
  const iconMap: Record<string, LucideIcon> = {
    GitBranch,
    Database,
    Code,
    Code2,
    Cpu,
    Heart,
    Telescope,
    Sparkles,
  };

  const languages = data.languages;
  const frameworks = data.frameworks;
  const tools = data.tools.map(tool => ({
    ...tool,
    icon: iconMap[tool.icon] || Code
  }));
  const interests = data.interests.map(interest => ({
    ...interest,
    icon: iconMap[interest.icon] || Heart
  }));

  return (
    <div className="min-h-screen py-24 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="label-mono mb-4">01  About</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl display-heading text-[#0A0A0A] mb-6">
            About Me
          </h1>
          <p className="text-xl text-[#737373] max-w-2xl">
            Aspiring Software Engineer passionate about building applications, solving problems, and constantly learning
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="border-[#0A0A0A]">
            <CardHeader>
              <h2 className="text-2xl font-semibold text-[#0A0A0A]">My Story</h2>
            </CardHeader>
            <CardContent className="space-y-4 text-[#737373] leading-relaxed">
              {data.personal.bio.map((paragraph, index) => (
                <p key={index} className="text-lg">{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* What I am About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="label-mono mb-4">Interests</div>
          <h2 className="text-3xl display-heading text-[#0A0A0A] mb-8">What I&apos;m About</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="hover:border-[#2563EB] h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F5F5F5] border border-[#E5E5E5]">
                          <Icon className="w-5 h-5 text-[#2563EB]" />
                        </div>
                        <div>
                          <div className="label-mono mb-1">{interest.label}</div>
                          <div className="text-[#0A0A0A] font-medium">{interest.value}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="label-mono mb-4">Technical Skills</div>
          <h2 className="text-3xl display-heading text-[#0A0A0A] mb-8">Programming Languages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="hover:border-[#0A0A0A]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.badge}</span>
                        <span className="text-[#0A0A0A] font-medium text-lg">{lang.name}</span>
                      </div>
                      <span className="text-[#2563EB] text-sm font-medium mono-text">{lang.level}%</span>
                    </div>
                    <div className="h-1 bg-[#F5F5F5] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-[#0A0A0A]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks & Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="label-mono mb-4">Frameworks</div>
          <h2 className="text-3xl display-heading text-[#0A0A0A] mb-8">Frameworks & Libraries</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Card className="hover:border-[#2563EB] group">
                  <CardContent className="p-6">
                    <h3 className="text-[#0A0A0A] font-medium text-lg mb-2 group-hover:text-[#2563EB] transition-colors">{framework.name}</h3>
                    <Badge variant="secondary">{framework.category}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-mono mb-4">Tools</div>
          <h2 className="text-3xl display-heading text-[#0A0A0A] mb-8">Development Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <Card className="hover:border-[#0A0A0A] group">
                    <CardContent className="p-6 flex items-center gap-4">
                      <Icon className="w-5 h-5 text-[#737373] group-hover:text-[#2563EB] transition-colors" />
                      <span className="text-[#0A0A0A] font-medium">{tool.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
