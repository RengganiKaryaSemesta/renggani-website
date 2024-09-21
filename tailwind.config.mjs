/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"selector",
	theme: {
		extend: {
			keyframes: {
				shakeY: {
				  '0%, 100%': { transform: 'translateY(5%)' },
				  '50%': { transform: 'translateY(0)' },
				},
			  },
			animation:{
				shakeY: 'shakeY 20s linear infinite',
				'bounce-slow': 'bounce 20s linear infinite',
			},
			fontFamily: {
				roboto: ['Roboto'],
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
