"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';
import { getPortfolioData } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const data = getPortfolioData();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Check if EmailJS is configured
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured yet. Please contact me directly via email or LinkedIn for now.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with your public key
      emailjs.init(publicKey);

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: data.personal.email,
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Failed to send message. Please try again or contact me directly via email.");
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: data.personal.github,
      gradient: "from-[#6B6B6B] to-[#2D2D2D]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: data.personal.linkedin,
      gradient: "from-[#9C8B7E] to-[#6B6B6B]",
    },
  ];

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
            Get In <span className="gradient-text font-medium">Touch</span>
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto font-light">
            Have a question or want to work together? I&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Social Links - Centered at Top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <Card className="bg-white border-2 border-[#9C8B7E] luxury-shadow">
            <CardHeader>
              <h3 className="text-[#2D2D2D] font-light serif-display text-2xl text-center">Connect With Me</h3>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-6 bg-[#E8DED3] border border-[#9C8B7E] hover:border-[#9C8B7E] transition-all duration-500 luxury-shadow flex flex-col items-center gap-3 text-[#2D2D2D]"
                    >
                      <Icon className="w-6 h-6" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
            <Card className="bg-white border-2 border-[#9C8B7E] luxury-shadow">
              <CardHeader>
                <h2 className="text-3xl font-light serif-display text-[#2D2D2D]">Send Me a Message</h2>
                <p className="text-[#6B6B6B] text-sm font-light">
                  Fill out the form below and I&apos;ll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="p-8 bg-[#E8DED3] border-2 border-[#9C8B7E]">
                        <CheckCircle2 className="w-12 h-12 text-[#9C8B7E]" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-light serif-display text-[#2D2D2D] mb-3">Message Sent!</h3>
                    <p className="text-[#6B6B6B] font-light">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <div>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-5 bg-red-50 border-2 border-red-200 flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-red-800 text-sm font-light">{error}</p>
                          <p className="text-red-600 text-xs mt-1 font-light">
                            You can also reach me directly at{" "}
                            <a href={`mailto:${data.personal.email}`} className="underline hover:text-red-800">
                              {data.personal.email}
                            </a>
                          </p>
                        </div>
                      </motion.div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="text-[#2D2D2D] text-sm font-medium mb-2 block">
                          Your Name
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="bg-white/50 border-[#9C8B7E] text-[#2D2D2D] placeholder:text-[#6B6B6B]/50 focus:border-[#9C8B7E]"
                        />
                      </div>
                      <div>
                        <label className="text-[#2D2D2D] text-sm font-medium mb-2 block">
                          Your Email
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="bg-white/50 border-[#9C8B7E] text-[#2D2D2D] placeholder:text-[#6B6B6B]/50 focus:border-[#9C8B7E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[#2D2D2D] text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Inquiry"
                        className="bg-white/50 border-[#9C8B7E] text-[#2D2D2D] placeholder:text-[#6B6B6B]/50 focus:border-[#9C8B7E]"
                      />
                    </div>

                    <div>
                      <label className="text-[#2D2D2D] text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project or inquiry..."
                        rows={6}
                        className="bg-white/50 border-[#9C8B7E] text-[#2D2D2D] placeholder:text-[#6B6B6B]/50 focus:border-[#9C8B7E] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#9C8B7E] to-[#6B6B6B] hover:from-[#6B6B6B] hover:to-[#2D2D2D] text-[#2D2D2D] py-6 text-lg rounded-xl glow-effect"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                    </form>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
      </div>
    </div>
  );
}