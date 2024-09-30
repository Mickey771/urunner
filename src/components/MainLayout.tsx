"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ConfirmationModal from "./Modals/ConfirmationModal";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isLoading, isModal } = useSelector((store: RootState) => store.user);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {isLoading && <Loader />}
      {isModal && <ConfirmationModal />}
    </>
  );
};

export default MainLayout;
