import Container from "@/components/common/Container";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
