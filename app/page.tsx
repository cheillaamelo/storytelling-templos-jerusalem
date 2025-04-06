"use client";

import { useState } from "react";
import SectionBackground from "@/components/SectionBackground";
import SectionContent from "@/components/SectionContent";
import SectionNavigator from "@/components/SectionNavigator";

const sections = [
  {
    title:
      "As duas destruições do Templo de Jerusalém foram eventos marcantes na história do povo judeu, ocorrendo em momentos diferentes e sob domínios distintos.",
    content: "",
    image: "/images/templos.webp",
  },
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

  const { title, content, image } = sections[currentSection];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 relative">
      <SectionBackground image={image} />
      <SectionContent title={title} content={content} />
      <SectionNavigator
        onPrev={prevSection}
        onNext={nextSection}
        currentIndex={currentSection}
        totalSections={sections.length}
      />
    </div>
  );
}
