// import React from 'react';
// import UrlForm from './components/UrlForm';

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center px-4">
//       <div className="max-w-xl w-full">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">🔗 URL Shortener</h1>
//         <UrlForm />
//       </div>
//     </div>
//   );
// }

// export default App;


// App.jsx



import React from 'react';
import UrlForm from './components/UrlForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8 flex justify-center items-center gap-3">
          <span role="img" aria-label="link">🔗</span> URL Shortener
        </h1>
        <UrlForm />
      </div>
    </div>
  );
}

export default App;
