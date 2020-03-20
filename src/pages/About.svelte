<script>
    import {translations, _ } from 'svelte-intl';
    translations.update({
        de: {
            ab_title1: 'Um was es hier geht',
            ab_content1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam dolorem voluptate labore explicabo eaque animi perspiciatis ipsam quae ducimus. Assumenda officia accusantium est facilis autem pariatur iusto excepturi sapiente!',
            ab_title2: 'Warum du mitmachen solltest',
            ab_content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam dolorem voluptate labore explicabo eaque animi perspiciatis ipsam quae ducimus. Assumenda officia accusantium est facilis autem pariatur iusto excepturi sapiente!',
            ab_title3: 'Warum du spenden solltest',
            ab_content3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam dolorem voluptate labore explicabo eaque animi perspiciatis ipsam quae ducimus. Assumenda officia accusantium est facilis autem pariatur iusto excepturi sapiente!',
            ab_title4: 'Wofür deine Spende eingesetzt wird',
            ab_content4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam dolorem voluptate labore explicabo eaque animi perspiciatis ipsam quae ducimus. Assumenda officia accusantium est facilis autem pariatur iusto excepturi sapiente!',
            ab_title5: 'Impressum',
            ab_content5: 'hello@kilianso.com',
            ab_title6: 'Pressekit',
            ab_content6: 'Pressetext, Key Visual',
            ab_title7: 'Quellen',
            ab_content7: 'Icons, Logos, Code',
            ab_title8: 'Privatsphäre',
            ab_content8: 'Privacy by Design...',
        },
        en: {
            ab_title1: 'What this is all about',
            ab_content1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam dolorem voluptate labore explicabo eaque animi perspiciatis ipsam quae ducimus. Assumenda officia accusantium est facilis autem pariatur iusto excepturi sapiente!',
            ab_title2: 'Why you should be part of it',
            ab_content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam dolorem voluptate labore explicabo eaque animi perspiciatis ipsam quae ducimus. Assumenda officia accusantium est facilis autem pariatur iusto excepturi sapiente!',
            ab_title3: 'Why you should donate',
            ab_content3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam dolorem voluptate labore explicabo eaque animi perspiciatis ipsam quae ducimus. Assumenda officia accusantium est facilis autem pariatur iusto excepturi sapiente!',
            ab_title4: 'How your donor will be used',
            ab_content4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam dolorem voluptate labore explicabo eaque animi perspiciatis ipsam quae ducimus. Assumenda officia accusantium est facilis autem pariatur iusto excepturi sapiente!',
            ab_title5: 'Imprint',
            ab_content5: 'hello@kilianso.com',
            ab_title6: 'Presskit',
            ab_content6: 'Pressetext, Key Visual',
            ab_title7: 'Sources',
            ab_content7: 'Icons, Logos, Code',
            ab_title8: 'Privacy',
            ab_content8: 'Privacy by Design...',
        },
    })
</script>

<h2>{$_('ab_title1')}</h2>
<p>{$_('ab_content1')}</p>

<h2>{$_('ab_title2')}</h2>
<p>{$_('ab_content2')}</p>

<h2>{$_('ab_title3')}</h2>
<p>{$_('ab_content3')}</p>

<h2>{$_('ab_title4')}</h2>
<p>{$_('ab_content4')}</p>

<h2>{$_('ab_title5')}</h2>
<p>{$_('ab_content5')}</p>

<h2>{$_('ab_title6')}</h2>
<p>{$_('ab_content6')}</p>

<h2>{$_('ab_title7')}</h2>
<p>{$_('ab_content7')}</p>

<h2>{$_('ab_title8')}</h2>
<p>{$_('ab_content8')}</p>