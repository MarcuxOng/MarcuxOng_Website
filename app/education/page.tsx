"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getPortfolioData } from "@/lib/utils";

export default function Education() {
  const data = getPortfolioData();

  return (
    <div className="min-h-screen py-32 px-6 sm:px-8 lg:px-12 bg-[#F5F3EF]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-light serif-display text-[#2D2D2D] mb-6">
            My <span className="gradient-text font-medium">Education</span>
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto font-light">
            Academic journey and achievements
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-12">
          {data.education.map((edu, eduIndex) => (
            <motion.div
              key={eduIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: eduIndex * 0.2 }}
            >
              <Card className="bg-[#FFFFFF] border-2 border-[#9C8B7E] luxury-shadow">
                <CardHeader>
                  <div className="flex items-center gap-6">
                    <div className="p-5 bg-[#E8DED3] border border-[#9C8B7E]">
                      <GraduationCap className="w-8 h-8 text-[#9C8B7E]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-light serif-display text-[#2D2D2D]">{edu.institution}</h2>
                      <p className="text-[#6B6B6B] font-light">{edu.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-light serif-display text-[#2D2D2D] mb-2">{edu.degree}</h3>
                    <p className="text-[#6B6B6B] flex items-center gap-2 font-light">
                      <span className="w-2 h-2 bg-[#9C8B7E]"></span>
                      {edu.period}
                    </p>
                  </div>
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="pt-6 border-t border-[#9C8B7E]">
                      <div className="flex items-center gap-3 mb-6">
                        <Award className="w-5 h-5 text-[#9C8B7E]" />
                        <h4 className="text-lg font-medium text-[#2D2D2D] uppercase tracking-wide">Achievements & Highlights</h4>
                      </div>
                      <div className="space-y-4">
                        {edu.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-[#9C8B7E] mt-2 flex-shrink-0"></div>
                            <p className="text-[#6B6B6B] leading-relaxed font-light">{achievement}</p>
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