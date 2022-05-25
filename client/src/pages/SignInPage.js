import React from "react";

import { MainLayout } from "../components/layout/MainLayout";
import { SignIn } from "../components/signin/SignIn";

export const SignInPage = () => {
  return (
    <MainLayout>
      <SignIn />
    </MainLayout>
  );
};
