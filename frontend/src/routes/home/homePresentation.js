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
  const isDesktop = useMediaQuery("(min-width: 1580px)");

  return (
    <div>
      <TopNav />
      <main className="p-4 md:mx-10 mt-4">
        <section className="mt-4 md:flex w-full gap-8">
          <div className="hidden md:flex flex-col gap-y-8 basis-1/6 w-3/6 lg:w-2/6 2xl:w-1/6">
            <ProfileAside />
            <AsideMenu />
          </div>
          <div className="basis-auto">
            <NewPost />
            <div className="mt-4">
              <Post />
            </div>
          </div>
          {isDesktop && (
            <div className="hidden md:block basis-1/6 w-1/6">
              <ChatAside />
            </div>
          )}
        </section>
      </main>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default HomePresentation;
