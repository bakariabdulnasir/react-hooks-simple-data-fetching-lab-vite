import { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);

  function fetchDogImage() {
    setLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  // Fetch dog image when app loads
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="app">
      <h1>Random Dog Generator</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}

      <button onClick={fetchDogImage}>
        Get New Dog
      </button>
    </div>
  );
}

export default App;
