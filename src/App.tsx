import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./App.css";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [content, setContent] = useState(searchParams.get("content") || "");

  return (
    <>
      <h1>Pigeon Note</h1>
      <textarea
        autoFocus
        value={content}
        onChange={(e) => {
          if (e.target.value) {
            setSearchParams({ content: e.target.value });
          } else {
            setSearchParams({});
          }
          setContent(e.target.value);
        }}
        placeholder="Write something down..."
      />
      <p className="attribution">
        <a
          href="https://www.flaticon.com/free-icons/pigeon"
          title="pigeon icons"
        >
          Pigeon icon created by Freepik - Flaticon
        </a>
      </p>
    </>
  );
}

export default App;
