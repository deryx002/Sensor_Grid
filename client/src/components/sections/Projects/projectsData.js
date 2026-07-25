import {
  Globe,
  Cpu,
  Palette,
  ArrowUpRight,
} from "lucide-react";

export const projects = [
  {
    id: 1,

    title: "School Management System",

    category: "Web Development",

    description:
      "A complete MERN-based school management platform with authentication, dashboards, attendance, and student management.",

    icon: Globe,

    color: "web",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
    ],

    status: "Completed",

    button: "View Project",

    arrow: ArrowUpRight,
  },

  {
    id: 2,

    title: "Smart Water Monitoring",

    category: "IoT Solution",

    description:
      "Real-time water tank monitoring using ESP32 sensors with live dashboard visualization and alert notifications.",

    icon: Cpu,

    color: "iot",

    technologies: [
      "ESP32",
      "MQTT",
      "Arduino",
    ],

    status: "Completed",

    button: "View Project",

    arrow: ArrowUpRight,
  },

  {
    id: 3,

    title: "Restaurant Brand Identity",

    category: "Creative Design",

    description:
      "Modern branding package including logo, UI design, social creatives and promotional materials.",

    icon: Palette,

    color: "design",

    technologies: [
      "Figma",
      "Illustrator",
      "Photoshop",
    ],

    status: "In Progress",

    button: "View Design",

    arrow: ArrowUpRight,
  },
];