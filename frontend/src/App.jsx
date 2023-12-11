// import { useState } from 'react'

// import './App.css'
// import DisplayContent from "./components/DisplayContent";
// import Form from "./components/Form";

import DisplayContent from "./components/DisplayContent";
import Form from "./components/Form";

function App() {
  return (
    <main className="bg-slate-900 min-h-screen h-auto flex flex-col justify-center items-center gap-3 overscroll-y-auto">
      <Form />
      <DisplayContent />
    </main>
  );
}

export default App;
