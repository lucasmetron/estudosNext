import BtnLogin from "./BtnLogin";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-5 bg-gray-900 flex gap-5 justify-between items-center">
      <Link href={"/"}>
        <h2>NextGram</h2>
      </Link>
      <BtnLogin />
    </div>
  );
};

export default Header;
