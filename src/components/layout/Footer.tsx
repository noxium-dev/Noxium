import { Link } from "react-router-dom";
import { Mail, ExternalLink } from "lucide-react";
import { SiInstagram, SiDiscord, SiX, SiGithub, SiYoutube } from "react-icons/si";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/itx_decim",
    icon: SiInstagram,
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/6k9TfVANtX",
    icon: SiDiscord,
  },
  {
    name: "X",
    href: "https://x.com/noxiumwebx",
    icon: SiX,
  },
  {
    name: "GitHub",
    href: "https://github.com/noxium-dev",
    icon: SiGithub,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCi84fOMGApCB8xzbugtFElw",
    icon: SiYoutube,
  },
];

const footerLinks = [
  {
    title: "Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" },
    ],
  },
  {
    title: "Projects",
    links: [
      { name: "FluxMail", href: "https://www.fluxmail.site", external: true },
      { name: "Imgenix", href: "https://imgenix-multitool.vercel.app", external: true },
      { name: "Primeo SEO", href: "https://primeo-seo-optimization-tool-kit.vercel.app", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cosmic-cyan to-cosmic-purple flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-semibold text-lg text-foreground">Noxium</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Building expressive front-end UIs and robust full-stack web apps.
              From concept to production.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-cosmic-cyan hover:bg-muted transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-cosmic-cyan transition-colors text-sm inline-flex items-center gap-1"
                      >
                        {link.name}
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-cosmic-cyan transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Noxium. All rights reserved.
          </p>
          <a
            href="mailto:noxiumdev@proton.me"
            className="text-muted-foreground hover:text-cosmic-cyan transition-colors text-sm inline-flex items-center gap-2"
          >
            <Mail size={16} />
            noxiumdev@proton.me
          </a>
        </div>
      </div>
    </footer>
  );
}
