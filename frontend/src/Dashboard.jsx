import { useEffect, useState } from "react";
import API from "./api";
import AdminPanel from "./AdminPanel";

export default function Dashboard({ onLogout }) {
  const [sweets, setSweets] = useState([]);
  const [query, setQuery] = useState("");

  const loadSweets = async () => {
    const res = await API.get("/sweets");
    setSweets(res.data);
  };

  const search = async () => {
    const res = await API.get(`/sweets/search?name=${query}`);
    setSweets(res.data);
  };

  const purchase = async (id) => {
    await API.post(`/sweets/${id}/purchase`);
    loadSweets();
  };

  const logout = () => {
    localStorage.removeItem("token");
    onLogout();
  };

  useEffect(() => {
    loadSweets();
  }, []);

  return (
    <div className="dashboard-bg">
      <div className="top-bar">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <h1 className="dashboard-title">🍬 Sweets Dashboard</h1>

      <div className="search-bar">
        <input
          placeholder="Search sweets by name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>

      <div className="sweets-grid">
        {sweets.map((s) => (
          <div key={s._id} className="card sweet-card">
            <b>{s.name}</b>
            <span>₹{s.price}</span>
            <span>Qty: {s.quantity}</span>

            <button disabled={s.quantity === 0} onClick={() => purchase(s._id)}>
              {s.quantity === 0 ? "Out of Stock" : "Purchase"}
            </button>
          </div>
        ))}
      </div>

      <AdminPanel sweets={sweets} refresh={loadSweets} />
    </div>
  );
}
