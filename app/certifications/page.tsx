"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPortfolioData } from "@/lib/utils";

export default function Certifications() {
  const data = getPortfolioData();
  const certifications = data.certifications;

  return (
    <div className="min-h-screen py-32 px-6 sm:px-8 lg:px-12 bg-[#F5F3EF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-light serif-display text-[#2D2D2D] mb-6">
            <span className="gradient-text font-medium">Certifications</span> & Learning
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto font-light">
            Continuous learning and professional development achievements
          </p>
        </motion.div>

        {/* Certifications List */}
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="bg-white border-2 border-[#E8DED3] luxury-shadow group overflow-hidden relative">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#9C8B7E]/5 to-[#9C8B7E]/10 transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500 pointer-events-none z-0`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-4 bg-[#9C8B7E]/10 border-2 border-[#9C8B7E] text-4xl flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-light serif-display text-[#2D2D2D] mb-2 group-hover:text-[#9C8B7E] transition-colors">
                          {cert.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="text-[#9C8B7E] font-semibold">
                            {cert.provider}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(cert.link, '_blank', 'noopener,noreferrer');
                      }}
                      onMouseEnter={() => console.log('Button hovered')}
                      className="relative z-20 flex items-center gap-2 px-4 py-2 bg-[#9C8B7E] hover:bg-[#7A6E63] text-[#2D2D2D] transition-all duration-300 text-sm font-medium cursor-pointer border-2 border-[#9C8B7E] shadow-lg hover:shadow-xl transform hover:scale-105"
                      style={{ pointerEvents: 'auto' }}
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  {/* Description */}
                  <p className="text-[#6B6B6B] leading-relaxed font-light">
                    {cert.description}
                  </p>

                  {/* Skills Gained */}
                  <div>
                    <h3 className="text-[#2D2D2D] font-medium mb-3 flex items-center gap-2 uppercase tracking-wide text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Key Skills & Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-[#E8DED3] text-[#6B6B6B] hover:bg-[#9C8B7E] hover:text-[#2D2D2D] border-0 transition-colors"
                        >
                          {skill}
                        </Badge>
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
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-[#E8DED3]/80 to-[#F5F3EF]/50 border-[#9C8B7E] backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex justify-center mb-3">
                    <div className="p-4 rounded-full bg-gradient-to-br from-[#9C8B7E]/10 to-[#9C8B7E]/20">
                      <Award className="w-8 h-8 text-[#2D2D2D]" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{data.stats.certifications}</div>
                  <div className="text-[#6B6B6B]">Certifications Earned</div>
                </div>
                <div>
                  <div className="flex justify-center mb-3">
                    <div className="p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
                      <CheckCircle2 className="w-8 h-8 text-[#2D2D2D]" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{data.stats.commitment}</div>
                  <div className="text-[#6B6B6B]">Completion Rate</div>
                </div>
                <div>
                  <div className="flex justify-center mb-3">
                    <div className="p-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600">
                      <Calendar className="w-8 h-8 text-[#2D2D2D]" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">2024-2025</div>
                  <div className="text-[#6B6B6B]">Latest Achievement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}