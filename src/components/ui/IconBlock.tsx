import { LucideIcon } from "lucide-react";

interface IconBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function IconBlock({
  icon: Icon,
  title,
  description,
  className = "",
}: IconBlockProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f0f3f9] text-[#1a2846]">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
