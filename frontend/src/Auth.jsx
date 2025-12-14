import { useState } from "react";
import API from "./api";

export default function Auth({ onAuth }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    try {
      setLoading(true);

      if (isRegister) {
        await API.post("/auth/register", { email, password });
        alert("Registered successfully. Please login.");
        setIsRegister(false);
      } else {
        const res = await API.post("/auth/login", { email, password });
        localStorage.setItem("token", res.data.token);
        onAuth();
      }
    } catch {
      alert("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>{isRegister ? "Register" : "Login"}</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={submit} disabled={loading}>
        {loading ? "Please wait..." : isRegister ? "Register" : "Login"}
      </button>

      <p className="link" onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Login" : "New user? Register"}
      </p>
    </div>
  );
}
