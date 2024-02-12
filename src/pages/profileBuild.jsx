import { useEffect } from "react";
import ProfileBuild from "../components/ProfileFormComp/ProfileBuild";
import { animateScroll as scroll } from "react-scroll";

const ProfilePage = () => {
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);

  return (
    <div className=" flex justify-center align-middle bg-black min-h-screen">
      <ProfileBuild />
    </div>
  );
};

export default ProfilePage;
