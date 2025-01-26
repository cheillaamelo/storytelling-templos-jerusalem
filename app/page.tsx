"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const sections = [
  {
    title: "Primeira Destruição (586 a.C.)",
    content:
      "Em 586 a.C., o Reino da Babilônia, liderado por Nabucodonosor II, cercou Jerusalém após o rei Zedequias, de Judá, tentar se rebelar e buscar apoio do Egito. Após um longo cerco, os babilônios conquistaram a cidade, saquearam e incendiaram o Primeiro Templo, construído por Salomão. Grande parte da população judaica foi exilada para a Babilônia, no chamado Cativeiro Babilônico.",
    image: "/images/1.jpg",
  },
  {
    title: "Motivos da Primeira Destruição",
    content:
      "A destruição teve razões políticas e militares, pois Judá tentou se aliar ao Egito contra a Babilônia, o que levou à retaliação de Nabucodonosor II. Além disso, a Bíblia (em livros como Jeremias e 2 Reis) interpreta o evento como um castigo divino pela idolatria e desobediência do povo de Judá.",
    image: "/images/2.jpg",
  },
  {
    title: "Segunda Destruição (70 d.C.)",
    content:
      "Em 70 d.C., durante a Grande Revolta Judaica (66–73 d.C.), os judeus se rebelaram contra o domínio romano. O general Tito, filho do imperador Vespasiano, liderou o cerco a Jerusalém, causando fome e conflitos internos entre os próprios judeus. Após invadir a cidade, os romanos destruíram o Segundo Templo, reconstruído no século VI a.C. Milhares de judeus foram mortos ou vendidos como escravos.",
    image: "/images/3.webp",
  },
  {
    title: "Consequências da Segunda Destruição",
    content:
      "O Império Romano não tolerava rebeliões e queria reafirmar sua autoridade sobre a província da Judeia. Do ponto de vista judaico, a destruição foi interpretada como uma punição divina e um período de transição espiritual.",
    image: "/images/4.webp",
  },
];

export default function StorytellingPage() {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${sections[currentSection].image})` }}
      ></div>
      <motion.div
        key={currentSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl text-center relative z-10"
      >
        <h2 className="text-2xl font-bold mb-4">
          {sections[currentSection].title}
        </h2>
        <p className="text-black">{sections[currentSection].content}</p>
      </motion.div>
      <div className="mt-6 flex gap-4 relative z-10">
        <Button onClick={prevSection} disabled={currentSection === 0}>
          Voltar
        </Button>
        <Button
          onClick={nextSection}
          disabled={currentSection === sections.length - 1}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}
