"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getPortfolioData } from "@/lib/utils";

export default function Education() {
  const data = getPortfolioData();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Academic journey and achievements
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {data.education.map((edu, eduIndex) => (
            <motion.div
              key={eduIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: eduIndex * 0.2 }}
            >
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white">{edu.institution}</h2>
                      <p className="text-slate-400">{edu.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-slate-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {edu.period}
                    </p>
                  </div>
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="pt-6 border-t border-slate-800">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <h4 className="text-lg font-semibold text-white">Achievements & Highlights</h4>
                      </div>
                      <div className="space-y-3">
                        {edu.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-300 leading-relaxed">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}