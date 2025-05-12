import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Добро пожаловать в CS2 Case Opening!</h1>
      <button
        onClick={() => window.location.href = "https://cs2-case-webapp-rt9e.vercel.app"}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Открыть кейс
      </button>
    </div>
  );
}

export default App;
