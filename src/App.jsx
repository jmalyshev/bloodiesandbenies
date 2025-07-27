import { useState } from 'react';
import headerVideo from './assets/Bloodies.mp4'; // Replace with your video file

const posts = [
	{
		title: 'Welcome to Bloodies and Benies!',
		date: '2025-07-27',
		content: `Hi! I'm Peter, and I live in the beautiful state of Minnesota. I'm on a mission to try and review every Bloody Mary in the state. This blog is where I'll document my brunch adventures, from spicy mixes to sky-high garnish stacks.`,
	},
];

function App() {
	const [showIntro, setShowIntro] = useState(true);

	return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 max-w-xl mx-auto text-center h-96 relative"> {/* Added relative positioning */}
        <video
          src={headerVideo}
          autoPlay
          muted
          className="mx-auto mb-4 rounded shadow z-0" // Set z-index to 0
          style={{ width: '500px', height: '500px' }}
        />
      </header>
      <main className="p-6 max-w-3xl mx-auto font-sans relative z-10"> {/* Added z-10 to ensure it appears above */}
        <div className="mb-4">
          <button
            onClick={() => setShowIntro(true)}
            className={`mr-2 px-4 py-2 rounded ${
              showIntro ? 'bg-white text-black' : 'border border-white text-white'
            }`}
          >
            Intro
          </button>
          <button
            onClick={() => setShowIntro(false)}
            className={`px-4 py-2 rounded ${
              !showIntro ? 'bg-white text-black' : 'border border-white text-white'
            }`}
          >
            Blog
          </button>
        </div>

				{showIntro ? (
					<div className="bg-black p-4 rounded shadow text-white border border-white">
						<h2 className="text-2xl font-semibold mb-2">Hi, I'm Peter!</h2>
						<p>
							I live in Minnesota and I love brunch. This blog is my mission to
							review every Bloody Mary the state has to offer — from tiny town bars
							to fancy Minneapolis rooftops. If you're into spicy tomato drinks and
							breakfast food, you're in the right place!
						</p>
					</div>
				) : (
					<div className="space-y-4">
						{posts.map((post, idx) => (
							<div
								key={idx}
								className="bg-black p-4 rounded shadow text-white border border-white"
							>
								<h3 className="text-xl font-semibold">{post.title}</h3>
								<p className="text-sm text-white mb-2">{post.date}</p>
								<p>{post.content}</p>
							</div>
						))}
					</div>
				)}
			</main>
		</div>
	);
}

export default App;
