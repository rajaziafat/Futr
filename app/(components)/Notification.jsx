import Image from 'next/image';
import React from 'react'

const Notification = () => {
  return (
    <>
      <div className="flex h-[40px] w-[40px] rounded-[50%] bg-sky justify-center items-center">
        <Image
          src="/svgs/notifications.svg"
          className="w-[25px] h-[25px] cursor-pointer"
          alt="Logo"
          width={10000}
          height={1000}
        />
      </div>
    </>
  );
}

export default Notification