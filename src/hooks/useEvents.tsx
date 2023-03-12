import { useState } from "react";
import { objToQuery } from "../utils";

interface GetEventsQueries {
  limit?: number;
  page?: number;
  name?: string;
  country?: string;
}

export default function useEvents() {
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [events, setEvents] = useState<AvailableEvent[]>([]);

  async function getEvents(filters: GetEventsQueries = {}) {
    setLoading(true);
    try {
      filters.limit = filters.limit ?? 6; // default limit is 6
      const queries = objToQuery(filters);
      const response = await fetch(`${process.env.API_URL}/events/page/${filters.page}?${queries}`, { method: "GET" });
      if (response.status < 200 || response.status >= 500) {
        setLoading(false);
        return false;
      }
      const responseData = await response.json();
      setEvents(responseData.events);
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
    events,
    getEvents,
  };
}