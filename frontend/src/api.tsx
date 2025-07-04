import axios from "axios";
import { CompanySearch } from "./company";

const { isAxiosError } = axios as any;

interface SearchResponse {
  data: CompanySearch[]; 
}

export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return response.data; 
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error message:", (error as Error).message);
      return (error as Error).message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error has occurred.";
    }
  }
};