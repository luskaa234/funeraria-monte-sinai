type Props = {
  title: string;
  description?: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="bg-white p-8 rounded-xl border hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-3 text-primary">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description ||
          "Serviço realizado com respeito, organização e cuidado total com a família."}
      </p>
    </div>
  );
}