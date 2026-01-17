"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPortfolioData } from "@/lib/utils";

export default function Experience() {
  const data = getPortfolioData();
  const experiences = data.experiences;

  return (
    <div className="min-h-screen py-32 px-6 sm:px-8 lg:px-12 bg-[#F5F3EF]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-light serif-display text-[#2D2D2D] mb-6">
            Work <span className="gradient-text font-medium">Experience</span>
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto font-light">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#9C8B7E]" />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#9C8B7E] border-4 border-[#F5F3EF] z-10" />

                <Card className={`bg-[#FFFFFF] border-2 border-[#9C8B7E] luxury-shadow ${
                  index % 2 === 0 ? "md:mr-[50%] md:pr-16" : "md:ml-[50%] md:pl-16"
                }`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <div className="text-4xl">{exp.logo}</div>
                        <div>
                          <h2 className="text-2xl font-light serif-display text-[#2D2D2D] mb-1">{exp.role}</h2>
                          <h3 className="text-lg text-[#9C8B7E] font-medium">{exp.company}</h3>
                        </div>
                      </div>
                      {exp.current && (
                        <Badge className="bg-[#2D2D2D] text-white border-0 px-4 py-1">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-6 mt-6 text-sm text-[#6B6B6B]">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-[#2D2D2D] font-medium mb-4 flex items-center gap-2 uppercase tracking-wide text-sm">
                          <Briefcase className="w-4 h-4 text-[#9C8B7E]" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-[#6B6B6B] text-sm leading-relaxed flex gap-3 font-light">
                              <span className="text-[#9C8B7E] mt-1">—</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies & Skills */}
                      <div>
                        <h4 className="text-[#2D2D2D] font-medium mb-4 uppercase tracking-wide text-sm">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-[#E8DED3] text-[#6B6B6B] hover:bg-[#9C8B7E] hover:text-[#2D2D2D] border-0 transition-all duration-500"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <Card className="bg-[#F9F6F2] border-2 border-[#E8DED3] luxury-shadow">
            <CardContent className="p-12">
              <h3 className="text-3xl font-light serif-display text-[#2D2D2D] mb-4">Want to work together?</h3>
              <p className="text-[#6B6B6B] mb-8 text-lg font-light">
                I&apos;m always open to discussing new opportunities and exciting projects.
              </p>
              <a
                href="mailto:marcuxongzl@gmail.com"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#2D2D2D] hover:bg-[#1F1F1F] text-white font-medium transition-all duration-500 luxury-shadow"
              >
                Get In Touch
                <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}