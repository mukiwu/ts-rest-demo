import React, { useState } from "react";
import { api } from "./api";

const App: React.FC = () => {
  const [user, setUser] = useState<{
    id: string;
    name: string;
    age: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async (id: string) => {
    try {
      const response = await api.getUser({ params: { id } });
      console.log("response", response);
      if (response.status === 200) {
        setUser(response.body);
        setError(null);
      } else {
        console.log(response);
        setError(response.body.message);
        setUser(null);
      }
    } catch (err) {
      console.log(err);
      setError("Failed to fetch user");
      setUser(null);
    }
  };

  return (
    <div>
      <button onClick={() => fetchUser("1")}>Fetch User 1</button>
      <button onClick={() => fetchUser("2")}>Fetch User 2</button>
      {user && (
        <div>
          <h2>User Info</h2>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default App;
