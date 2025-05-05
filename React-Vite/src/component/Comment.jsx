import { useState } from "react";

const Comment = () => {
  // Remove unused states
  const [data, setData] = useState({ name: "", message: "" });
  const [allData, setAllData] = useState([]);

  const handleSubmit = () => {
    if (!data.name.trim() || !data.message.trim()) {
      alert("Please fill in both name and message!");
      return;
    }
    
    setAllData((prev) => [{ ...data, timestamp: new Date() }, ...prev]);
    setData({ name: "", message: "" });
  };

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Share Your Thoughts
      </h1>

      <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              placeholder="Enter your name"
              onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 transition-all duration-200 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={data.message}
              placeholder="What's on your mind?"
              onChange={(e) => setData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full h-32 p-3 transition-all duration-200 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-700 active:bg-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
            Post Comment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allData.map((comment, index) => (
          <div 
            key={index}
            className="overflow-hidden transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">{comment.name}</h3>
                <span className="text-xs text-gray-500">
                  {comment.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="leading-relaxed text-gray-600">
                {comment.message}
              </p>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{comment.timestamp.toLocaleDateString()}</span>
                <button className="text-blue-600 transition-colors duration-200 hover:text-blue-700">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {allData.length === 0 && (
        <div className="mt-8 text-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <p className="text-lg font-medium">No comments yet</p>
          <p className="text-sm">Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
};

export default Comment;
