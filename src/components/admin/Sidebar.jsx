import { Caption, CustomNavLink, Title } from "../common/Design";
import { CiGrid41 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { User1 } from "../hero/Hero";
import { IoIosLogOut } from "react-icons/io";
import { CgProductHunt } from "react-icons/cg";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const role = "admin";
  const className = "flex items-center gap-3 mb-2 p-4 rounded-full";

  return (
    <section className="sidebar flex flex-col justify-start h-screen overflow-auto">
  <div className="profile flex items-center text-center justify-center gap-4 flex-col">
    <img src={User1} alt="" className="w-32 h-32 rounded-full object-cover" />
    <div>
      <Title className="capitalize">Sunil B.K</Title>
      <Caption>example@gmail.com</Caption>
    </div>
  </div>

  <div>
    {(role === "seller" || role === "admin") && (
      <>
        <CustomNavLink href="/product" isActive={location.pathname === "/product"} className={className}>
          <span><MdOutlineCategory size={22} /></span>
          <span>My Products</span>
        </CustomNavLink>
        <CustomNavLink href="/add" isActive={location.pathname === "/add"} className={className}>
          <span><FaPlusCircle size={22} /></span>
          <span>Create Product</span>
        </CustomNavLink>
      </>
    )}

    {role === "admin" && (
      <>
        {/* Admin Links */}
      </>
    )}

    <CustomNavLink href="/profile" isActive={location.pathname === "/profile"} className={className}>
      <span><IoSettingsOutline size={22} /></span>
      <span>Personal Profile</span>
    </CustomNavLink>

    <button className="flex items-center w-full gap-3 bg-red-500 hover:text-white p-4 rounded-full text-white">
      <span><IoIosLogOut size={22} /></span>
      <span>Log Out</span>
    </button>
  </div>
</section>

  );
};
