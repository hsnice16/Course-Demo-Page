const body = document.querySelector("body");
const div = document.querySelector("div");
const h2 = document.querySelector("h2");
const section = document.querySelectorAll("section");
const btn = document.querySelector("button");

function handleBtnClick(event) {
  switch (event.target.innerText) {
    case "Add Style to this Page":
      btn.innerText = "Remove Style";
      btn.className = "button";

      body.className = "body";
      div.className = "container";
      h2.className = "main-heading";

      section.forEach(
        (sectionElement) => (sectionElement.className = "section")
      );

      break;
    case "Remove Style":
      btn.innerText = "Add Style to this Page";
      btn.className = "";

      body.className = "";
      div.className = "";
      h2.className = "";

      section.forEach((sectionElement) => (sectionElement.className = ""));

      break;
  }
}

btn.addEventListener("click", handleBtnClick);
