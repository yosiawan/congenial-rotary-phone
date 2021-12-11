import { useState, useEffect } from "react";

const BASE_API = "https://randomuser.me/api";
const DRIVERS_LS = "drivers";

type TDriverData = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export default function useFetchDriverData() {
  const [data, setData] = useState<TDriverData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const cachedDriverData = localStorage.getItem(DRIVERS_LS);
    if (cachedDriverData) {
      setData(JSON.parse(cachedDriverData));
      return;
    }

    (async () => {
      try {
        setLoading(true);
        const res = await fetch(BASE_API + "/?results=30");
        const resJson = await res.json();
        const driverData: TDriverData[] = resJson?.results ?? [];
        localStorage.setItem(DRIVERS_LS, JSON.stringify(driverData));
        setData(driverData);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    })();
  }, [setData, setLoading, setError]);

  return { data, loading, error };
}
