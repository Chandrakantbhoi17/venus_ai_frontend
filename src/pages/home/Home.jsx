import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import {
  AiOutlineAppstore,
  AiOutlineMobile,
  AiOutlineShop,
} from 'react-icons/ai';
import { FaPaintBrush, FaServer, FaBrain } from 'react-icons/fa';
import { MdCorporateFare } from 'react-icons/md';
import HeroSection from '../../components/hero/Herosection.jsx';
import Footer from '../../components/footer/Footer.jsx';
import ContactImage from '../../assets/images/contactusai.png';
import { FaSearch, FaCogs, FaPlug, FaChartLine } from 'react-icons/fa';
import AI1 from '../../assets/images/AI1.png'
import AI2 from '../../assets/images/AI2.png'
import AI3 from '../../assets/images/AI3.png'
import AI5 from "../../assets/images/AI5.PNG"
import InquiryForm from '../../components/inquiry/InquiryForm.jsx';



// Services array
const services = [
   { icon: <FaBrain />, title: 'AI / ML INTEGRATION' },
  { icon: <AiOutlineAppstore />, title: 'PRODUCT DEVELOPMENT' },
  { icon: <AiOutlineMobile />, title: 'MOBILE APP DEVELOPMENT' },
  { icon: <AiOutlineShop />, title: 'E-COMMERCE DEVELOPMENT' },
  { icon: <AiOutlineAppstore />, title: 'WEB DESIGN & DEVELOPMENT' },
  { icon: <MdCorporateFare />, title: 'CORPORATE IDENTITY' },
  { icon: <FaServer />, title: 'DATA CENTER MANAGEMENT' },
  { icon: <FaPaintBrush />, title: 'UI/UX DESIGN' },
  
];

const Home = () => {
  const contactRef = useRef(null);
  const location = useLocation();

  const steps = [
  {
    icon: <FaSearch className="text-blue-600 text-3xl" />,
    title: 'Discovery & Planning',
    description: 'We analyze your current workflows and identify AI/ML opportunities. We explore how AI can improve your daily work.',
  },
  {
    icon: <FaCogs className="text-green-600 text-3xl" />,
    title: 'Model Design & Training',
    description: 'We build custom models aligned with your business goals and We design and train AI models that solve your real business problems.',
  },
  {
    icon: <FaPlug className="text-purple-600 text-3xl" />,
    title: 'Integration & Deployment',
    description: 'We integrate models into your apps, dashboards, or APIs.',
  },
  {
    icon: <FaChartLine className="text-red-600 text-3xl" />,
    title: 'Monitoring & Optimization',
    description: 'Continuous improvement through real-time feedback and tuning.We track performance and fine-tune the model.',
  },
];


const offerings = [
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Seamlessly connect custom AI models with your apps, tools, and workflows for smart automation.',
  },
  {
    icon: '📊',
    title: 'Machine Learning',
    description: 'Build predictive models that deliver insights, segment customers, and drive better decisions.',
  },
  {
    icon: '📂',
    title: 'Data Preparation',
    description: 'Clean, organize, and structure your data to ensure it’s ready for high-performance AI.',
  },
  {
    icon: '🧠',
    title: 'Generative AI',
    description: 'Use advanced LLMs like GPT to power chatbots, virtual assistants, and automated content creation.',
  },
];

const aiBenefits = [
  {
    title: 'AI-Driven Learning for Medical Representatives',
    points: [
      'Personalized training paths tailored by AI to individual learning needs',
      'Machine learning identifies gaps and adapts content in real time',
      'Empowers field reps with data-informed interactions with healthcare professionals',
    ],
  },
  {
    title: 'Smart Insights for Trainers & L&D Teams',
    points: [
      'Real-time dashboards powered by AI for performance tracking',
      'Machine learning identifies underperformers for targeted interventions',
      'Automated reporting frees up time for strategic planning',
    ],
  },
  {
    title: 'Scalable Intelligence for Pharma Organizations',
    points: [
      'AI/ML infrastructure supports rapid scaling across global teams',
      'Predictive analytics enhance compliance, engagement, and learning outcomes',
      'Cost-effective and adaptive solutions aligned with business growth',
    ],
  },
];


