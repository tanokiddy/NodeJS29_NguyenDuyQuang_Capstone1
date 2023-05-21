"use client";

import React from "react";
import Login from "./Login";
import { useAuthentication } from "@/app/libs/authentication";
import Profile from "./Profile";

export default function UserInfo() {
  const { user, isLoading } = useAuthentication();

  return (
    <div className="flex flex-row gap-2">
      {user ? <Profile user={user} isLoading={isLoading} /> : <Login isLoading={isLoading} />}
    </div>
  );
}
