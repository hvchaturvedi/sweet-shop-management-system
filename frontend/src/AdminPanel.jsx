import { useState } from "react";
import API from "./api";

export default function AdminPanel({ sweets, refresh }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (!form.name || !form.category || !form.price || !form.quantity) {
      alert("All fields required");
      return;
    }

    if (editId) {
      await API.put(`/sweets/${editId}`, form);
    } else {
      await API.post("/sweets", form);
    }

    setForm({ name: "", category: "", price: "", quantity: "" });
    setEditId(null);
    refresh();
  };

  const editSweet = (s) => {
    setEditId(s._id);
    setForm({
      name: s.name,
      category: s.category,
      price: s.price,
      quantity: s.quantity,
    });
  };

  const deleteSweet = async (id) => {
    if (!confirm("Delete this sweet?")) return;
    await API.delete(`/sweets/${id}`);
    refresh();
  };

  return (
    <div className="card">
      <h3>Admin Panel</h3>

      <input
        name="name"
        placeholder="Sweet Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
      />

      <button onClick={submit}>{editId ? "Update Sweet" : "Add Sweet"}</button>

      <hr />

      {sweets.map((s) => (
        <div key={s._id} className="row">
          <span>
            {s.name} — ₹{s.price}
          </span>
          <div>
            <button onClick={() => editSweet(s)}>Edit</button>
            <button onClick={() => deleteSweet(s._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
