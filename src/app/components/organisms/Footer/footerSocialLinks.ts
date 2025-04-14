import { TIcon } from "@types";

export interface SocialLink {
  icon: TIcon,
  link: string,
}

export const footerSocialLinks: SocialLink[] = [
  {
    icon: "twitter",
    link: "https://x.com",
  },
  {
    icon: "youtube",
    link: "https://youtube.com",
  },
  {
    icon: "instagram",
    link: "https://instagram.com",
  }
];
