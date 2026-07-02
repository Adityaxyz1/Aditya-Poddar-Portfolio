import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee Software Engineer</h4>
                <h5>HUMB Global HealthTech</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Jun 2026 – Present. Developing full-stack healthcare applications with
              scalable frontend and backend features. Built AI-powered clinical reporting
              workflows by integrating LLM-based services using React.js, TypeScript,
              Node.js, Express.js, and PostgreSQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>CodSoft</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Sep 2025 – Dec 2025. Built scalable and responsive front-end applications
              using React.js, focusing on modular component architecture. Crafted visually
              consistent interfaces using Tailwind CSS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Dialogue Systems Engineer</h4>
                <h5>Outlier</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Aug 2024 – Aug 2025. Used large-scale transformer-based models, analyzing
              text samples and employed multi-turn context management and advanced
              reinforcement learning to optimize user interaction strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Testing Specialist</h4>
                <h5>Sirus BnB</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Jul 2023 – Aug 2023. Conducted functional and performance testing of
              gaming sessions using Selenium, Appium, and JIRA for bug tracking and
              cross-browser testing methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
