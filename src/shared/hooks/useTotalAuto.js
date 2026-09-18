import { useEffect, useState } from "react";

export default function useTotalAuto() {
  const [totalAuto, setTotalAuto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then((res) => res.json())
      .then((data) => {
        setTotalAuto(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error car download", err);
        setLoading(false);
      });
  }, []);

  return {
    totalAuto,
    loading,
  };
}
