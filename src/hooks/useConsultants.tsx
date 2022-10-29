import { useState } from "react";
import { objToQuery } from "../utils";

interface GetConsultantsQueries {
  limit?: number;
  page?: number;
  name?: string;
  country?: string;
}

export default function useConsultants() {
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [consultants, setConsultants] = useState<Consultant[]>([]);

  async function getConsultants(filters: GetConsultantsQueries = {}) {
    setLoading(true);
    try {
      filters.limit = filters.limit ?? 6; // default limit is 6
      const queries = objToQuery(filters);
      const response = await fetch(`${process.env.API_URL}/consultant/all?${queries}`, { method: "GET" });
      if (response.status < 200 || response.status >= 500) {
        setLoading(false);
        return false;
      }
      const responseData = await response.json();
      setConsultants(responseData.data);
      setTotalPages(responseData.totalPages);
      setLoading(false);
      return true;
    } catch (e) {
      setLoading(false);
      return false;
    }
  }

  return {
    loading,
    totalPages,
    consultants,
    getConsultants,
  };
}