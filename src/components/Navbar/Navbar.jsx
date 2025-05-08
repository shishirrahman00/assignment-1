import Button from "../Button";
import NavLogo from "./Navlogo";
import Navmenu from "./Navmenu";

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full">
        <div className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <NavLogo />
            <Navmenu />
            <Button>Download</Button>
          </div>
        </div>
      </div>
    </>
  );
}
