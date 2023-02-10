import React from "react";
import Resumepdf from "../../assets/Resume.pdf";

export default function Resume() {
  return (
    <div>
      <h4 className="card-title"> Resume:</h4>
      <a
        href={Resumepdf}
        download="resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume"
      >
        <b>My Resume</b>
      </a>
    </div>
  );
}
