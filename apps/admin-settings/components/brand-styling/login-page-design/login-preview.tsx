import { useLoginPageDesignStore } from "../../../stores/login-page-design-store";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@repo/ui";

const backgroundTabs = [
  {
    key: "full",
    label: "Full Background Image",
    img: "/assets/svgs/full-background.svg",
    activeImg: "/assets/svgs/active-full-background.svg",
  },
  {
    key: "half",
    label: "Half Background Image",
    img: "/assets/svgs/half-background.svg",
    activeImg: "/assets/svgs/active-half-background.svg",
  },
];

export default function LoginPreview() {
  const {
    orgLogo,
    backgroundImage,
    backgroundType,
    layout,
    setBackgroundType,
  } = useLoginPageDesignStore();

  const alignClass =
    layout === "left"
      ? "px-10 items-center justify-start"
      : layout === "right"
        ? "px-10 items-center justify-end"
        : "items-center justify-center";

  const previewBg = backgroundImage ?? "/assets/svgs/login-empty-state.svg";
  const previewLogo = orgLogo ?? "/assets/images/access-logo.svg";
  const isHalf = backgroundType === "half";
  const isRight = layout === "right";

  // Helper to render the login form
  const LoginForm = () => (
    <div className="w-full max-w-md rounded-lg bg-white p-8 drop-shadow-md border border-[#EBEBEB]">
      <div className="mb-6 flex justify-center">
        <Image
          src={previewLogo}
          alt="Logo"
          width={150}
          height={40}
          priority
          quality={100}
        />
      </div>
      <h1 className="mb-8 text-center text-[24px] leading-[36px] font-bold text-black">
        Login to your account
      </h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="emailAddress"
            className="mb-2 block text-[12px] leading-[18px] font-normal text-textPrimary"
          >
            Email Address
          </label>
          <input
            id="emailAddress"
            type="text"
            placeholder="Enter your email address"
            className="w-full bg-white border-borderColor font-medium rounded-[8px] border-[1px] py-[8px] px-[16px] text-textPrimary text-[12px] leading-[18px] placeholder:text-textPrimary placeholder:text-opacity-50 placeholder:text-[12px] placeholder:leading-[18px] focus:border-textSecondary focus:outline-none focus:ring-0"
            disabled
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="mb-2 block text-[12px] leading-[18px] font-normal text-textPrimary"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full border-borderColor font-medium rounded-[8px] border-[1px] py-[8px] px-[16px] text-textPrimary text-[12px] leading-[18px] placeholder:text-textPrimary placeholder:text-opacity-50 placeholder:text-[12px] placeholder:leading-[18px] focus:border-textSecondary focus:outline-none focus:ring-0"
            disabled
          />
          <button
            type="button"
            className="absolute right-3 top-3/4 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            tabIndex={-1}
            disabled
          >
            {/* Eye icon placeholder */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
        <div className="text-right">
          <span className="text-[10px] leading-[16px] text-baz-primary opacity-60 cursor-not-allowed">
            Forgot Password?
          </span>
        </div>
        <button
          type="button"
          disabled
          className="mt-6 w-full rounded-[8px] bg-baz-primary py-[12px] text-center text-[12px] leading-[18px] font-medium text-white opacity-60 cursor-not-allowed"
        >
          Login
        </button>
        <div className="mt-4 flex space-x-2 justify-center">
          <p className="font-normal text-[14px] leading-[18px] text-textSecondary">
            Powered by repo
          </p>
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
  );

  // Helper to render background tabs
  const BackgroundTabs = () => (
    <div className="my-16 text-center w-full flex items-center justify-center">
      <Tabs
        value={backgroundType}
        onValueChange={setBackgroundType}
        className="w-auto"
      >
        <TabsList className="flex gap-8 bg-transparent shadow-none border-none">
          {backgroundTabs.map((tab) => {
            const isActive = backgroundType === tab.key;
            return (
              <div key={tab.key}>
                <TabsTrigger
                  value={tab.key}
                  className={`flex flex-col items-center px-2 py-1 transition-all `}
                >
                  <Image
                    src={isActive ? tab.activeImg : tab.img}
                    alt={tab.label}
                    width={200}
                    height={200}
                    className="mb-1"
                  />
                </TabsTrigger>
                <span
                  className={`text-[16px] text-center leading-[24px] mt-1 ${isActive ? "font-bold text-primary" : "font-medium text-[#A3A3A3]"}`}
                >
                  {tab.label}
                </span>
              </div>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex-1 flex flex-col items-center mb-8">
        <div className="w-[90%] h-[600px] mx-auto my-4 flex flex-col items-center justify-center rounded-lg shadow relative bg-white overflow-hidden">
          {/* Preview area */}
          {isHalf ? (
            <div className="w-full h-full flex flex-row">
              {/* Background image side */}
              {isRight ? (
                <div className="w-1/2 h-full relative">
                  <Image
                    src={previewBg}
                    alt="Preview Background"
                    fill
                    className="object-cover z-0"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              ) : null}
              {/* Login form side */}
              <div className="w-1/2 h-full flex items-center justify-center bg-white z-10">
                <LoginForm />
              </div>
              {/* Background image side for left layout */}
              {!isRight ? (
                <div className="w-1/2 h-full relative">
                  <Image
                    src={previewBg}
                    alt="Preview Background"
                    fill
                    className="object-cover z-0"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              ) : null}
            </div>
          ) : (
            // Full background (default)
            <>
              <Image
                src={previewBg}
                alt="Preview Background"
                fill
                className="object-cover z-0"
                style={{ pointerEvents: "none" }}
              />
              {/* Login card overlay */}
              <div
                className={`absolute top-0 left-0 w-full h-full flex ${alignClass} z-10`}
              >
                <LoginForm />
              </div>
            </>
          )}
        </div>
        {/* Background type tabs at the bottom */}
        <BackgroundTabs />
      </div>
    </div>
  );
}
