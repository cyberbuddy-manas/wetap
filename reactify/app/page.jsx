import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brandRow}>
          <div style={styles.logoMark}>W</div>
          <span style={styles.brandText}>WeTap</span>
        </div>

        <nav style={styles.nav}>
          <a href="#how" style={styles.navLink}>
            How it works
          </a>
          <a href="#features" style={styles.navLink}>
            Features
          </a>
          <a href="#pricing" style={styles.navLink}>
            Pricing
          </a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.h1}>
            Your place. One link.
            <span style={styles.h1Accent}> Tap.</span>
          </h1>

          <p style={styles.lead}>
            WeTap creates a smart landing page for restaurants and venues —
            menu, reviews, Wi-Fi, socials, directions — all in one beautiful
            page.
          </p>

          <div style={styles.ctaRow}>
            <Link href="/gusto" style={{ ...styles.btn, ...styles.btnPrimary }}>
              View Demo (/gusto)
            </Link>
            <a href="#how" style={{ ...styles.btn, ...styles.btnSecondary }}>
              See how it works
            </a>
          </div>

          <div style={styles.miniRow}>
            <div style={styles.miniCard}>
              <div style={styles.miniTitle}>Clean URLs</div>
              <div style={styles.miniText}>wetap.pro/gusto</div>
            </div>
            <div style={styles.miniCard}>
              <div style={styles.miniTitle}>Subdomains</div>
              <div style={styles.miniText}>gusto.wetap.pro</div>
            </div>
            <div style={styles.miniCard}>
              <div style={styles.miniTitle}>SEO Ready</div>
              <div style={styles.miniText}>SSR + Metadata</div>
            </div>
          </div>
        </div>

        <div style={styles.heroRight} aria-hidden="true">
          <div style={styles.mock}>
            <div style={styles.mockTop}>
              <div style={styles.mockDot} />
              <div style={styles.mockDot} />
              <div style={styles.mockDot} />
            </div>
            <div style={styles.mockBody}>
              <div style={styles.mockAvatar} />
              <div style={styles.mockLineLg} />
              <div style={styles.mockLine} />
              <div style={styles.mockButtons}>
                <div style={styles.mockBtn} />
                <div style={styles.mockBtn} />
                <div style={styles.mockBtn} />
                <div style={styles.mockBtn} />
              </div>
              <div style={styles.mockFooter} />
            </div>
          </div>
        </div>
      </section>

      <section id="how" style={styles.section}>
        <h2 style={styles.h2}>How it works</h2>
        <div style={styles.steps}>
          <Step
            n="1"
            title="Create a slug"
            text="Example: gusto. This becomes your page URL."
          />
          <Step
            n="2"
            title="Add your place data"
            text="Menu, Wi-Fi, links, hours — stored locally now, DB later."
          />
          <Step
            n="3"
            title="Share one link"
            text="QR code at the table, Instagram bio, Google listing."
          />
        </div>
      </section>

      <section id="features" style={styles.section}>
        <h2 style={styles.h2}>Features</h2>
        <div style={styles.grid}>
          <Feature
            title="Digital menu"
            text="Link to PDF or your menu page. Fast and simple."
          />
          <Feature
            title="Wi-Fi modal"
            text="Guests can view and copy the password with one tap."
          />
          <Feature
            title="Calls to action"
            text="Call, directions, reviews, socials — all in one place."
          />
          <Feature
            title="SEO-friendly"
            text="Server-rendered pages with metadata for Google."
          />
          <Feature
            title="Subdomain support"
            text="gusto.wetap.pro maps to /gusto using proxy/middleware."
          />
          <Feature
            title="Easy to scale"
            text="Local files today. Swap data layer to DB later."
          />
        </div>
      </section>

      <section id="pricing" style={styles.section}>
        <h2 style={styles.h2}>Pricing</h2>
        <div style={styles.pricingRow}>
          <div style={styles.priceCard}>
            <div style={styles.priceTop}>
              <div style={styles.priceName}>Starter</div>
              <div style={styles.priceValue}>€0</div>
            </div>
            <div style={styles.priceDesc}>
              Perfect for testing your first page.
            </div>
            <ul style={styles.list}>
              <li>1 place page</li>
              <li>Menu + links</li>
              <li>Basic SEO</li>
            </ul>
            <Link
              href="/gusto"
              style={{ ...styles.btn, ...styles.btnSecondary, width: "100%" }}
            >
              Open Demo
            </Link>
          </div>

          <div style={{ ...styles.priceCard, ...styles.priceCardHighlight }}>
            <div style={styles.badge}>Most popular</div>
            <div style={styles.priceTop}>
              <div style={styles.priceName}>Pro</div>
              <div style={styles.priceValue}>€9</div>
            </div>
            <div style={styles.priceDesc}>
              For active restaurants and lounges.
            </div>
            <ul style={styles.list}>
              <li>Unlimited links</li>
              <li>Wi-Fi + reservation modal</li>
              <li>Subdomain support</li>
            </ul>
            <a
              href="#contact"
              style={{ ...styles.btn, ...styles.btnPrimary, width: "100%" }}
            >
              Get WeTap
            </a>
          </div>

          <div style={styles.priceCard}>
            <div style={styles.priceTop}>
              <div style={styles.priceName}>Enterprise</div>
              <div style={styles.priceValue}>Custom</div>
            </div>
            <div style={styles.priceDesc}>
              For chains and multi-location brands.
            </div>
            <ul style={styles.list}>
              <li>Multi-location setup</li>
              <li>DB + dashboard</li>
              <li>Custom integrations</li>
            </ul>
            <a
              href="#contact"
              style={{ ...styles.btn, ...styles.btnSecondary, width: "100%" }}
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <div style={styles.contactCard}>
          <h2 style={{ ...styles.h2, marginBottom: 10 }}>
            Ready to launch your page?
          </h2>
          <p style={styles.leadSmall}>
            Start with a single slug like <b>/gusto</b> and expand later. Clean,
            fast, and SEO-ready.
          </p>
          <div style={styles.ctaRow}>
            <Link href="/gusto" style={{ ...styles.btn, ...styles.btnPrimary }}>
              View Demo
            </Link>
            <a
              href="mailto:hello@wetap.pro"
              style={{ ...styles.btn, ...styles.btnSecondary }}
            >
              Contact: hello@wetap.pro
            </a>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <span>© {new Date().getFullYear()} WeTap</span>
        <span style={styles.footerDot}>•</span>
        <span>One tap. Everything.</span>
      </footer>
    </main>
  );
}

