// Home page content here
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="p-6 space-y-16 max-w-6xl mx-auto font-sans text-gray-800 bg-gradient-to-br from-[#f4f7fc] via-[#e0ecf9] to-[#d3e3f8] dark:from-slate-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100">
      {/* Header */}
      <section className="text-center space-y-4">
        <motion.h1
          className="text-5xl font-extrabold drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pius Michael
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Shopify Store Designer & eCommerce Expert
        </motion.p>
      </section>

      {/* About Me */}
      <section className="space-y-3 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 border border-blue-100 dark:border-gray-700">
        <h2 className="text-2xl font-semibold border-b pb-2">About Me</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          With 2+ years of hands-on experience in Shopify, I specialize in launching
          high-converting stores, optimizing SEO, running ads, setting up TikTok Shops,
          and integrating email flows via Klaviyo. I help businesses build and grow
          profitable online brands.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-slate-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Services I Offer</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Shopify Store Design & Full Setup</li>
          <li>Product Research & Upload</li>
          <li>Facebook, Instagram & TikTok Ads</li>
          <li>Shopify Theme Customization</li>
          <li>Dropshipping Store Setup</li>
          <li>SEO Optimization</li>
          <li>Klaviyo Email Marketing</li>
          <li>TikTok Shop Setup</li>
          <li>Product Video Editing</li>
          <li>Performance Optimization</li>
        </ul>
      </section>
    </main>
  );
}
