import Link from 'next/link'
import { faqs, services, site, zones } from '@/data/site'
import styles from './TriestePremiumHome.module.css'

const method = [
  ['01', 'Descrivi la situazione', 'Bastano posizione, veicolo e problema per capire subito come impostare il recupero.'],
  ['02', 'Organizziamo il mezzo', 'Valutiamo accessi, condizioni e tipo di carico per inviare il carroattrezzi adatto.'],
  ['03', 'Portiamo il veicolo dove vuoi', 'Officina, carrozzeria, abitazione o deposito: la destinazione viene concordata con te.'],
]

export default function TriestePremiumHome() {
  const callHref = 'tel:' + site.tel

  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label={site.name}><img src="/images/brand-trieste.png" alt={site.name} /></Link>
      <nav className={styles.nav}><a href="#servizi">Servizi</a><a href="#territorio">Territorio</a><a href="#faq">Domande</a></nav>
      <a href={callHref} className={styles.headerCta}><span>Assistenza 24H</span>{site.phone}</a>
    </header>

    <section className={styles.hero}>
      <div className={styles.heroPhoto} role="img" aria-label="Carroattrezzi durante un intervento sul lungomare di Trieste" />
      <div className={styles.heroWash} /><div className={styles.glowOne} /><div className={styles.glowTwo} />
      <div className={styles.heroContent}>
        <div className={styles.heroCopy}>
          <p className={styles.overline}><i /> Centrale operativa a Trieste</p>
          <h1>Quando l&apos;auto si ferma,<br /><em>noi ci siamo.</em></h1>
          <p className={styles.lead}>Soccorso stradale, traino e recupero veicoli con una gestione chiara, costruita intorno alla situazione reale e alla destinazione che scegli tu.</p>
          <div className={styles.heroActions}><a href={callHref} className={styles.primary}>Chiama per assistenza <b>{site.phone}</b></a><a href="#servizi" className={styles.tertiary}>Scopri i servizi <span>↓</span></a></div>
        </div>
        <aside className={styles.heroCard}>
          <div className={styles.cardSignal}><span /><b>Disponibili</b><small>24 ore su 24</small></div>
          <p>Un intervento non comincia dal carroattrezzi: comincia da una richiesta capita bene.</p>
          <dl><div><dt>Auto</dt><dd>e furgoni</dd></div><div><dt>Moto</dt><dd>e scooter</dd></div><div><dt>Trieste</dt><dd>e provincia</dd></div></dl>
        </aside>
      </div>
      <div className={styles.heroTicker}><span>SOCCORSO STRADALE</span><i /> <span>TRAINO AUTO</span><i /> <span>RECUPERO VEICOLI</span><i /> <span>ASSISTENZA 24 ORE</span></div>
    </section>

    <section className={styles.statement}>
      <div className={styles.statementMark}>/</div>
      <p className={styles.eyebrow}>Servizio locale, metodo preciso</p>
      <h2>Ogni richiesta merita una risposta <em>concreta.</em></h2>
      <p className={styles.statementText}>Un guasto, una batteria scarica o un incidente non sono mai una voce generica. Per questo partiamo dalle informazioni che contano davvero e organizziamo un recupero pensato per il tuo mezzo, per la strada in cui ti trovi e per il luogo in cui devi arrivare.</p>
      <div className={styles.numberRail}><div><strong>24<sup>H</sup></strong><span>Operativi per urgenze</span></div><div><strong>1</strong><span>Contatto per iniziare</span></div><div><strong>100<sup>%</sup></strong><span>Destinazione concordata</span></div></div>
    </section>

    <section className={styles.visualSplit}>
      <div className={styles.splitImage}><img src="/images/method-recovery.jpg" alt="Tecnico impegnato nel recupero di un veicolo" /><div className={styles.imageStamp}>TS<br /><span>24H</span></div></div>
      <div className={styles.splitCopy}><p className={styles.eyebrow}>Il nostro approccio</p><h2>Prima la situazione.<br />Poi il mezzo giusto.</h2><p>Quando chiami non devi sapere come risolvere tutto da solo. Raccogliamo i dettagli utili, valutiamo l&apos;intervento e ti accompagnamo nella scelta della soluzione piu adatta.</p><p>Questo significa meno passaggi inutili e piu attenzione a cio che serve davvero: recuperare il veicolo in sicurezza e portarlo dove desideri.</p><a href={callHref}>Parla con la centrale <span>→</span></a></div>
    </section>

    <section className={styles.method}><div className={styles.sectionTitle}><p className={styles.eyebrow}>Dalla chiamata al recupero</p><h2>Un processo semplice.<br />Fatto con cura.</h2></div><div className={styles.methodList}>{method.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><i>↘</i></article>)}</div></section>

    <section id="servizi" className={styles.services}><div className={styles.serviceHead}><div><p className={styles.eyebrow}>Cosa possiamo fare per te</p><h2>Il servizio giusto,<br />nel momento giusto.</h2></div><p>Interventi pensati per le situazioni che bloccano davvero una giornata, un viaggio o un lavoro.</p></div><div className={styles.serviceGrid}>{services.map((service, index) => <Link href={'/servizi/' + service.slug + '/'} key={service.slug} className={styles.service}><div className={styles.serviceImage}><img src={'/images/services/' + service.slug + '.jpg'} alt={service.title + ' a Trieste'} /><span>0{index + 1}</span></div><h3>{service.title}</h3><p>{service.text}</p><b>Leggi il servizio <i>→</i></b></Link>)}</div></section>

    <section id="territorio" className={styles.territory}><div className={styles.territoryCopy}><p className={styles.eyebrow}>Dove interveniamo</p><h2>Trieste, il Carso e le strade della provincia.</h2><p>Dal centro al litorale, dalle aree residenziali alle strade di collegamento: la posizione esatta ci permette di organizzare il recupero in modo piu accurato.</p><a href={callHref}>Chiama {site.phone} <span>→</span></a></div><div className={styles.zoneGrid}>{zones.map((zone, index) => <Link href={'/zone/' + zone.slug + '/'} key={zone.slug}><small>{String(index + 1).padStart(2, '0')}</small><b>{zone.name}</b><span>↗</span></Link>)}</div></section>

    <section id="faq" className={styles.faqs}><div className={styles.sectionTitle}><p className={styles.eyebrow}>Dubbi frequenti</p><h2>Le risposte che servono<br />prima di chiamare.</h2></div><div className={styles.faqList}>{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question.replace(' a ', ' a Trieste ')}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></section>

    <section className={styles.closing}><div className={styles.closingOrb} /><p className={styles.eyebrow}>Hai bisogno di assistenza?</p><h2>Torniamo<br /><em>in movimento.</em></h2><p>Parlaci della tua situazione. Da li si costruisce un recupero chiaro, sicuro e adatto al tuo veicolo.</p><a href={callHref}>Chiama ora <b>{site.phone}</b><span>→</span></a></section>

    <footer className={styles.footer}><div><img src="/images/brand-trieste.png" alt={site.name} /><p>Soccorso stradale e recupero veicoli a Trieste e provincia.</p></div><div><b>Contatti</b><a href={callHref}>{site.phone}</a><a href={'mailto:' + site.email}>{site.email}</a><p>{site.address}</p></div><div><b>Servizi</b><Link href="/servizi/soccorso-stradale-24-ore/">Soccorso stradale</Link><Link href="/servizi/traino-auto/">Traino auto</Link><Link href="/servizi/recupero-auto-incidentata/">Recupero veicoli</Link></div></footer>
  </main>
}
