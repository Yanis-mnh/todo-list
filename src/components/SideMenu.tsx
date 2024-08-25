import { SmallCloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

import "../style/SideMenu.css";

const SideMenu = () => {
  const [Open, SetOpen] = useState(false);
  return (
    <div className={Open ? "sideMenu" : "sideMenuOpen"}>
      <BurgerButton Open={Open} SetOpen={SetOpen} />
      <ul>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  );
};

interface BurgerButtonProps {
  Open: boolean;
  SetOpen: CallableFunction;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ Open, SetOpen }) => {
  const HandelOnClick = (Open: boolean, SetOpen: CallableFunction) => {
    SetOpen(!Open);
  };
  return (
    <div className="burgerButton" onClick={() => HandelOnClick(Open, SetOpen)}>
      {Open ? (
        <SmallCloseIcon boxSize={"2em"} />
      ) : (
        <HamburgerIcon boxSize={"2em"} />
      )}
    </div>
  );
};

export default SideMenu;
