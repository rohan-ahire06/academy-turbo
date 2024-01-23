import Image from "next/image";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";
import { Button, type NavItem, SideBar, TopBar } from "ui";

import { ConnectButton } from "@/components/ConnectButton";

const sampleMenus: NavItem[] = [
  {
    name: "Homepage",
    href: "/",
    icon: "clarity_blocks",
  },
  {
    name: "Tracks",
    href: "/tracks",
    icon: "vector",
  },
  {
    name: "Community",
    href: "https://handbook.developerdao.com/",
    icon: "dd_logo",
  },
];

const PageHeader: FunctionComponent = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="main-container absolute left-0 right-0 top-0 z-50 flex items-center justify-between pt-6 md:flex-row md:pt-0">
      <div className="hidden lg:flex ">
        {pathname === "/" || pathname === "/tracks" ? (
          <div className="mt-10">
            <TopBar menus={sampleMenus} />
          </div>
        ) : (
          <div className="mt-16 flex items-center justify-around gap-36 text-white lg:mt-8 lg:flex lg:justify-between lg:gap-5 lg:self-stretch">
            <div className="lg:ml-8 lg:flex lg:basis-[0%] lg:flex-col lg:items-stretch">
              <Button
                onClick={() => {
                  router.back();
                }}
                variant="text"
                className="flex flex-col text-white hover:text-black"
              >
                <h2 className="font-future lg:text-2xl">Back</h2>
                <Image
                  src={"/back.png"}
                  alt="turn back"
                  width={25}
                  height={35}
                  className="rotate-180 lg:hidden"
                />
                <Image
                  src={"/back.png"}
                  alt="turn back"
                  width={50}
                  height={35}
                  className="hidden lg:block lg:rotate-180"
                />
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="flex lg:hidden">
        <SideBar
          menus={[
            ...sampleMenus,
            {
              name: "Get In Touch",
              href: "/",
              icon: "dd_logo",
            },
          ]}
        />
      </div>
      <div className="mt-10">
        <ConnectButton />
      </div>
    </header>
  );
};

export { PageHeader as Header };
