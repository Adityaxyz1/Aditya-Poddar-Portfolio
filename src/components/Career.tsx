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
                <h4>AI Summer Cohort 1.0</h4>
                <h5>GUC</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Jun 2024 – Jul 2024. Developed an AI-driven image classification system
              using CNNs and datasets like ImageNet, utilizing Scikit-learn for model
              training, validation and fine-tuning hyperparameters.
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
