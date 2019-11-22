import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from "./components/ChatEntry";
// import ChatLog from "./components/ChatLog";

const App = () => {
  console.log(chatMessages);

  const personA=chatMessages[0].sender

  const personB=chatMessages[1].sender

  return (
    <div id="App">
      <header>
        <h1>Chat between {personA} and {personB}</h1>
      </header>
      <main>




        <ChatEntry />




      </main>
    </div>
  );
};

export default App;





//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="App-title">{person}'s Social Media Feed</h1>
//       </header>
//       <main className="App-main">
//       <Timeline events={timelineData.events} />
//       </main>
//     </div>
//   );
// }