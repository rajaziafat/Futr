import Header from "./(components)/Header";
import Main from "./(components)/Main";
import Sidebar from "./(components)/Sidebar";

export default function Home() {
  return (
    <main className="bg-[#F4F6F8]">
      <Header />
      <div className="flex gap-[12px]">
        <Sidebar />
        <Main />
      </div>
    </main>
  );
}
