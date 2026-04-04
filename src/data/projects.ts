export type Project = {
  title: string;
  href: string;
  image: string;
  summary: string;
  cta: string;
  tags: readonly string[];
};

export const projects: readonly Project[] = [
  {
    title: 'Sustainability analysis of commercial building energy (U.S.)',
    href: 'https://github.com/osamabg1999/Sustainability-Analysis-ML',
    image: 'images/img_project607.jpg',
    summary:
      'End-to-end analysis on commercial building characteristics and energy use: curated features, modeling to estimate consumption, and interpretable outputs to support efficiency and sustainability decisions.',
    cta: 'View on GitHub',
    tags: ['Python', 'ML', 'Energy', 'Sustainability'],
  },
  {
    title: 'Banking customer churn: classification pipeline',
    href: 'https://github.com/osamabg1999/Predicting-Banking-Customer-Churn-with-Machine-Learning-',
    image: 'images/bank.jpg',
    summary:
      'Structured banking data prepared for modeling; compared classification approaches with a focus on reproducible training and evaluation workflows.',
    cta: 'View on GitHub',
    tags: ['Python', 'ML', 'Banking', 'Finance'],
  },
  {
    title: 'COVID-19 analysis in Mexico (R)',
    href: 'https://github.com/osamabg1999/COVID19-Analysis',
    image: 'images/covid.webp',
    summary:
      'Statistical analysis on government health records: cohort definitions, relationships between demographics and outcomes, and clear visualization of findings.',
    cta: 'View on GitHub',
    tags: ['R', 'Visualization', 'Statistics', 'Health'],
  },
  {
    title: 'Employee retention: HR analytics & ML',
    href: 'https://github.com/osamabg1999/Talent-Traction-Employee-Retention-Optimization-through-ML-',
    image: 'images/emp.jpg',
    summary:
      'HR data profiling, feature engineering, and attrition modeling to surface drivers of turnover and inform retention strategy.',
    cta: 'View on GitHub',
    tags: ['Python', 'ML', 'HR', 'Visualization'],
  },
  {
    title: 'Stock price modeling with backtesting',
    href: 'https://github.com/osamabg1999/StockMinds-Predicting-Stock-Prices-with-ML',
    image: 'images/stock.jpg',
    summary:
      'Historical market data ingestion, baseline models, and a simple backtesting loop to measure performance over time instead of a single train/test split.',
    cta: 'View on GitHub',
    tags: ['Python', 'ML', 'Finance', 'Time series'],
  },
  {
    title: 'Tableau public dashboards',
    href: 'https://public.tableau.com/app/profile/osama.bilgrami/vizzes',
    image: 'images/tableau.png',
    summary:
      'Interactive dashboards and exploratory views published on Tableau Public, translating prepared data into stakeholder-friendly visuals.',
    cta: 'View dashboards',
    tags: ['Tableau', 'Visualization'],
  },
];
