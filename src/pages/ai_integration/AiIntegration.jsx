// src/pages/AIMLIntegration.jsx
import React from 'react';
import styles from './AiIntegration.module.css';

const priorities = [
  {
    icon: '🎯',
    title: '1. Business Value Alignment',
    desc: 'AI/ML projects must align with core business objectives—whether it’s boosting customer engagement, reducing costs, increasing productivity, or enabling innovation.',
    note: 'Focus on solving real business problems, not just exploring technology.',
  },
  {
    icon: '📊',
    title: '2. High-Quality Data Availability',
    desc: 'Data is the fuel for AI/ML. Ensuring access to clean, accurate, well-labeled, and relevant datasets is critical for training effective models.',
    note: 'Data governance, integration, and privacy must be prioritized.',
  },
  {
    icon: '🧠',
    title: '3. Model Accuracy & Performance',
    desc: 'Developing models that are not only accurate but also reliable and interpretable is essential. This includes regular evaluation and tuning to avoid bias or drift.',
    note: 'Performance must be balanced with explainability.',
  },
  {
    icon: '🔒',
    title: '4. Ethical AI & Governance',
    desc: 'Responsible AI use involves transparency, fairness, accountability, and minimizing bias. Establishing ethical frameworks and compliance mechanisms is non-negotiable.',
    note: 'Trust is as important as innovation.',
  },
  {
    icon: '⚙️',
    title: '5. Scalable Infrastructure',
    desc: 'Robust infrastructure is needed to handle the computational demands of AI—this includes cloud platforms, GPUs, scalable APIs, and secure deployment environments.',
    note: 'Scalability ensures long-term growth and flexibility.',
  },
  {
    icon: '👥',
    title: '6. Skilled Talent & Collaboration',
    desc: 'AI/ML success depends on skilled teams—data scientists, ML engineers, domain experts, and stakeholders. Cross-functional collaboration drives better outcomes.',
    note: 'Invest in people, not just platforms.',
  },
  {
    icon: '🔁',
    title: '7. Continuous Learning & Improvement',
    desc: 'AI is not a one-time project. Continuous model training, feedback loops, and iterative improvements ensure models stay relevant and effective over time.',
    note: 'AI is a journey, not a destination.',
  },
  {
    icon: '🧩',
    title: '8. Integration with Existing Systems',
    desc: 'AI solutions should seamlessly integrate with your existing tools, workflows, and processes to maximize adoption and minimize disruption.',
    note: '',
  },
];

const AIMLIntegration = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AI/ML Integration Priorities</h1>

      <div className={styles.cardGrid}>
        {priorities.map((item, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.cardTitle}>
              <span className={styles.icon}>{item.icon}</span> {item.title}
            </h3>
            <p>{item.desc}</p>
            {item.note && <p><strong>{item.note}</strong></p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIMLIntegration;
