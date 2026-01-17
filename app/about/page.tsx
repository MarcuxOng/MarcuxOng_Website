"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Code2, Database, Cpu, GitBranch, Sparkles, Heart, Telescope, LucideIcon } from "lucide-react";
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
    icon: iconMap[tool.icon] || Code // Fallback to Code icon if not found
  }));
  const interests = data.interests.map(interest => ({
    ...interest,
    icon: iconMap[interest.icon] || Heart // Fallback to Heart icon if not found
  }));

  return (
    <div className="min-h-screen py-32 px-6 sm:px-8 lg:px-12 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-light serif-display text-[#2D2D2D] mb-6">
            About <span className="gradient-text font-medium">Me</span>
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto font-light">
            Aspiring Software Engineer passionate about building applications, solving problems, and constantly learning
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mb-24">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-[#FFFFFF] border-2 border-[#9C8B7E] luxury-shadow">
              <CardHeader>
                <h2 className="text-3xl font-light serif-display text-[#2D2D2D]">My Story</h2>
              </CardHeader>
              <CardContent className="space-y-6 text-[#6B6B6B] leading-loose">
                {data.personal.bio.map((paragraph, index) => (
                  <p key={index} className="font-light text-lg">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* What I'm Up To */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-light serif-display text-[#2D2D2D] mb-12 flex items-center gap-4">
            <Sparkles className="w-8 h-8 text-[#9C8B7E]" />
            What I&apos;m About
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                >
                  <Card className="bg-[#FFFFFF] border-2 border-[#9C8B7E] luxury-shadow group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-5">
                        <div className="p-4 bg-[#E8DED3] border border-[#9C8B7E] group-hover:border-[#9C8B7E] transition-all duration-500">
                          <Icon className="w-6 h-6 text-[#9C8B7E]" />
                        </div>
                        <div>
                          <div className="text-[#6B6B6B] text-sm mb-1.5 uppercase tracking-wide">{interest.label}</div>
                          <div className="text-[#2D2D2D] font-light text-lg">{interest.value}</div>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-light serif-display text-[#2D2D2D] mb-12 flex items-center gap-4">
            <Code className="w-8 h-8 text-[#9C8B7E]" />
            Programming Languages
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
              >
                <Card className="bg-[#FFFFFF] border-2 border-[#9C8B7E] luxury-shadow">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{lang.badge}</span>
                        <span className="text-[#2D2D2D] font-light text-xl">{lang.name}</span>
                      </div>
                      <span className="text-[#9C8B7E] text-sm font-medium">{lang.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[#E8DED3] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-[#9C8B7E]"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-light serif-display text-[#2D2D2D] mb-12 flex items-center gap-4">
            <Cpu className="w-8 h-8 text-[#9C8B7E]" />
            Frameworks & Libraries
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className="bg-[#FFFFFF] border-2 border-[#9C8B7E] luxury-shadow group overflow-hidden relative">
                  <CardContent className="p-8 relative">
                    <div>
                      <h3 className="text-[#2D2D2D] font-light text-2xl mb-2 serif-display">{framework.name}</h3>
                      <Badge variant="secondary" className="bg-[#E8DED3] text-[#6B6B6B] text-xs border-0 px-3 py-1">
                        {framework.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-light serif-display text-[#2D2D2D] mb-12 flex items-center gap-4">
            <GitBranch className="w-8 h-8 text-[#9C8B7E]" />
            Tools & Platforms
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <Card className="bg-[#FFFFFF] border-2 border-[#9C8B7E] luxury-shadow group">
                    <CardContent className="p-8 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="p-5 bg-[#E8DED3] border border-[#9C8B7E] group-hover:border-[#9C8B7E] transition-all duration-500">
                          <Icon className="w-6 h-6 text-[#9C8B7E]" />
                        </div>
                        <h3 className="text-[#2D2D2D] font-light text-lg">{tool.name}</h3>
                      </div>
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