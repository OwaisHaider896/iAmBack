import { useState } from "react";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  const click = async () => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${user}`
    );
    const { items } = await response.json();
    // console.log(items)
    setData(items);
  };

  return (
    <div className="App">
      <nav className="bg-black p-4">
        <div>
          <h1 className="text-white">GitHub User</h1>
        </div>
      </nav>
      <input
        type="text"
        className="p-2 w-64"
        value={user}
        placeholder="Search"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button className="bg-black p-2 m-2 rounded text-white" onClick={click}>
        Search
      </button>

      <div className="flex w-72 wrap  ">
        {data.map((value) => (
          <ul className="m-4 flex justify-center">
            <li key={value.id}>
              <img
                className=" w-32 h-32 rounded border-red-400"
                src={value.avatar_url}
                alt={value.login}
              />
              <p className=" mt-2 font-bold">{value.login}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
