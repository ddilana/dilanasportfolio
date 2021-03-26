import { NavBarData } from "./NavBarData";
import { HamburgerContainer, NavLink } from "./HamburgerStyled";

import { AiOutlineClose } from "react-icons/ai";

export const Hamburger = ({ setShowHamburger }) => {
  const hideHamburger = () => setShowHamburger(false);

  return (
    <HamburgerContainer>
      <AiOutlineClose
        style={{
          color: "#0F1EFF",
          position: "absolute",
          right: "0.5em",
          top: "20px",
          fontSize: "3rem",
        }}
        onClick={() => hideHamburger()}
      />
      <nav>
        {NavBarData.map((h) => (
          <ul key={h.id}>
            <li onClick={() => hideHamburger()}>
              <NavLink to={h.path} exact>
                <span>{h.title}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </nav>
    </HamburgerContainer>
  );
};
