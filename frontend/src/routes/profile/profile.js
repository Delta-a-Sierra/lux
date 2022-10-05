import React, { useState } from "react";
import {
  TopNav,
  Post,
  ProfileAside,
  AsideMenu,
  Footer,
  ChatAside,
  ProfileHeader,
  SearchAlt,
  User,
} from "../../components";
import { useMediaQuery } from "../../hooks";

const Profile = () => {
  const isDesktop = useMediaQuery("(min-width: 1536px)");
  const [page, setPage] = useState("posts");

  return (
    <div className="h-screen w-screen overflow-hidden overflow-y-scroll items-center flex flex-col gap-y-2">
      <TopNav />
      <div className="flex flex-col flex-1 gap-y-3 px-2 md:mx-10">
        <ProfileHeader activePage={page} setActivePage={setPage} />
        <div className="flex-1 mb-4 grid grid-cols-6 gap-4 lg:gap-8">
          <aside className="hidden md:flex flex-col gap-y-4 lg:gap-y-4 col-span-2 2xl:col-span-1">
            <AsideMenu />
            {!isDesktop && (
              <div className="hidden md:flex flex-col gap-y-8 col-span-1">
                <ChatAside />
              </div>
            )}
          </aside>
          <div className="flex flex-col gap-y-4 col-span-6 md:col-span-4">
            {page === "posts" ? "" : <SearchAlt bg="gray-100" shadow />}
            {page === "posts" && (
              <div className="grid grid-cols-1 gap-2">
                <Post />
                <Post />
                <Post />
              </div>
            )}
            {page === "following" && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                <User />
                <User />
                <User />
              </div>
            )}
            {page === "followers" && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                <User />
                <User />
                <User />
                <User />
                <User />
              </div>
            )}
          </div>
          {isDesktop && (
            <aside className="hidden md:flex flex-col gap-y-4 col-span-1">
              <ChatAside />
            </aside>
          )}
        </div>
      </div>
      {isDesktop && <Footer />}
    </div>
  );
};

export default Profile;
