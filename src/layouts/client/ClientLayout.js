import React, { Fragment, useEffect } from "react";
import ResponsiveAppBar from "./Appbar";
import Footer from "./Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Outlet } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Copyright from "../../components/Copyright";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientLayout() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Fragment>
      <Topbar />
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
      <Copyright />
      <MessengerCustomerChat
        pageId="100585099379783"
        appId="2121138418057296"
      />
    </Fragment>
  );
}
