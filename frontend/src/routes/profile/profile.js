import React from "react";
import {
  TopNav,
  NewPost,
  Post,
  ProfileAside,
  AsideMenu,
  Footer,
  ChatAside,
  ProfileHeader,
} from "../../components";
import { useMediaQuery } from "../../hooks";

const Profile = () => {
  const isDesktop = useMediaQuery("(min-width: 1536px)");

  return (
    <div>
      <TopNav />
      <main className="p-4 md:mx-10 mt-4 grid grid-cols-6 gap-x-4 gap-y-4">
        <div className="col-span-6">
          <ProfileHeader />
        </div>
        <aside className="hidden md:flex flex-col gap-y-4 lg:gap-y-8 col-span-2 2xl:col-span-1">
          {/* <ProfileAside /> */}
          <AsideMenu />
          {!isDesktop && (
            <div className="hidden md:flex flex-col gap-y-8 col-span-1">
              <ChatAside />
            </div>
          )}
        </aside>
        <div className=" col-span-6 md:col-span-4">
          {true && (
            <div>
              <Post />
            </div>
          )}
        </div>
        {isDesktop && (
          <aside className="hidden md:flex flex-col gap-y-8 col-span-1">
            <ChatAside />
          </aside>
        )}
      </main>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
