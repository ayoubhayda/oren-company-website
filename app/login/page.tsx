import Image from "next/image";
import Link from "next/link";
import React from "react";
import darkLogo from "@/assets/logo/oren-blue-logo-dark.png";
import lightLogo from "@/assets/logo/oren-blue-logo-light.png";
import LoginForm from "@/components/forms/LoginForm";

const page = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center">
          <Image src={darkLogo} alt="Orenec logo" width={36} height={36} className="rounded-md hidden dark:block size-9" />
          <Image src={lightLogo} alt="Orenec logo" width={36} height={36} className="rounded-md dark:hidden size-9" />
          <h1 className="text-2xl font-bold">
          Oren<span className="text-primary">ec</span>
          </h1>
        </Link>

        {/* Login Form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
