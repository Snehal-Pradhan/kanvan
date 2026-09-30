// Three columns of differing height on a rounded tile — a kanban board seen
// head-on. Sized per brand kit: 36px icon + 20px wordmark default, 26px + 15px
// compact.

const TILE = '#B45309';

export function Logo({ compact = false, iconOnly = false }) {
  const iconSize = compact ? 26 : 36;
  const wordmarkSize = compact ? 15 : 20;
  const inner = (
    <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill={TILE} />
      <g fill="#ffffff">
        <rect x="6"    y="12" width="5" height="12" rx="1.5" fillOpacity="0.7" />
        <rect x="13.5" y="16" width="5" height="8"  rx="1.5" fillOpacity="0.45" />
        <rect x="21"   y="8"  width="5" height="16" rx="1.5" fillOpacity="0.95" />
      </g>
    </svg>
  );
  if (iconOnly) return inner;
  return (
    <div className="inline-flex items-center gap-2">
      {inner}
      <span
        style={{ fontSize: wordmarkSize, letterSpacing: '-0.4px' }}
        className="font-semibold leading-none"
      >
        <span className="text-ink-950 dark:text-white">Kan</span>
        <span className="text-accent">van</span>
      </span>
    </div>
  );
}
