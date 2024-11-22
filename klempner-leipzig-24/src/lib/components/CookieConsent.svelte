<script lang="ts">
	import { onMount } from 'svelte';

	export let companyName = 'Ihre Firma';
	export let privacyPolicyUrl = '/privacy';
	export let googleAdsId = 'AW-XXXXXX';

	function openSettings() {
		if (typeof window !== 'undefined' && window.klaro) {
			window.klaro.show();
		}
	}

	const klaroConfig = {
		elementID: 'klaro',
		storageMethod: 'cookie',
		cookieName: 'klaro',
		htmlTexts: true,
		default: false,
		mustConsent: true,
		acceptAll: true,
		hideDeclineAll: false,
		styling: {
			theme: ['light', 'top', 'wide']
		},

		translations: {
			de: {
				privacyPolicyUrl: privacyPolicyUrl,
				consentModal: {
					title: 'Cookie Einstellungen',
					description: `Um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten, 
            verwenden wir Cookies und ähnliche Technologien.`
				},
				purposes: {
					marketing: 'Marketing'
				},
				ok: 'Alle akzeptieren',
				decline: 'Alle ablehnen',
				close: 'Schließen',
				service: {
					purpose: 'Zweck',
					purposes: 'Zwecke',
					required: {
						title: 'Erforderlich',
						description: 'Diese Dienste sind für die Grundfunktionen der Website erforderlich.'
					}
				}
			}
		},

		services: [
			{
				name: 'google-ads',
				title: 'Google Ads',
				purposes: ['marketing'],
				required: false,
				default: false,
				cookies: ['_gac_', 'conversion', 'CONSENT', '__gads', '_gcl_aw', '_gcl_au'],
				callback: function (consent, service) {
					if (consent === true) {
						loadGoogleAds();
					}
				}
			}
		]
	};

	function loadGoogleAds() {
		if (typeof window !== 'undefined') {
			const script = document.createElement('script');
			script.async = true;
			script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`;
			document.head.appendChild(script);

			const configScript = document.createElement('script');
			configScript.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleAdsId}');
      `;
			document.head.appendChild(configScript);
		}
	}

	onMount(async () => {
		const klaroScript = document.createElement('script');
		klaroScript.src = 'https://cdn.kiprotect.com/klaro/v0.7/klaro.js';
		klaroScript.defer = true;

		klaroScript.onload = () => {
			if (typeof window.klaro !== 'undefined') {
				window.klaroConfig = klaroConfig;
				window.klaro.setup(klaroConfig);
			}
		};

		document.head.appendChild(klaroScript);
	});
</script>

<div id="klaro" />

<button
	class="cookie-settings-button"
	on:click={openSettings}
	aria-label="Cookie-Einstellungen öffnen"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="cookie-icon"
	>
		<path
			d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
		/>
	</svg>
</button>

<style>
	/* Basis Klaro Styles überschreiben */
	:global(.klaro) {
		font-family: inherit;
	}

	:global(.klaro .cookie-modal) {
		z-index: 1000;
	}

	:global(.klaro .cookie-notice) {
		z-index: 999;
	}

	/* Neue Styles basierend auf dem Design */
	:global(.klaro .cookie-modal .cm-modal) {
		background: white;
		border-radius: 24px !important;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08) !important;
		max-width: 640px;
		border: 2px solid rgb(26 39 31);
		padding: 2rem;
	}

	:global(.klaro .cookie-modal .cm-header) {
		border-bottom: 1px solid #eee;
		padding-bottom: 1rem;
		margin-bottom: 1rem;
	}

	:global(.klaro .cookie-modal .cm-header h1) {
		font-size: 1.5rem;
		color: #1a1a1a;
		margin-bottom: 0.5rem;
	}

	:global(.klaro .cookie-modal .cm-body) {
		padding: 1rem 0;
	}

	:global(.klaro .cookie-modal .cm-purposes) {
		background: #f8f9fa;
		border-radius: 16px;
		padding: 1.5rem;
		margin: 1rem 0;
	}

	:global(.klaro .cookie-modal .cm-btn) {
		border-radius: 8px;
		padding: 0.75rem 1.5rem;
		font-weight: 500;
		transition: all 0.2s ease;
		background: rgb(255 214 0) !important; /* Goldener Farbton wie im Design */
		border: none;
		color: black !important;
	}

	:global(.klaro .cookie-modal .cm-btn:hover) {
		background: rgb(255, 233, 123) !important;
	}

	:global(.klaro .cookie-modal .cm-btn.cm-btn-success) {
		background: rgb(255 214 0); /* Goldener Farbton wie im Design */
		border: none;
		color: black;
	}

	:global(.klaro .cookie-modal .cm-btn.cm-btn-success:hover) {
		background: rgb(255, 233, 123);
		color: black;
	}

	:global(.klaro .cookie-modal .cm-btn.cm-btn-decline) {
		background: #fff;
		color: #1a1a1a;
		border: 1px solid #eee;
	}

	:global(.klaro .cookie-modal .cm-btn.cm-btn-decline:hover) {
		background: #f8f9fa;
	}

	:global(.klaro .cookie-modal .cm-list-input:checked + .cm-list-label .slider) {
		background-color: rgb(64, 64, 64) !important;
	}

	:global(.klaro .cookie-modal .cm-list-input + .cm-list-label .slider) {
		background-color: rgb(227, 227, 227) !important;
	}

	:global(.klaro .cookie-modal .cm-list-label .slider::before) {
		background-color: rgb(161, 161, 161) !important;
	}
	:global(.klaro .cookie-modal a) {
		color: rgb(64, 64, 64) !important;
	}

	/* Settings Button Styles */
	.cookie-settings-button {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: white;
		border: 1px solid #eee;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		z-index: 998;
		padding: 0;
	}

	.cookie-settings-button:hover {
		box-shadow: 0 6px 32px rgba(0, 0, 0, 0.12);
		transform: translateY(-2px);
	}

	.cookie-icon {
		width: 24px;
		height: 24px;
		color: #1a1a1a;
	}

	@media (max-width: 640px) {
		.cookie-settings-button {
			bottom: 16px;
			right: 16px;
			width: 40px;
			height: 40px;
			border-radius: 10px;
		}

		.cookie-icon {
			width: 20px;
			height: 20px;
		}
	}
</style>
