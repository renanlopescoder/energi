import React, { useEffect } from "react";
import { Button } from "antd";
import { useMoralis } from "react-moralis";

import { LogoutOutlined } from "@ant-design/icons";

export default function SigninButton({ title = "Signin" }) {
  const { authenticate, logout, isAuthenticated, isAuthenticating } =
    useMoralis();

  return (
    <>
      {!isAuthenticated ? (
        <Button
          loading={isAuthenticating}
          onClick={authenticate}
          size="large"
          ghost
          shape="round"
        >
          {title}
        </Button>
      ) : (
        <Button
          shape="round"
          onClick={logout}
          size="large"
          ghost
          icon={<LogoutOutlined />}
        >
          Logout
        </Button>
      )}
    </>
  );
}
