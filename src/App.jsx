import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Server,
  Film,
  UploadCloud,
  Lock,
  Activity,
  HelpCircle,
  Image,
  Network,
  ExternalLink,
  Home,
  Cloud,
} from "lucide-react";

const services = [
  {
    name: "Cameron-Media Plex",
    description: "Private movie and TV streaming for approved family and friends.",
    icon: Film,
    href: "https://plex.camcore.au",
    tag: "Media",
  },
  {
    name: "CamCore Requests",
    description: "Request movies or TV shows for Cameron-Media access.",
    icon: UploadCloud,
    href: "https://requests.camcore.au",
    tag: "Requests",
  },
  {
    name: "CamCore Status",
    description: "Live service status, maintenance notices, and incident updates.",
    icon: Activity,
    href: "https://status.camcore.au",
    tag: "Status",
  },
  {
    name: "CamCore Help Centre",
    description: "Setup guides, support info, playback help, and service rules.",
    icon: HelpCircle,
    href: "https://help.camcore.au",
    tag: "Support",
  },
  {
    name: "CamCore Photos",
    description: "Private family photo storage and sharing for authorised users.",
    icon: Image,
    href: "#",
    tag: "Private",
  },
  {
    name: "CamCore Secure Network Access",
    description: "Private internal network access for approved devices only.",
    icon: Network,
    href: "#",
    tag: "Tailscale",
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Private by design",
    text: "CamCore is a privately managed family network. Access is limited to authorised users and approved devices.",
  },
  {
    icon: Server,
    title: "Self-hosted services",
    text: "Core services are hosted and managed from the Cameron Family Secure Network homelab environment.",
  },
  {
    icon: Lock,
    title: "Secure access only",
    text: "Administrative tools and internal systems are not publicly available and require secure private access.",
  },
];

export default function App() {
  return (
    <div className="page">
      <div className="background" />

      <header className="header">
        <div className="brand">
          <div className="brandIcon">
            <ShieldCheck size={25} />
          </div>
          <div>
            <p className="brandTitle">CamCore</p>
            <p className="brandSubtitle">Cameron Family Secure Network</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#access">Access</a>
          <a href="https://status.camcore.au">Status</a>
          <a href="https://help.camcore.au">Help</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <motion.div
            className="heroText"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="pill">
              <Home size={16} />
              Private family network and self-hosted services
            </div>

            <h1>
              Welcome to <span>CamCore</span>
            </h1>

            <p className="heroLead">
              CamCore is the Cameron Family Secure Network — a private,
              self-hosted home network for media, storage, family services,
              monitoring, and secure access.
            </p>

            <div className="heroButtons">
              <a className="button primary" href="https://status.camcore.au">
                View service status <ExternalLink size={17} />
              </a>
              <a className="button secondary" href="https://help.camcore.au">
                Open help centre <HelpCircle size={17} />
              </a>
            </div>

            <p className="notice">
              Access to CamCore services is private and by invitation only.
              Unauthorised access is not permitted. Activity may be monitored
              to keep services secure and reliable.
            </p>
          </motion.div>

          <motion.div
            className="overview"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="overviewShell">
              <div className="overviewCard">
                <div className="overviewHeader">
                  <div>
                    <p>CamCore Overview</p>
                    <h2>Home Network</h2>
                  </div>
                  <span className="online">Online</span>
                </div>

                <StatusRow icon={Server} title="Earth NAS" value="Storage & Containers" />
                <StatusRow icon={Film} title="Cameron-Media" value="Private Plex Streaming" />
                <StatusRow icon={Network} title="Mars & Venus" value="DNS Services" />
                <StatusRow icon={Cloud} title="Better Stack" value="Public Status Monitoring" />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="section">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Services</p>
              <h2>CamCore service hub</h2>
            </div>
            <p>
              Public links are shown where available. Private services require
              approved access and may only work from trusted devices or the
              CamCore secure network.
            </p>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </section>

        <section id="access" className="section accessGrid">
          {highlights.map((item) => (
            <div className="highlight" key={item.title}>
              <item.icon size={34} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </section>

        <section className="section">
          <div className="cta">
            <div>
              <p className="eyebrow">Need access?</p>
              <h2>CamCore is invitation only</h2>
              <p>
                Cameron-Media and other CamCore services are provided for
                approved family and friends. Please only request access if you
                have been invited or authorised by the CamCore administrator.
              </p>
            </div>
            <a className="button light" href="mailto:help@camcore.au">
              Contact support <ExternalLink size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 CamCore — Cameron Family Secure Network.</p>
        <p>Private self-hosted services for authorised users only.</p>
      </footer>
    </div>
  );
}

function StatusRow({ icon: Icon, title, value }) {
  return (
    <div className="statusRow">
      <div className="statusLeft">
        <div className="statusIcon">
          <Icon size={21} />
        </div>
        <div>
          <p>{title}</p>
          <span>{value}</span>
        </div>
      </div>
      <div className="dot" />
    </div>
  );
}

function ServiceCard({ name, description, icon: Icon, href, tag }) {
  const disabled = href === "#";

  return (
    <div className="serviceCard">
      <div className="serviceTop">
        <div className="serviceIcon">
          <Icon size={26} />
        </div>
        <span>{tag}</span>
      </div>

      <h3>{name}</h3>
      <p>{description}</p>

      {disabled ? (
        <span className="privateBadge">Private access only</span>
      ) : (
        <a className="serviceLink" href={href}>
          Open service <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
}
