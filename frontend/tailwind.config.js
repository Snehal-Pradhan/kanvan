/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand amber. DEFAULT/bright are variable-driven so they lift in dark
        // mode for text, icons and borders; `solid` stays put because it is the
        // fill that white label text sits on top of.
        accent: {
          DEFAULT: 'rgb(var(--kv-accent) / <alpha-value>)',
          solid:   '#B45309',
          hover:   '#92400E',
          bright:  'rgb(var(--kv-accent-bright) / <alpha-value>)',
          subtle:  '#FBF0DC',
          muted:   '#8A4B08',
          strong:  '#5C3207',
        },
        // Warm charcoal neutrals. `400` is variable-driven (see --kv-muted in
        // styles/index.css) so secondary text stays legible in both themes
        // without needing a dark: override at every call site.
        ink: {
          50:  '#F7F4EF',
          100: '#E3DDD1',
          400: 'rgb(var(--kv-muted) / <alpha-value>)',
          600: '#4A453E',
          950: '#1A1917',
        },
        // Dark-mode elevation ladder. Replaces the ad-hoc greys that used to be
        // hardcoded per component; each step is a real lift off the one above.
        surface: {
          base:   '#151412',
          raised: '#1E1C19',
          sunken: '#262320',
          hover:  '#2E2A25',
        },
        success: { DEFAULT: '#4D7C0F', bg: '#EDF3E2', ink: '#3F6212' },
        warning: { DEFAULT: '#C2410C', bg: '#FDEEE4', ink: '#8A2E08' },
        danger:  { DEFAULT: '#C0392B', bg: '#FBE9E6', ink: '#8F2A1E' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '8px',
        card: '10px',
        lg: '14px',
        xl: '18px',
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(180,83,9,.22)',
        card:  '0 1px 2px rgba(26,25,23,.04), 0 1px 3px rgba(26,25,23,.05)',
        pop:   '0 16px 40px -16px rgba(26,25,23,.28)',
      },
    },
  },
  plugins: [],
};
