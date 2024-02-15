import { useEffect, useState } from "react";
import ProfileBuild from "../components/ProfileFormComp/ProfileBuild";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router";
import Loading from "../components/loader/loading";

const ProfilePage = () => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    // profile edit request to api backend;
    console.log(value);
  };

  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
    const userId = localStorage.getItem("hashedId");
    if (userId) {
      setUser(user);
      setLoading(false);
    } else {
      navigate("/signIn");
    }
    // setLoading(false);
  }, []);

  const renderProfile = () => {
    if (loading) {
      return <Loading />;
    } else {
      return <ProfileBuild onSubmit={onSubmit} user={user} />;
      
    }
  };

  return (
    <div className=" flex justify-center align-middle p-52 bg-black min-h-screen">
      {renderProfile()}
    </div>
  );
};

export default ProfilePage;
