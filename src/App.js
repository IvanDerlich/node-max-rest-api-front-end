import "./App.css";

function App() {
  const getPostsClickHandler = async () => {
    console.log("Get Posts Clicked");
  };
  return (
    <div className="App">
      <button onClick={getPostsClickHandler}>Get Posts</button>
      <button>Create Post</button>
    </div>
  );
}

export default App;
