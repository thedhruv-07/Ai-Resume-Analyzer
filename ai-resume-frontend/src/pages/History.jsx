import { useEffect, useState } from "react";
import API from "../services/api";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    API.get("/resume/history").then((res) =>
      setHistory(res.data)
    );
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Analysis History</h1>

      {history.map((item) => (
        <div
          key={item._id}
          className="bg-white p-4 rounded-xl shadow mb-4"
        >
          <p><strong>Score:</strong> {item.score}</p>
          <p>{item.createdAt}</p>
        </div>
      ))}
    </div>
  );
}