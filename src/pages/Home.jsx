const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to CampusConnect
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Find peers with relevant skills for learning, projects, and competitions
      </p>
      <div className="space-x-4">
        <button className="btn btn-primary">Get Started</button>
        <button className="btn btn-secondary">Learn More</button>
      </div>
    </div>
  );
};

export default Home; 