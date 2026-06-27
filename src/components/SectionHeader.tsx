type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`section-header mb-16 ${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl text-left"}`}
    >
      <div
        className={`section-accent-bar mb-4 ${isCenter ? "mx-auto" : ""}`}
      />
      <p className="section-label mb-3">{label}</p>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className={`section-desc mt-4 ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
