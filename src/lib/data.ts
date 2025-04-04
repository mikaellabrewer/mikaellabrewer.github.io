export const personalInfo = {
  name: "Mikaella Brewer",
  location: "San Jose, California",
  email: "me@mikaellabrewer.com",
  github: "https://github.com/mikaellabrewer",
  linkedin: "https://www.linkedin.com/in/mikaellabrewer/",
};

export const workExperience = [
  {
    company: "Stanford Healthcare",
    location: "Stanford, California",
    position: "Patient Advocate",
    period: "Mar 2024 - Present",
    achievements: [
      "Developed and implemented an optimization system for hospital examination room scheduling, maximizing room utilization by considering provider availability and equipment requirements.",
      "Optimized patient scheduling workflows resulting in a backlog reduction of 75% among all patient advocates.",
      "Completed the RITE program, gaining expertise in clinical quality improvement methodologies and enhancing skills in project management and resource optimization within a supportive learning framework.",
      "Evaluate patient medical cases to route to the appropriate healthcare provider.",
    ],
  },
];

export const education = [
  {
    institution: "Oregon State University",
    location: "Corvallis, Oregon",
    degree: "Computer Science",
    period: "Aug 2021 - Dec 2025",
    achievements: ["Deans List"],
  },
];

export const skills = {
  programmingLanguages: ["C++", "Python", "Java"],
  backendDevelopment: ["Nodejs", "Expressjs"],
  databaseAndStorage: ["MondoDB", "SQL)"],
  cloudAndDevOps: ["AWS"],
  toolsAndServices: [
    "Clerk (Auth)",
    "Sanity (CMS)",
    "Tinybird (analytics)",
    "Zod",
    "Sentry",
    "Mixpanel",
    "Trigger.dev",
  ],
};

export const projects = [
  {
    title: "Mealy",
    github: "https://github.com/mikaellabrewer/Mealy",
    description: [
      "Developed Mealy, a recipe recommendation application that utilizes user-inputted ingredient lists to suggest relevant recipes, minimizing food waste and maximizing resource utilization.",
      "Designed and implemented a shopping list aggregation feature, allowing users to consolidate ingredients from multiple online recipes into a single, organized list",
      "Implemented web scraping techniques to extract and process recipe data from diverse online sources.",
      "Built with Swift, Python and Selenium.",
    ],
  },
  {
    title: "StitchSense",
    github: "https://github.com/mikaellabrewer/StitchSense",
    description: [
      "Engineered a smart crochet hook for automated stitch counting, significantly improving crocheting efficiency.",
      "Designed and implemented a machine learning model to analyze motion sensor data, enabling precise stitch recognition and automated counting.",
      "Integrated and calibrated motion sensors within a crochet hook to capture detailed movement data for accurate stitch detection.",
      "Developed a companion app that tracks and visualizes current progress on a given crochet pattern.",
      "Built with C++, Swift and CoreML.",
    ],
  },
];
