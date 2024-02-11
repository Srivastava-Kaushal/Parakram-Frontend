import { useEffect } from "react";
import SignUpForm from "../components/ProfileFormComp/ProfileBuild";
import { animateScroll as scroll } from "react-scroll";

const ProfilePage = () => {
  
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
  
  return (
    <div className=" w-full bg-black">
      <SignUpForm />
    </div>
  );
};

export default ProfilePage;
