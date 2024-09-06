import Image from "next/image";
import Link from "next/link";

import { Icons } from "../Icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

interface SocialLinks {
  alt?: string;
  href: string;
  icon: string;
  tooltipText: string;
}

interface FooterLinks {
  name: string;
  href: string;
  tooltipText: string;
}

const links: readonly FooterLinks[] = [
  { name: "DAO", href: "https://developerdao.com", tooltipText: "Developer DAO website" },
  {
    name: "Feedback",
    href: "https://github.com/Developer-DAO/academy-turbo/issues/new/choose",
    tooltipText: "Send us feedback, create an issue!",
  },
  {
    name: "Newsletter",
    href: "https://developerdao.substack.com/",
    tooltipText: "Developer DAO Substack",
  },
];

const socials: readonly SocialLinks[] = [
  {
    alt: "Github",
    href: "https://github.com/Developer-DAO/academy-turbo",
    icon: "github_circle",
    tooltipText: "D_D Academy Github Repository",
  },
  {
    alt: "Twitter",
    href: "https://x.com/devdao_academy",
    icon: "twitter_circle",
    tooltipText: "D_D Academy on x.com",
  },
  {
    alt: "D_D Blog",
    href: "https://blog.developerdao.com",
    icon: "mirror_circle",
    tooltipText: "Developer DAO Blog",
  },
];

export const Footer = () => {
  return (
    <footer className=" !mx-[40px]">
      <div className=" mt-[165px] ">
        <div className="  mx-[110px] mb-[20px] h-[1px] border border-gray-300" />
        <div className="footer ">
          <nav
            aria-label="social"
            className=" flex flex-col items-end justify-end md:mb-[1px] md:mr-[15px]"
          >
            <div className=" flex items-center justify-center gap-x-5">
              {socials.map((social) => {
                const Icon = Icons[social.icon];
                return (
                  <TooltipProvider delayDuration={30} key={social.href}>
                    <Tooltip>
                      <TooltipTrigger>
                        <a
                          key={social.tooltipText}
                          aria-label={social.alt}
                          href={social.href}
                          className="group"
                          target="_blank"
                        >
                          {Icon ? <Icon className="h-[45px] w-[45px]" /> : null}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{social.tooltipText}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
            <div className=" mt-2 hidden lg:block">
              <Image src={"/vercel_badge.png"} alt={"powered by vercel"} width={100} height={100} />
            </div>
          </nav>
          <nav aria-label="quick links" className=" md:mb-[25px]">
            {links.map((link) => (
              <>
                <TooltipProvider delayDuration={30} key={link.href}>
                  <Tooltip>
                    <TooltipTrigger className="mt-[30px] flex flex-col !border-none text-center">
                      <div key={link.name}>
                        <a href={link.href} className=" mr-10 pb-5" target="_blank">
                          {link.name}
                        </a>
                        {/* Border */}
                        <div
                          className={`-mt-[10px] mr-[25px] hidden opacity-30 ${
                            link.name == "Newsletter" ? "h-0 w-0" : "h-[40px] w-[2px]"
                          } border-l`}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.tooltipText}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            ))}
          </nav>

          <div className="flex-col gap-y-6 md:flex-row md:items-center md:justify-center">
            <TooltipProvider delayDuration={30}>
              <Tooltip>
                <TooltipTrigger>
                  <a href="https://www.developerdao.com/" target="_blank" className="flex">
                    <div className="">
                      <Image
                        src={"/D_Dfooter.png"}
                        alt={"Developer DAO"}
                        width={200}
                        height={80}
                        className="mb-4 h-[100px] w-[100px] border-none p-3 md:mb-0 md:mr-[5px]"
                      />
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Developer DAO Website</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Border */}
            <div className=" mr-[25px] hidden h-[50px] w-[1px] border-l" />
            <div className="flex-col justify-center text-start text-[11px] font-light">
              <p>Developer DAO Foundation © 2023</p>
              <p>
                Website content licensed under&nbsp;
                <Link href="https://creativecommons.org/licenses/by-nc/4.0/" className="underline">
                  CC BY-NC 4.0.
                </Link>
              </p>
              <p>
                Website code is licensed under&nbsp;
                <Link
                  href="https://github.com/Developer-DAO/academy-turbo/blob/main/LICENSE"
                  className="underline"
                >
                  MIT.
                </Link>
              </p>
              <p>
                <Link href="https://www.developerdao.com/privacy-policy" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
