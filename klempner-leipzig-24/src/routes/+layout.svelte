<script>
	import '../styles.css';
	import '@splidejs/svelte-splide/css';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
</script>

<CookieConsent
	companyName="Klempner Leipzig GmbH"
	privacyPolicyUrl="/datenschutzerklärung"
	googleAdsId="AW-16740149107"
/>

<slot />
