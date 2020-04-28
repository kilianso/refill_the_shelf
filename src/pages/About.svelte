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
            ab_content4_4: 'Klicke "Jetzt spenden" und wähle eine Zahlungsmethode aus. Falls du per SMS spenden willst, gibst du nun deine Handynummer ein (die ich übrigens nicht speichere, siehe Datenschutz) und bestätige die erhaltene SMS mit JA. ⚠️ Bitte schliesse die Seite nicht, nur so kannst du im Anschluss selbstständig deinen “refill” speichern.',
            ab_content4_5: 'Kehre nun zu Refill the Shelf zurück. Sobald deine Spende erfolgreich überprüft wurde, solltest du eine Bestätigung und deinen Eintrag im Regal sehen.',
            ab_title5: 'Wen kann ich bei Fragen zu meiner Spende kontaktieren?',
            ab_content5: `Falls du eine Spendenbest&auml;tigung erhalten m&ouml;chtest oder Fragen zum Verwendungszweck hast, wende dich bitte direkt an <a href="https://www.caritas.ch/de/spenden/kontakt.html">Caritas Schweiz</a>. Falls du Fragen zu deinem Regal hast, oder irgendetwas beim Spenden-Prozess schiefgelaufen ist, kontaktiere mich direkt via <a href="mailto:hello@kilianso.com">hello@kilianso.com</a>`,
            ab_title6: 'Was ist mit Datenschutz?',
            ab_content6: `Refill the Shelf speichert nur deine Nachricht und die Artikel die du ins Regal legst. Weder deine Telefonnummer, noch deine vollst&auml;ndige IP-Adresse werden gespeichert. In Verwendung sind anonymisierte, rudiment&auml;re Analytics, sodass keine eindeutige Zuordnung zwischen dir als Person und deiner IP m&ouml;glich ist. Die Abwicklung der Zahlung erfolgt direkt via <a href="https://www.raisenow.com/">RaiseNow</a>, einem Schweizer Fundraising Anbieter, an Caritas Schweiz. Raisenow speichert deine Telefonnummer um die Zuordnung deiner Spende und die Abrechnung auf deiner Handyrechnung sicherzustellen. Caritas Schweiz arbeitet bei der SMS-Spendenabwicklung mit <a href="https://fairgive.org/">FairGive</a> zusammen. Der gemeinn&uuml;tzige Verein garantiert den transparenten Spendenfluss zwischen Telekom-Anbietern und Organisation. (Info: FairGive ist ein Verein von RaiseNow). Auf die Spendenliste von RaiseNow hat Refill the Shelf keinen Zugriff und somit auch keinen Einblick in deine Daten. Hier gibt es <a href="https://www.raisenow.com/de-ch/datenschutz">weitere Informationen zum Datenschutz von RaiseNow</a> und hier die <a href="https://www.caritas.ch/de/datenschutz.html">Datenschutzbestimmungen von Caritas Schweiz.</a>`,
            ab_title7: 'Wie kann ich Refill the Shelf unterstützen?',
            ab_content7: 'Hauptsächlich indem du es mit deinen Freunden teilst. Ich freue mich natürlich auch über jegliches, konstruktives Feedback. Falls du dich aktiv an der Weiterentwicklung dieses Projektes beteiligen möchtest, wäre insbesondere Unterstützung in Design, Development oder auch bei der Übersetzung in weitere Sprachen (z.B. Italienisch) hilfreich.',
            ab_title8: 'Haftungsausschluss',
            ab_content8: 'Jegliche Haftung bei technischen, inhaltlichen oder sonstigen Fehlern wird abgelehnt. Bei Spam, Beleidigungen, Hassrede oder sonstigen unpassenden Beiträgen behält sich der Betreiber das Recht vor, dein Regal ohne Ankündigung zu löschen. Der verantwortungsvolle Umgang mit deiner Spende und deinen Daten liegt bei RaiseNow und Caritas Schweiz und nicht beim Betreiber von Refill the Shelf. Mit der Verwendung und der Teilnahme akzeptierst du diese Bedingungen.',
        },
        en: {
            ab_cta: 'Start refilling',
            ab_title1: 'What is Refill the Shelf?',
            ab_content1: 'A collaborative, virtual shelf, which, with a wink, points out the problem of panic buying and at the same time collects donations for all those who are in need due to the Corona crisis.',
            ab_title2: 'What happens with my donation?',
            ab_content2: `Your donation goes directly to Caritas Switzerland. With your contribution, Caritas Switzerland will support numerous families and single people who are in acute need due to the Corona crisis and whose existence is threatened. I do not earn a single centime from your donation and I do not receive any commission from Caritas Switzerland. <a href="https://www.caritas.ch/de/was-wir-sagen/unsere-aktionen/corona-krise-familien-und-alleinstehende-in-akuten-notlagen-brauchen-unsere-hilfe.html">More information about Caritas Switzerland</a>`,
            ab_title3: 'Who is behind the project?',
            ab_content3: `<a href="https://www.linkedin.com/in/kilian-sonnentr%C3%BCcker-020600b2/">Kilian Sonnentr&uuml;cker</a>, Designer &amp; Developer aus Bern. from Bern. Inspired by other hackathons I asked myself how I could use my skills for something meaningful. Neither Caritas Switzerland, nor my employer have asked me to do this in any way. I just wanted to do something and hope to help those affected by this crisis.`,
            ab_title4: 'How do I use Refill the Shelf?',
            ab_content4: 'If you have to read this text, I’ve failed as a designer 😆 Anyway, here is a rough guide:',
            ab_content4_1: 'Go to the main page and click "Start refilling".',
            ab_content4_2: 'Drag articles to the empty shelf. Since you can always see how much your shelf currently costs, you can control the value of your donation.',
            ab_content4_3: 'Choose "Next Step" and add a name (or initials etc.) and leave a nice message. Nobody likes spam: Thank you for respecting that.',
            ab_content4_4: 'Click "Donate now" and choose a payment method. If you\'d like to donate via SMS enter your mobile phone number (which I don\'t save, by the way, see Privacy) and confirm the received SMS with YES. ⚠️ Please don\'t close the page, this is the only way you can save your "refill" on your own after confirming the SMS.',
            ab_content4_5: 'Now return to Refill the Shelf. Once your donation has been successfully verified, you should see a confirmation and your entry on the shelf.',
            ab_title5: 'Who can I contact if I have questions about my donation?',
            ab_content5: `If you would like to receive a donation confirmation or have questions about the purpose of your donation, please contact <a href="https://www.caritas.ch/en/donate/contact.html">Caritas Switzerland</a> directly. If you have any questions about your shelf, or if something went wrong with the donation process, please contact me directly via <a href="mailto:hello@kilianso.com">hello@kilianso.com</a>`,
            ab_title6: 'What about data protection?',
            ab_content6: `Refill the Shelf only stores your message and the items you place on the shelf. Neither your phone number nor your full IP address is stored. We use anonymized, rudimentary analytics, so that no clear allocation between you as a person and your IP is possible. The payment is processed via <a href="https://www.raisenow.com/">RaiseNow</a>, a Swiss fundraising provider, to Caritas Switzerland. Raisenow stores your phone number to ensure the allocation of your donation and the billing on your mobile phone bill. Caritas Switzerland works together with <a href="https://fairgive.org/">FairGive</a> for SMS donation processing. The non-profit association guarantees the transparent flow of donations between telecom providers and the organization. (Info: FairGive is an association of RaiseNow). Refill the Shelf has no access to the donation list of RaiseNow and therefore no insight into your data. Here you can find more information about the <a href="https://www.raisenow.com/en/privacy-policy">data protection of RaiseNow</a> and here the <a href="https://www.caritas.ch/en/privacy-policy.html">data protection regulations of Caritas Switzerland</a>.`,
            ab_title7: 'How can I support Refill the Shelf?',
            ab_content7: 'Mainly by sharing it with your friends. Of course I am also happy about any constructive feedback. If you would like to actively participate in the further development of this project, support in design, development or translation into other languages (e.g. Italian) would be especially helpful.',
            ab_title8: 'Disclaimer',
            ab_content8: 'Any liability for technical, content or other errors is rejected. In case of spam, insults, hate speech or other inappropriate contributions, the operator reserves the right to delete your shelf without notice. The responsible handling of your donation and your data lies with RaiseNow and Caritas Switzerland and not with the operator of Refill the Shelf. By using and participating you accept these conditions.',
        },
        fr: {
            ab_cta: 'Participer',
            ab_title1: 'Qu’est-ce que Refill the Shelf?',
            ab_content1: 'Une étagère virtuelle collaborative qui illustre en un clin d\'œil le problème des achats compulsifs tout en collectant des dons pour tous ceux que la crise du coronavirus plonge dans la détresse.',
            ab_title2: 'Qu’advient-il de mon don?',
            ab_content2: `Ton don va directement &agrave; Caritas Suisse et lui permet de soutenir &agrave; son tour les nombreuses familles et personnes seules qui se sentent menac&eacute;es par la crise du coronavirus. Je ne gagne pas un centime sur cette action et ne re&ccedil;ois aucune commission de Caritas Suisse.<a href="https://www.caritas.ch/fr/faire-un-don/dons/detail/donate/crise-de-corona-en-suisse.html?cHash=ab52553983b0aa59264361cabeb3f6f7"> Plus d&rsquo;informations</a>`,
            ab_title3: 'Qui est à l’origine du projet?',
            ab_content3: `<a href="https://www.linkedin.com/in/kilian-sonnentr%C3%BCcker-020600b2/">Kilian Sonnentr&uuml;cker</a>, un designer et d&eacute;veloppeur domicili&eacute; &agrave; Berne. Inspir&eacute; par d'autres hackathons, je me suis demand&eacute; comment mettre mes comp&eacute;tences au service de quelque chose d'utile. Ni Caritas Suisse, ni mon employeur ne m&rsquo;ont confi&eacute; cette mission. J&rsquo;avais juste envie de faire quelque chose qui puisse aider ceux qui sont touch&eacute;s par cette crise.`,
            ab_title4: 'Comment utiliser Refill the Shelf?',
            ab_content4: 'Si tu dois lire ce texte, c\'est que j\'ai raté quelque chose en tant que designer 😆 Quoi qu\’il en soit, voici dans les grandes lignes la marche à suivre:',
            ab_content4_1: 'Va sur la page principale et clique sur «Participer.',
            ab_content4_2: 'Pose des articles sur l\'étagère vide. Comme le coût actuel de ton étagère apparaît toujours tout de suite, tu peux régler la valeur de ton don.',
            ab_content4_3: 'Sélectionne «Prochaine étape», insère un nom (ou des initiales, etc.) et laisse un message sympa. Personne n\'apprécie les spams... Merci!',
            ab_content4_4: 'Cliques sur "Faire un don" et choisis un mode de paiement. Si tu veux faire un don par SMS, entrer ton numéro de téléphone portable (que je n\'enregistre pas, voir protection des données) et à confirmer la réception du SMS par un OUI. ⚠️ Merci de ne pas fermer la page, c’est ton seul moyen d\'enregistrer toi-même ta « recharge » par la suite.',
            ab_content4_5: 'Retourne maintenant à Refill the Shelf et sélectionne «Finaliser». Dès que ton don a pu être vérifié, tu devrais voir une confirmation et ton apport sur l\'étagère.',
            ab_title5: 'Qui puis-je contacter si j’ai des questions au sujet de mon don?',
            ab_content5: `Si tu aimerais recevoir une attestation de don ou si tu as des questions concernant son affectation, merci de t&rsquo;adresser directement &agrave;<a href="https://www.caritas.ch/fr/faire-un-don/contact.html?type="> Caritas Suisse</a>. Si tu as des questions au sujet de ton &eacute;tag&egrave;re, ou si quelque chose est all&eacute; de travers dans le processus de don, adresse-toi directement &agrave; moi via <a href="mailto:hello@kilianso.com">hello@kilianso.com</a>`,
            ab_title6: 'Qu’en est-il de la protection des données?',
            ab_content6: `Refill the Shelf enregistre uniquement ton message et les articles que tu mets en rayon. Il ne conserve ni ton num&eacute;ro de t&eacute;l&eacute;phone, ni ton adresse IP. Comme il utilise des analyses anonymes et rudimentaires, aucune relation claire ne peut &ecirc;tre &eacute;tablie entre toi en tant que personne et ton IP. Le paiement &agrave; Caritas Suisse passe directement par RaiseNow, un fournisseur suisse de collecte de fonds. Raisenow enregistre ton num&eacute;ro de t&eacute;l&eacute;phone pour garantir l'affectation de ton don et le d&eacute;compte sur ta facture de t&eacute;l&eacute;phone. N&rsquo;ayant pas acc&egrave;s &agrave; la liste des dons de RaiseNow, je ne peux donc pas consulter tes donn&eacute;es.<a href="https://www.raisenow.com/fr-ch/privacy-policy"> Plus d&rsquo;informations sur la protection des donn&eacute;es de RaiseNow</a>.`,
            ab_title7: 'Comment puis-je soutenir Refill the Shelf?',
            ab_content7: 'Principalement en le partageant avec tes amis. J’apprécie naturellement aussi chaque commentaire constructif. Si tu souhaites participer activement à l’évolution de ce projet, une aide serait particulièrement utile pour la conception, le développement ou la traduction dans d\'autres langues.',
            ab_title8: 'Décharge',
            ab_content8: 'Refill the Shelf décline toute responsabilité pour des erreurs techniques, de contenu ou autres. En cas de spam, d\'insultes, de propos haineux ou d\'autres remarques inappropriées, l\'opérateur se réserve le droit de supprimer ton étagère sans préavis. C’est à RaiseNow et à Caritas Suisse et non à l\'opérateur de Refill the Shelf qu\'il incombe d’assurer un traitement responsable de ton don et de tes données. Par l\'utilisation de cette plateforme et par ta participation, tu acceptes ces conditions.'
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
    
    <h4>{$_('ab_title8')}</h4>
    <p>{$_('ab_content8')}</p>

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
