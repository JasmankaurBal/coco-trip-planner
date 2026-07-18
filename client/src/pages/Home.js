import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCompass,
  FaMapMarkedAlt,
  FaCalendarCheck,
  FaArrowRight,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const features = [
    {
      icon: FaCompass,
      title: "Thoughtful planning",
      description: "Every recommendation feels personal, calm, and designed around your pace.",
      color: "bg-[#f5e8da] text-[#a45d2f]",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Beautiful destination guides",
      description: "Discover neighborhoods, hidden corners, and easy ways to move through each place.",
      color: "bg-[#e7efe6] text-[#4f6c4e]",
    },
    {
      icon: FaCalendarCheck,
      title: "A gentle trip companion",
      description: "Keep your plans simple, organized, and easy to revisit whenever you need them.",
      color: "bg-[#efe7f2] text-[#755172]",
    },
  ];

  const benefits = ["Warm guidance", "Elegant itineraries", "Friendly reminders", "Trusted planning"];

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#fff9f2_0%,#f8f3eb_40%,#f4efe7_100%)] text-slate-800">
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,188,102,0.24),_transparent_40%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-[#e4d3c0] bg-white/80 px-3 py-1.5 text-sm font-medium text-[#8a5a2b] shadow-sm backdrop-blur">
              <FaHeart className="mr-2" />
              Welcome to Coco — your travel buddy
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-7xl">
              Plan beautifully. Travel gently.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Coco brings together thoughtful planning, soft guidance, and a calm sense of elegance so every trip feels easier to begin.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/register" className="group inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#8b5e3c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8b5e3c]/20 transition hover:-translate-y-0.5 hover:bg-[#71442a]">
                Start planning
                <FaArrowRight className="ml-2 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/login" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d6c0a7] bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white">
                Sign in
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center rounded-full border border-[#e8dbc8] bg-white/70 px-3 py-2 text-sm text-slate-600 shadow-sm">
                  <FaCheckCircle className="mr-2 text-[#6f8a5d]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-[28px] border border-[#efe2d3] bg-white/75 p-6 shadow-[0_20px_60px_-24px_rgba(85,56,20,0.25)] backdrop-blur"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color}`}>
                <feature.icon className="text-xl" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#efe2d3] bg-white/70 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">A calmer way to travel.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Coco is built to feel like a warm travel companion rather than a complicated dashboard.
          </p>
          <Link to="/register" className="mt-8 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Create your account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
