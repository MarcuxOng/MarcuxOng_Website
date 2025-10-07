"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Code, Database, Cpu, GitBranch, Sparkles, Heart, Telescope, LucideIcon } from "lucide-react";
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
    Cpu,
    Heart,
    Telescope,
    Sparkles,
  };

  const languages = data.languages;
  const frameworks = data.frameworks;
  const tools = data.tools.map(tool => ({
    ...tool,
    icon: iconMap[tool.icon]
  }));
  const interests = data.interests.map(interest => ({
    ...interest,
    icon: iconMap[interest.icon]
  }));

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Aspiring Software Engineer passionate about building applications, solving problems, and constantly learning
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
              <CardHeader>
                <h2 className="text-2xl font-bold text-white">My Story</h2>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                {data.personal.bio.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Education</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{data.education.institution}</h3>
                  <p className="text-slate-400 text-sm">{data.education.location}</p>
                  <p className="text-slate-300 mt-2">{data.education.degree}</p>
                  <p className="text-slate-500 text-sm mt-1">{data.education.period}</p>
                </div>
                {data.education.achievements.length > 0 && (
                  <div className="pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-white">Achievements</span>
                    </div>
                    {data.education.achievements.map((achievement, index) => (
                      <p key={index} className="text-slate-300 text-sm">{achievement}</p>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* What I'm Up To */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            What I&apos;m About
          </h2>
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
                  <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm mb-1">{interest.label}</div>
                          <div className="text-white font-medium">{interest.value}</div>
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
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Code className="w-8 h-8 text-blue-500" />
            Programming Languages
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{lang.badge}</span>
                        <span className="text-white font-medium">{lang.name}</span>
                      </div>
                      <span className="text-slate-400 text-sm">{lang.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
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
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Cpu className="w-8 h-8 text-purple-500" />
            Frameworks & Libraries
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 group overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${framework.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16`} />
                  <CardContent className="p-6 relative">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{framework.name}</h3>
                      <Badge variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GitBranch className="w-8 h-8 text-orange-500" />
            Tools & Platforms
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold">{tool.name}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* GitHub Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">GitHub Statistics</h2>
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardContent className="p-8 flex justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=marcuxong&show_icons=true&locale=en&theme=radical&hide_border=true&bg_color=0d1117"
                alt="Marcux's GitHub Stats"
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </div>
  );
}