const aiBenefitsVisual = [
  {
    image: AI1,
    title: 'Smart Automation by AI',
    description: 'Save time, cut costs, and reduce errors with intelligent automation.',
  },
  {
    image: AI2,
    title: 'AI-Enhanced Decision Making',
    description: 'Increased productivity and more effective decision-making',
  },
  {
    image: AI3,
    title: 'Faster Learning with AI',
    description: 'Speed up onboarding and skill-building with smart, tailored training.',
  },
  {
    image: AI5,
    title: 'AI for Customer Loyalty',
    description: 'Use AI to improve experience and build long-term loyalty.',
  },
];


useEffect(() => {
    if (location.state?.scrollToContact) {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className={styles.page}>
      <HeroSection />

      {/* Services Section */}
      <div className={styles.container}>
        <div className={styles.leftBox}></div>
        <div className={styles.middleBox}>
          <h2 className={styles.heading}>Our Services</h2>
            <p>We’re a team of professionals who work together to understand your needs and offer the right solutions.
               Our goal is to help you grow online and reach more people.We’re with you every step of the way, even after the project is done.
            </p>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>{service.icon}</div>
                <div className={styles.title}>{service.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightBox}></div>
      </div>
          
       {/* what we work*/}
      <section className={styles.howWeWorkSection}>
        <div className={styles.howWeWorkContainer}>
          <h2 className={styles.howWeWorkTitle}>🚀 How We Work</h2>
        <div className={styles.howWeWorkGrid}>
          {steps.map((step, index) => (
          <div key={index} className={styles.howWeWorkCard}>
          <div>{step.icon}</div>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
        </div>
  </div>
</section>

{/* key benifits*/}
<section className={styles.aiVisualSection}>
      <h2 className={styles.aiVisualheading}>Key Benefits of Venus AI</h2>
      <div className={styles.aiVisualGrid}>
        {aiBenefitsVisual.map((item, index) => (
          <div key={index} className={styles.aiVisualCard}>
            <img src={item.image} alt="Card" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <span className={`${styles.tag} ${styles[item.tagColor]}`}>
                {item.tag}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.author}>
                <div>
                  <strong>{item.author}</strong>
                  <div className={styles.time}>{item.time}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


{/* Why Choose Venus AI Section */}
      <section className={styles.aiSection}>
        <h2 className={styles.heading}>🎯 Why Choose Venus AI</h2>
        <p className={styles.subheading}>AI/ML at the Core. Built to Empower, Personalize, and Scale.</p>
        <div className={styles.aiGrid}>
          {aiBenefits.map((item, index) => (
            <div key={index} className={styles.aiCard}>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point, idx) => (
                  <li key={idx}>✅ {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

  {/* what we offer*/}
<section className={styles.section}>
      <div className={styles.offer_container}>
        <h2 className={styles.heading}>✅ What We Offer</h2>
        <div className={styles.offer_grid}>
          {offerings.map((item, index) => (
            <div key={index}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.offer_title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Contact Section */}
      <div ref={contactRef} className={styles.contactSection}>

        <h2 className={`${styles.contactHeading} text-center`}>Contact Us</h2>
        <div className={`${styles.contact_box}`}>
          <div className={styles.contactLeft}>
          
   

          <div className={styles.contactItem}>
            <h4>CHAT WITH US</h4>
            <p>Phone: +91 1234567890</p>
            <p>Email: sunit@venusai.in</p>
          </div>

          <div className={styles.contactItem}>
            <h4>OFFICE ADDRESS</h4>
            <p>TestQuest Pvt. Ltd. </p>
            <p>O-Hub Bhubaneswar,India</p> 
          </div>
        </div>

        <div className={styles.contactRight}>
          <img
            src={ContactImage }
            alt="Contact Us"
            className={styles.ContactImage}
          />
        </div>
        </div>
        
      </div>
      <InquiryForm/>
      <Footer />
    </div>
  );
};

export default Home;
