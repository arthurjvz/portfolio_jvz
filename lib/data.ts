import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projet3_react from "@/public/projet3_react.png";
import projet2_react from "@/public/projet2_react.png";
import projet1_react from "@/public/projet1_react.png";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "Présentation",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Expériences",
    hash: "#experience",
  }
] as const;

export const experiencesData = [
  {
    title: "DUT GEII",
    location: "Brest, Finistère",
    description:
      "Formation de 2 ans avec option programmation orientée objet C++",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Personnel Naviguant Technique Marine Nationale",
    location: "Lorient, Morbihan",
    description:
      "Co-pilote Technicien (Informatique, Electronique, Electricité, Hydraulique, Mécanique) sur avion militaire ATL2",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Apprentis Developpeur Web",
    location: "Brest, Finistère / Nantes, Loire Atlantique",
    description:
      "Je suis maintenant disponible pour être formé en tant que développeur Web, spécialisé sur React.js",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "Développement de mon portfolio à l'aide d'un tutoriel. L'objectif est de comprendre toute l'approche technique.",
    tags: ["React", "Next.js", "Framer Motion", "Tailwind",],
    imageUrl: projet3_react,
    lien:"",
  },
  {
    title: "GeoData",
    description:
      "Application Web d'information sur un pays de l'europe, ici on solicite l'appel d'APIs externes",
    tags: ["React", "Tailwind", "Framer", "API"],
    imageUrl: projet1_react,
    lien:"https://react1-geo-data.vercel.app/"
  },
  {
    title: "IDE Online",
    description:
      "Application Web de programmation HTML CSS JavaScript",
    tags: ["React", "Redux", "Tailwind",],
    imageUrl: projet2_react,
    lien:"https://react2-ide-online.vercel.app/",
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Figma",
  "Framer Motion",
  "Vercel Host",
  "TypeScript"
] as const;