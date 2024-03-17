<script>
	import BurgerMenu from 'svelte-burger-menu';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Saos from 'saos';
	import LeistungenRow from './../lib/components/LeistungenRow.svelte';
	import Button from '../lib/components/Button.svelte';
	import Vorteil from '../lib/components/Vorteil.svelte';
	import Step from '../lib/components/Step.svelte';
	import CTABanner from '../lib/components/CTABanner.svelte';
	import Testimonial from '../lib/components/Testimonial.svelte';
	import Faq from '../lib/components/FAQ.svelte';
	import PhoneW16 from '../lib/assets/icons/phone-w-16.svg';
	import MailW16 from '../lib/assets/icons/mail-w-16.svg';
	import Pin16 from '../lib/assets/icons/pin-w-16.svg';
	import Logo from '../lib/assets/logo.svg';
	import HeroImage from '../lib/assets/images/Image-5.webp';
	import Wappen from '../lib/assets/images/Marketingwappen-4c.png';
	import Cert16 from '../lib/assets/icons/cert-16.svg';
	import Check16 from '../lib/assets/icons/check-16.svg';
	import Fast16 from '../lib/assets/icons/fast-16.svg';
	import Gear16 from '../lib/assets/icons/gear-16.svg';
	import Talk16 from '../lib/assets/icons/talk-16.svg';
	import Time16 from '../lib/assets/icons/time-16.svg';
	import Heater16 from '../lib/assets/icons/heater-16.svg';
	import Car16 from '../lib/assets/icons/car-16.svg';
	import CarDoor16 from '../lib/assets/icons/car-door-16.svg';
	import Document16 from '../lib/assets/icons/document-16.svg';
	import DoorHandle16 from '../lib/assets/icons/door-handle-16.svg';
	import Door16 from '../lib/assets/icons/door-16.svg';
	import Bolt16 from '../lib/assets/icons/bolt-16.svg';
	import Rat16 from '../lib/assets/icons/rat-16.svg';
	import Bucket16 from '../lib/assets/icons/bucket-16.svg';
	import Euro16 from '../lib/assets/icons/euro-16.svg';
	import HandHeart16 from '../lib/assets/icons/hand-heart-16.svg';
	import HandShake16 from '../lib/assets/icons/handshake-16.svg';
	import Key16 from '../lib/assets/icons/key-16.svg';
	import ShieldLock16 from '../lib/assets/icons/shield-lock-16.svg';
	import Swap16 from '../lib/assets/icons/swap-16.svg';
	import Wrench16 from '../lib/assets/icons/wrench-16.svg';
	import Leaf16 from '../lib/assets/icons/leaf-16.svg';
	import Virus16 from '../lib/assets/icons/virus-16.svg';
	import Spray16 from '../lib/assets/icons/spray-16.svg';
	import LeafBulb16 from '../lib/assets/icons/leaf-bulb-16.svg';
	import Bulb16 from '../lib/assets/icons/bulb-16.svg';
	import Cable16 from '../lib/assets/icons/cable-16.svg';
	import Electric16 from '../lib/assets/icons/electric-16.svg';
	import Zoom16 from '../lib/assets/icons/zoom-16.svg';
	import Pipe16 from '../lib/assets/icons/pipe-16.svg';
	import Water16 from '../lib/assets/icons/water-16.svg';
	import Mail24 from '../lib/assets/icons/mail-24.svg';
	import Phone24 from '../lib/assets/icons/phone-24.svg';
	import Time24 from '../lib/assets/icons/time-24.svg';
	import Right48 from '../lib/assets/icons/right-48.svg';
	import Fast64 from '../lib/assets/icons/fast-64.svg';
	import Talk64 from '../lib/assets/icons/talk-64.svg';
	import Time64 from '../lib/assets/icons/time-64.svg';
	import Price64 from '../lib/assets/icons/price-64.svg';

	import Leistung1 from '../lib/assets/images/Image-17.webp';
	import Leistung2 from '../lib/assets/images/Image-15.webp';
	import Leistung3 from '../lib/assets/images/Image-8.webp';
	import Leistung4 from '../lib/assets/images/Image-18.webp';
	import AnfrageFoto from '../lib/assets/images/Image-22.webp';

	async function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const status = document.getElementById('notdienst-form-status');
		const data = new FormData(form);

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: data,
				headers: {
					Accept: 'application/json'
				}
			});

			if (response.ok) {
				status.style.opacity = '1';
				form.reset();
			} else {
				const data = await response.json();
				if (Object.hasOwnProperty.call(data, 'errors')) {
					status.textContent = data.errors.map((error) => error.message).join(', ');
				} else {
					status.textContent = 'Oops! There was a problem submitting your form';
				}
			}
		} catch (error) {
			status.textContent = 'Oops! There was a problem submitting your form';
		}
	}
