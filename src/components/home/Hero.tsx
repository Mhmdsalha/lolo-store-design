"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb hero-orb-primary" />
      <div className="hero-orb hero-orb-secondary" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: 42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1>
            كل ما يحتاجه طفلك
            <span>في مكان واحد</span>
          </h1>
          <p>
            اكتشفوا عالما من الأناقة والمرح مع تشكيلتنا المختارة بعناية من ملابس الأطفال، الألعاب التعليمية،
            والإكسسوارات العصرية.
          </p>
          <div className="hero-actions">
            <PrimaryButton href="/category/girls">
              تسوق الآن
              <ArrowLeft size={18} />
            </PrimaryButton>
            <PrimaryButton href="/category/toys" variant="secondary">
              اكتشف المجموعات
            </PrimaryButton>
          </div>
        </motion.div>

        <div className="hero-media">
          <div className="hero-blob-backdrop" />
          <Image
            src="/images/stitch/generated/hero-lolo-high-res.png"
            alt="طفلة سعيدة داخل متجر لولو للأطفال"
            fill
            quality={100}
            priority
            sizes="(max-width: 920px) 100vw, 42vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
}
