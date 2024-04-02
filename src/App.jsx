import { useState } from "react";
import "./App.css";
import LoginForm from "./assets/components/LoginForm.jsx";
import List from "./assets/components/List.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <>
        <List />
      </>
    );
  }

  return (
    <>
      <LoginForm
        onSuccess={() => {
          setIsLoggedIn(true);
        }}
      />
    </>
  );
}

export default App;
