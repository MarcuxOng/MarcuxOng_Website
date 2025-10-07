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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="gradient-text">Certifications</span> & Learning
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
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
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 group overflow-hidden relative">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${cert.gradient} opacity-10 rounded-full transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500 pointer-events-none z-0`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.gradient} text-4xl flex-shrink-0`}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {cert.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="text-blue-400 font-semibold">{cert.provider}</span>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            {cert.date}
                          </div>
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
                      className="relative z-20 flex items-center gap-2 px-4 py-2 rounded-lg bg-600 hover:bg-500 text-white transition-all duration-300 text-sm font-medium cursor-pointer border-2 border-blue-400 shadow-lg hover:shadow-xl transform hover:scale-105"
                      style={{ pointerEvents: 'auto' }}
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Gained */}
                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Key Skills & Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
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
          <Card className="bg-gradient-to-br from-slate-900/80 to-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex justify-center mb-3">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{data.stats.certifications}</div>
                  <div className="text-slate-400">Certifications Earned</div>
                </div>
                <div>
                  <div className="flex justify-center mb-3">
                    <div className="p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{data.stats.commitment}</div>
                  <div className="text-slate-400">Completion Rate</div>
                </div>
                <div>
                  <div className="flex justify-center mb-3">
                    <div className="p-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">2024-2025</div>
                  <div className="text-slate-400">Latest Achievement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}