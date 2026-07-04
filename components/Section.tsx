import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-14 sm:py-20 scroll-mt-8">
      <div className="mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 text-ink/60 max-w-xl">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}