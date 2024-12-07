import {
  IoHomeSharp,
  IoNotificationsSharp,
  IoMail,
  IoStatsChart,
} from "react-icons/io5";
import { FaImage, FaRegComments, FaRegHeart, FaSearch } from "react-icons/fa";
import { RiBookmarkFill, RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineGifBox, MdPerson, MdSettings } from "react-icons/md";
import { BiPoll, BiRepost } from "react-icons/bi";
import { LuShare } from "react-icons/lu";
import { FiBookmark } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

export const navItems = [
  { icon: IoHomeSharp, label: "Home", href: "/" },
  { icon: FaSearch, label: "Explore", href: "/explore" },
  { icon: IoNotificationsSharp, label: "Notifications", href: "/notification" },
  { icon: IoMail, label: "Messages", href: "/message" },
  { icon: RiBookmarkFill, label: "Bookmarks", href: "/bookmark" },
  { icon: MdPerson, label: "Profile", href: "/profile" },
  { icon: MdSettings, label: "Settings", href: "/settings" },
];

export const actionItems = [
  { icon: FaRegComments, name: "comments" },
  { icon: FaRegHeart, name: "like" },
  { icon: BiRepost, name: "repost" },
  { icon: IoStatsChart, name: "chart" },
];

export const sideActionItems = [
  { icon: FiBookmark, name: "bookmark" },
  { icon: LuShare, name: "share" },
];

export const footerItems = [
  "About",
  "Download the X app",
  "Help Center",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Accessibility",
  "Ads info",
  "Blog",
  "Careers",
  "Brand Resources",
  "Advertising",
  "Marketing",
  "X for Business",
  "Developers",
  "Directory",
  "©-copy from X ",
];

export const postActionItems = [
  { icon: FaImage },
  { icon: MdOutlineGifBox },
  { icon: BiPoll },
  { icon: RiCalendarScheduleLine },
  { icon: FaImage },
  { icon: CiLocationOn },
];

export const monthsForSignup = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
