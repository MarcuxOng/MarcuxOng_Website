"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: data.personal.email,
      link: `mailto:${data.personal.email}`,
      gradient: "from-blue-500 to-cyan-500",
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: data.personal.phone,
    //   link: `tel:${data.personal.phone.replace(/[^0-9+]/g, '')}`,
    //   gradient: "from-purple-500 to-pink-500",
    // },
    {
      icon: MapPin,
      label: "Location",
      value: data.personal.location,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: data.personal.github,
      gradient: "from-slate-600 to-slate-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: data.personal.linkedin,
      gradient: "from-blue-600 to-blue-800",
    },
  ];

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
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a question or want to work together? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {/* {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${info.gradient} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm mb-1">{info.label}</div>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-white font-medium hover:text-blue-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-white font-medium">{info.value}</div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })} */}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-slate-900/80 to-slate-900/50 border-slate-800 backdrop-blur-sm">
                <CardHeader>
                  <h3 className="text-white font-semibold">Connect With Me</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 p-4 rounded-xl bg-gradient-to-br ${social.gradient} hover:scale-105 transition-all duration-300 flex flex-col items-center gap-2 text-white`}
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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
              <CardHeader>
                <h2 className="text-2xl font-bold text-white">Send Me a Message</h2>
                <p className="text-slate-400 text-sm">
                  Fill out the form below and I&apos;ll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                        <CheckCircle2 className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <div>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 rounded-lg bg-red-900/50 border border-red-800 flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-red-200 text-sm">{error}</p>
                          <p className="text-red-300 text-xs mt-1">
                            You can also reach me directly at{" "}
                            <a href={`mailto:${data.personal.email}`} className="underline hover:text-red-200">
                              {data.personal.email}
                            </a>
                          </p>
                        </div>
                      </motion.div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">
                          Your Name
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">
                          Your Email
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Inquiry"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project or inquiry..."
                        rows={6}
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-lg rounded-xl glow-effect"
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
    </div>
  );
}