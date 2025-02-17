import { fetchData } from "./fetch";

export const searchMonster = async (monsterName) => {
  console.log("Searching for:", monsterName); // Log the name of the monster being searched for
  try {
    // Fetch the list of monsters (with pagination handling)
    const monstersData = await fetchData(
      `https://www.dnd5eapi.co/api/monsters/${monsterName.toLowerCase()}`
    );

    console.log("Fetched Monsters Data:", monstersData); // Log the raw API response
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
