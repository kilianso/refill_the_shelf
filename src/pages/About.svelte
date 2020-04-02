<script>
    import Link from '../components/Base/Link.svelte';
    import {translations, _ } from 'svelte-intl';
    translations.update({
        de: {
            ab_cta: 'Jetzt mitmachen',
            ab_title1: 'Was ist Refill the Shelf?',
            ab_content1: 'Ein kollaboratives, virtuelles Regal, das mit einem Augenzwinkern auf die Problematik der Hamsterkäufe hinweist und gleichzeitig Spenden sammelt für all jene, die durch die Corona-Krise in Not sind.',
            ab_title2: 'Was passiert mit meiner Spende?',
            ab_content2: `Deine Spende fliesst direkt an Caritas Schweiz. Diese unterst&uuml;tzt mit deinem Beitrag zahlreiche Familien und Alleinstehende, die sich aufgrund der Corona-Krise in akuter Notlage befinden und sich in ihrer Existenz bedroht sehen. Ich verdiene an deiner Spende keinen einzigen Rappen und erhalte auch keine Provision von Caritas Schweiz. <a href="https://www.caritas.ch/de/was-wir-sagen/unsere-aktionen/corona-krise-familien-und-alleinstehende-in-akuten-notlagen-brauchen-unsere-hilfe.html">Mehr Informationen</a>`,
            ab_title3: 'Wer steckt hinter dem Projekt?',
            ab_content3: `<a href="https://www.linkedin.com/in/kilian-sonnentr%C3%BCcker-020600b2/">Kilian Sonnentr&uuml;cker</a>, Designer &amp; Developer aus Bern. Inspiriert durch andere Hackathons habe ich mich gefragt, wie ich meine F&auml;higkeiten f&uuml;r etwas sinnvolles einsetzen kann. Weder Caritas Schweiz, noch mein Arbeitgeber haben mich in irgendeiner Weise damit beauftragt. Ich hatte einfach Bock etwas zu machen und hoffe damit Betroffenen in dieser Krise zu helfen.`,
            ab_title4: 'Wie bediene ich Refill the Shelf?',
            ab_content4: 'Wenn du diesen Text lesen musst, habe ich als Designer versagt. 😆 Wie auch immer, hier eine grobe Anleitung:',
            ab_content4_1: 'Gehe zur Hauptseite und klicke “Jetzt mitmachen”.',
            ab_content4_2: 'Ziehe Artikel ins leere Regal. Da du immer sofort siehst, wie viel dein Regal aktuell kostet, kannst du so den Wert deiner Spende regulieren.',
            ab_content4_3: 'Wähle “Nächster Schritt” und füge einen Namen (oder auch Initialen etc.) ein und hinterlass eine nette Nachricht. Spam findet niemand toll: Danke, dass auch du darauf verzichtest.',
            ab_content4_4: 'Im nächsten Schritt gibst du nun deine Handynummer ein (die ich übrigens nicht speichere, siehe Datenschutz) und bestätige die erhaltene SMS mit JA. ⚠️ Bitte schliesse die Seite nicht, nur so kannst du im Anschluss selbstständig deinen “refill” speichern.',
            ab_content4_5: 'Kehre nun zu Refill the Shelf zurück und wähle “Abschliessen”. Sobald deine SMS-Spende erfolgreich überprüft wurde, solltest du eine Bestätigung und deinen Eintrag im Regal sehen.',
            ab_title5: 'Wen kann ich bei Fragen zu meiner Spende kontaktieren?',
            ab_content5: `Falls du eine Spendenbest&auml;tigung erhalten m&ouml;chtest oder Fragen zum Verwendungszweck hast, wende dich bitte direkt an <a href="https://www.caritas.ch/de/spenden/kontakt.html">Caritas Schweiz</a>. Falls du Fragen zu deinem Regal hast, oder irgendetwas beim Spenden-Prozess schiefgelaufen ist, kontaktiere mich direkt via <a href="mailto:hello@kilianso.com">hello@kilianso.com</a>`,
            ab_title6: 'Was ist mit Datenschutz?',
            ab_content6: `Refill the Shelf speichert nur deine Nachricht und die Artikel die du ins Regal legst. Weder deine Telefonnummer, noch deine vollst&auml;ndige IP-Adresse werden gespeichert. In Verwendung sind anonymisierte, rudiment&auml;re Analytics, sodass keine eindeutige Zuordnung zwischen dir als Person und deiner IP m&ouml;glich ist. Die Abwicklung der Zahlung erfolgt direkt via <a href="https://www.raisenow.com/">RaiseNow</a>, einem Schweizer Fundraising Anbieter, an Caritas Schweiz. Raisenow speichert deine Telefonnummer um die Zuordnung deiner Spende und die Abrechnung auf deiner Handyrechnung sicherzustellen. Caritas Schweiz arbeitet bei der SMS-Spendenabwicklung mit <a href="https://fairgive.org/">FairGive</a> zusammen. Der gemeinn&uuml;tzige Verein garantiert den transparenten Spendenfluss zwischen Telekom-Anbietern und Organisation. (Info: FairGive ist ein Verein von RaiseNow). Auf die Spendenliste von RaiseNow hat Refill the Shelf keinen Zugriff und somit auch keinen Einblick in deine Daten. Hier gibt es <a href="https://www.raisenow.com/de-ch/datenschutz">weitere Informationen zum Datenschutz von RaiseNow</a> und hier die <a href="https://www.caritas.ch/de/datenschutz.html">Datenschutzbestimmungen von Caritas Schweiz.</a>`,
            ab_title7: 'Wie kann ich Refill the Shelf unterstützen?',
            ab_content7: 'Hauptsächlich indem du es mit deinen Freunden teilst. Ich freue mich natürlich auch über jegliches, konstruktives Feedback. Falls du dich aktiv an der Weiterentwicklung dieses Projektes beteiligen möchtest, wäre insbesondere Unterstützung in Design, Development oder auch bei der Übersetzung in weitere Sprachen (z.B. Italienisch) hilfreich.',
        },
        en: {
            ab_cta: 'Start refilling',
            ab_title1: 'What is Refill the Shelf?',
            ab_content1: 'A collaborative, virtual shelf, which, with a wink, points out the problem of panic buying and at the same time collects donations for all those who are in need due to the Corona crisis.',
            ab_title2: 'What happens with my donation?',
            ab_content2: `Your donation goes directly to Caritas Switzerland. With your contribution, Caritas Switzerland will support numerous families and single people who are in acute need due to the Corona crisis and whose existence is threatened. I do not earn a single centime from your donation and I do not receive any commission from Caritas Switzerland. <a href="https://www.caritas.ch/de/was-wir-sagen/unsere-aktionen/corona-krise-familien-und-alleinstehende-in-akuten-notlagen-brauchen-unsere-hilfe.html">More information about Caritas Switzerland</a>`,
            ab_title3: 'Who is behind the project?',
            ab_content3: `<a href="https://www.linkedin.com/in/kilian-sonnentr%C3%BCcker-020600b2/">Kilian Sonnentr&uuml;cker</a>, Designer &amp; Developer aus Bern. from Bern. Inspired by other hackathons I asked myself how I could use my skills for something meaningful. Neither Caritas Switzerland, nor my employer have asked me to do this in any way. I just wanted to do something and hope to help those affected by this crisis.`,
            ab_title4: 'How do I serve Refill the Shelf?',
            ab_content4: 'If you have to read this text, I’ve failed as a designer 😆 Anyway, here is a rough guide:',
            ab_content4_1: 'Go to the main page and click "Start refilling".',
            ab_content4_2: 'Drag articles to the empty shelf. Since you can always see how much your shelf currently costs, you can control the value of your donation.',
            ab_content4_3: 'Choose "Next Step" and add a name (or initials etc.) and leave a nice message. Nobody likes spam: Thank you for respecting that.',
            ab_content4_4: 'In the next step, enter your mobile phone number (which I don\'t save, by the way, see Privacy) and confirm the received SMS with YES. ⚠️ Please don\'t close the page, this is the only way you can save your "refill" on your own after confirming the SMS.',
            ab_content4_5: 'Now return to Refill the Shelf and select "Donate now". Once your SMS donation has been successfully verified, you should see a confirmation and your entry on the shelf.',
            ab_title5: 'Who can I contact if I have questions about my donation?',
            ab_content5: `If you would like to receive a donation confirmation or have questions about the purpose of your donation, please contact <a href="https://www.caritas.ch/en/donate/contact.html">Caritas Switzerland</a> directly. If you have any questions about your shelf, or if something went wrong with the donation process, please contact me directly via <a href="mailto:hello@kilianso.com">hello@kilianso.com</a>`,
            ab_title6: 'What about data protection?',
            ab_content6: `Refill the Shelf only stores your message and the items you place on the shelf. Neither your phone number nor your full IP address is stored. We use anonymized, rudimentary analytics, so that no clear allocation between you as a person and your IP is possible. The payment is processed via <a href="https://www.raisenow.com/">RaiseNow</a>, a Swiss fundraising provider, to Caritas Switzerland. Raisenow stores your phone number to ensure the allocation of your donation and the billing on your mobile phone bill. Caritas Switzerland works together with <a href="https://fairgive.org/">FairGive</a> for SMS donation processing. The non-profit association guarantees the transparent flow of donations between telecom providers and the organization. (Info: FairGive is an association of RaiseNow). Refill the Shelf has no access to the donation list of RaiseNow and therefore no insight into your data. Here you can find more information about the <a href="https://www.raisenow.com/en/privacy-policy">data protection of RaiseNow</a> and here the <a href="https://www.caritas.ch/en/privacy-policy.html">data protection regulations of Caritas Switzerland</a>.`,
            ab_title7: 'How can I support Refill the Shelf?',
            ab_content7: 'Mainly by sharing it with your friends. Of course I am also happy about any constructive feedback. If you would like to actively participate in the further development of this project, support in design, development or translation into other languages (e.g. Italian) would be especially helpful.',
        },
        fr: {
            ab_cta: 'Start refilling',
            ab_title1: 'What is Refill the Shelf?',
            ab_content1: 'A collaborative, virtual shelf, which, with a wink, points out the problem of panic buying and at the same time collects donations for all those who are in need due to the Corona crisis.',
            ab_title2: 'What happens with my donation?',
            ab_content2: `Your donation goes directly to Caritas Switzerland. With your contribution, Caritas Switzerland will support numerous families and single people who are in acute need due to the Corona crisis and whose existence is threatened. I do not earn a single centime from your donation and I do not receive any commission from Caritas Switzerland. <a href="https://www.caritas.ch/de/was-wir-sagen/unsere-aktionen/corona-krise-familien-und-alleinstehende-in-akuten-notlagen-brauchen-unsere-hilfe.html">More information about Caritas Switzerland</a>`,
            ab_title3: 'Who is behind the project?',
            ab_content3: `<a href="https://www.linkedin.com/in/kilian-sonnentr%C3%BCcker-020600b2/">Kilian Sonnentr&uuml;cker</a>, Designer &amp; Developer aus Bern. from Bern. Inspired by other hackathons I asked myself how I could use my skills for something meaningful. Neither Caritas Switzerland, nor my employer have asked me to do this in any way. I just wanted to do something and hope to help those affected by this crisis.`,
            ab_title4: 'How do I serve Refill the Shelf?',
            ab_content4: 'If you have to read this text, I’ve failed as a designer 😆 Anyway, here is a rough guide:',
            ab_content4_1: 'Go to the main page and click "Start refilling".',
            ab_content4_2: 'Drag articles to the empty shelf. Since you can always see how much your shelf currently costs, you can control the value of your donation.',
            ab_content4_3: 'Choose "Next Step" and add a name (or initials etc.) and leave a nice message. Nobody likes spam: Thank you for respecting that.',
            ab_content4_4: 'In the next step, enter your mobile phone number (which I don\'t save, by the way, see Privacy) and confirm the received SMS with YES. ⚠️ Please don\'t close the page, this is the only way you can save your "refill" on your own after confirming the SMS.',
            ab_content4_5: 'Now return to Refill the Shelf and select "Donate now". Once your SMS donation has been successfully verified, you should see a confirmation and your entry on the shelf.',
            ab_title5: 'Who can I contact if I have questions about my donation?',
            ab_content5: `If you would like to receive a donation confirmation or have questions about the purpose of your donation, please contact <a href="https://www.caritas.ch/en/donate/contact.html">Caritas Switzerland</a> directly. If you have any questions about your shelf, or if something went wrong with the donation process, please contact me directly via <a href="mailto:hello@kilianso.com">hello@kilianso.com</a>`,
            ab_title6: 'What about data protection?',
            ab_content6: `Refill the Shelf only stores your message and the items you place on the shelf. Neither your phone number nor your full IP address is stored. We use anonymized, rudimentary analytics, so that no clear allocation between you as a person and your IP is possible. The payment is processed via <a href="https://www.raisenow.com/">RaiseNow</a>, a Swiss fundraising provider, to Caritas Switzerland. Raisenow stores your phone number to ensure the allocation of your donation and the billing on your mobile phone bill. Caritas Switzerland works together with <a href="https://fairgive.org/">FairGive</a> for SMS donation processing. The non-profit association guarantees the transparent flow of donations between telecom providers and the organization. (Info: FairGive is an association of RaiseNow). Refill the Shelf has no access to the donation list of RaiseNow and therefore no insight into your data. Here you can find more information about the <a href="https://www.raisenow.com/en/privacy-policy">data protection of RaiseNow</a> and here the <a href="https://www.caritas.ch/en/privacy-policy.html">data protection regulations of Caritas Switzerland</a>.`,
            ab_title7: 'How can I support Refill the Shelf?',
            ab_content7: 'Mainly by sharing it with your friends. Of course I am also happy about any constructive feedback. If you would like to actively participate in the further development of this project, support in design, development or translation into other languages (e.g. Italian) would be especially helpful.',
        },
    })

    let content_list = $_('ab_content_list');