</script>

<div class="bg-primary text-white flex justify-center py-2 gap-5 mobile:hidden">
	<a href="tel:017666457738" class="flex gap-1 small-bold">
		<img src={PhoneW16} alt="Anrufen Icon" />
		017666457738
	</a>
	<div class="flex gap-1 small-bold">
		<img src={MailW16} alt="E-Mail Icon" />
		info@schaedlingsjaeger-leipzig.de
	</div>
	<div class="flex gap-1 small-bold">
		<img src={Pin16} alt="Standort Icon" />
		Demmeringstraße 57 | 04177 Leipzig
	</div>
</div>
<div
	class="nav-container max-w-7xl px-5 mx-auto sticky top-3 mt-5 z-20 mobile:px-0 mobile:top-0 mobile:mt-0"
>
	<nav
		class="flex rounded-2xl border shadow-xl items-center bg-white border-primary p-5 justify-between mobile:border-0 mobile:rounded-none"
	>
		<a href="#start" class="mobile:w-24">
			<img src={Logo} alt="Schädlingsbekämpfung Leipzig 24/7" />
		</a>
		<div class="flex big-tablet:hidden gap-5 items-start">
			<a
				href="/#Vorteile"
				class="leading-tight base-bold relative hover:text-secondary transition-all">Vorteile</a
			>
			<a href="/#Leistungen" class="leading-tight base-bold hover:text-secondary transition-all"
				>Leistungen</a
			>
			<a href="/#über-uns" class="leading-tight base-bold hover:text-secondary transition-all"
				>Über uns</a
			>
			<a href="/#Testimonials" class="leading-tight base-bold hover:text-secondary transition-all"
				>Bewertungen</a
			>
			<a href="/#FAQ" class="leading-tight base-bold hover:text-secondary transition-all">FAQ</a>
			<a href="/#Anfrage" class="leading-tight base-bold hover:text-secondary transition-all"
				>Anfrage</a
			>
		</div>
		<div class="flex flex-row-reverse gap-5 tablet:items-center mobile:gap-2">
			<div id="mobile-menu" class="hidden mobile-menu z-30 big-tablet:block">
				<BurgerMenu backgroundColor="#f6f6f2" padding={'20px'} menuColor="#1a271f" width="80%">
					<div class="flex flex-col gap-10">
						<a href="/#start">
							<img class="w-40 mx-auto" src={Logo} alt="Schädlingsbekämpfung Leipzig 24/7" />
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
	<section id="start" class="">
		<div class="absolute top-10 -z-10 tablet:block hidden mobile:top-0">
			<img
				src={HeroImage}
				class="w-full h-[550px] object-cover"
				alt="Handwerker untersucht eine Rohrverunreinigung für den Kunden in Not"
			/>
			<div class="absolute inset-0 bg-black opacity-50" />
		</div>
		<div class="flex w-full items-center tablet:flex-col tablet:gap-10 mobile:gap-5">
			<div
				class="flex items-start flex-col ml-auto max-w-[660px] pl-5 w-full tablet:max-w-none tablet:pr-5"
			>
				<Saos
					css_animation=""
					top="100"
					once="true"
					animation={'from-left 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
				>
					<div
						class="pr-48 big-tablet:pr-32 flex flex-col gap-10 tablet:pr-0 tablet:items-center tablet:gap-5 mobile:gap-2"
					>
						<div class="flex items-center gap-3 h5">
							<img width="40" src={Wappen} alt="Leipzig Wappen" />
							<p class="tablet:text-white">In Leipzig</p>
						</div>
						<div class="flex flex-col gap-5">
							<h1
								class="h2-bold leading-none tablet:text-center tablet:text-white
						"
							>
								Immer da. <br />
								Jeder Befall. <br />
								<span class="text-secondary tablet:text-accent">Schädlingsfrei.</span>
							</h1>
							<p class="base opacity-70 tablet:text-center tablet:text-white">
								Unmittelbare Hilfe bei Schädlingsproblemen. Professionell, diskret und effizient.
								Wir bekämpfen Ungeziefer und schützen Ihr Zuhause oder Geschäft. Egal ob Tag oder
								Nacht, unser Kammerjäger-Service steht Ihnen zur Seite.
							</p>
						</div>
					</div>
				</Saos>
			</div>
			<div
				class="flex items-center relative right-0 w-1/2 big-tablet:w-2/3 tablet: tablet:justify-center"
			>
				<div class="absolute -left-24 big-tablet:-left-24 tablet:static">
					<Saos
						css_animation=""
						top="100"
						once="true"
						animation={'from-right 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
					>
						<div
							class="border-2 rounded-3xl p-10 big-tablet:p-5 big-tablet:pb-10 border-secondary shadow-lg bg-white flex flex-col items-start gap-10 tablet:p-5 tablet:pb-10 tablet:items-center mobile:gap-5"
						>
							<div class="flex flex-col gap-5 tablet:items-center">
								<h4 class="h4-bold max-w-[230px] tablet:max-w-none tablet:text-center">
									Wir helfen <span class="text-secondary">sofort und kompetent</span>
								</h4>
								<div
									class="flex flex-col gap-3 tablet:flex-row tablet:flex-wrap tablet:justify-center mobile:hidden"
								>
									<div class="flex gap-2">
										<img src={Check16} alt="Leistung Nr 1" />
										<p class="leading-none">Schädlingsbekämpfung</p>
									</div>
									<div class="flex gap-2">
										<img src={Check16} alt="Leistung Nr 2" />
										<p class="leading-none">Präventivmaßnahmen</p>
									</div>
									<div class="flex gap-2">
										<img src={Check16} alt="Leistung Nr 3" />
										<p class="leading-none">Desinfektionsservice</p>
									</div>
									<div class="flex gap-2">
										<img src={Check16} alt="Leistung Nr 4" />
										<p class="leading-none">Beratung & Analyse</p>
									</div>
								</div>
							</div>
							<div class="flex flex-col relative items-center">
								<Button type={2} />
								<a href="#Anfrage" class="small opacity-70 absolute -bottom-7"
									>Oder füllen Sie unseren Formular aus</a
								>
							</div>
						</div>
					</Saos>
				</div>

				<div class="relative w-full -z-10 tablet:hidden">
					<Saos
						css_animation=""
						top="100"
						once="true"
						animation={'from-right-width 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
					>
						<img
							class="rounded-s-[40px] w-full max-h-[475px] big-tablet:h-96 object-cover"
							src={HeroImage}
							alt="Handwerker untersucht eine Rohrverunreinigung für den Kunden in Not"
						/>
					</Saos>
				</div>
			</div>
			<div
				class="flex-col gap-3 tablet:flex-row tablet:flex-wrap tablet:justify-center hidden mobile:flex"
			>
				<div class="flex gap-2">
					<img src={Check16} alt="Leistung Nr 1" />
					<p class="leading-none">Schädlingsbekämpfung</p>
				</div>
				<div class="flex gap-2">
					<img src={Check16} alt="Leistung Nr 2" />
					<p class="leading-none">Präventivmaßnahmen</p>
				</div>
				<div class="flex gap-2">
					<img src={Check16} alt="Leistung Nr 3" />
					<p class="leading-none">Desinfektionsservice</p>
				</div>
				<div class="flex gap-2">
					<img src={Check16} alt="Leistung Nr 4" />
					<p class="leading-none">Beratung & Analyse</p>
				</div>
			</div>
		</div>
	</section>
	<section id="Vorteile" class="">
		<div class="container px-5 mx-auto flex justify-center z-10 relative">
			<Saos
				css_animation=""
				top="100"
				once="true"
				animation={'from-top 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
			>
				<div
					class="border-2 rounded-3xl p-10 border-primary bg-white flex flex-col items-center mt-10 max-w-5xl gap-10 shadow-lg relative mobile:gap-5 mobile:p-5"
				>
					<div class="flex flex-col gap-2">
						<h2 class="h2-bold tablet:text-center">
							Schädlingsbekämpfung <span class="text-secondary">Leipzig</span>
						</h2>
						<p class="opacity-70 text-center">Ihre Vorteile bei uns!</p>
					</div>
					<div class="flex gap-10 w-full tablet:flex-wrap justify-center mobile:gap-5">
						<Vorteil
							imageUrl={Time64}
							highlightedText="24/7"
							titleText="Verfügbar"
							paragraphContent="Unser Service ist zu jeder Zeit verfügbar, sodass Sie immer Hilfe erhalten können."
						/>
						<Vorteil
							imageUrl={Fast64}
							highlightedText="Sofortige"
							titleText="Problemlösung"
							paragraphContent="Schnelle Reaktion bei Schädlingsbefall. Wir sind für Sie da!"
						/>
						<Vorteil
							imageUrl={Talk64}
							highlightedText="Fachkundige"
							titleText="Beratung"
							paragraphContent="Persönliche Beratung zu Prävention und Behandlung von Befall."
						/>
						<Vorteil
							imageUrl={Price64}
							highlightedText="Faire"
							titleText="Preise"
							paragraphContent="Klare Preise ohne versteckte Kosten, immer."
						/>
					</div>
				</div>
			</Saos>
		</div>

		<div class=" bg-primaryLight relative -mt-[220px] mx-auto pt-[300px] pb-20">
			<div class="max-w-7xl px-5 mx-auto">
				<Saos
					css_animation=""
					top="100"
					once="true"
					animation={'from-top 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
				>
					<h2 class="h2-bold text-center">So funktionierts:</h2>
				</Saos>

				<div
					class="flex justify-between items-stretch mt-16 big-tablet:gap-5 tablet:gap-10 mobile:gap-5 mobile:mt-10 big-tablet:flex-col"
				>
					<Saos
						css_animation=""
						top="100"
						once="true"
						animation={'from-top 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
					>
						<Step
							number="01"
							title="Anrufen"
							content="Rufen Sie uns an oder kontaktieren Sie uns über unser Online-Formular. Unser Team ist rund um die Uhr erreichbar, um Ihre Anfragen zu bearbeiten."
						/>
					</Saos>
					<img src={Right48} alt="Nächster Punkt" class="big-tablet:hidden" />
					<Saos
						css_animation=""
						top="100"
						once="true"
						animation={'from-top 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s both'}
					>
						<Step
							number="02"
							title="Problem schildern"
							content="Beschreiben Sie das Problem, damit wir schnell die geeigneten Maßnahmen und den richtigen Fachmann für Sie finden können."
						/>
					</Saos>
					<img src={Right48} alt="Nächster Punkt" class="big-tablet:hidden" />
					<Saos
						css_animation=""
						top="100"
						once="true"
						animation={'from-top 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0.6s both'}
					>
						<Step
							number="03"
							title="Hilfe erhalten"
							content="Ein erfahrener Schädlingsbekämpfer wird so schnell wie möglich zu Ihnen kommen, um das Problem zu lösen."
						/>
					</Saos>
				</div>
				<CTABanner />
			</div>
		</div>
	</section>
	<section id="Leistungen">
		<div class="max-w-7xl px-5 mx-auto py-20">
			<Saos
				css_animation=""
				top="100"
				once="true"
				animation={'from-top 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
			>
				<h2 class="h2-bold text-center">Wo wir Ihnen helfen können</h2>
			</Saos>
			<div class="flex flex-col gap-16 mt-16">
				<LeistungenRow
					image={Leistung1}
					content="Ungeziefer können unerwartet in Ihrem <b>Zuhause</b> oder <b>Geschäft</b> auftreten und erhebliche Probleme verursachen. Unsere Experten stehen bereit, um die Ursache schnell zu identifizieren und den Befall <b>effektiv</b> zu behandeln."
					title="Ungezieferbefall"
					icon1={Zoom16}
					point1="Schnelle Schädlingsdiagnose"
					icon2={Talk16}
					point2="Beratung bei Ungezieferbefall"
					icon3={Fast16}
					point3="Sofortige Schädlingsbekämpfung"
					icon4={Time16}
					point4="24/7 Verfügbarkeit"
				/>
				<div class="w-full h-[1px] bg-slate-200" />
				<LeistungenRow
					isLeft="false"
					image={Leistung2}
					content="Ob es sich um die <b>Prävention</b> von Schädlingen durch <b>Barrieren</b>, <b>Fallen</b> oder den Einsatz <b>chemischer Mittel</b> handelt - verlassen Sie sich auf unser Fachwissen. Wir sorgen für einen umfassenden Schutz vor Ungeziefer."
					title="Schädlingsprävention"
					icon1={Spray16}
					point1="Fachgerechte Schädlingsbekämpfung"
					icon2={Bulb16}
					point2="Modernste Verfahren"
					icon3={Leaf16}
					point3="Sichere und umweltfreundliche Produkte"
					icon4={Zoom16}
					point4="Gründliche Inspektion"
				/>
				<div class="w-full h-[1px] bg-slate-200" />
				<LeistungenRow
					image={Leistung3}
					content="Von hartnäckigen <b>Schädlingsbefällen</b> bis zu weit verbreiteten Infestationen - unsere Desinfektionsspezialisten sind geschult, alle Arten von Schädlingen zu bekämpfen und eine <b>hygienische Umgebung</b> zu gewährleisten, damit Sie sich sicher und geschützt fühlen können."
					title="Desinfektionsservice"
					icon1={Virus16}
					point1="Frei von Keimen und Bakterien"
					icon2={Spray16}
					point2="Hochwertige Desinfektion"
					icon3={Bolt16}
					point3="Schnelle und effektive Behandlung"
					icon4={Leaf16}
					point4="Umweltfreundlich"
				/>
				<div class="w-full h-[1px] bg-slate-200" />
				<LeistungenRow
					isLeft="false"
					image={Leistung4}
					content="Schädlingsprävention sollte niemals vernachlässigt werden. Unser Team führt <b>gründliche Analysen</b> durch, um potenzielle Risiken zu identifizieren und sicherzustellen, dass Ihre Umgebung von Schädlingen <b>frei</b> bleibt und den <b>Hygienevorschriften</b> entspricht."
					title="Beratung & Analyse"
					icon1={Zoom16}
					point1="Gründliche Schädlingsanalyse"
					icon2={Talk16}
					point2="Expertenberatung"
					icon3={Talk16}
					point3="Individuelle Handlungsempfehlungen"
					icon4={ShieldLock16}
					point4="Präventionsstrategien"
				/>
			</div>
		</div>
	</section>
	<section id="über-uns" class="bg-primaryLight">
		<div class="max-w-7xl px-5 mx-auto py-20">
			<Saos
				css_animation=""
				top="100"
				once="true"
				animation={'from-top 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
			>
				<h2 class="h2-bold text-center">Wer wir sind</h2>
			</Saos>
			<Saos
				css_animation=""
				top="100"
				once="true"
				animation={'from-top 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0.6s both'}
			>
				<div class="flex gap-10 w-full mt-16 big-tablet:flex-col mobile:gap-5">
					<div
						class="pt-10 flex flex-col gap-4 w-1/3 border-t-2 border-secondary big-tablet:border-0 big-tablet:w-full big-tablet:pt-0"
					>
						<h4 class="h4-bold">Qualität und Professionalität</h4>
						<p class="base opacity-70">
							Wir setzen auf höchste Qualität und Professionalität, mit erfahrenen Technikern und
							modernster Technologie. Jeder Auftrag wird mit <b>Präzision und Sorgfalt</b> ausgeführt,
							um Ihnen dauerhafte und überlegene Lösungen zu bieten. Unsere Kompetenz und Zuverlässigkeit
							setzen Standards und überzeugen unsere Kunden.
						</p>
					</div>
					<div
						class="pt-10 flex flex-col gap-4 w-1/3 border-t-2 border-secondary big-tablet:border-slate-400 big-tablet:border-t big-tablet:w-full mobile:pt-5"
					>
						<h4 class="h4-bold">Dienstleistungen</h4>
						<p class="base opacity-70">
							Wir sind Ihr verlässlicher Partner für alle Anliegen im Bereich Kammerjägerservice.
							Unsere umfangreichen Dienstleistungen beinhalten schnelle Reaktion bei <b
								>Schädlingsbefall</b
							>, effektive Maßnahmen zur <b>Schädlingsprävention</b>, gründliche
							<b>Desinfektionsdienste</b>
							nach Beseitigung und umfassende <b>Beratung & Analyse</b> Ihrer speziellen Situation und
							Bedürfnisse.
						</p>
					</div>
					<div
						class="pt-10 flex flex-col gap-4 w-1/3 border-t-2 border-secondary big-tablet:border-slate-400 big-tablet:border-t big-tablet:w-full mobile:pt-5"
					>
						<h4 class="h4-bold">Kundenorientiert</h4>
						<p class="base opacity-70">
							Bei uns steht der <b>Kunde im Mittelpunkt</b>. Wir bieten maßgeschneiderte Lösungen,
							die genau auf Ihre Bedürfnisse abgestimmt sind, und übertreffen dabei gerne Ihre
							Erwartungen. Ihre <b>Zufriedenheit</b> ist unser Ziel, und wir sind jederzeit für Sie erreichbar,
							um Ihnen zuverlässigen Service zu bieten.
						</p>
					</div>
				</div>
			</Saos>
			<CTABanner />
		</div>
	</section>
	<section id="Testimonials">
		<div class="max-w-7xl px-5 mx-auto pt-20">
			<h2 class="h2-bold text-center">Was Kunden über uns sagen</h2>
		</div>
		<Splide
			class="mt-16 mb-10"
			aria-label="My Favorite Images"
			extensions={{ AutoScroll }}
			options={{
				type: 'loop',
				gap: '40px',
				drag: 'free',
				focus: 'center',
				autoPlay: true,
				interval: 1000,
				start: '3',
				perPage: 4,
				arrows: false,
				pagination: false,
				autoScroll: {
					speed: 0.5,
					rewind: true
				},
				mediaQuery: 'max',
				breakpoints: {
					1024: {
						perPage: 2
					},
					480: {
						fixedWidth: '80%',
						gap: '20px'
					}
				}
			}}
		>
			<SplideSlide class="flex flex-col gap-4">
				<Testimonial
					name="Anna G."
					content="Der Schädlingsbekämpfungsdienst hat unser Haus schnell und effektiv von einem Kakerlakenbefall befreit. Professionell und zuverlässig!"
					reasonIcon={Rat16}
					reason="Ungezieferbefall"
				/>
			</SplideSlide>
			<SplideSlide class="flex flex-col gap-4">
				<Testimonial
					name="David H."
					content="Toller Service zur Prävention von Schädlingen. Professionelle Inspektion und Beratung zur Vorbeugung von weiteren Problemen. Sehr empfehlenswert."
					reasonIcon={Spray16}
					reason="Schädlingsprävention"
				/>
			</SplideSlide>
			<SplideSlide class="flex flex-col gap-4">
				<Testimonial
					name="Laura P."
					content="Schnelle Reaktion auf unseren Mäusebefall. Der Dienstleister war gründlich und hinterließ keine Spuren von Nagetieren. Bin zufrieden!"
					reasonIcon={Rat16}
					reason="Ungezieferbefall"
				/>
			</SplideSlide>
			<SplideSlide class="flex flex-col gap-4">
				<Testimonial
					name="Felix W."
					content="Hervorragender Desinfektionsservice! Unsere Büros wurden gründlich gereinigt und desinfiziert. Professionell und effizient durchgeführt."
					reasonIcon={Bucket16}
					reason="Desinfektionsservice"
				/>
			</SplideSlide>
			<SplideSlide class="flex flex-col gap-4">
				<Testimonial
					name="Melanie T."
					content="Der Schädlingsbekämpfungsdienst hat uns geholfen, unser Haus gegen Termiten zu schützen. Effektive Behandlung und freundlicher Service. Top!"
					reasonIcon={Spray16}
					reason="Schädlingsprävention"
				/>
			</SplideSlide>
			<SplideSlide class="flex flex-col gap-4">
				<Testimonial
					name="Simon F."
					content="Kompetente Beratung und gründliche Analyse unserer Schädlingsprobleme. Empfehlungen wurden klar und verständlich erklärt. Sehr hilfreich!"
					reasonIcon={Talk16}
					reason="Beratung & Analyse"
				/>
			</SplideSlide>
		</Splide>
	</section>
	<div class="w-full max-w-7xl px-5 mx-auto h-[1px] bg-slate-200" />
	<section id="FAQ">
		<div class="max-w-7xl px-5 mx-auto py-20 flex flex-col">
			<Saos
				css_animation=""
				top="100"
				once="true"
				animation={'from-top 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
			>
				<h2 class="h2-bold text-center">Häufig gestellte Fragen</h2>
			</Saos>
			<div class="flex flex-col gap-5 mt-16">
				<Faq
					question="Wie schnell können Sie bei einem Notfall vor Ort sein?"
					answer="Wir bemühen uns, so schnell wie möglich bei Ihnen zu sein. In den meisten Fällen können wir innerhalb von 1-2 Stunden vor Ort sein, abhängig von der Verkehrssituation und der Entfernung zu Ihrem Standort."
				/>
				<Faq
					question="Welche Kosten fallen für einen Notdiensteinsatz an?"
					answer="Die Kosten für einen Notdiensteinsatz variieren je nach Art und Umfang der Arbeit. Wir bieten jedoch transparente und faire Preise. Gerne erstellen wir Ihnen einen Kostenvoranschlag, bevor wir mit der Arbeit beginnen."
				/>
				<Faq
					question="Sind Sie rund um die Uhr erreichbar, auch an Feiertagen und am Wochenende?"
					answer="Ja, wir sind 24/7 erreichbar, einschließlich Feiertagen und Wochenenden. Wir verstehen, dass Notfälle jederzeit auftreten können, und sind daher immer bereit, Ihnen zu helfen."
				/>
				<!-- <Faq
					question="Wie kann ich zukünftige Probleme mit meiner Installation vermeiden?"
					answer="Regelmäßige Wartung und Inspektion Ihrer Installationen durch einen professionellen Klempner kann helfen, potenzielle Probleme frühzeitig zu erkennen und zu beheben. Es ist auch ratsam, alte oder beschädigte Teile rechtzeitig zu ersetzen und Verstopfungen und Ablagerungen zu vermeiden, indem Sie keine ungeeigneten Materialien in die Abflüsse werfen."
				/> -->
				<Faq
					question="Welche Art von Notfällen können Sie beheben?"
					answer="Wir können eine breite Palette von Notfällen in der Schädlingsbekämpfung bewältigen, darunter akute Ungezieferbefälle, schwerwiegende Schädlingsprävention, dringende Desinfektionsdienste und schnelle Beratung & Analyse. Unsere Experten sind darauf spezialisiert, rasch und effektiv zu handeln, um Ihr Problem zu lösen und Ihnen Sicherheit zu bieten."
				/>
				<Faq
					question="Bieten Sie eine Garantie auf Ihre Arbeit an?"
					answer="Ja, wir bieten eine Garantie auf unsere Arbeit. Die genauen Bedingungen der Garantie können je nach Art der geleisteten Arbeit variieren, aber wir stehen hinter der Qualität unserer Arbeit und sind verpflichtet, die Zufriedenheit unserer Kunden zu gewährleisten."
				/>
				<Faq
					question="Welche Zahlungsmethoden akzeptieren Sie?"
					answer="Wir akzeptieren eine Vielzahl von Zahlungsmethoden, einschließlich Bargeld, Kredit-/Debitkarten und Banküberweisungen. Wir streben danach, den Bezahlvorgang für unsere Kunden so einfach und bequem wie möglich zu gestalten."
				/>
			</div>
			<CTABanner type="2" />
		</div>
	</section>
	<section id="Anfrage" class="bg-primaryLight">
		<div class="max-w-7xl px-5 mx-auto py-20 flex flex-col">
			<Saos
				css_animation=""
				top="100"
				once="true"
				animation={'from-top 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
			>
				<h2 class="h2-bold text-center">So können Sie uns erreichen</h2>
			</Saos>
			<div class="w-full flex justify-center items-center gap-20 mt-16 big-tablet:flex-col">
				<div class="flex flex-col gap-5 w-1/2 big-tablet:w-full">
					<h3 class="h3-bold">Anfrage senden</h3>
					<p class="base opacity-70">
						Wir sind hier, um Ihnen zu helfen. Teilen Sie uns Ihr Anliegen mit, und unser Team wird
						sich schnellstmöglich bei Ihnen melden.
					</p>
					<form
						id="notdienst-form"
						action="https://formspree.io/f/xoqgnvoa"
						method="POST"
						class="flex flex-col gap-5 items-start"
						on:submit={handleSubmit}
					>
						<!-- Name Field -->
						<div class="flex flex-col w-full gap-1">
							<label class="base" for="name">Vor- und Nachname</label>
							<input
								class="border border-slate-300 px-2 py-1"
								type="text"
								id="name"
								name="name"
								required
							/>
						</div>

						<!-- Email Field -->
						<div class="flex flex-col w-full gap-1">
							<label class="base" for="email">Email:</label>
							<input
								class="border border-slate-300 px-2 py-1"
								type="email"
								id="email"
								name="email"
								required
							/>
						</div>

						<!-- Phone Field -->
						<div class="flex flex-col w-full gap-1">
							<label class="base" for="telefon">Telefon:</label>
							<input
								class="border border-slate-300 px-2 py-1"
								type="tel"
								id="telefon"
								name="telefon"
							/>
						</div>

						<!-- Select Field -->
						<div class="flex flex-col w-full gap-1">
							<label class="base" for="anliegen">Ihr Anliegen</label>
							<select class="px-2 py-2 border border-slate-300" id="anliegen" name="anliegen">
								<option disabled hidden selected value="Nicht definiert">Bitte auswählen</option>
								<option value="Türöffnung">Schädlingsbekämpfung</option>
								<option value="Schlosswechsel">Präventivmaßnahmen</option>
								<option value="Einbruchschutz">Desinfektionsservice</option>
								<option value="Autoöffnung">Beratung & Analyse</option>
								<option value="Sonstiges">Sonstiges</option>
							</select>
						</div>

						<!-- Textarea Field -->
						<div class="flex flex-col w-full gap-1">
							<label class="base" for="Nachricht">Nachricht:</label>
							<textarea
								class="border border-slate-300 px-2 py-1"
								id="Nachricht"
								name="Nachricht"
								rows="4"
								cols="50"
							/>
						</div>

						<!-- Submit Button -->
						<div class="flex gap-5 items-baseline mobile:flex-col">
							<input
								class="bg-accent mt-5 shad rounded-lg gap-2 cursor-pointer accent-shadow flex py-3 px-5 items-center h5-bold leading-none button mobile:mt-0"
								type="submit"
								value="Absenden"
							/>
							<p
								class="mt-6 mobile:mt-0 font-bold opacity-0 transition-opacity"
								id="notdienst-form-status"
							>
								Deine Anfrage wurde abgesendet!
							</p>
						</div>
					</form>
				</div>
				<div class="rounded-3xl bg-whtie shadow-xl overflow-hidden w-1/2 big-tablet:w-full">
					<img
						src={AnfrageFoto}
						alt="Wir beraten Sie!"
						class="max-h-[250px] w-full object-cover mobile:max-h-40"
					/>
					<div class="p-10 flex flex-col bg-white gap-10 mobile:gap-5 mobile:p-5">
						<h3 class="h3-bold mobile:text-2xl">Kontaktinformationen</h3>
						<a href="tel:017666457738" class="flex gap-2 base-bold">
							<img src={Phone24} alt="Anruf Icon" />
							0176-66457738
						</a>
						<a href="mailto:info@schaedlingsjaeger-leipzig.de" class="flex gap-2 base-bold">
							<img src={Mail24} alt="E-Mail Icon" />
							info@schaedlingsjaeger-leipzig.de
						</a>
						<div class="flex gap-2 base-bold">
							<img src={Time24} alt="Öffnungszeiten: Rund um die Uhr" />
							0:00 - 23:59 | 365 Tage im Jahr
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
<footer>
	<div
		class="max-w-7xl px-5 mx-auto py-20 w-full flex justify-between items-start tablet:flex-col tablet:gap-16"
	>
		<div class="flex flex-col gap-5">
			<img class="w-64" src={Logo} alt="Schädlingsbekämpfung Leipzig 24/7" />
			<div>Rund um die Uhr für <b>SIE</b> da!</div>
		</div>
		<div class="flex flex-col gap-5">
			<a href="tel:017666457738" class="flex gap-2 base-bold">
				<img src={Phone24} alt="Anrufen Icon" />
				0176-66457738
			</a>
			<a href="mailto:info@schaedlingsjaeger-leipzig.de" class="flex gap-2 base-bold">
				<img src={Mail24} alt="E-Mail Icon" />
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
