import {
  Globe,
  Cpu,
  Palette,
} from "lucide-react";

export const heroCards = [
  {
    id: 1,
    title: "Web Development",
    subtitle: "Fast, scalable and responsive websites",
    tech: ["React", "Node.js", "MongoDB"],
    Icon: Globe,
    className: "card-web",
  },
  {
    id: 2,
    title: "IoT Solutions",
    subtitle: "Smart automation and monitoring systems",
    tech: ["ESP32", "Arduino", "MQTT"],
    Icon: Cpu,
    className: "card-iot",
  },
  {
    id: 3,
    title: "Creative Designing",
    subtitle: "Modern UI/UX and brand identity",
    tech: ["Figma", "Photoshop", "Illustrator"],
    Icon: Palette,
    className: "card-design",
  },
];

export const heroStats = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "100%",
    label: "Responsive Design",
  },
  {
    value: "24/7",
    label: "Support",
  },
];