import Image from "next/image";
import SelectCity from "./SelectComp";
import SearchCom from "./SearchComp";

const Header = () => {
  return (
    <header className="h-[70px] px-4 sm:px-[24px] bg-white flex justify-between items-center">
      <div className="flex items-center gap-[24px]">
        <div className="flex items-center gap-[12px]">
          <div>
            <Image
              src="/svgs/logo.svg"
              className="w-[25px] h-[79px]"
              alt="Logo"
              width={10000}
              height={1000}
            />
          </div>
          <h1 className="font-semibold text-[24px]">Futr.</h1>
        </div>
        <div className="w-40 z-50 sm:w-56 lg:w-96">
          <SearchCom />
        </div>
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
