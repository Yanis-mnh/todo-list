import { SmallCloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const HandelOnClick = (Open: boolean) => {
  return !Open;
};

const SideMenu = () => {
  const [Open, SetOpen] = useState(false);
  return (
    <div className="sideMenu">
      <div
        className="burger_button"
        onClick={() => SetOpen(HandelOnClick(Open))}
      >
        {Open ? (
          <HamburgerIcon boxSize={"2em"} />
        ) : (
          <SmallCloseIcon boxSize={"2em"} />
        )}
      </div>
    </div>
  );
};

export default SideMenu;
