import { ProjectItem, EducationItem, SkillGroup, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Aarush C S',
  role: 'BCA (AI/ML) Student · Developer · Data & ML Enthusiast',
  tagline: 'Building intelligent software, training ML models, and analyzing data — one commit at a time.',
  bio1: "I'm Aarush C S, a Computer Science student currently pursuing my BCA specializing in Artificial Intelligence & Machine Learning (AI/ML) (3rd Year, 5th Sem) at Alliance University Bangalore, with a strong passion for building software that lives at the intersection of AI algorithms and data engineering.",
  bio2: "I work across the stack — training machine learning classifiers, exploring intrusion detection datasets in Jupyter, and building full-stack web applications. I love translating real-world problems into clean, efficient, and well-structured code.",
  bio3: "When I'm not writing code, I'm exploring business analytics, studying Deep Learning fundamentals, and refining my software development craft through hands-on projects.",
  githubUrl: 'https://github.com/AarushCS777',
  email: 'aarush.c.s.15@gmail.com',
  displayEmail: 'aarush.c.s.15@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/aarush-cs',
  totalRepos: 21,
  // Primary photos (matching uploaded filenames) with fallback:
  heroImage: '/imggg.jpeg',
  aboutImage: '/passport_size_pic(01).jpeg',
  fallbackHeroImage: 'https://avatars.githubusercontent.com/u/180328627?v=4',
  fallbackAboutImage: 'https://raw.githubusercontent.com/AarushCS777/Template-Portfolio/main/images/pic01.jpg',
};

export const STATS: StatItem[] = [
  { number: '21', label: 'GitHub Repos' },
  { number: '4+', label: 'Languages Used' },
  { number: '2024', label: 'Started Coding' },
  { number: '∞', label: 'Things to Learn' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'AI & Machine Learning',
    skills: ['Machine Learning', 'Classification Models', 'Model Evaluation', 'Feature Engineering', 'Neural Networks', 'Scikit-learn'],
  },
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'SQL'],
  },
  {
    category: 'Data & Analytics',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter', 'Power BI'],
  },
  {
    category: 'CS & AI Fundamentals',
    skills: ['DSA', 'OOP', 'Algorithms', 'Intrusion Detection (IDS)', 'Pattern Recognition'],
  },
  {
    category: 'Web & Dev Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Node.js', 'Tailwind CSS'],
  },
  {
    category: 'Currently Exploring',
    skills: ['Deep Learning', 'PyTorch / TensorFlow', 'Large Language Models', 'Cloud AI (GCP)'],
  },
];

// ONLY the 3 requested projects - NO EMOJIS!
export const PROJECTS: ProjectItem[] = [
  {
    id: 'business-analytics',
    title: 'Business Analytics',
    description:
      'A comprehensive business analytics project exploring real-world datasets, generating insights through visualization and statistical analysis, and presenting data-driven recommendations.',
    githubUrl: 'https://github.com/AarushCS777/Aarush_BusinessAnalytics',
    tags: ['Python', 'Pandas', 'Analytics', 'Visualization'],
    iconType: 'analytics',
  },
  {
    id: 'intrusion-detection-systems',
    title: 'Intrusion Detection Systems',
    description:
      'A data analysis assignment focused on network security and intrusion detection using machine learning techniques on real network traffic datasets, built in Jupyter Notebook.',
    githubUrl: 'https://github.com/AarushCS777/AASIGNMENT-IDS-1',
    tags: ['Jupyter', 'Python', 'ML', 'Security'],
    iconType: 'security',
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    description:
      'A full-stack development project exploring end-to-end web application development, covering front-end UI, back-end APIs, database integration, and deployment workflows.',
    githubUrl: 'https://github.com/AarushCS777/FSD_AARUSH',
    tags: ['HTML/CSS', 'JavaScript', 'Full-Stack', 'REST API'],
    iconType: 'fullstack',
  },
];

// Updated Learning Path with exact user requirements:
// 1) 10th CBSE AMRITA VIDYALAYAM SCHOOL 53.33%
// 2) 12 TH KERALA STATE BOARD SSMVHSS 71.75%
// 3) UG CURRENTLY PURSUING BCA 3RD YEAR 5TH SEM AT ALLIANCE UNIVERSITY BANGLORE
export const LEARNING_PATH: EducationItem[] = [
  {
    id: 'ug-bca',
    period: 'Aug 2023 – Present',
    level: 'Undergraduate (UG)',
    title: 'BCA · Artificial Intelligence & Machine Learning (AI/ML)',
    institution: 'Alliance University, Bangalore (3rd Year, 5th Semester)',
    statusBadge: 'Currently Pursuing',
    description:
      'Specialized undergraduate degree in Bachelor of Computer Applications focused on Artificial Intelligence & Machine Learning. Coursework includes Machine Learning algorithms, Deep Learning fundamentals, Statistical Computing, Data Structures, Python for AI, and Full-Stack development.',
  },
  {
    id: '12th-kerala-board',
    period: '2022 – 2023',
    level: 'Higher Secondary Education (12th)',
    title: '12th Grade · Kerala State Board',
    institution: 'SSMVHSS',
    score: '71.75%',
    description:
      'Higher Secondary education under the Kerala State Board with intensive coursework in Computer Science, Mathematics, and Science fundamentals.',
  },
  {
    id: '10th-cbse',
    period: '2020 – 2021',
    level: 'Secondary School Examination (10th)',
    title: '10th Grade · CBSE Board',
    institution: 'Amrita Vidyalayam School',
    score: '53.33%',
    description:
      'Completed secondary schooling under the Central Board of Secondary Education (CBSE), developing foundational skills across general science and mathematics.',
  },
];
