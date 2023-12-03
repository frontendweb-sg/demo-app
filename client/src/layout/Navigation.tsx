import GlobalSearch from "@/components/common/GlobalSearch";
import LinkItem from "@/components/common/LinkItem";
import { AppContent } from "@/utils/AppContent";
import { FaLock } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="flex justify-between flex-1 items-center">
      <ul className="flex items-center gap-5 mr-4">
        <LinkItem className="text-sm py-5 px-1 block" menu to="/">
          Home
        </LinkItem>
        <LinkItem className="text-sm py-5 px-1 block" menu to="/">
          Products
        </LinkItem>
        <LinkItem className="text-sm py-5 px-1 block" menu to="/">
          Blogs
        </LinkItem>
        <LinkItem className="text-sm py-5 px-1 block" menu to="/">
          Contact
        </LinkItem>
      </ul>

      <GlobalSearch />
      <ul className="flex items-center gap-5 mr-4">
        <LinkItem
          className="text-sm py-5 px-1 flex items-center"
          menu
          to="/auth"
        >
          <FaLock className="text-sm mr-2" /> {AppContent.login}
        </LinkItem>
      </ul>
    </nav>
  );
};

export default Navigation;
