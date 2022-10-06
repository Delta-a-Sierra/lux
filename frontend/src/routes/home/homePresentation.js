import React from "react";
import {
  TopNav,
  NewPost,
  Post,
  ProfileAside,
  AsideMenu,
  Footer,
  ChatAside,
} from "../../components";

import { useMediaQuery } from "../../hooks";

const HomePresentation = () => {
  const isDesktop = useMediaQuery("(min-width: 1536px)");

  return (
    <div id="main" className="flex flex-col gap-2 w-screen h-screen">
      <section className="bg-blue-600">
        <TopNav />
      </section>
      <section className="flex-1 min-h-0 grid gap-2 grid-cols-6 grid-rows-min-auto px-4 lg:px-8 xl:px-16">
        <aside className="hidden  md:flex flex-col gap-2 col-span-2 2xl:col-span-1">
          <ProfileAside />
          <AsideMenu />
          {!isDesktop && (
            <div className="hidden md:flex flex-col gap-y-8 col-span-1">
              <ChatAside />
            </div>
          )}
        </aside>

        <main className="flex flex-1 flex-col gap-y-2 col-span-6 md:col-span-4 overflow-scroll lg:pr-5 pb-8">
          <div className="flex flex-col gap-2">
            <div className="col-span-6">
              <NewPost />
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </main>
        {isDesktop && (
          <aside className="hidden md:flex flex-col gap-y-4 col-span-1">
            <ChatAside />
          </aside>
        )}
      </section>
      {isDesktop && <Footer />}
    </div>
  );
};

export default HomePresentation;
