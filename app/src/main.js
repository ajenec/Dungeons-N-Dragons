import "./style.css";

const main = () => {
  const p = document.createElement("p");
  p.textContent = "Vite is amazing!";

  document.querySelector("main").append(p);
};

main();
