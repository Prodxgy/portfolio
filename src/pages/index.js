import * as React from "react";
import Landing from "../components/landing";
import About from "../components/about";
import Resume from "../components/resume";
import Projects from "../components/projects";
import Blog from "../components/blog";
import Contact from "../components/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/main.scss";

// markup
const IndexPage = () => {
  return (
    <main>
      <Landing></Landing>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      <Blog></Blog>
      <Contact></Contact>
    </main>
  );
};

export default IndexPage;