function Step({ n, title, text }) {
  return (
    <div style={styles.stepCard}>
      <div style={styles.stepN}>{n}</div>
      <div>
        <div style={styles.stepTitle}>{title}</div>
        <div style={styles.stepText}>{text}</div>
      </div>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div style={styles.featureCard}>
      <div style={styles.featureTitle}>{title}</div>
      <div style={styles.featureText}>{text}</div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b0d10",
    color: "#e9eef7",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
  },
  header: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "20px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandRow: { display: "flex", alignItems: "center", gap: 10 },
  logoMark: {
    width: 34,
    height: 34,
    borderRadius: 10,
    background: "linear-gradient(135deg, #2a6bff, #8a2be2)",
    display: "grid",
    placeItems: "center",
    fontWeight: 800,
  },
  brandText: { fontWeight: 800, letterSpacing: 0.3 },
  nav: { display: "flex", gap: 16, opacity: 0.9 },
  navLink: { color: "#e9eef7", textDecoration: "none", fontSize: 14 },

  hero: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "36px 18px 10px",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 26,
    alignItems: "center",
  },
  heroLeft: {},
  heroRight: { display: "flex", justifyContent: "flex-end" },

  h1: { fontSize: 52, lineHeight: 1.05, margin: 0, letterSpacing: -0.6 },
  h1Accent: { color: "#8ab4ff" },
  lead: {
    marginTop: 14,
    fontSize: 17,
    lineHeight: 1.6,
    color: "#b9c4d8",
    maxWidth: 580,
  },
  leadSmall: { margin: 0, fontSize: 15, lineHeight: 1.6, color: "#b9c4d8" },

  ctaRow: { marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
  },
  btnPrimary: { background: "#2a6bff", color: "#0b0d10" },
  btnSecondary: {
    background: "rgba(255,255,255,0.08)",
    color: "#e9eef7",
    border: "1px solid rgba(255,255,255,0.10)",
  },

  miniRow: { marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" },
  miniCard: {
    padding: "10px 12px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    minWidth: 160,
  },
  miniTitle: { fontSize: 12, opacity: 0.8, marginBottom: 4 },
  miniText: { fontSize: 13, fontWeight: 700 },

  mock: {
    width: 320,
    borderRadius: 18,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    overflow: "hidden",
  },
  mockTop: {
    display: "flex",
    gap: 8,
    padding: 12,
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  mockDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.25)",
  },
  mockBody: { padding: 16, display: "grid", gap: 12 },
  mockAvatar: {
    width: 58,
    height: 58,
    borderRadius: 999,
    background: "rgba(255,255,255,0.12)",
  },
  mockLineLg: {
    height: 14,
    borderRadius: 999,
    background: "rgba(255,255,255,0.14)",
    width: "70%",
  },
  mockLine: {
    height: 12,
    borderRadius: 999,
    background: "rgba(255,255,255,0.10)",
    width: "90%",
  },
  mockButtons: { display: "grid", gap: 10, marginTop: 4 },
  mockBtn: {
    height: 44,
    borderRadius: 14,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  mockFooter: {
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.10)",
    width: "55%",
    marginTop: 10,
  },

  section: { maxWidth: 1100, margin: "0 auto", padding: "46px 18px 0" },
  h2: { margin: 0, fontSize: 28, letterSpacing: -0.2 },

  steps: { marginTop: 16, display: "grid", gap: 12 },
  stepCard: {
    display: "flex",
    gap: 14,
    padding: 14,
    borderRadius: 16,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    alignItems: "center",
  },
  stepN: {
    width: 34,
    height: 34,
    borderRadius: 12,
    background: "rgba(255,255,255,0.10)",
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
  },
  stepTitle: { fontWeight: 800, marginBottom: 4 },
  stepText: { color: "#b9c4d8", lineHeight: 1.55 },

  grid: {
    marginTop: 16,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
  },
  featureCard: {
    padding: 14,
    borderRadius: 16,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  featureTitle: { fontWeight: 900, marginBottom: 6 },
  featureText: { color: "#b9c4d8", lineHeight: 1.55, fontSize: 14 },

  pricingRow: {
    marginTop: 16,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
  },
  priceCard: {
    padding: 16,
    borderRadius: 18,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    position: "relative",
  },
  priceCardHighlight: {
    border: "1px solid rgba(138,180,255,0.55)",
    background: "rgba(42,107,255,0.12)",
  },
  badge: {
    position: "absolute",
    top: 12,
    right: 12,
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(138,180,255,0.20)",
    border: "1px solid rgba(138,180,255,0.35)",
    color: "#e9eef7",
    fontWeight: 800,
  },
  priceTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 10,
  },
  priceName: { fontWeight: 900, fontSize: 16 },
  priceValue: { fontWeight: 900, fontSize: 22 },
  priceDesc: { marginTop: 8, color: "#b9c4d8", lineHeight: 1.55, fontSize: 14 },
  list: {
    marginTop: 12,
    paddingLeft: 18,
    color: "#e9eef7",
    lineHeight: 1.7,
    opacity: 0.95,
  },

  contactCard: {
    marginTop: 16,
    padding: 18,
    borderRadius: 18,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
  },

  footer: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "40px 18px 28px",
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "#b9c4d8",
    opacity: 0.9,
    flexWrap: "wrap",
    fontSize: 13,
  },
  footerDot: { opacity: 0.5 },

  "@media (max-width: 960px)": {},
};
