type MandalaMotifProps = {
  className?: string;
};

/**
 * Hand-authored line-art medallion referencing mandala symmetry and
 * Lipan-style petal relief. Purely decorative — hidden from
 * screen readers — and stands in for photographed artwork until real
 * product imagery is added under public/images/hero.
 */
export function MandalaMotif({ className }: MandalaMotifProps) {
  const petals = Array.from({ length: 12 });

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="200"
        cy="200"
        r="188"
        fill="none"
        stroke="var(--shilpikala-earth-brown)"
        strokeOpacity="0.18"
      />
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="var(--shilpikala-terracotta)"
        strokeOpacity="0.35"
      />
      <circle
        cx="200"
        cy="200"
        r="112"
        fill="none"
        stroke="var(--shilpikala-gold)"
        strokeOpacity="0.5"
      />

      {petals.map((_, i) => {
        const angle = (360 / petals.length) * i;
        return (
          <g key={i} transform={`rotate(${angle} 200 200)`}>
            <path
              d="M200 88 C 214 118, 214 146, 200 162 C 186 146, 186 118, 200 88 Z"
              fill="none"
              stroke="var(--shilpikala-terracotta-deep)"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
          </g>
        );
      })}

      <circle
        cx="200"
        cy="200"
        r="58"
        fill="none"
        stroke="var(--shilpikala-olive)"
        strokeOpacity="0.4"
      />
      <circle cx="200" cy="200" r="6" fill="var(--shilpikala-terracotta)" />
    </svg>
  );
}
