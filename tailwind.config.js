export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: { 950: '#060919', 900: '#0a0f24', 800: '#111833' }, accent: { violet: '#8b5cf6', blue: '#3b82f6', cyan: '#22d3ee' } },
    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['"Space Grotesk"', 'Inter', 'sans-serif'] },
  } },
}
