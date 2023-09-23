import React from "react";
import Link from "next/link";
import styles from "../../app/globals.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="text">
        <span className="span">get</span>
        <span className="text-wrapper-7">linked</span>
      </div>
      <Link href="#timeline" className="text-wrapper-3">
        Timeline
      </Link>

      <Link href="/Introduction" className="text-wrapper-4">
        Overview
      </Link>
      <Link href="/AskedQuestions" className="text-wrapper-5">
        FAQs
      </Link>
      <Link href="/Contact" className="text-wrapper-6">
        Contact
      </Link>
      <Link href="/register" className="overlap-group-wrapper2">
        <button className="div-wrapper">Register</button>
      </Link>
    </div>
  );
};

export default NavBar;
