import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Download,
} from 'lucide-react';
import { motion } from 'framer-motion';

// lucide-react v1 ya no incluye íconos de marca: los definimos acá.
const GithubIcon = ({ size = 16, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);


const PROFILE = {
  name: 'Lucas Villagra',
  role: 'Backend & Oracle Developer',
  location: 'Luque, Paraguay',
  email: 'lucas-villagra@outlook.com',
  phone: '0982 867007',
  summary:
    'Ingeniero informático enfocado en desarrollo backend y bases de datos Oracle. Trabajo en el sector financiero construyendo y manteniendo servicios para bancos y financieras. Me destaco por aprender rápido, adaptarme a nuevos desafíos y colaborar en equipos ágiles.',
};

const EXPERIENCE = [
  {
    role: 'Desarrollador Backend',
    company: 'CLT S.A.',
    client: 'Banco Continental',
    period: 'Enero 2026 — Actualidad',
    current: true,
    stack: ['C#', '.NET', 'Oracle', 'REST APIs','azure devops', 'SQL'],
  },
  {
    role: 'Business Risk Analyst',
    company: 'Banco Itaú Paraguay',
    client: null,
    period: 'Julio 2025 — Enero 2026',
    current: false,
    stack: ['SQL', 'Análisis de riesgo', 'Analista de datos'],
  },
  {
    role: 'Desarrollador Analista Oracle',
    company: 'Onnix S.A.',
    client: 'Financiera Paraguayo Japonesa',
    period: 'Noviembre 2024 — Junio 2025',
    current: false,
    stack: ['PL/SQL', 'Oracle', 'Oracle APEX', 'Jasper Report'],
  },
  {
    role: 'Soporte y Mantenimiento de Servicios Digitales',
    company: 'Roshka S.A.',
    client: 'Banco Atlas',
    period: 'Febrero 2023 — Octubre 2024',
    current: false,
    stack: ['Java', 'PL/SQL', 'React', 'APIs']
  },
  {
    role: 'Terrago - decición de terreno con IA',
    company: 'Proyecto final de grado',
    client: null,
    period: 'Febrero 2026 — Noviembre 2026',
    current: false,
    stack: ['Python', 'Flask', 'React', 'APIs','IA','OPENAI']
  },
];

const SKILLS = [
  {
    category: 'Lenguajes',
    items: [
      { name: 'PL/SQL', level: 'Avanzado' },
      { name: 'SQL', level: 'Avanzado' },
      { name: 'Java', level: 'Intermedio' },
      { name: 'JavaScript', level: 'Intermedio' },
      { name: 'TypeScript', level: 'Intermedio' },
      { name: 'Python', level: 'Intermedio' },
      { name: 'Node.js', level: 'Intermedio' },
      { name: 'PHP', level: 'Intermedio' },
      { name: 'Oracle APEX', level: 'Principiante' },
    ],
  },
  {
    category: 'Frameworks & Librerías',
    items: [
      { name: 'Spring Boot', level: 'Intermedio' },
      { name: 'React.js', level: 'Intermedio' },
      { name: 'Flask', level: 'Intermedio' },
      { name: 'Laravel', level: 'Intermedio' },
      { name: 'Tailwind CSS', level: 'Intermedio' },
      { name: 'Bootstrap', level: 'Intermedio' },
      { name: 'Jasper Report', level: 'Intermedio' },
    ],
  },
  {
    category: 'Bases de datos',
    items: [
      { name: 'Oracle', level: 'Avanzado' },
      { name: 'PostgreSQL', level: 'Intermedio' },
      { name: 'SQL Server', level: 'Intermedio' },
      { name: 'MongoDB', level: 'Intermedio' },
      { name: 'Firebase', level: 'Principiante' },
    ],
  },
  {
    category: 'Herramientas & Metodologías',
    items: [
      { name: 'Git', level: null },
      { name: 'SVN', level: null },
      { name: 'Azure DevOps', level: null },
      { name: 'Pipelines', level: null },
      { name: 'REST APIs', level: null },
      { name: 'Scrum', level: null },
      { name: 'JIRA', level: null },
      { name: 'Trello', level: null },
      { name: 'HTML / CSS', level: null },
      { name: 'Slack', level: null },
    ],
  },
];

const PROJECTS = [
  {
    title: 'Cuaderno de Sintaxis',
    description:
      'Plataforma para guardar apuntes de código organizados por lenguaje, pensada para quienes trabajan con múltiples stacks a la vez.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://ayuda-sintaxis.vercel.app/',
    year: '2025',
  },
  {
    title: 'Portafolio Personal',
    description:
      'Este sitio: portafolio construido con React y Tailwind, con animaciones y diseño responsive orientado al detalle tipográfico.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    year: '2026',
  },
];

const EDUCATION = [
  {
    title: 'Ingeniería Informática',
    place: 'Universidad Columbia',
    detail: 'Egresado',
  },
];

const LANGUAGES = [
  { name: 'Castellano', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' },
];

const NAV = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

// ----------------------------------------------------------------------------
// Utilidades de presentación
// ----------------------------------------------------------------------------

const LEVEL_STYLES = {
  Avanzado: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  Intermedio: 'border-zinc-700 bg-zinc-900 text-zinc-300',
  Principiante: 'border-zinc-800 bg-zinc-950 text-zinc-500',
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const SectionLabel = ({ children, index }) => (
  <div className="mb-10 flex items-center gap-4">
    <span className="font-mono text-xs tracking-[0.2em] text-emerald-400">
      {index}
    </span>
    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
      {children}
    </h2>
    <div className="h-px flex-1 bg-zinc-800" />
  </div>
);

// ----------------------------------------------------------------------------
// Componente principal
// ----------------------------------------------------------------------------

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/30">
      {/* Fondo: grilla sutil + halo */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      </div>

      {/* ---------------------------------------------------------------- Nav */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#inicio" className="group flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 font-mono text-sm font-semibold text-emerald-400">
              LV
            </span>
            <span className="hidden font-mono text-sm text-zinc-400 transition-colors group-hover:text-zinc-100 sm:block">
              lucas-villagra
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
            className="rounded-md border border-zinc-800 p-2 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-zinc-800 bg-zinc-950/95 px-6 py-4 backdrop-blur md:hidden"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 font-mono text-sm text-zinc-400 hover:text-emerald-400"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* -------------------------------------------------------------- Hero */}
      <section
        id="inicio"
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-20"
      >
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 font-mono text-xs text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Disponible para nuevas oportunidades
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Lucas
            <br />
            <span className="text-zinc-500">Villagra</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 font-mono text-sm uppercase tracking-[0.2em] text-emerald-400"
          >
            {PROFILE.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            {PROFILE.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-400"
            >
              Ver proyectos
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
            >
              <Mail size={16} />
              Contactar
            </a>
            <a
              href="/Villagra_Lucas.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-6 py-3 text-sm font-medium text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-100"
            >
              <Download size={16} />
              CV
            </a>
          </motion.div>

          {/* Métricas rápidas */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800 sm:grid-cols-4"
          >
            {[
              { value: '3+', label: 'Años de exp.' },
              { value: '4', label: 'Empresas' },
              { value: 'Oracle', label: 'Especialidad' },
              { value: 'Luque', label: 'Paraguay' },
            ].map((stat) => (
              <div key={stat.label} className="bg-zinc-950 px-4 py-5">
                <div className="text-xl font-semibold text-zinc-100">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* -------------------------------------------------------- Experiencia */}
      <section
        id="experiencia"
        className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      >
        <SectionLabel index="01">Experiencia laboral</SectionLabel>

        <div className="space-y-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800">
          {EXPERIENCE.map((job, i) => (
            <motion.article
              key={job.role + job.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group bg-zinc-950 px-6 py-8 transition-colors hover:bg-zinc-900/60 sm:px-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="md:max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-medium text-zinc-100">
                      {job.role}
                    </h3>
                    {job.current && (
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
                        Actual
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-zinc-400">
                    <span className="text-zinc-200">{job.company}</span>
                    {job.client && (
                      <>
                        <span className="mx-2 text-zinc-700">/</span>
                        Cliente: {job.client}
                      </>
                    )}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-zinc-800 px-2 py-1 font-mono text-[11px] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 font-mono text-xs uppercase tracking-widest text-zinc-500 md:text-right">
                  {job.period}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------- Stack */}
      <section id="stack" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionLabel index="02">Stack técnico</SectionLabel>

        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700"
            >
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    title={item.level || undefined}
                    className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                      item.level
                        ? LEVEL_STYLES[item.level]
                        : 'border-zinc-800 bg-zinc-900 text-zinc-400'
                    }`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leyenda de niveles */}
        <div className="mt-6 flex flex-wrap items-center gap-5 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-emerald-500/70" /> Avanzado
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-zinc-600" /> Intermedio
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-zinc-800" /> Principiante
          </span>
        </div>

        {/* Formación e idiomas */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Formación académica
            </h3>
            {EDUCATION.map((ed) => (
              <div key={ed.title}>
                <p className="text-lg text-zinc-100">{ed.title}</p>
                <p className="mt-1 text-sm text-zinc-400">{ed.place}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
                  {ed.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Idiomas
            </h3>
            <div className="space-y-3">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between border-b border-zinc-800/70 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-zinc-200">{lang.name}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Proyectos */}
      <section
        id="proyectos"
        className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      >
        <SectionLabel index="03">Proyectos</SectionLabel>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-zinc-900/60"
            >
              <div className="mb-6 flex items-start justify-between">
                <span className="font-mono text-xs text-zinc-600">
                  {project.year}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400"
                />
              </div>

              <h3 className="text-lg font-medium text-zinc-100 transition-colors group-hover:text-emerald-300">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-zinc-800 px-2 py-1 font-mono text-[11px] text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- Contacto */}
      <section
        id="contacto"
        className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      >
        <SectionLabel index="04">Contacto</SectionLabel>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 md:grid-cols-2 md:items-center"
        >
          <div>
            <h3 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              ¿Trabajamos
              <br />
              <span className="text-emerald-400">juntos?</span>
            </h3>
            <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
              Estoy abierto a nuevas oportunidades y colaboraciones. Escribime y
              te respondo a la brevedad.
            </p>
          </div>

          <div className="space-y-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: PROFILE.email,
                href: `mailto:${PROFILE.email}`,
              },
              {
                icon: Phone,
                label: 'Teléfono',
                value: PROFILE.phone,
                href: `tel:+595982867007`,
              },
              {
                icon: MapPin,
                label: 'Ubicación',
                value: PROFILE.location,
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4 bg-zinc-950 px-5 py-4 transition-colors hover:bg-zinc-900">
                  <Icon size={16} className="shrink-0 text-emerald-400" />
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      {label}
                    </div>
                    <div className="truncate text-sm text-zinc-200">{value}</div>
                  </div>
                </div>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------- Footer */}
      <footer className="relative z-10 border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="font-mono text-xs text-zinc-500">
            © 2026 Lucas Villagra
          </p>
          <p className="font-mono text-xs text-zinc-600">
            Construido con React + Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
