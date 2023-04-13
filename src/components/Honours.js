import { Container, Row, Col } from "react-bootstrap";
import { HonoursCard } from "./Card";
import "react-multi-carousel/lib/styles.css";
import fnbLogo from "../assets/img/fnb-logo.svg"
import uihBanner from "../assets/img/UIA-Slider-Banner-V1.png"
import mtnLogo from "../assets/img/mtn-new-logo.svg"
import zindiLogo from "../assets/img/zindiLogo.png"

export const Honours = () => {
  const honours = [
    {
      title: "2020 ICT Fair Innovation Contest Winner",
      institution: "FNB Eswatini",
      date: "Decemeber 2020",
      description:
        "With a UNESWA fellow alumni, we designed a query and enquiries ticketing system called FNB Virtual Centre." +
        "FNB sponsored the competition as part of the annual UNESWA ICT Fair Hackathon. We won a first place prize of" +
        "E30 000.00 for our innovation.",
      imgUrl: fnbLogo,
    },
    {
      title: "UNESCO-India-Africa (UIA) Hackathon",
      institution: 
      "Republic of India’s Ministry of Education’s Innovation Cell" +
      "(MIC), All India Council for Technical Education (AICTE)," +
      "The United Nations Educational, Scientific and Cultural" +
      "Organization (UNESCO) and University of Eswatini (UNESWA)",
      date: "November 2022",
      description:
      "I was invited to participate in the UNESCO-India-Africa" +
      "(UIA) Hackathon 2022 from the 22nd - 25th November at Gautam" +
      "Buddha University, Greater Noida, Uttar Pradesh, India. I" +
      "was part of a team of five. We worked on an Agricultural" +
      "project titled: Getting Soil Health Intelligence through a" +
      "Smart phone image based soil-testing facility. Due to system" +
      "issues at the Ministry of Home Affairs, my passport was not" +
      "released on time and I ended up not attending the Hackathon." +
      "My teammates managed to impress the judges with an Android" +
      "application that detected eight soil parameters.",
      imgUrl: uihBanner
    },
    {
      title: "MTN MoMo Hackathon Top 12 Finalist",
      institution: "MTN Fintech Eswatini",
      date: "October 2022",
      description: "Part of a team of three who designed and implemented a real" +
      "estate listing platform called Tindlu. My team made it to the top twelve",
      imgUrl: mtnLogo
    },
    {
      title: "37th Place of 258 Competitors on Monthly Insurance Claim Prediction",
      institution: "Zindi Africa",
      date: "March 2022",
      description: "Used Deep Learning and Machine Learning to predict how much" +
      "a client will claim from Zimnat (Zimbabwean financial" +
      "service provider) per month for a whole year. Was number 37" +
      "in Africa Zindi Leaderboard and number 1 in Eswatini Zindi Leaderboard.",
      imgUrl: zindiLogo
    }
  ];

  return (
    <section className="honour" id="honours">
      <Container>
        <Row>
          <Col>
            <div className="honour-bx">
              <h2>Honours & Awards</h2>
              <Row>
                {honours.map((honour, index) => {
                  return <HonoursCard key={index} {...honour} />;
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
