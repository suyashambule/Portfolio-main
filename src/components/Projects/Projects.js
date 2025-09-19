import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Professional AI/ML project images for portfolio
const rag =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format"; // Data analytics/ML charts
const resume =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format"; // AWS/cloud computing
const crewai =
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&auto=format"; // AI automation/robotics
const tinyllama =
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&h=300&fit=crop&auto=format"; // Text/NLP processing
const depression =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&auto=format"; // AI chatbot/conversation
const newsbot =
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&auto=format"; // Neural networks/AI

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">AI/ML Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few AI/ML projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rag}
              isBlog={false}
              title="Wine Quality Prediction with MLOps"
              description="Developed a robust ML pipeline for wine quality prediction using MLOps principles, ensuring reproducibility and scalability."
              ghLink="https://github.com/suyashambule/Wine-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Blog Generation Using AWS"
              description="ATS-style resume analyzer built with FastAPI and semantic similarity scoring. Provides matching score and feedback against job descriptions."
              ghLink="https://github.com/suyashambule"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crewai}
              isBlog={false}
              title="CrewAI Data Science Automation"
              description="Built a multi-agent AI workflow using CrewAI to automate data preprocessing, model training, and evaluation — reducing manual work by ~80%."
              ghLink="https://github.com/suyashambule"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tinyllama}
              isBlog={false}
              title="End to End Text Summarization using Pegasus"
              description="Fine-tuned Pegasus on news articles to generate concise summaries while preserving key information."
              ghLink="https://github.com/suyashambule"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={depression}
              isBlog={false}
              title="Intent Classification for Chatbot"
              description="Developed an ML model to detect signs of depression in adolescents using social media data, achieving 87% accuracy."
              ghLink="https://github.com/suyashambule"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
