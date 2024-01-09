import axios from "axios";

export async function GetAllSnapshots() {
  try {
    const userId = localStorage.getItem("userId");
    const response = await axios.get(
      `https://localhost:7065/snapshots/${userId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching snapshots:", error);
    throw error;
  }
}
