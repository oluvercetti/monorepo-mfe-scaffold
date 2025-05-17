import AuthLayout from "../../components/layouts/auth-layout";
import LoginPage from "../../components/views/login-page";
import React from "react";
export default function Login() {
  return <LoginPage />;
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
