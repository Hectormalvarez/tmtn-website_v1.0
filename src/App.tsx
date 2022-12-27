import React from "react";

import Header from "./components/Header";
import ProjectCatalog from "./components/ProjectCatalog";



function App() {
  return (
    <main className="font-nunito max-w-6xl mx-auto">
      <Header />
      <ProjectCatalog />
      <footer className="text-lg text-center p-4">copyright 2022</footer>
    </main>
  );
}

export default App;
