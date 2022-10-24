import { useState } from "react";
import { objToQuery } from "../utils";

export default function useConsultants() {
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [consultants, setConsultants] = useState<Consultant[]>([]);

  async function getConsultants(filters: Record<string, string | number> = {}) {
    setLoading(true);
    const queries = objToQuery(filters);
    try {
      const response = await fetch(`${process.env.API_URL}/consultant/all?${queries}&limit=6`, { method: "GET" });
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