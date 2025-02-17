import "./style.css";
import { searchMonster } from "./allInfo";

const main = () => {
  // const monsterInput = document.getElementById("monsterInput");
  const searchButton = document.getElementById("searchButton");
  // const monsterResult = document.getElementById("monsterResult");

  searchButton.addEventListener("click", () => {
    const monsterName = monsterInput.value.trim().toLowerCase();
    if (monsterName) {
      searchMonster(monsterName);
    } else {
      monsterResult.innerHTML = "Please enter a name";
    }
  });
};

main();
