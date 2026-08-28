import { Outlet } from "react-router";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Toaster } from "sonner";

const AppLayout = () => {
  return (
    <>
      <Toaster position="top-right" richColors toastOptions={{
        style: {
          fontFamily: "IRANSansX",
        },
      }}/>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
