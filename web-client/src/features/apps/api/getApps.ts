import { App } from "../types/App";

// const defaultStoreUrl = "https://librepod.github.io/charts/index.yaml";

export const getApps = async (): Promise<Array<App>> => {
  // const data = await fetch(defaultStoreUrl);

  return [
    {
      id: "",
      name: "adguard-home",
      icon: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/adguard-home.png",
      description: "Network-wide ads & trackers blocking DNS server",
    },
    {
      id: "",
      name: "baikal",
      icon: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/baikal.png",
      description: "The open source CardDAV, CalDAV and WebDAV server",
    },
    {
      id: "",

      name: "bitwarden",
      icon: "https://avatars.githubusercontent.com/u/15990069",
      description:
        "Open source password management solutions for individuals, teams, and business organizations",
    },
    {
      id: "",

      name: "filebrowser",
      icon: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/filebrowser.png",
      description:
        "Filebrowser provides a file managing interface within a specified directory and it can be used to upload, delete, preview, rename and edit yourfiles.",
    },
    {
      id: "",

      name: "firefly-iii",
      icon: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/firefly.png",
      description: "A free and open source personal finance manager",
    },
    {
      id: "",

      name: "firefly-iii-telegram-bot",
      icon: "",
      description:
        "Firefly III Telegram bot for faster interaction with the service.",
    },
  ];
};
