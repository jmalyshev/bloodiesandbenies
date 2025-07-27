import { useState } from 'react';

const posts = [
  {
    title: "Welcome to Bloodies and Benies!",
    date: "2025-07-27",
    content: `Hi! I'm Julie, and I live in the beautiful state of Minnesota. I'm on a mission to try and review every Bloody Mary in the state. This blog is where I'll document my brunch adventures, from spicy mixes to sky-high garnish stacks.`
  }
];

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans">
      <h1 className="text-4xl font-bold mb-6">Bloodies and Benies</h1>
      <div className="mb-4">
        <button onClick={() => setShowIntro(true)} className={`mr-2 px-4 py-2 rounded ${showIntro ? 'bg-red-500 text-white' : 'border'}`}>
          Intro
        </button>
        <button onClick={() => setShowIntro(false)} className={`px-4 py-2 rounded ${!showIntro ? 'bg-red-500 text-white' : 'border'}`}>
          Blog
        </button>
      </div>

      {showIntro ? (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Hi, I'm Julie!</h2>
          <p>
            I live in Minnesota and I love brunch. This blog is my mission to review every Bloody Mary the state has to offer — from tiny town bars to fancy Minneapolis rooftops.
            If you're into spicy tomato drinks and breakfast food, you're in the right place!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
