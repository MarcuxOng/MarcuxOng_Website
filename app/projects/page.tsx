"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPortfolioData } from "@/lib/utils";

export default function Projects() {
  const data = getPortfolioData();
  const projects = data.projects;

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
          <div className="label-mono mb-4">02 - Work</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl display-heading text-[#0A0A0A] mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-[#737373] max-w-2xl">
            Showcasing my technical skills through real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:border-[#0A0A0A] group">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl p-4 bg-[#F5F5F5] border border-[#E5E5E5] group-hover:border-[#0A0A0A] transition-colors">
                      {project.icon}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-[#E5E5E5] hover:border-[#0A0A0A] hover:bg-[#F5F5F5] transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#0A0A0A]" />
                    </a>
                  </div>
                  <div>
                    <span className="label-mono text-[#2563EB]">Project 0{index + 1}</span>
                    <h2 className="text-2xl font-semibold text-[#0A0A0A] mt-2 group-hover:text-[#2563EB] transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  <p className="text-[#737373] leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h3 className="label-mono mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-[#737373] text-sm flex gap-3">
                          <span className="text-[#2563EB]"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="label-mono mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
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
        >
          <Card className="bg-[#0A0A0A] border-[#0A0A0A]">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 border border-white/20">
                  <Github className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">More Projects on GitHub</h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Check out my GitHub profile for more projects, open-source contributions, and code samples.
              </p>
              <a
                href="https://github.com/MarcuxOng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-[#0A0A0A] hover:bg-[#2563EB] hover:text-white px-8 py-6">
                  Visit GitHub
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