</script>
<section class="about__content">
    <h2>{$_('ab_title1')}</h2>
    <p>{$_('ab_content1')}</p>

    <h2>{$_('ab_title2')}</h2>
    <p>{@html $_('ab_content2')}</p>

    <h2>{$_('ab_title3')}</h2>
    <p>{@html $_('ab_content3')}</p>

    <h2>{$_('ab_title4')}</h2>
    <p>{$_('ab_content4')}</p>
    <ol>
        <li>{$_('ab_content4_1')}</li>
        <li>{$_('ab_content4_2')}</li>
        <li>{$_('ab_content4_3')}</li>
        <li>{$_('ab_content4_4')}</li>
        <li>{$_('ab_content4_5')}</li>
    </ol>
    <h2>{$_('ab_title5')}</h2>
    <p>{@html $_('ab_content5')}</p>

    <h2>{$_('ab_title6')}</h2>
    <p>{@html $_('ab_content6')}</p>

    <h2>{$_('ab_title7')}</h2>
    <p>{$_('ab_content7')}</p>

    <h4>Imprint</h4>
    <p>Kilian Sonnentr&uuml;cker<br>
        <a href="mailto:hello@kilianso.com">hello@kilianso.com</a><br>
        <a href="https://kilianso.com">kilianso.com</a><br>
        <a href="https://twitter.com/kilian_so">@kilian_so</a>
    </p>
    <h4>Sources</h4>
    <p>Social Icons &mdash; Icons8 <br />
    <a href="https://www.flaticon.com/free-icon/toilet-roll_2737882?term=toilet%20paper&amp;page=1&amp;position=36">Toiletpaper</a>, 
    <a href="https://www.flaticon.com/free-icon/pasta_1919318?term=pasta&amp;page=1&amp;position=40">Pasta</a>, 
    <a href="https://www.flaticon.com/free-icon/canned-food_2082507">Can</a>, <a href="https://www.flaticon.com/free-icon/olive-oil_755270?term=olive%20oil&amp;page=1&amp;position=21">Oil</a>, 
    <a href="https://www.flaticon.com/free-icon/wheat_1669076?term=wheat%20flour&amp;page=1&amp;position=5">Sanatizer</a>, 
    <a href="https://www.flaticon.com/free-icon/medical_2610572?term=face%20mask&amp;page=1&amp;position=3">Mask</a>, 
    <a href="https://www.flaticon.com/free-icon/soap_2635860?term=soap&amp;page=2&amp;position=23">Soap</a> &mdash; Flaticons</p>
    <p><a href="https://codepen.io/lilianqian/pen/OxzeyZ">Celebration Animation</a></p>
    <div class="buttons">
        <Link linkClass={'btn btn--primary'} page={{path: '/creation', name: $_('ab_cta')}}/>
    </div>
</section>
