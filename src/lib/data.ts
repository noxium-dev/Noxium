// Project data and types

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  tags: string[];
  url: string;
  imageUrl: string;
  stats?: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "fluxmail",
    title: "FluxMail",
    description: "Modern email management platform with intelligent inbox organization and seamless integrations.",
    longDescription: "FluxMail revolutionizes email management with AI-powered inbox organization, smart filters, and seamless integrations. Built with performance and user experience at its core.",
    category: "Product",
    tags: ["Email", "SaaS", "Next.js", "TypeScript"],
    url: "https://www.fluxmail.site",
    imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&h=500&fit=crop",
    stats: [
      { label: "Load Time", value: "-42% TTFB" },
      { label: "Conversions", value: "+18%" },
    ],
    featured: true,
  },
  {
    id: "imgenix",
    title: "Imgenix Multitool",
    description: "AI-powered image processing toolkit with advanced editing, generation, and optimization features.",
    longDescription: "Imgenix combines cutting-edge AI with intuitive design to deliver a powerful suite of image tools. From background removal to style transfer, handle any visual task effortlessly.",
    category: "Tool",
    tags: ["AI", "Images", "Vercel", "React"],
    url: "https://imgenix-multitool.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    stats: [
      { label: "Processing", value: "<2s" },
      { label: "Accuracy", value: "99.2%" },
    ],
    featured: true,
  },
  {
    id: "primeo",
    title: "Primeo SEO Toolkit",
    description: "Comprehensive SEO analysis and optimization platform for modern websites and applications.",
    longDescription: "Primeo provides actionable SEO insights with comprehensive auditing, keyword tracking, and competitor analysis. Boost your search rankings with data-driven recommendations.",
    category: "Tool",
    tags: ["SEO", "Toolkit", "Performance", "Analytics"],
    url: "https://primeo-seo-optimization-tool-kit.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    stats: [
      { label: "Score Boost", value: "+35pts" },
      { label: "Rankings", value: "Top 10" },
    ],
    featured: true,
  },
];

export const services = [
  {
    id: "frontend",
    title: "Front-end UI",
    description: "Pixel-perfect, responsive interfaces with smooth animations and exceptional UX.",
    icon: "Palette",
    features: ["React & Vue", "Tailwind CSS", "Framer Motion", "Accessibility"],
  },
  {
    id: "fullstack",
    title: "Full-stack Apps",
    description: "End-to-end web applications with robust backends and scalable architecture.",
    icon: "Layers",
    features: ["Node.js & Python", "PostgreSQL", "REST & GraphQL", "Cloud Deploy"],
  },
  {
    id: "api",
    title: "API Integration",
    description: "Seamless third-party integrations and custom API development.",
    icon: "Plug",
    features: ["OAuth & Auth", "Webhooks", "Data Sync", "Documentation"],
  },
  {
    id: "performance",
    title: "Performance & SEO",
    description: "Optimize load times, Core Web Vitals, and search engine visibility.",
    icon: "Zap",
    features: ["Core Vitals", "Lighthouse 100", "Schema Markup", "Analytics"],
  },
];

export interface Skill {
  name: string;
  category: string;
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: "BrandReact", color: "from-blue-400 to-cyan-400" },
  { name: "TypeScript", category: "Languages", icon: "BrandTypescript", color: "from-blue-600 to-blue-400" },
  { name: "Next.js", category: "Framework", icon: "BrandNextjs", color: "from-gray-800 to-gray-600" },
  { name: "Node.js", category: "Backend", icon: "BrandNodejs", color: "from-green-600 to-green-400" },
  { name: "Tailwind CSS", category: "Styling", icon: "BrandTailwind", color: "from-cyan-500 to-blue-500" },
  { name: "PostgreSQL", category: "Database", icon: "BrandPostgresql", color: "from-blue-700 to-indigo-600" },
  { name: "GraphQL", category: "API", icon: "BrandGraphql", color: "from-pink-500 to-purple-500" },
  { name: "AWS", category: "Cloud", icon: "BrandAws", color: "from-orange-500 to-yellow-500" },
  { name: "Docker", category: "DevOps", icon: "BrandDocker", color: "from-blue-500 to-cyan-500" },
  { name: "Figma", category: "Design", icon: "BrandFigma", color: "from-purple-500 to-pink-500" },
  { name: "Git", category: "Tools", icon: "BrandGit", color: "from-red-500 to-orange-500" },
  { name: "Vercel", category: "Hosting", icon: "BrandVercel", color: "from-gray-900 to-gray-700" },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO, TechStart",
    content: "Noxium delivered exceptional work on our platform. The attention to detail and code quality exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Founder, InnovateCo",
    content: "Working with Noxium was a game-changer. Our app performance improved dramatically, and users love the new interface.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Lead, DesignHub",
    content: "Incredible talent and professionalism. Noxium transformed our vision into a beautifully crafted product.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];
