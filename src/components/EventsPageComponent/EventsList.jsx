import SportBanner from "./SportBanner";
import FootballImg from "../../assets/Images/Football2.jpg";
import CricketImg from "../../assets/Images/Cricket.jpg";
import HockeyImg from "../../assets/Images/Hockey.jpg";
import VolleyballImg from "../../assets/Images/Volleyball.jpg";
import BasketballImg from "../../assets/Images/Basketball.jpg";
import KabaddiImg from "../../assets/Images/Kabaddi.jpg";
import AthleticsImg from "../../assets/Images/ath.jpg";
import BadmintonImg from "../../assets/Images/Badminton.jpg";
import TableTennisImg from "../../assets/Images/TableTennis.jpg";
import SquashImg from "../../assets/Images/Squash.jpg";
import ChessImg from "../../assets/Images/Chess.jpg";
import TennisImg from "../../assets/Images/Tennis.jpg";
import PowerliftingImg from "../../assets/Images/Powerlifting.jpg";
import BoxingImg from "../../assets/Images/Boxing.jpg";
import KarateImg from "../../assets/Images/Karate.jpg";

const EventsList = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <SportBanner
        sportImg={FootballImg}
        sportName={"Football"}
        eventLink={
          "https://drive.google.com/file/d/1-Vt8vnict1cA2bhczq2ZTfW8U8UIpic_/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={CricketImg}
        sportName={"Cricket"}
        eventLink={
          "https://drive.google.com/file/d/1pv1U7tPyUFb6kuCD7dlmC8E8BEu97LY7/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={HockeyImg}
        sportName={"Hockey"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSeSi62rYGDleZi89O7n61xd4lwd64fet1xDVv9DvJwz_Tyz2w/viewform?usp=sf_link"
        }
      />
      <SportBanner
        sportImg={VolleyballImg}
        sportName={"Volleyball"}
        eventLink={
          "https://drive.google.com/file/d/15aKiY3xsE2i2Eqws4q2WROHON8MzOcwz/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={BasketballImg}
        sportName={"Basketball"}
        eventLink={
          "https://drive.google.com/file/d/1ZMm28V0Yzg7RxCYFNZY6VZ7LJ6PXgS-9/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={KabaddiImg}
        sportName={"Kabaddi"}
        eventLink={
          "https://drive.google.com/file/d/1AOzZJDGLMl_HI-hB8o4ncr3QbXrUe6j7/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={AthleticsImg}
        sportName={"Athletics"}
        eventLink={
          "https://drive.google.com/file/d/1l17SAFfkQJMBzZxR8IETlgiK6VfeYCyd/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={BadmintonImg}
        sportName={"Badminton"}
        eventLink={
          "https://drive.google.com/file/d/1mm0XEqCuYd1kswOwpAael3Ra0jiBspqC/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={TableTennisImg}
        sportName={"Table Tennis"}
        eventLink={
          "https://drive.google.com/file/d/1PAhnNHdaXHPaKcRsjbpCPLCdwFY8Kzfb/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={SquashImg}
        sportName={"Squash"}
        eventLink={
          "https://drive.google.com/file/d/1hbdNFxBwzpDx3xdJSpKsSXu5ZfQT5KUU/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={ChessImg}
        sportName={"Chess"}
        eventLink={
          "https://drive.google.com/file/d/1steHeQnWfZ-V-EkVeNDqhUWihstQyUn-/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={TennisImg}
        sportName={"Tennis"}
        eventLink={
          "https://drive.google.com/file/d/1F_BAZ74zQk9_X58tuEz2PzBWQPV9ronD/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={PowerliftingImg}
        sportName={"Power Lifting"}
        eventLink={
          "https://drive.google.com/file/d/14E1cs_MNZTSEU8xHcCHJwKP7Bofao0Sy/view?usp=sharing"
        }
      />
      <SportBanner
        sportImg={BoxingImg}
        sportName={"Boxing"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSfBDza7BRUioqFAn27POQm_PgkPERFj5TCVf1lbgcssCvDWXg/viewform?usp=sf_link"
        }
      />
      <SportBanner
        sportImg={KarateImg}
        sportName={"Karate"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSe9t9IYn77OmRDHrZIux0H6OJHN6aAVgUnSzIQ2N8f-swLqeg/viewform?usp=sf_link"
        }
      />
    </div>
  );
};

export default EventsList;
