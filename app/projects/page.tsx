"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPortfolioData } from "@/lib/utils";

export default function Projects() {
  const data = getPortfolioData();
  const projects = data.projects;

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
            Featured <span className="gradient-text font-medium">Projects</span>
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto font-light">
            Showcasing my technical skills through real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="bg-[#FFFFFF] border-2 border-[#9C8B7E] luxury-shadow h-full group">
                <CardHeader className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-5xl p-6 bg-[#E8DED3] border border-[#9C8B7E] group-hover:border-[#9C8B7E] transition-all duration-500">
                      {project.icon}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-2 border-[#9C8B7E] text-[#9C8B7E] hover:bg-[#9C8B7E] hover:text-[#2D2D2D] transition-all duration-500 h-10 px-5"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </a>
                  </div>
                  <h2 className="text-3xl font-light serif-display text-[#2D2D2D] group-hover:text-[#9C8B7E] transition-colors duration-500">
                    {project.title}
                  </h2>
                  <p className="text-[#6B6B6B] leading-relaxed font-light">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Key Features */}
                  <div>
                    <h3 className="text-[#2D2D2D] font-medium mb-4 flex items-center gap-2 uppercase tracking-wide text-sm">
                      <Sparkles className="w-4 h-4 text-[#9C8B7E]" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-[#6B6B6B] text-sm leading-relaxed flex gap-3 font-light">
                          <span className="text-[#9C8B7E] mt-1">—</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-[#2D2D2D] font-medium mb-4 uppercase tracking-wide text-sm">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-[#9C8B7E] bg-[#E8DED3] text-[#6B6B6B] hover:border-[#9C8B7E] hover:bg-[#9C8B7E] hover:text-[#2D2D2D] transition-all duration-500 px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-[#F9F6F2] border-2 border-[#E8DED3] luxury-shadow">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-[#9C8B7E]/10 border-2 border-[#9C8B7E]">
                  <Github className="w-12 h-12 text-[#9C8B7E]" />
                </div>
              </div>
              <h3 className="text-3xl font-light serif-display text-[#2D2D2D] mb-4">More Projects on GitHub</h3>
              <p className="text-[#6B6B6B] mb-8 max-w-2xl mx-auto font-light">
                Check out my GitHub profile for more projects, open-source contributions, and code samples.
              </p>
              <a
                href="https://github.com/MarcuxOng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#2D2D2D] hover:bg-[#1F1F1F] text-white px-8 py-6 text-lg font-medium transition-all duration-500 luxury-shadow">
                  Visit My GitHub
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}