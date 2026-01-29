"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPortfolioData } from "@/lib/utils";

export default function Certifications() {
  const data = getPortfolioData();
  const certifications = data.certifications;

  return (
    <div className="min-h-screen py-24 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="label-mono mb-4">05 - Certifications</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl display-heading text-[#0A0A0A] mb-6">
            Certifications
          </h1>
          <p className="text-xl text-[#737373] max-w-2xl">
            Continuous learning and professional development achievements
          </p>
        </motion.div>

        {/* Certifications List */}
        <div className="space-y-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="hover:border-[#0A0A0A] group">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-4 bg-[#F5F5F5] border border-[#E5E5E5] text-3xl flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <span className="label-mono text-[#2563EB]">Certificate 0{index + 1}</span>
                        <h2 className="text-xl font-semibold text-[#0A0A0A] mt-1 group-hover:text-[#2563EB] transition-colors">
                          {cert.title}
                        </h2>
                        <p className="text-[#737373] font-medium mt-1">{cert.provider}</p>
                      </div>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] hover:bg-[#2563EB] text-white text-sm font-medium transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#737373] leading-relaxed">{cert.description}</p>

                  {/* Skills */}
                  <div>
                    <h3 className="label-mono mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                      Key Skills & Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-[#0A0A0A] border-[#0A0A0A]">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-white/10 border border-white/20">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{data.stats.certifications}</div>
                  <div className="text-white/60 text-sm">Certifications Earned</div>
                </div>
                <div>
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-white/10 border border-white/20">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{data.stats.commitment}</div>
                  <div className="text-white/60 text-sm">Completion Rate</div>
                </div>
                <div>
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-white/10 border border-white/20">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">2024-2025</div>
                  <div className="text-white/60 text-sm">Latest Achievement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
