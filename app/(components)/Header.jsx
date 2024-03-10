import SearchComp from "./SearchComp";
import SelectCity from "./SelectCity";
import Notification from "./Notification";

const Header = () => {
  return (
    <header className="h-[70px] ml-auto  w-[calc(100vw-112px)] sm:w-[calc(100vw-117px)] px-4 bg-white flex justify-between items-center">
      <div className="w-40 mx-auto sm:ml-0 z-50 sm:w-56 lg:w-96">
        <SearchComp />
      </div>
      <div className="flex items-center gap-[14px]">
        <div>
          <SelectCity />
        </div>
        <Notification />
      </div>
    </header>
  );
};

export default Header;
