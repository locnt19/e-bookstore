import { routingMaps } from "./routingMaps";

export const CONFIG_DEFAULT = {
  sidebar: [
    {
      id: "5fa6bf15-7089-43e3-839a-2c07a3aedff2",
      label: "All",
      route: routingMaps.HOME,
      hideOnDesktop: false,
      hideOnMobile: false
    },
    {
      id: "36dd034f-34d4-4094-9fee-8979ae9974af",
      label: "Book detail",
      route: routingMaps.BOOK_DETAIL,
      hideOnDesktop: false,
      hideOnMobile: false
    },
    {
      id: "16fa245f-15a9-4e7c-851d-9aeb933247d4",
      label: "Discover",
      route: routingMaps.DISCOVER,
      hideOnDesktop: true,
      hideOnMobile: false
    },
    {
      id: "818396d2-7268-48f5-a366-bf155b0f10a8",
      label: "Popular",
      route: routingMaps.POPULAR,
      hideOnDesktop: true,
      hideOnMobile: false
    }
  ],
  accountControls: [
    {
      id: "b56fd54a-d63f-4c14-83d9-7cfd328b8a0c",
      title: "Profile",
      route: routingMaps.HOME,
      hideOnMobile: false,
      hideOnDesktop: false
    },
    {
      id: "ccdb5e26-6cf2-4c10-a451-f7421f6dd613",
      title: "Notifications",
      route: routingMaps.HOME,
      hideOnMobile: false,
      hideOnDesktop: true
    },
    {
      id: "541f78f9-2a62-4411-9c1d-29fc693fa25f",
      title: "Account settings",
      route: routingMaps.HOME,
      hideOnMobile: false,
      hideOnDesktop: false
    },
    {
      id: "4d5ee656-68b1-41eb-a080-43c504a0ec6a",
      title: "Sign out",
      route: routingMaps.HOME,
      hideOnMobile: false,
      hideOnDesktop: false
    }
  ],
  dropdownSort: [
    {
      id: "402ce1a3-ac21-476e-97f9-ac972d8b44e5",
      label: "Newest",
      route: routingMaps.ROOT
    },
    {
      id: "b383b145-37cf-4189-81ed-c1a19d9b2c52",
      label: "Alphabet",
      route: routingMaps.ROOT
    }
  ],
  notification: [
    {
      id: "e8b43730-ee1a-4e8a-8897-e4ae7f00fb95",
      icon: "fas fa-gift",
      title: "Successful Login From New IP",
      content:
        "The system has detected that your account is logged om from unused IP address.",
      createdAt: "2021-03-05 02:44",
      read: false,
      route: "/"
    },
    {
      id: "2a3848f5-8a4d-473a-b212-cb6b632e6c40",
      icon: "fas fa-envelope",
      title: "New device has been authorized",
      content:
        "You have successfully authorized a new device or in a new location to sign into Book store account.",
      createdAt: "2021-02-09 21:52",
      read: true,
      route: "/"
    }
  ]
};
