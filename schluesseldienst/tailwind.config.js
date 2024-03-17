/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Epilogue: ['Epilogue Variable', 'sans-serif']
			},
			screens: {
				'big-tablet': { max: '1024px' },
				tablet: { max: '768px' },
				mobile: { max: '480px' }
			},
			colors: {
				primary: '#1A271F',
				primaryLight: '#F6F6F2',
				secondary: '#AD9200',
				accent: '#FFD600'
			}
		}
	},
	plugins: []
};
