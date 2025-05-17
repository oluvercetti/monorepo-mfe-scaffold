"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { COOKIE_NAMES, setCookie } from "@repo/shared";
import { Button } from "@repo/ui";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLoginUser } from "../../actions/auth/auth";
import { loginSchema } from "../../lib/validation/signin";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const router = useRouter();
  const { mutate: loginUser, isPending } = useLoginUser({
    onSuccess: (data) => {
      setCookie(COOKIE_NAMES.SESSION, data.value.accessToken);
      setCookie(COOKIE_NAMES.REFRESH_TOKEN, data.value.refreshToken);
      router.push("/admin");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    loginUser({
      emailAddress: data.emailAddress,
      password: data.password,
    });
  };
  return (
    <div className="container mx-auto">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/accessBank.png"
          alt="Bank Building"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="rounded-borderColor w-full max-w-md rounded-lg bg-white p-8 drop-shadow-sm">
          <div className="mb-6 flex justify-center">
            <Image
              src="/assets/images/access-logo.svg"
              alt="Access Bank Logo"
              width={150}
              height={40}
              priority
              quality={100}
            />
          </div>
          <h1 className="mb-8 text-center text-[24px] font-bold leading-[36px] text-black">
            Login to your account
          </h1>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="emailAddress"
                className="text-textPrimary mb-2 block text-[12px] font-normal leading-[18px]"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="text"
                {...register("emailAddress")}
                placeholder="Enter your email address"
                className="border-borderColor text-textPrimary placeholder:text-textPrimary focus:border-textSecondary w-full rounded-[8px] border-[1px] bg-white px-[16px] py-[8px] text-[12px] font-medium leading-[18px] placeholder:text-[12px] placeholder:leading-[18px] placeholder:text-opacity-50 focus:outline-none focus:ring-0"
              />
              {errors.emailAddress?.message &&
                typeof errors.emailAddress.message === "string" && (
                  <p className="text-sm text-red-500">
                    {errors.emailAddress.message}
                  </p>
                )}
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="text-textPrimary mb-2 block text-[12px] font-normal leading-[18px]"
              >
                Password
              </label>
              <input
                id="password"
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="border-borderColor text-textPrimary placeholder:text-textPrimary focus:border-textSecondary w-full rounded-[8px] border-[1px] px-[16px] py-[8px] text-[12px] font-medium leading-[18px] placeholder:text-[12px] placeholder:leading-[18px] placeholder:text-opacity-50 focus:outline-none focus:ring-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3/4 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="h-6 w-6" />
                ) : (
                  <Eye className="h-6 w-6" />
                )}
              </button>
            </div>

            {errors.password?.message &&
              typeof errors.password.message === "string" && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-baz-primary text-[10px] leading-[16px] hover:brightness-50"
              >
                Forgot Password?
              </Link>
            </div>
            <Button
              disabled={!isValid || isPending}
              className="bg-baz-primary mt-6 w-full rounded-[8px] py-[12px] text-center text-[12px] font-medium leading-[18px] text-white"
            >
              {isPending ? "Logging in..." : "Login"}
            </Button>
            <div className="mt-4 flex justify-center space-x-2">
              <p className="text-textSecondary text-[14px] font-normal leading-[18px]">
                Powered by repo{" "}
              </p>{" "}
              <Image
                src="/assets/images/powered.svg"
                alt="semantix logo"
                priority
                quality={100}
                width={16}
                height={16}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
