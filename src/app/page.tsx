"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Ramic Traders"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{
        variant: "gradient-bars",
      }}
      logoText="Clean Living, Better Health"
      description="Affordable hygiene products manufactured in Kenya for homes, schools, and businesses."
      buttons={[
        {
          text: "Order Now",
          href: "#products",
        },
        {
          text: "Contact Us on WhatsApp",
          href: "#contact",
        },
      ]}
      layoutOrder="default"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZv0eSU6ArAZxyl8yG27Bj6pvh/modern-fmcg-hygiene-product-manufacturin-1774709270810-75cd8746.png"
      imageAlt="Ramic Traders Hygiene Manufacturing"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Our Mission"
      description="Ramic Traders is a Kenyan hygiene manufacturing company dedicated to enhancing public health standards. We provide affordable, high-quality hygiene products while driving job creation and supporting our local community."
      bulletPoints={[
        {
          title: "Public Health",
          description: "Focused on improving community wellness.",
        },
        {
          title: "Affordability",
          description: "Ensuring everyone has access to essential hygiene.",
        },
        {
          title: "Job Creation",
          description: "Empowering local youth and women through employment.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZv0eSU6ArAZxyl8yG27Bj6pvh/professional-team-of-kenyan-workers-in-a-1774709268913-9eb8dbeb.png"
      imageAlt="Our team at work"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Hand Sanitizer",
          price: "From KES 100",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZv0eSU6ArAZxyl8yG27Bj6pvh/premium-bottle-of-clear-hand-sanitizer-m-1774709268207-833f0cd7.png",
          imageAlt: "Hand Sanitizer",
        },
        {
          id: "p2",
          name: "Shower Gel",
          price: "From KES 150",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZv0eSU6ArAZxyl8yG27Bj6pvh/modern-shower-gel-bottle-with-elegant-de-1774709268375-94949c0d.png",
          imageAlt: "Shower Gel",
        },
        {
          id: "p3",
          name: "Hand Wash Powder",
          price: "From KES 80",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BZv0eSU6ArAZxyl8yG27Bj6pvh/hand-wash-powder-packaging-eco-friendly--1774709270735-0684251b.png",
          imageAlt: "Hand Wash Powder",
        },
      ]}
      title="Our Products"
      description="High-quality hygiene solutions formulated for effectiveness and safety."
    />
  </div>

  <div id="impact" data-section="impact">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "500+",
          description: "Jobs Created",
        },
        {
          id: "m2",
          value: "10,000+",
          description: "Lives Improved",
        },
        {
          id: "m3",
          value: "100%",
          description: "Kenyan Made",
        },
      ]}
      title="Our Impact"
      description="Measuring our contribution to healthier Kenyan communities."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get In Touch"
      title="Partner with Ramic Traders"
      description="Ready to stock our products or want to know more? Contact our team in Kenya."
      buttons={[
        {
          text: "Call Us: +254 700 000 000",
          href: "tel:+254700000000",
        },
        {
          text: "Message on WhatsApp",
          href: "https://wa.me/254700000000",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Ramic Traders"
      copyrightText="© 2025 Ramic Traders. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
