export const RESUME_DATA = {
  name: "Chadwick B. Jones",
  title: "Senior Clinical Data Analyst & Informatics Specialist",
  contact: {
    email: "chadwick.jones@gmail.com",
    phone: "812-804-8892",
    linkedin: "linkedin.com/in/chadwickjones",
    location: "Bloomington, IN",
    github: "github.com/TerminallyLazy"
  },
  summary: "Healthcare data analyst with deep experience in clinical informatics, payer/claims analytics, and standards-based data integration. Hands-on with HL7 v2, C-CDA, ADT validation; familiarity with FHIR (R4) resources; and SQL/Python ETL frameworks. Proven track record authoring SOPs, aligning heterogeneous clinical/claims data for analytics/AI, and delivering governed dashboards.",
  skills: {
    interop: ["HL7 v2", "C-CDA", "ADT", "FHIR R4", "USCDI", "APIs"],
    terminology: ["ICD-10", "LOINC", "SNOMED", "HEDIS"],
    analytics: ["SQL", "Python", "SAS", "R", "ETL/ELT", "Data Lineage"],
    bi: ["Power BI", "Tableau", "Metric Definition"],
    tools: ["MSSQL", "Postgres", "Git", "Jira", "Jupyter", "Docker"]
  },
  experience: [
    {
      id: 1,
      company: "IBM / Elevance Health",
      role: "Senior Clinical Data Analyst",
      period: "2024 – Current",
      description: "Clinical data quality and SQL query standardization.",
      points: [
        "Wrote SQL to support HiLabs integration and HealthOS/Synthesis conversion.",
        "Aligned heterogeneous claims and clinical datasets for a stealth AI initiative.",
        "Performed data validation for C-CDA and ADT feeds across multiple health systems.",
        "Authored SOPs to standardize mapping and validation steps."
      ]
    },
    {
      id: 2,
      company: "Regenstrief Institute",
      role: "Data Analyst",
      period: "2022 – 2024",
      description: "Wrote complex SQL and SAS for health-informatics research.",
      points: [
        "Automated ETL workflows to deliver reliable pipelines for research projects.",
        "Authored Python scripts and SAS macros to clean large clinical datasets.",
        "Leveraged advanced SQL to identify trends in clinical operations.",
        "Collaborated with researchers and clinicians to define metrics."
      ]
    },
    {
      id: 3,
      company: "ClearFuture Healthcare",
      role: "Co-Founder / COO",
      period: "2014 – 2021",
      description: "Built a HIPAA-compliant patient-engagement platform.",
      points: [
        "Secured $100K investment by demonstrating ROI through data-driven case studies.",
        "Built analytics dashboards tracking adoption, engagement, and outcomes.",
        "Oversaw compliance, product roadmap, and operations for pilot deployments."
      ]
    },
    {
      id: 4,
      company: "Indiana University Health",
      role: "Clinical Informatics Analyst",
      period: "2009 – 2022",
      description: "Bridged clinical leadership and IT for multiple hospitals.",
      points: [
        "Increased adoption of clinical orders by implementing decision support logic.",
        "Translated business needs into technical solutions (iForms with JS/HTML).",
        "Former Chair, VHA Clinical Informatics Council (IN)."
      ]
    }
  ],
  opensource: [
    {
      name: "Agent Zero AI Framework",
      description: "Implemented a Discord support bot using LLM + RAG for moderation and user Q&A. Contributed several merged PRs to the framework.",
      tech: ["LLM", "RAG", "Python", "Discord API"],
      link: "https://github.com/agent0ai/agent-zero"
    },
    {
      name: "Novion: AI Radiology Assistant",
      description: "Built a medical image viewer with Cornerstone 3D; integrated real-time analysis by specialized LangGraph AI agents; trained vision models for segmentation.",
      tech: ["Cornerstone 3D", "LangGraph", "Computer Vision", "Segmentation"],
      link: "https://github.com/TerminallyLazy/Novion"
    }
  ]
};