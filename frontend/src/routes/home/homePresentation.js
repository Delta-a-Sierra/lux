import React from "react";
import { TopNav, NewPost, Post } from "../../components";

const HomePresentation = () => {
  return (
    <div>
      <TopNav />
      <main className="p-4">
        <NewPost />
        <section className="mt-4">
          <Post />
        </section>
      </main>
    </div>
  );
};

export default HomePresentation;
