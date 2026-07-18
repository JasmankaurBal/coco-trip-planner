import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCompass, FaHeart, FaShieldAlt, FaRoute } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-[#efe2d3] bg-[linear-gradient(135deg,#fcf6ef_0%,#f9f0e7_100%)] py-10 text-slate-700 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid gap-8 md:grid-cols-3 lg:gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8b5e3c] text-white shadow-sm">
                <FaCompass />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Coco</h3>
                <p className="text-sm text-slate-500">The Trip Planner</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">Coco is a warm, refined travel planning experience designed to make every trip feel calm, beautiful, and effortless.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Explore</h4>
            <div className="mt-4 space-y-2 text-sm">
              {[
                { name: "Dashboard", to: "/dashboard" },
                { name: "Trip Planner", to: "/trip-planner" },
                { name: "Maps", to: "/maps" },
                { name: "My Trips", to: "/trips" },
              ].map((link) => (
                <Link key={link.name} to={link.to} className="block text-slate-600 transition hover:text-[#8b5e3c]">{link.name}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Travel with care</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2"><FaShieldAlt className="text-emerald-600" /> Secure and private planning</div>
              <div className="flex items-center gap-2"><FaRoute className="text-[#8b5e3c]" /> Beautiful itineraries that stay organized</div>
              <div className="flex items-center gap-2"><FaHeart className="text-rose-500" /> Crafted for thoughtful adventures</div>
            </div>
          </div>
        </motion.div>
        <div className="mt-8 border-t border-[#efe2d3] pt-6 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p>© {new Date().getFullYear()} Coco. All rights reserved.</p>
            <p>Curated with care for calm, beautiful travel.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
