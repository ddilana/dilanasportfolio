import { HomeContainer, Img } from "./HomeStyled";
import Duck from "../../assests/duck.jpg";

export const Home = () => {
  return (
    <HomeContainer>
      <section>
        <h5>Dilana Yavuz</h5>
        <h1>
          Frontend Developer<span>& UX designer from Stockholm</span>
          <span>Sweden</span>
        </h1>
        <a href="https://github.com/ddilana">
          {" "}
          <button className="button__view">View My Work</button>
        </a>
        <a href="mailto:dilan.yavuz@student.kyh.se">
          <button className="button__touch">Get in Touch!</button>{" "}
        </a>
      </section>
      <Img src={Duck} alt="duck" />
    </HomeContainer>
  );
};
