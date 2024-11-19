import Brand from "@/components/Brand";
import Navbars from "@/components/Navbars";
import React from "react";

export default function nav() {
  return (
    <div>
      <Navbars />
      <Brand />
      <div class="linkWrap">
        <a href="#" class="link style-2">
          <span class="mask">
            <div class="link-container">
              <span class="link-title1 title">Get Started</span>
              <span class="link-title2 title">Get Started</span>
            </div>
          </span>
          <div class="link-icon">
            <svg
              class="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <svg
              class="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </a>
      </div>
      <div className="h-[300vh] bg-slate-700"></div>
    </div>
  );
}
