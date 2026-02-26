import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
      <div className="h-screen bg-white text-black flex items-center justify-center">
        <h2 className="text-4xl font-bold">Scroll More Content</h2>
      </div>
    </>
  );
}

export default App;