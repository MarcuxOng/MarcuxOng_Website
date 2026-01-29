"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPortfolioData } from "@/lib/utils";

export default function Experience() {
  const data = getPortfolioData();
  const experiences = data.experiences;

  return (
    <div className="min-h-screen py-24 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="label-mono mb-4">03 - Experience</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl display-heading text-[#0A0A0A] mb-6">
            Work Experience
          </h1>
          <p className="text-xl text-[#737373] max-w-2xl">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#E5E5E5]" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-8 w-3 h-3 -translate-x-1/2 bg-[#0A0A0A] border-4 border-white z-10" />

                <Card className="hover:border-[#0A0A0A]">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{exp.logo}</div>
                        <div>
                          <h2 className="text-xl font-semibold text-[#0A0A0A]">{exp.role}</h2>
                          <h3 className="text-[#2563EB] font-medium">{exp.company}</h3>
                        </div>
                      </div>
                      {exp.current && (
                        <Badge variant="default">Current</Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-[#737373]">
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
                  <CardContent className="space-y-6">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="label-mono mb-3 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#2563EB]" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-[#737373] text-sm flex gap-3">
                            <span className="text-[#2563EB]"></span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Skills */}
                    <div>
                      <h4 className="label-mono mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <Card className="bg-[#F5F5F5] border-[#E5E5E5]">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-3">Want to work together?</h3>
              <p className="text-[#737373] mb-8">
                I&apos;m always open to discussing new opportunities and exciting projects.
              </p>
              <a
                href="mailto:marcuxongzl@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A0A0A] hover:bg-[#2563EB] text-white font-medium transition-colors"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
