import { useState } from "react";
import { objToQuery } from "../utils";

interface GetVolunteersQueries {
  limit?: number;
  page?: number;
  name?: string;
  country?: string;
}

export default function useVolunteers() {
  const [loading, setLoading] = useState(false);
  // const [totalPages, setTotalPages] = useState(1);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  async function getVolunteers(filters: GetVolunteersQueries = {}) {
    setLoading(true);
    try {
      filters.limit = filters.limit ?? 6; // default limit is 6
      const queries = objToQuery(filters);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/volunteer/all?${queries}`, { method: "GET" });
      if (response.status < 200 || response.status >= 500) {
        setLoading(false);
        return false;
      }
      const responseData = await response.json();
      setVolunteers(responseData);
      // setTotalPages(responseData.totalPages);
      setLoading(false);
      return true;
    } catch (e) {
      setLoading(false);
      return false;
    }
  }

  return {
    loading,
    // totalPages,
    volunteers,
    getVolunteers,
  };
}