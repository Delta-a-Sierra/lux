import React from "react";
import { TopNav, NewPost, Post, ProfileAside } from "../../components";

const HomePresentation = () => {
  return (
    <div>
      <TopNav />
      <main className="p-4 md:mx-10 lg:mx-40 mt-4">
        <section className="mt-4 md:flex w-full gap-8">
          <div className="hidden md:block w-1/6">
            <div className="">
              <ProfileAside />
            </div>
          </div>
          <div className="basis-auto flex-col">
            <NewPost />
            <div className="mt-4">
              <Post />
            </div>
          </div>
          <div className="hidden md:block basis-1/5 w-1/4"></div>
        </section>
      </main>
    </div>
  );
};

export default HomePresentation;
