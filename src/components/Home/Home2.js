import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am deeply passionate about{" "}
              <b className="purple">Artificial Intelligence</b> and{" "}
              <b className="purple">Machine Learning</b>, with hands-on
              experience in{" "}
              <i>
                <b className="purple">
                  Transformers, LLMs, and Agentic AI systems
                </b>
              </i>
              .
              <br />
              <br />
              My core skills include{" "}
              <i>
                <b className="purple">
                  Python, TensorFlow, PyTorch, Hugging Face
                </b>
              </i>{" "}
              and I specialize in{" "}
              <b className="purple">
                building NLP pipelines, RAG systems, and fine-tuning models
              </b>
              .
              <br />
              <br />I actively work on{" "}
              <b className="purple">
                AI/ML projects (LangGraph, CrewAI, LoRA, QLoRA)
              </b>{" "}
              and continuously improve my{" "}
              <b className="purple">
                problem-solving skills by practicing LeetCode
              </b>
              .
              <br />
              <br />
              My focus is on{" "}
              <b className="purple">
                applying AI research into real-world projects
              </b>{" "}
              and growing as a <b className="purple">skilled AI/ML Engineer</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/suyashambule"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/suyashambule/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
