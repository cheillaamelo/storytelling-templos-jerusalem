type SectionBackgroundProps = {
  image: string;
};

export default function SectionBackground({ image }: SectionBackgroundProps) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center opacity-50"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}
