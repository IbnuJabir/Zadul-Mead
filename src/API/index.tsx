"use server"
const backendApi = process.env.REACT_APP_BACKEND_API;

export const fetchAllPrograms = async () => {
    try {
      const response = await fetch(
        `${backendApi}/programs/getAllPrograms/all`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
    //   console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch programs:", error);
      return [];
    }
  };