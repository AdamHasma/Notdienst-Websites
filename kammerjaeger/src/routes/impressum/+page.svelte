<script>
	import BurgerMenu from 'svelte-burger-menu';
	import Button from '../../lib/components/Button.svelte';
	import PhoneW16 from '../../lib/assets/icons/phone-w-16.svg';
	import MailW16 from '../../lib/assets/icons/mail-w-16.svg';
	import Pin16 from '../../lib/assets/icons/pin-w-16.svg';
	import Logo from '../../lib/assets/logo.svg';
	import Mail24 from '../../lib/assets/icons/mail-24.svg';
	import Phone24 from '../../lib/assets/icons/phone-24.svg';
</script>

<div class="bg-primary text-white flex justify-center py-2 gap-5 mobile:hidden">
	<a href="tel:017666457738" class="flex gap-1 small-bold">
		<img src={PhoneW16} alt="" />
		017666457738
	</a>
	<div class="flex gap-1 small-bold">
		<img src={MailW16} alt="" />
		info@schaedlingsjaeger-leipzig.de
	</div>
	<div class="flex gap-1 small-bold">
		<img src={Pin16} alt="" />
		Demmeringstraße 57 | 04177 Leipzig
	</div>
</div>
<div
	class="nav-container max-w-7xl px-5 mx-auto sticky top-3 mt-5 z-20 mobile:px-0 mobile:top-0 mobile:mt-0"
>
	<nav
		class="flex rounded-2xl border shadow-xl items-center bg-white border-primary p-5 justify-between mobile:border-0 mobile:rounded-none"
	>
		<a href="/#start" class="mobile:w-24">
			<img src={Logo} alt="" />
		</a>
		<div class="flex big-tablet:hidden gap-5 items-start">
			<a href="/#Vorteile" class="leading-tight base-bold">Vorteile</a>
			<a href="/#Leistungen" class="leading-tight base-bold">Leistungen</a>
			<a href="/#über-uns" class="leading-tight base-bold">Über uns</a>
			<a href="/#Testimonials" class="leading-tight base-bold">Bewertungen</a>
			<a href="/#FAQ" class="leading-tight base-bold">FAQ</a>
			<a href="/#Anfrage" class="leading-tight base-bold">Anfrage</a>
		</div>
		<div class="flex flex-row-reverse gap-5 tablet:items-center mobile:gap-2">
			<div id="mobile-menu" class="hidden mobile-menu z-30 big-tablet:block">
				<BurgerMenu backgroundColor="#f6f6f2" padding={'20px'} menuColor="#1a271f" width="80%">
					<div class="flex flex-col gap-10">
						<a href="/#start">
							<img class="w-40 mx-auto" src={Logo} alt="" />
						</a>
						<div class="flex flex-col gap-5 items-center">
							<a href="/#Vorteile" class="leading-tight h5-bold px-4 py-2">Vorteile</a>
							<a href="/#Leistungen" class="leading-tight h5-bold px-4 py-2">Leistungen</a>
							<a href="/#über-uns" class="leading-tight h5-bold px-4 py-2">Über uns</a>
							<a href="/#Testimonials" class="leading-tight h5-bold px-4 py-2">Bewertungen</a>
							<a href="/#FAQ" class="leading-tight h5-bold px-4 py-2">FAQ</a>
							<a href="/#Anfrage" class="leading-tight h5-bold px-4 py-2">Anfrage</a>
						</div>
					</div>
				</BurgerMenu>
			</div>
			<Button type={1} />
		</div>
	</nav>
</div>

<main class="mt-20 tablet:mt-10 mobile:mt-5">
	<section class="max-w-7xl px-5 mx-auto py-20 flex flex-col">
		<h2 class="h2-bold mb-6">Impressum</h2>

		<!-- Section: TMG Details -->
		<h3 class="text-xl font-bold mt-4">Angaben gemäß § 5 TMG</h3>
		<address class="mt-4">
			<p class="">Klempner Leipzig GmbH</p>
			<p class="">Demmeringstraße 57</p>
			<p class="mb-2">04177 Leipzig</p>
		</address>
		<p class="mb-2">Handelsregister: HRB 42299</p>
		<p class="">Registergericht: Leipzig</p>

		<h4 class="text-lg font-bold mt-6">Vertreten durch:</h4>
		<p class="mt-2">Abdurahman Achmersaev</p>

		<!-- Section: Contact -->
		<h3 class="text-xl font-bold mb-2 mt-6">Kontakt</h3>
		<p class="">Telefon: 0176-66457738</p>
		<p class="">
			E-Mail: <a href="mailto:info@schaedlingsjaeger-leipzig.de" class="underline"
				>info@schaedlingsjaeger-leipzig.de</a
			>
		</p>

		<!-- <h3 class="text-xl font-bold mb-2 mt-6">Umsatzsteuer-ID</h3>
		<p>
			Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
			0000000
		</p> -->

		<h3 class="text-xl font-bold mb-2 mt-6">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
		<p>
			Berufsbezeichnung:<br />
			Handwerker
		</p>
		<p>
			<br />
			Verliehen in:<br />
			Deutschland
		</p>

		<!-- Section: Dispute Resolution -->
		<h3 class="text-xl font-bold mb-4 mt-6">
			Verbraucherstreitbeilegung / Universalschlichtungsstelle
		</h3>
		<p class="mb-2 mt-2">
			Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
			Verbraucherschlichtungsstelle teilzunehmen.
		</p>

		<!-- Source Link -->
		<p class="mt-6">
			Quelle: <a href="https://www.e-recht24.de" class="font-bold underline"
				>https://www.e-recht24.de</a
			>
		</p>
	</section>
</main>
<footer>
	<div
		class="max-w-7xl px-5 mx-auto py-20 w-full flex justify-between items-start tablet:flex-col tablet:gap-16"
	>
		<div class="flex flex-col gap-5">
			<img class="w-48" src={Logo} alt="Schädlingsbekämpfung Leipzig 24/7" />
			<div>Rund um die Uhr für <b>SIE</b> da!</div>
		</div>
		<div class="flex flex-col gap-5">
			<a href="tel:017666457738" class="flex gap-2 base-bold">
				<img src={Phone24} alt="Anrufen" />
				0176-66457738
			</a>
			<a href="mailto:info@schaedlingsjaeger-leipzig.de" class="flex gap-2 base-bold">
				<img src={Mail24} alt="Anrufen" />
				info@schaedlingsjaeger-leipzig.de
			</a>
		</div>
		<div class="flex flex-col gap-5">
			<a class="hover:underline" href="/impressum">Impressum</a>
			<a class="hover:underline" href="/datenschutzerklärung">Datenschutzerklärung</a>
		</div>
	</div>
</footer>

<style lang="postcss">
</style>
