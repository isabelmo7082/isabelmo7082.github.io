import Image from "next/image";

const scholar = "https://scholar.google.com/citations?user=vJ7KvzkAAAAJ&hl=en";

const research = [
  {
    number: "01",
    title: "Selective resource recovery",
    text: "Engineering ligand-functionalized metal-organic frameworks and ion-exchange membranes to recover rare earth elements and lithium from complex brines.",
    tags: ["Rare earth elements", "Lithium", "MOFs & electrodialysis"],
  },
  {
    number: "02",
    title: "Water–material interfaces",
    text: "Understanding and controlling nucleation, scaling, and molecular transport where water meets membranes, electrodes, and heat-transfer surfaces.",
    tags: ["Interfacial science", "Electrochemistry", "Mineral scaling"],
  },
  {
    number: "03",
    title: "Circular brine systems",
    text: "Reimagining hypersaline water as a source of water, energy, and materials through high-recovery separations and efficient process design.",
    tags: ["Membrane distillation", "Desalination", "Process intensification"],
  },
];

const publications = [
  {
    year: "2025",
    journal: "Nature Communications",
    title: "Mitigating CaCO₃ crystal nucleation and growth through continuous ion displacement via alternating electric fields",
    note: "Electrical control of mineral scaling",
    href: "https://doi.org/10.1038/s41467-024-55176-z",
  },
  {
    year: "2025",
    journal: "Nature Communications",
    title: "A rationally designed scalable thin film nanocomposite cation exchange membrane for precise lithium extraction",
    note: "Next-generation selective electrodialysis",
    href: scholar,
  },
  {
    year: "2025",
    journal: "Chemical Society Reviews",
    title: "Reactive carbon capture using saline water: evaluation of prospective sources, processes, and products",
    note: "Saline water as a carbon-management resource",
    href: scholar,
  },
  {
    year: "2024",
    journal: "ACS Sustainable Chemistry & Engineering",
    title: "ZeroCAL: Eliminating carbon dioxide emissions from limestone’s decomposition to decarbonize cement production",
    note: "Low-carbon materials processing",
    href: "https://doi.org/10.1021/acssuschemeng.4c03193",
  },
  {
    year: "2023",
    journal: "Environmental Science & Technology",
    title: "Multistage surface-heated vacuum membrane distillation process enables high water recovery and excellent heat utilization",
    note: "Heat-efficient hypersaline desalination",
    href: scholar,
  },
  {
    year: "2022",
    journal: "Water Research",
    title: "Desalinating a real hyper-saline pre-treated produced water via direct-heat vacuum membrane distillation",
    note: "Real-water validation at high recovery",
    href: scholar,
  },
];

