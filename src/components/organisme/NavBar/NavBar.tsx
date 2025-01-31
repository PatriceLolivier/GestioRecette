import { Logo } from "@atomes/Logo";
import { NavMenu } from "@molecules/NavMenu";

export const NavBar = () => {

  return (
    <div className="flex justify-between items-center py-4 mx-8 border-b-2 border-gray-200">
      <Logo />
      <NavMenu />
    </div>
  );
};
