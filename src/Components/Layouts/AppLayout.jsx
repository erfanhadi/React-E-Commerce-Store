import { Outlet } from "react-router";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Toaster } from "sonner";
import AuthProvider from "../../context/AuthProvider";

const AppLayout = () => {
  return (
    <AuthProvider>
      <Toaster position="top-right" richColors toastOptions={{
        style: {
          fontFamily: "IRANSansX",
        },
      }} />
      <Header />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

export default AppLayout;
