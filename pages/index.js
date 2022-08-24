import React, { useState } from "react";
import { useRouter } from "next/router";
function Home() {
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    router.push("/chat");
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
}

export default Home;
