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
  Users,
  Home,
  Cloud,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function CamCoreHomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(30,64,175,0.25),transparent_35%)]" />
      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 ring-1 ring-blue-300/30">
              <ShieldCheck className="h-6 w-6 text-blue-200" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">CamCore</p>
              <p className="text-xs text-slate-300">Cameron Family Secure Network</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#access" className="hover:text-white">Access</a>
            <a href="https://status.camcore.au" className="hover:text-white">Status</a>
            <a href="https://help.camcore.au" className="hover:text-white">Help</a>
          </nav>
        </header>

        <main>
          <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-sm text-blue-100">
                <Home className="h-4 w-4" />
                Private family network and self-hosted services
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
                  Welcome to <span className="text-blue-300">CamCore</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  CamCore is the Cameron Family Secure Network — a private, self-hosted home network for media, storage, family services, monitoring, and secure access.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-2xl bg-blue-400 px-6 py-6 text-base font-semibold text-slate-950 hover:bg-blue-300">
                  <a href="https://status.camcore.au">
                    View service status <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10 hover:text-white">
                  <a href="https://help.camcore.au">
                    Open help centre <HelpCircle className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-slate-400">
                Access to CamCore services is private and by invitation only. Unauthorised access is not permitted. Activity may be monitored to keep services secure and reliable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">CamCore Overview</p>
                      <p className="text-2xl font-semibold">Home Network</p>
                    </div>
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-200 ring-1 ring-emerald-300/20">
                      Online
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <StatusRow icon={Server} title="Earth NAS" value="Storage & Containers" />
                    <StatusRow icon={Film} title="Cameron-Media" value="Private Plex Streaming" />
                    <StatusRow icon={Network} title="Mars & Venus" value="DNS Services" />
                    <StatusRow icon={Cloud} title="Better Stack" value="Public Status Monitoring" />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="services" className="mx-auto max-w-7xl px-6 py-10">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">Services</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">CamCore service hub</h2>
              </div>
              <p className="max-w-2xl text-slate-300">
                Public links are shown where available. Private services require approved access and may only work from trusted devices or the CamCore secure network.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </div>
          </section>

          <section id="access" className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map((item) => (
                <Card key={item.title} className="rounded-3xl border-white/10 bg-white/8 text-white backdrop-blur-xl">
                  <CardContent className="p-6">
                    <item.icon className="mb-5 h-8 w-8 text-blue-300" />
                    <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                    <p className="leading-7 text-slate-300">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-20">
            <div className="rounded-[2rem] border border-blue-300/20 bg-blue-300/10 p-8 backdrop-blur-xl md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-200">Need access?</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight">CamCore is invitation only</h2>
                  <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                    Cameron-Media and other CamCore services are provided for approved family and friends. Please only request access if you have been invited or authorised by the CamCore administrator.
                  </p>
                </div>
                <Button asChild className="rounded-2xl bg-white px-6 py-6 text-base font-semibold text-slate-950 hover:bg-blue-100">
                  <a href="mailto:help@camcore.au">
                    Contact support <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 px-6 py-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 CamCore — Cameron Family Secure Network.</p>
            <p>Private self-hosted services for authorised users only.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function StatusRow({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
          <Icon className="h-5 w-5 text-blue-300" />
        </div>
        <div>
          <p className="font-medium text-white">{title}</p>
          <p className="text-sm text-slate-400">{value}</p>
        </div>
      </div>
      <div className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
    </div>
  );
}

function ServiceCard({ name, description, icon: Icon, href, tag }) {
  const disabled = href === "#";

  return (
    <Card className="group rounded-3xl border-white/10 bg-white/8 text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/12">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 ring-1 ring-blue-300/20">
            <Icon className="h-6 w-6 text-blue-300" />
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">{tag}</span>
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-300">{description}</p>
        <div className="mt-6">
          {disabled ? (
            <span className="inline-flex items-center rounded-2xl border border-white/10 px-4 py-2 text-sm text-slate-400">
              Private access only
            </span>
          ) : (
            <a href={href} className="inline-flex items-center rounded-2xl border border-white/10 px-4 py-2 text-sm text-blue-200 transition hover:border-blue-300/40 hover:bg-blue-300/10">
              Open service <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
