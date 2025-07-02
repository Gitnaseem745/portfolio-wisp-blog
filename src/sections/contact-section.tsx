"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/button";
import Input from "@/components/input";
import AdvanceToast from "@/components/toast";
import { siteConfig } from "@/config/siteConfig";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const { contact } = siteConfig.sections;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    isOpen: boolean;
    message: string;
    type: "success" | "error";
  }>({
    isOpen: false,
    message: "",
    type: "success",
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setToast({
        isOpen: true,
        message: contact.messages.success,
        type: "success",
      });
    } catch {
      setToast({
        isOpen: true,
        message: contact.messages.error,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <section id="contact" className="pt-16 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {contact.title}
        </h2>
        <p className="text-muted-foreground text-lg">{contact.description}</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            className="space-y-2"
          >
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <User className="w-4 h-4" />
              {contact.formFields.find((f) => f.name === "name")?.label}
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={
                contact.formFields.find((f) => f.name === "name")?.placeholder
              }
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              variant="lg"
              className="w-full max-w-none"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs"
              >
                {errors.name}
              </motion.p>
            )}
          </motion.div>

          {/* Email Field */}
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            className="space-y-2"
          >
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Mail className="w-4 h-4" />
              {contact.formFields.find((f) => f.name === "email")?.label}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={
                contact.formFields.find((f) => f.name === "email")?.placeholder
              }
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              variant="lg"
              className="w-full max-w-none"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs"
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Subject Field */}
        <motion.div
          variants={inputVariants}
          whileFocus="focus"
          className="space-y-2"
        >
          <label
            htmlFor="subject"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <MessageCircle className="w-4 h-4" />
            {contact.formFields.find((f) => f.name === "subject")?.label}
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder={
              contact.formFields.find((f) => f.name === "subject")?.placeholder
            }
            value={formData.subject}
            onChange={handleInputChange}
            error={!!errors.subject}
            variant="lg"
            className="w-full max-w-none"
          />
          {errors.subject && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs"
            >
              {errors.subject}
            </motion.p>
          )}
        </motion.div>

        {/* Message Field */}
        <motion.div
          variants={inputVariants}
          whileFocus="focus"
          className="space-y-2"
        >
          <label
            htmlFor="message"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <MessageCircle className="w-4 h-4" />
            {contact.formFields.find((f) => f.name === "message")?.label}
          </label>
          <motion.textarea
            id="message"
            name="message"
            rows={
              contact.formFields.find((f) => f.name === "message")?.rows || 6
            }
            placeholder={
              contact.formFields.find((f) => f.name === "message")?.placeholder
            }
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 bg-background text-foreground transition duration-200 ease-in-out resize-none ${
              errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-border focus:ring-ring"
            }`}
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs"
            >
              {errors.message}
            </motion.p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-4"
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full md:w-auto min-w-[200px] relative overflow-hidden group"
          >
            <motion.div
              className="flex items-center justify-center gap-2"
              animate={isSubmitting ? { scale: 0.95 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                />
              ) : (
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              )}
              {isSubmitting
                ? contact.submitButton.loadingText
                : contact.submitButton.text}
            </motion.div>
          </Button>
        </motion.div>
      </motion.form>

      {/* Toast Notifications */}
      <AdvanceToast
        isOpen={toast.isOpen}
        onClose={() => setToast((prev) => ({ ...prev, isOpen: false }))}
        duration={4000}
        className={
          toast.type === "success"
            ? "bg-green-600 text-white"
            : "bg-red-600 text-white"
        }
      >
        <div className="flex items-center gap-2">
          {toast.type === "success" ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-4 h-4 bg-white rounded-full flex items-center justify-center"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ✓
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-red-600 font-bold"
            >
              !
            </motion.div>
          )}
          {toast.message}
        </div>
      </AdvanceToast>
    </section>
  );
}
