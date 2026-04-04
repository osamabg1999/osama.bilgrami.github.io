export const site = {
  name: 'Osama Bilgrami',
  role: 'Data Engineer',
  tagline:
    'Designing and shipping data pipelines, semantic models, and analytics layers across major cloud warehouses and BI tools.',
  location: 'Calgary, Alberta',
  email: 'osama.bilgrami1999@gmail.com',
  github: 'https://github.com/osamabg1999',
  linkedin: 'https://www.linkedin.com/in/osama-bilgrami/',
  heroImage: 'images/me.jpg',
  heroCredentials:
    'Masters in Data Science, University of Calgary · B.S. Economics, IBA Karachi',
  metaDescription:
    "Osama Bilgrami, data engineer in Calgary. Pipelines, warehouses, BI, and selected Master's program projects.",
} as const;

export const aboutParagraphs = [
  "I'm a data engineer based in Calgary. I spend most of my time on ELT-style workflows, modeling in cloud warehouses, orchestration with dbt and Databricks, and semantic layers for Power BI, usually with Python, SQL, R, or DAX in the mix.",
  "I completed my Master's in Data Science and Analytics at the University of Calgary and my B.S. in Economics at IBA Karachi. Along the way I have worked with client teams, research groups, and earlier roles in banking analytics, with the same focus: trustworthy data and clear handoffs to people who consume it.",
] as const;

export type SkillGroup = { title: string; items: readonly string[] };

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Programming & modeling',
    items: ['Python', 'SQL', 'R', 'DAX'],
  },
  {
    title: 'Cloud & data platforms',
    items: ['AWS', 'Azure', 'Databricks', 'Git', 'Docker', 'BigQuery', 'dbt', 'Snowflake'],
  },
  {
    title: 'BI',
    items: ['Power BI', 'Excel', 'Tableau'],
  },
  {
    title: 'Communication',
    items: ['English', 'French (A2)'],
  },
] as const;
