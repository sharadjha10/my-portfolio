const site = {
  personal: {
    name: 'Sharad Jha',
    title: 'Data Engineer',
    resume: '/Sharad-Jha-Resume.pdf'
  },
  social: {
    github: '',
    linkedin: '',
    email: ''
  },
  projects: [
    {
      title: 'Real Estate Intelligence & Analytics Platform',
      category: 'DATA ENGINEERING / ANALYTICS',
      description: 'Production-style real estate data platform designed to ingest, clean, transform, model, and analyze property transaction data using a modern cloud data stack.',
      technologies: ['Snowflake','AWS S3','Informatica IDMC','SQL','Streamlit','Python','Cortex AI'],
      architecture: `AWS S3\n↓\nSnowflake RAW\n↓\nInformatica IDMC\n↓\nCLEANED\n↓\nSCD / DIMENSIONAL MODEL\n↓\nSEMANTIC\n↓\nStreamlit`
    },
    {
      title: 'Smart Public Transit Analytics',
      category: 'DATA ENGINEERING / DATA ANALYTICS',
      description: 'Large-scale public transit analytics solution designed to process and analyze more than one million transit records using SQL and Python.',
      technologies: ['PostgreSQL','Python','Pandas','SQL','Matplotlib'],
      architecture: 'PostgreSQL → Python ETL → Analytics'
    },
    {
      title: 'Urban Heat & Population Correlation Analysis',
      category: 'DATA ANALYTICS / SIMULATION',
      description: 'Analytical project exploring the relationship between urban heat patterns and population dynamics using historical environmental and demographic data.',
      technologies: ['Python','NetLogo','Tableau'],
      architecture: 'Data collection → Modeling → Visualization'
    }
  ],
  certifications: [
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'June 2024' }
  ],
  education: [
    { school: 'Vellore Institute of Technology, Bhopal', degree: 'Bachelor of Technology', field: 'Computer Science and Engineering', range: '2021 – 2025', cgpa: '8.77 / 10' }
  ]
}

export default site
