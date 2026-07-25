import {
  Globe,
  Cpu,
  Palette,
  ArrowRight,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build modern, scalable and responsive websites using the latest web technologies.",

    icon: Globe,

    color: "web",

    features: [
      "Responsive Websites",
      "MERN Stack",
      "Admin Dashboards",
      "SEO Optimized",
    ],

    button: "Explore Web",
    arrow: ArrowRight,
  },

  {
    id: 2,
    title: "IoT Solutions",

    description:
      "Smart IoT systems for automation, monitoring and real-time data collection.",

    icon: Cpu,

    color: "iot",

    features: [
      "ESP32 Projects",
      "Arduino Solutions",
      "Sensor Monitoring",
      "Cloud Dashboard",
    ],

    button: "Explore IoT",
    arrow: ArrowRight,
  },

  {
    id: 3,
    title: "Creative Designing",

    description:
      "Beautiful user interfaces, branding and graphics that make your ideas stand out.",

    icon: Palette,

    color: "design",

    features: [
      "UI / UX Design",
      "Logo Design",
      "Brand Identity",
      "Social Media",
    ],

    button: "Explore Design",
    arrow: ArrowRight,
  },
];