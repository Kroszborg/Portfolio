import { Section, SectionColors, Sections } from './types';
import Home from '@/components/home';
import Works from '@/components/works';
import Aitriplanner from '@/assets/images/aitriplanner-cover.webp';
import thewaitercompany from '@/assets/images/thewaitercompany-cover.webp';
import threepointonefour from '@/assets/images/threepointonefour-cover.webp';
import Experiences from '@/components/experiences';
import Contact from '@/components/contact';

export const ANIMATION_DURATION = {
 SHORT: 0.2,
 MEDIUM: 0.4,
 LONG: 0.8,
};

export const SECTIONS: Section[] = [
 { content: <Home />, title: 'Home' },
 { content: <Works />, title: 'Works' },
 {
  content: <Experiences />,
  title: 'Experiences',
 },
 {
  content: <Contact />,
  title: 'Contact',
 },
];

export const THEMES: Record<string, SectionColors> = {
 main: {
  background: 'var(--theme-1-background)',
  primary: 'var(--theme-1-primary)',
  secondary: 'var(--theme-1-secondary)',
  accent: 'var(--theme-1-accent)',
 },
 Aitriplanner: {
  background: 'var(--theme-2-background)',
  primary: 'var(--theme-2-primary)',
  secondary: 'var(--theme-2-secondary)',
  accent: 'var(--theme-2-accent)',
 },
 thewaitercompany: {
  background: 'var(--theme-3-background)',
  primary: 'var(--theme-3-primary)',
  secondary: 'var(--theme-3-secondary)',
  accent: 'var(--theme-3-accent)',
 },
 threepointonefour: {
  background: 'var(--theme-4-background)',
  primary: 'var(--theme-4-primary)',
  secondary: 'var(--theme-4-secondary)',
  accent: 'var(--theme-4-accent)',
 },
 experiences: {
  background: 'var(--theme-5-background)',
  primary: 'var(--theme-5-primary)',
  secondary: 'var(--theme-5-secondary)',
  accent: 'var(--theme-5-accent)',
 },
};

export const SECTION_THEME_MAP: {
 [key: number]: SectionColors | { [subKey: number]: SectionColors };
} = {
 [Sections.Home]: THEMES.main,
 [Sections.Works]: {
  0: THEMES.Aitriplanner,
  1: THEMES.thewaitercompany,
  2: THEMES.threepointonefour,
 },
 [Sections.Experience]: THEMES.experiences,
 [Sections.Contact]: THEMES.main,
};

export const WORKS_ITEMS = [
 {
  cover: Aitriplanner,
  title: 'AI Trip Planner',
  subject: 'Design and Implementation',
  description:
   "AI Trip Planner uses AI-powered algorithms to create personalized travel recommendations and dynamic itineraries.",
  link: 'https://aitriplanner.vercel.app',
  techStack: ['Next.js', 'TypeScript', 'Open AI'],
 },
 {
  cover: thewaitercompany,
  title: 'TheWaiterCompany',
  subject: 'Prototyping and Implementation',
  description:
   "TheWaiterCompany is a QR code-based platform that simplifies restaurant operations through digital ordering and inventory management.",
  link:
   'https://www.thewaitercompany.in/',
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
 },
 {
  cover: threepointonefour,
  title: 'ThreePointOneFour',
  subject: 'Prototyping and Implementation',
  description:
   "Threepointonefour is a platform that helps to make education accessible to students of all backgrounds.",
  link:
   'https://threepointonefour.in/',
  techStack: ['HTML', 'CSS', 'Javascript'],
 },
];

export const WORK_SUBSECTIONS = WORKS_ITEMS.length;

export const experiences = [
 { date: 'Nov 2024', title: 'AITripPlanner', role: 'Full-Stack Developer' },
 { date: 'Oct 2024', title: 'TheWaiterCompany', role: 'Frontend Developer' },
 { date: 'Nov 2023', title: 'Threepointonefour', role: 'Website Developer' },
];
