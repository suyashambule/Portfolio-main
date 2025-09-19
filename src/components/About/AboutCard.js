import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suyash Ambule </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />I am an <span className="purple">AI/ML Engineer</span> with
            experience in{" "}
            <b className="purple">
              Large Language Models (LLMs), RAG pipelines, and Agentic AI
              systems
            </b>
            .
            <br />I have completed my{" "}
            <b className="purple">B.Tech in Computer Engineering</b>
            from Vishwakarma University and I am actively working on AI/ML
            projects while preparing for my{" "}
            <b className="purple">Master’s in Germany</b>.
            <br />
            <br />
            Apart from coding and AI research, I enjoy doing activities like:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving AI/ML challenges & Kaggle competitions
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicing problem-solving on LeetCode
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new AI frameworks & tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & exploring new cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building the future of AI, one project at a time."
          </p>
          <footer className="blockquote-footer">Suyash Ambule</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
