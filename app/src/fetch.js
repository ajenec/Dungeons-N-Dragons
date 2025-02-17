//https://www.dnd5eapi.co/api/

export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok)
      throw new Error(
        `Fetch failed. ${response.status} ${response.statusText}`
      );

    const contentType = response.headers.get("content-type");
    if (contentType === null || !contentType.includes("application/json")) {
      const textData = await response.text();
      // Return a "tuple", making error handling on the "receiving" end easier
      return [textData, null];
    }

    // Return a "tuple", making error handling on the "receiving" end easier
    const jsonData = await response.json();
    return [jsonData, null];
  } catch (error) {
    // if there was an error, log it and return a tuple: [data, error]
    console.error(error.message);
    return [null, error];
  }
};
