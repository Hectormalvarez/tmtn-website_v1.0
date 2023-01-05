import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProjectList from "./ProjectList";

const Home = () => {
  return (
    <main className="font-nunito max-w-6xl mx-auto">
      <Header />
      <ProjectList />
      <Footer />
    </main>
  );
};

export default Home;
