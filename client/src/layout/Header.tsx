import Container from "@/components/common/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="relative z-20 w-full shadow-sm">
      <Container className="flex items-center justify-between">
        <Logo to="/" className="mr-8" />
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
