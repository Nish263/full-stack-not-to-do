import React, { useEffect } from "react";

import { MainLayout } from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userList"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);
  return <MainLayout>DashboardPage</MainLayout>;
};
