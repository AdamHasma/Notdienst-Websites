<script>
	import BurgerMenu from 'svelte-burger-menu';
	import Button from '../../lib/components/Button.svelte';
	import PhoneW16 from '../../lib/assets/icons/phone-w-16.svg';
	import MailW16 from '../../lib/assets/icons/mail-w-16.svg';
	import Pin16 from '../../lib/assets/icons/pin-w-16.svg';
	import Logo from '../../lib/assets/klempner-leipzig-24-logo.svg';
	import Mail24 from '../../lib/assets/icons/mail-24.svg';
	import Phone24 from '../../lib/assets/icons/phone-24.svg';
</script>

<div class="bg-primary text-white flex justify-center py-2 gap-5 mobile:hidden">
	<a href="tel:012345678" class="flex gap-1 small-bold">
		<img src={PhoneW16} alt="" />
		012345678
	</a>
	<div class="flex gap-1 small-bold">
		<img src={MailW16} alt="" />
		anfrage@klempner-notservice.de
	</div>
	<div class="flex gap-1 small-bold">
		<img src={Pin16} alt="" />
		012345678
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
		<h2 class="h2-bold mb-6 mobile:text-2xl">Datenschutzerklärung INHALT ÄNDERN</h2>
		<h3 class="text-xl font-bold mb-4 mt-6">1. Datenschutz auf einen Blick</h3>
		<h4 class="text-lg font-bold mb-2 mt-6">Allgemeine Hinweise</h4>
		<p>
			Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren
			personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind
			alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche
			Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten
			Datenschutzerkl&auml;rung.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">Datenerfassung auf dieser Website</h4>
		<h5 class="font-bold mb-2 mt-6">
			Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
		</h5>
		<p>
			Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
			Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo;
			in dieser Datenschutzerkl&auml;rung entnehmen.
		</p>
		<h5 class="font-bold mb-2 mt-6">Wie erfassen wir Ihre Daten?</h5>
		<p>
			Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
			sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
		</p>
		<p>
			Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
			unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
			Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
			automatisch, sobald Sie diese Website betreten.
		</p>
		<h5 class="font-bold mb-2 mt-6">Wof&uuml;r nutzen wir Ihre Daten?</h5>
		<p>
			Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
			gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet
			werden.
		</p>
		<h5 class="font-bold mb-2 mt-6">Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h5>
		<p>
			Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und
			Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
			Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine
			Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
			f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten
			Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
			verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen
			Aufsichtsbeh&ouml;rde zu.
		</p>
		<p>
			Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns
			wenden.
		</p>
		<h3 class="text-xl font-bold mb-4 mt-6">2. Hosting</h3>
		<p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
		<h4 class="text-lg font-bold mb-2 mt-6">RAIDBOXES</h4>
		<p>
			Anbieter ist die RAIDBOXES GmbH, Hafenstr. 32, 48151 M&uuml;nster (nachfolgend RAIDBOXES) Wenn
			Sie unsere Website besuchen, erfasst RAIDBOXES verschiedene Logfiles inklusive Ihrer
			IP-Adressen.
		</p>
		<p>
			Details entnehmen Sie der Datenschutzerkl&auml;rung von RAIDBOXES: <a
				href="https://raidboxes.io/legal/privacy/"
				target="_blank"
				rel="noopener noreferrer">https://raidboxes.io/legal/privacy/</a
			>.
		</p>
		<p>
			Die Verwendung von RAIDBOXES erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben
			ein berechtigtes Interesse an einer m&ouml;glichst zuverl&auml;ssigen Darstellung unserer
			Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
			ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG,
			soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
			Endger&auml;t des Nutzers (z.&nbsp;B. f&uuml;r Device-Fingerprinting) im Sinne des TTDSG
			umfasst. Die Einwilligung ist jederzeit widerrufbar.
		</p>
		<h3 class="text-xl font-bold mb-4 mt-6">
			3. Allgemeine Hinweise und Pflicht&shy;informationen
		</h3>
		<h4 class="text-lg font-bold mb-2 mt-6">Datenschutz</h4>
		<p>
			Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir
			behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
			Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
		</p>
		<p>
			Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
			Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden
			k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir
			erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
			geschieht.
		</p>
		<p>
			Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der
			Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
			der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">Hinweis zur verantwortlichen Stelle</h4>
		<p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p>
		<p>
			Karsten Rose<br />
			Calenbergerstr. 25<br />
			D-31171 Nordstemmen
		</p>

		<p>
			Telefon: 050694807059<br />
			E-Mail: k.rose@rotrec-energy.com
		</p>
		<p>
			Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder
			gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen
			Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
		</p>

		<h4 class="text-lg font-bold mb-2 mt-6">Speicherdauer</h4>
		<p>
			Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt
			wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
			Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen
			oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
			sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer
			personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche
			Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser
			Gr&uuml;nde.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">
			Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
		</h4>
		<p>
			Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen
			Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
			besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer
			ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener Daten in
			Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1
			lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen
			in Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die
			Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TTDSG. Die Einwilligung
			ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur
			Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten
			auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern
			diese zur Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von
			Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres
			berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im
			Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser
			Datenschutzerkl&auml;rung informiert.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">
			Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
		</h4>
		<p>
			Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen
			datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, k&ouml;nnen
			Ihre personenbezogene Daten in diese Drittstaaten &uuml;bertragen und dort verarbeitet werden.
			Wir weisen darauf hin, dass in diesen L&auml;ndern kein mit der EU vergleichbares
			Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu
			verpflichtet, personenbezogene Daten an Sicherheitsbeh&ouml;rden herauszugeben, ohne dass Sie
			als Betroffener hiergegen gerichtlich vorgehen k&ouml;nnten. Es kann daher nicht
			ausgeschlossen werden, dass US-Beh&ouml;rden (z.&nbsp;B. Geheimdienste) Ihre auf US-Servern
			befindlichen Daten zu &Uuml;berwachungszwecken verarbeiten, auswerten und dauerhaft speichern.
			Wir haben auf diese Verarbeitungst&auml;tigkeiten keinen Einfluss.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
		<p>
			Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung
			m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die
			Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
			unber&uuml;hrt.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">
			Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung
			(Art. 21 DSGVO)
		</h4>
		<p>
			WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN
			SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
			GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH
			F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE,
			AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE
			WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
			VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R
			DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER
			DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
			RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
		</p>
		<p>
			WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE
			DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER
			DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT
			ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE
			PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
			(WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">
			Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde
		</h4>
		<p>
			Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht
			bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
			Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das
			Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
			Rechtsbehelfe.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h4>
		<p>
			Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung
			eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem
			g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
			&Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
			soweit es technisch machbar ist.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">Auskunft, Berichtigung und L&ouml;schung</h4>
		<p>
			Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
			unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft
			und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
			oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
			Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">Recht auf Einschr&auml;nkung der Verarbeitung</h4>
		<p>
			Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
			verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf
			Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:
		</p>
		<ul>
			<li>
				Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
				ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
				der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
				personenbezogenen Daten zu verlangen.
			</li>
			<li>
				Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig
				geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der
				Datenverarbeitung verlangen.
			</li>
			<li>
				Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur
				Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen,
				haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer
				personenbezogenen Daten zu verlangen.
			</li>
			<li>
				Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
				Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht
				feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung
				der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
			</li>
		</ul>
		<p>
			Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen
			diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder
			zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz
			der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines
			wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats
			verarbeitet werden.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">SSL- bzw. TLS-Verschl&uuml;sselung</h4>
		<p>
			Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung
			vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als
			Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte
			Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf
			&bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
		</p>
		<p>
			Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an
			uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.
		</p>
		<h3 class="text-xl font-bold mb-4 mt-6">4. Datenerfassung auf dieser Website</h3>
		<h4 class="text-lg font-bold mb-2 mt-6">Kontaktformular</h4>
		<p>
			Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
			Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
			Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
			nicht ohne Ihre Einwilligung weiter.
		</p>
		<p>
			Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
			Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur
			Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen
			F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
			Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
			Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist
			jederzeit widerrufbar.
		</p>
		<p>
			Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
			L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r
			die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer
			Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere Aufbewahrungsfristen &ndash;
			bleiben unber&uuml;hrt.
		</p>
		<h4 class="text-lg font-bold mb-2 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h4>
		<p>
			Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller
			daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
			Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
			Einwilligung weiter.
		</p>
		<p>
			Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
			Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur
			Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen
			F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
			Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
			Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist
			jederzeit widerrufbar.
		</p>
		<p>
			Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie
			uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
			f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres
			Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche
			Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
		</p>
		<h3 class="text-xl font-bold mb-4 mt-6">5. Plugins und Tools</h3>
		<h4 class="text-lg font-bold mb-2 mt-6">Google Fonts</h4>
		<p>
			Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die
			von Google bereitgestellt werden. Beim Aufruf einer Seite l&auml;dt Ihr Browser die
			ben&ouml;tigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
		</p>
		<p>
			Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google
			aufnehmen. Hierdurch erlangt Google Kenntnis dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse
			diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6
			Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen
			Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung
			abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1
			lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
			oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B.
			Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
		</p>
		<p>
			Wenn Ihr Browser Google Fonts nicht unterst&uuml;tzt, wird eine Standardschrift von Ihrem
			Computer genutzt.
		</p>
		<p>
			Weitere Informationen zu Google Fonts finden Sie unter <a
				href="https://developers.google.com/fonts/faq"
				target="_blank"
				rel="noopener noreferrer">https://developers.google.com/fonts/faq</a
			>
			und in der Datenschutzerkl&auml;rung von Google:
			<a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer"
				>https://policies.google.com/privacy?hl=de</a
			>.
		</p>
		<p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
	</section>
</main>
<footer>
	<div
		class="max-w-7xl px-5 mx-auto py-20 w-full flex justify-between items-start tablet:flex-col tablet:gap-16"
	>
		<div class="flex flex-col gap-5">
			<img class="w-48" src={Logo} alt="Klempner Leipzig 24/7" />
			<div>Rund um die Uhr für <b>SIE</b> da!</div>
		</div>
		<div class="flex flex-col gap-5">
			<a href="tel:012345678" class="flex gap-2 base-bold">
				<img src={Phone24} alt="Anrufen" />
				0123-45678910
			</a>
			<a href="mailto:info@klempner-leipzig-24.de" class="flex gap-2 base-bold">
				<img src={Mail24} alt="Anrufen" />
				info@klempner-leipzig-24.de
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
