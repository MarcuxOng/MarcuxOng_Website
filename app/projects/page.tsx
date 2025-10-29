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
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} text-4xl`}>
                      {project.icon}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors text-sm h-8 px-3"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Link
                      </Button>
                    </a>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
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
          <Card className="bg-gradient-to-br from-slate-900/80 to-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="p-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                  <Github className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">More Projects on GitHub</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects, open-source contributions, and code samples.
              </p>
              <a
                href="https://github.com/MarcuxOng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl glow-effect">
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