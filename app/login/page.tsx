import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginForm from "@/components/forms/LoginForm";
import rtlLogo from "@/assets/logo/orenec-logo-rtl.png";
import ltrLogo from "@/assets/logo/orenec-logo-ltr.png";

const page = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center">
        <Image src={rtlLogo} alt="Orenec logo"  width={36} height={36} className="h-[32px] w-auto md:h-9 ltr:hidden"/>
        <Image src={ltrLogo} alt="Orenec logo"  width={36} height={36} className="h-[32px] w-auto md:h-9 rtl:hidden"/>
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
