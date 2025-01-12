import React, { useState } from "react";
import {
  TopNav,
  Post,
  AsideMenu,
  Footer,
  ChatAside,
  ProfileHeader,
  SearchAlt,
  UserCard,
} from "../../components";
import { useMediaQuery } from "../../hooks";

//TODO BUG: page doesn't scroll to top when switch between tabs

const Profile = () => {
  const isDesktop = useMediaQuery("(min-width: 1536px)");
  const [page, setPage] = useState("posts");

  return (
    <div id="main" className="flex flex-col gap-2 w-screen h-screen">
      <section className="bg-blue-600">
        <TopNav />
      </section>
      <section className="flex-1 min-h-0 grid gap-2 grid-cols-6 grid-rows-min-auto px-4 lg:px-8 xl:px-16">
        <div className="col-span-6">
          <ProfileHeader activePage={page} setActivePage={setPage} />
        </div>
        <aside className="hidden  md:flex flex-col gap-2 col-span-2 2xl:col-span-1">
          <AsideMenu />
          {!isDesktop && (
            <div className="hidden md:flex flex-col gap-y-8 col-span-1">
              <ChatAside />
            </div>
          )}
        </aside>

        <main className="flex flex-1 flex-col gap-y-2 col-span-6 md:col-span-4 overflow-y-scroll lg:pr-5 pb-8">
          {page === "posts" && (
            <div className="flex flex-col gap-2">
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          )}
          {page === "following" && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
              {page === "posts" ? (
                ""
              ) : (
                <div className="col-span-1 md:col-span-2 xl:col-span-3 2xl:col-span-4">
                  <SearchAlt bg="gray-100" shadow />
                </div>
              )}
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          )}
          {page === "followers" && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
              {page === "posts" ? (
                ""
              ) : (
                <div className="col-span-1 md:col-span-2 xl:col-span-4">
                  <SearchAlt bg="gray-100" shadow />
                </div>
              )}
              <UserCard />
            </div>
          )}
        </main>
        {isDesktop && (
          <aside className="hidden md:flex flex-col gap-y-4 col-span-1">
            <ChatAside />
          </aside>
        )}
      </section>
      <footer className="hidden md:block">
        <Footer />
      </footer>
      <footer className="block md:hidden bg-gray-100">
        <AsideMenu size="1.5em" justify="evenly" />
      </footer>
    </div>
  );
};

export default Profile;
