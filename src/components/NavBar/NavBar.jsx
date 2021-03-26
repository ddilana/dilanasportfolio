import { NavBarData } from "./NavBarData";
import { NavBarContainer, NavLink } from "./NavBarStyled";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <nav>
        {NavBarData.map((n, idx) => (
          <ul key={n.id}>
            <li key={idx}>
              <NavLink to={n.path} exact activeClassName="active">
                <span>{n.title}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </nav>
    </NavBarContainer>
  );
};
