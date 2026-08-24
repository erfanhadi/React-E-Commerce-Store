import { Outlet } from "react-router";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
