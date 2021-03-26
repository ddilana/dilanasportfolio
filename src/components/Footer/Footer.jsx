import { FooterContainer } from "./FooterStyled";
import { FooterData } from "./FooterData";

export const Footer = () => {
  return (
    <FooterContainer>
      <section>
        {FooterData.map((f, idx) => (
          <ul key={f.id}>
            <li key={idx}>
              <a href={f.to}>{f.icon}</a>
            </li>
          </ul>
        ))}
      </section>
    </FooterContainer>
  );
};
