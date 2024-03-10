import Image from "next/image";
import SearchComp from "./SearchComp";
import SelectCity from "./SelectCity";

const Header = () => {
  return (
    <header className="h-[70px] ml-auto w-[90%] px-4 sm:px-[24px] bg-white flex justify-between items-center">
      <div className="w-40 mx-auto sm:ml-0 z-50 sm:w-56 lg:w-96">
        <SearchComp />
      </div>
      <div className="flex items-center gap-[14px]">
        <div>
          <SelectCity />
        </div>
        <div className="flex h-[40px] w-[40px] rounded-[50%] bg-sky justify-center items-center">
          <Image
            src="/svgs/notifications.svg"
            className="w-[25px] h-[25px] cursor-pointer"
            alt="Logo"
            width={10000}
            height={1000}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
