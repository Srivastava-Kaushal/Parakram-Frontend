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
          "https://docs.google.com/forms/d/e/1FAIpQLScN42V1fYMVrFD2I0hqnY76uhGpiJoDQRABQ8_IG9Wbz_W8pA/viewform?usp=sf_link"
        }
        scheduleLink={
          "https://drive.google.com/file/d/1BW5Qppk7vp9gVKum1gqUhY21x9XZdJqP/view?usp=drive_link"
        }
      />
      <SportBanner
        sportImg={CricketImg}
        sportName={"Cricket"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLScVKsYEMnR7VE-ZC7e7mTHzMFLGQB4HqOuczmOIALBwe-BEVw/viewform?usp=sf_link"
        }
        scheduleLink={"https://drive.google.com/file/d/1AaEKscsLP6cwghdkNbQI7YhWTRKop96g/view?usp=drive_link"}
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
          "https://docs.google.com/forms/d/e/1FAIpQLSesHa1BiLBuHtDSlEo0cEJiDnAsbuwH807c93ADUoTXRiU5LQ/viewform?usp=sf_link"
        }
      />
      <SportBanner
        sportImg={BasketballImg}
        sportName={"Basketball"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSeUGquMMbtStyObdJMPxbjt7gC39hFRkLwYXE9uA-dRlff8ZQ/viewform?usp=sf_link"
        }
        scheduleLink={"https://drive.google.com/file/d/17sUO9TP5eNET1aejPr_mQWsOh7DVS_ph/view?usp=drive_link"}
      />
      <SportBanner
        sportImg={KabaddiImg}
        sportName={"Kabaddi"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSeCgmcsTFaro7z69PXK4w0dL1Qj_Jhlka2OojHbeGYL9m7BSw/viewform?usp=sf_link"
        }
        scheduleLink={"https://drive.google.com/file/d/1LEJgqHlyYiCIccDoE8tfRNJkp_Kt1AyS/view?usp=drive_link"}
      />
      <SportBanner
        sportImg={AthleticsImg}
        sportName={"Athletics"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSdqLLt_dR8l8-Q2bnhZcevaInGGVZCZstDueRYzHVHQ_xvW7A/viewform?usp=sf_link"
        }
        scheduleLink={"https://drive.google.com/file/d/1pXm1GMqFYtDJ0JjaaaScBXVpFKRvFoy1/view?usp=drive_link"}
      />
      <SportBanner
        sportImg={BadmintonImg}
        sportName={"Badminton"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSce9esKkLa-YaG_EKTkaM86T4txDl5XgmfEXfzXBD4mdPrOCg/viewform?usp=sf_link"
        }
        scheduleLink={"https://drive.google.com/file/d/1spEw4ZMsmC-6u_oc8RaBbLPDwwfASK1K/view?usp=drive_link"}
      />
      <SportBanner
        sportImg={TableTennisImg}
        sportName={"Table Tennis"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSef-Pkrj25D03jrYd69au6SRBRBF62GSmbIkuZ2S_zJGdTXUA/viewform?usp=sf_link"
        }
        scheduleLink={
          "https://drive.google.com/file/d/1qvuVh8zD-r8r_F1x8pGXQ4cHOUobiLPz/view?usp=drive_link"
        }
      />
      <SportBanner
        sportImg={SquashImg}
        sportName={"Squash"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSd9cB8fvLIRcJl7dG0IkureJOVRWEj8yPAmLxjOsQqs8vmg2Q/viewform?usp=sf_link"
        }
        scheduleLink={"https://drive.google.com/file/d/1qheeFAvEdlv19wcUqKUUkhniOexUbItq/view?usp=drive_link"}
      />
      <SportBanner
        sportImg={ChessImg}
        sportName={"Chess"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSfOx4CR6WztYcqdYEgoLn-QNoC0uJGF9FcN-3g5ynbv1mvngg/viewform?usp=sf_link"
        }
        scheduleLink={"https://drive.google.com/file/d/1R5VTFR9-wO0MZxQJemlgFUL2xsw0nVVj/view?usp=drive_link"}
      />
      <SportBanner
        sportImg={TennisImg}
        sportName={"Tennis"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSc9voNSjZgR1cO6FlM2Wlfv7A8cbR3AZX4PEANqz7cJwadPvg/viewform?usp=sf_link"
        }
        scheduleLink={"https://drive.google.com/file/d/1VdKu1YpjkEhwp2B3GETs8ifBSbSy6cbb/view?usp=drive_link"}
      />
      <SportBanner
        sportImg={PowerliftingImg}
        sportName={"Power Lifting"}
        eventLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSet_viNODmukxFJPB4GuCQIkwNdBhhRCkAMEUgLlP2DQOyLgw/viewform?usp=sf_link"
        }
        scheduleLink={"https://drive.google.com/file/d/1W2oq_cub9rna3zsyPfxGdm7Lg_yw3Llk/view?usp=drive_link"}
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
