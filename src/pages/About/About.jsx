import { AboutContainer } from "./AboutStyled";
import Portrait from "../../assests/portrait.jpg";

export const About = () => {
  return (
    <AboutContainer>
      <p>
        My name is Dilana and I'm obsessed with making things and even more
        obsessed with making things better. <span>I've got a lot of passions but the
        biggest one is creating websites. My first experience with web design
        was when I was around 12 years old and started fixing people's profiles
        on a website that was very popular in Sweden back in 2006 called
        playahead.se.</span> <span>Today I am a UX and front end developer and I love it.</span>
      </p>
      <img src={Portrait} alt="my-portrait" />
   
    </AboutContainer>
  );
};
