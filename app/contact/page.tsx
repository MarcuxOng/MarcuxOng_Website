"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
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

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured yet. Please contact me directly via email or LinkedIn for now.");
      setIsSubmitting(false);
      return;
    }

    try {
      emailjs.init(publicKey);
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: data.personal.email,
      };

      await emailjs.send(serviceId, templateId, templateParams);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send message. Please try again or contact me directly via email.");
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", link: data.personal.github },
    { icon: Linkedin, label: "LinkedIn", link: data.personal.linkedin },
  ];

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
          <div className="label-mono mb-4">06 - Contact</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl display-heading text-[#0A0A0A] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-[#737373] max-w-2xl">
            Have a question or want to work together? I&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-[#0A0A0A]">Connect With Me</h3>
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
                      className="flex-1 p-6 bg-[#F5F5F5] border border-[#E5E5E5] hover:border-[#0A0A0A] transition-all flex flex-col items-center gap-3"
                    >
                      <Icon className="w-5 h-5 text-[#0A0A0A]" />
                      <span className="text-sm font-medium text-[#0A0A0A]">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="hover:border-[#0A0A0A]">
            <CardHeader>
              <h2 className="text-2xl font-semibold text-[#0A0A0A]">Send Me a Message</h2>
              <p className="text-[#737373] text-sm">
                Fill out the form below and I&apos;ll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#F5F5F5] border border-[#E5E5E5]">
                      <CheckCircle2 className="w-8 h-8 text-[#2563EB]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-2">Message Sent!</h3>
                  <p className="text-[#737373]">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <div>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-800 text-sm">{error}</p>
                        <p className="text-red-600 text-xs mt-1">
                          You can also reach me at{" "}
                          <a href={`mailto:${data.personal.email}`} className="underline hover:text-red-800">
                            {data.personal.email}
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="label-mono mb-2 block">Name</label>
                        <Input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="border-[#E5E5E5] focus:border-[#0A0A0A] bg-white"
                        />
                      </div>
                      <div>
                        <label className="label-mono mb-2 block">Email</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="border-[#E5E5E5] focus:border-[#0A0A0A] bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="label-mono mb-2 block">Subject</label>
                      <Input
                        type="text"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="border-[#E5E5E5] focus:border-[#0A0A0A] bg-white"
                      />
                    </div>
                    <div>
                      <label className="label-mono mb-2 block">Message</label>
                      <Textarea
                        placeholder="Your message..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="border-[#E5E5E5] focus:border-[#0A0A0A] bg-white resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0A0A0A] hover:bg-[#2563EB] text-white py-6"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <ArrowRight className="w-4 h-4" />
                        </span>
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
