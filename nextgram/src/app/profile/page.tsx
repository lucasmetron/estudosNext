import React from "react";
import { auth } from "auth";
import BtnLogin from "@/components/BtnLogin";

const Profile = async () => {
  const session = await auth();

  if (!session)
    return (
      <div className="w-full h-full flex justify-center items-center flex-col gap-2">
        Unauthorized
        <BtnLogin />
      </div>
    );

  return <div>Profile</div>;
};

export default Profile;
