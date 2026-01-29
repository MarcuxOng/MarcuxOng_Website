"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getPortfolioData } from "@/lib/utils";

export default function Education() {
  const data = getPortfolioData();

  return (
    <div className="min-h-screen py-24 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="label-mono mb-4">04 - Education</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl display-heading text-[#0A0A0A] mb-6">
            Education
          </h1>
          <p className="text-xl text-[#737373] max-w-2xl">
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
              transition={{ duration: 0.5, delay: eduIndex * 0.1 }}
            >
              <Card className="hover:border-[#0A0A0A]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-[#F5F5F5] border border-[#E5E5E5]">
                      <GraduationCap className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-[#0A0A0A]">{edu.institution}</h2>
                      <p className="text-[#737373]">{edu.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-[#0A0A0A] mb-2">{edu.degree}</h3>
                    <p className="text-[#737373] flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#2563EB]"></span>
                      {edu.period}
                    </p>
                  </div>
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="pt-6 border-t border-[#E5E5E5]">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-5 h-5 text-[#2563EB]" />
                        <h4 className="label-mono">Achievements & Highlights</h4>
                      </div>
                      <div className="space-y-3">
                        {edu.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-[#2563EB] mt-1"></span>
                            <p className="text-[#737373]">{achievement}</p>
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