const links = [
  ["Google Scholar", scholar],
  ["ORCID", "https://orcid.org/0000-0003-4761-5531"],
  ["GitHub", "https://github.com/yimingliu100-dev"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Yiming Liu, home">
          <span className="brand-mark">YL</span>
          <span>Yiming Liu</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#about">About</a>
          <a href="/Yiming-Liu-CV.pdf" target="_blank">CV</a>
          <a href="#connect">Connect</a>
        </nav>
        <a className="header-cta" href="mailto:yimingliu@rice.edu">Let’s talk <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Environmental engineer · Interfacial scientist</p>
          <h1>Building circular<br />water systems<br /><em>from the interface up.</em></h1>
          <p className="hero-deck">I develop materials and processes that make selective resource recovery, high-recovery desalination, and sustainable chemical production possible.</p>
          <div className="hero-actions">
            <a className="button primary" href="#research">Explore the research <span>↓</span></a>
            <a className="button text-link" href={scholar} target="_blank" rel="noreferrer">View publications <span>↗</span></a>
            <a className="button text-link" href="/Yiming-Liu-CV.pdf" target="_blank">Download CV <span>↓</span></a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <Image src="/yiming-liu.png" alt="Yiming Liu outdoors in spring" fill priority sizes="(max-width: 800px) 90vw, 38vw" />
          </div>
          <div className="status-card">
            <span className="pulse" />
            <div><strong>Rice Academy Postdoctoral Fellow</strong><small>Rice University · Houston, Texas</small></div>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
      </section>

      <section className="signal-strip" aria-label="Research focus">
        <span>Water</span><i>×</i><span>Materials</span><i>×</i><span>Energy</span><i>×</i><span>Circularity</span>
      </section>

      <section className="section research-section" id="research">
        <div className="section-intro">
          <p className="eyebrow"><span /> Research program</p>
          <h2>Engineering the moments<br />where matter meets water.</h2>
          <p>Our hardest water challenges are often interfacial. I combine fundamental science, materials design, and systems thinking to turn those interfaces into levers for circularity.</p>
        </div>
        <div className="research-grid">
          {research.map((item) => (
            <article className="research-card" key={item.number}>
              <div className="card-top"><span>{item.number}</span><span className="mini-arrow">↗</span></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section publication-section" id="publications">
        <div className="publication-heading">
          <div>
            <p className="eyebrow light"><span /> Selected work</p>
            <h2>Research with<br />real-world reach.</h2>
          </div>
          <a className="button outline-light" href={scholar} target="_blank" rel="noreferrer">All publications <span>↗</span></a>
        </div>
        <div className="publication-list">
          {publications.map((pub) => (
            <a className="publication" key={pub.title} href={pub.href} target="_blank" rel="noreferrer">
              <div className="pub-meta"><span>{pub.year}</span><strong>{pub.journal}</strong></div>
              <div className="pub-title"><h3>{pub.title}</h3><p>{pub.note}</p></div>
              <span className="pub-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-quote">
          <p className="eyebrow"><span /> About Yiming</p>
          <blockquote>“The best environmental technologies don’t just remove a problem—they recover value and redesign the system around it.”</blockquote>
        </div>
        <div className="about-copy">
          <p>Yiming Liu is an environmental engineer and interfacial scientist working across water, critical-mineral, and energy circularity. As a Rice Academy Postdoctoral Fellow advised by Professor Qilin Li and mentored by Professor Pedro J. J. Alvarez, he develops selective electrodialysis for lithium extraction and ligand-functionalized metal-organic frameworks for rare earth recovery.</p>
          <p>He earned his Ph.D. and M.S. in Civil and Environmental Engineering from UCLA and his B.E. in Environmental Engineering from Tsinghua University. His doctoral work combined membrane process engineering, heat and mass transfer, electrochemistry, and water chemistry to advance sustainable brine management.</p>
          <div className="education">
            <div><span>2023</span><strong>Ph.D., Civil & Environmental Engineering</strong><small>University of California, Los Angeles</small></div>
            <div><span>2019</span><strong>M.S., Civil & Environmental Engineering</strong><small>University of California, Los Angeles</small></div>
            <div><span>2018</span><strong>B.S., Environmental Engineering</strong><small>Tsinghua University</small></div>
          </div>
        </div>
      </section>

      <section className="section recognition-section">
        <div>
          <p className="eyebrow"><span /> Recognition</p>
          <h2>Ideas backed<br />by momentum.</h2>
        </div>
        <div className="awards">
          <div><span>2026</span><strong>Founding President Best Paper Award</strong><small>Chinese-American Professors in Environmental Engineering and Science</small></div>
          <div><span>2025</span><strong>Outstanding Oral Presentation Award</strong><small>19th Chinese Environmental Conference</small></div>
          <div><span>2023</span><strong>Rice Academy Postdoctoral Fellowship</strong><small>Rice University</small></div>
          <div><span>2023</span><strong>University Fellowship</strong><small>UCLA</small></div>
          <div><span>2021</span><strong>2nd Place, Internet of Water De Nora Idea Challenge</strong><small>Water innovation competition</small></div>
          <div><span>2017–18</span><strong>Academic Excellence Award</strong><small>Tsinghua University</small></div>
        </div>
      </section>

      <section className="section academic-life-section">
        <article>
          <p className="eyebrow"><span /> Teaching & mentoring</p>
          <h2>Growing the next<br />generation of researchers.</h2>
          <p>Guest lecturer at Rice University and UCLA, with research mentoring experience spanning Ph.D., master’s, undergraduate, and high-school researchers in environmental engineering, chemistry, biology, and chemical engineering.</p>
          <div className="metric-row"><strong>7</strong><span>research mentees<br />across Rice & UCLA</span></div>
        </article>
        <article>
          <p className="eyebrow"><span /> Service & leadership</p>
          <h2>Science is a<br />shared enterprise.</h2>
          <p>Early-career professionals’ chair for the International Water Association Nano & Water Specialist Group, conference organizer and session co-chair, grant reviewer, poster judge, and technical adviser to a clean-technology startup.</p>
          <div className="metric-row"><strong>5+</strong><span>professional societies<br />and service communities</span></div>
        </article>
      </section>

      <section className="connect-section" id="connect">
        <div className="connect-copy">
          <p className="eyebrow light"><span /> Build what’s next</p>
          <h2>Let’s make water<br /><em>work in circles.</em></h2>
          <p>I welcome conversations with researchers, students, and partners working on water–material interfaces, selective separations, and circular resource systems.</p>
          <a className="button ivory" href="mailto:yimingliu@rice.edu">Start a conversation <span>↗</span></a>
        </div>
        <div className="connect-links">
          {links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer"><span>{label}</span><b>↗</b></a>)}
          <a href="/Yiming-Liu-CV.pdf" target="_blank"><span>Curriculum vitae</span><b>↓</b></a>
          <a href="mailto:yimingliu@rice.edu"><span>Email</span><b>↗</b></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">YL</span><span>Yiming Liu</span></a>
        <p>Interfacial science for circular water systems.</p>
        <p>© 2026 Yiming Liu</p>
      </footer>
    </main>
  );
}
