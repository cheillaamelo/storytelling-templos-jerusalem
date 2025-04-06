import Button from "@/components/ui/Button";

type SectionNavigatorProps = {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalSections: number;
};

export default function SectionNavigator({
  onPrev,
  onNext,
  currentIndex,
  totalSections,
}: SectionNavigatorProps) {
  return (
    <div className="mt-6 flex gap-4 relative z-10">
      <Button onClick={onPrev} disabled={currentIndex === 0}>
        Voltar
      </Button>
      <Button onClick={onNext} disabled={currentIndex === totalSections - 1}>
        Próximo
      </Button>
    </div>
  );
}
