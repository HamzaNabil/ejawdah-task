import {
  BsFileEarmarkBreak,
  HiOutlineUsers,
  IoBookOutline,
  MdHome,
  TbFiles,
} from "../../utils/react-icons";

const sidebarLinks = {
  mainLinks: {
    title: null,
    links: [
      {
        id: 1,
        title: "item.home",
        icon: <MdHome color="#bcb4ff" fontSize={25} />,
        activeLink: true,
      },
      {
        id: 2,
        title: "item.requests",
        icon: <TbFiles color="#bcb4ff" fontSize={25} />,
        activeLink: false,
      },
      {
        id: 3,
        title: "item.myRequests",
        icon: <BsFileEarmarkBreak color="#bcb4ff" fontSize={25} />,
        activeLink: false,
      },
      {
        id: 4,
        title: "item.addressRecord",
        icon: <IoBookOutline color="#bcb4ff" fontSize={25} />,
        activeLink: false,
      },
      {
        id: 5,
        title: "item.negotiation",
        icon: <HiOutlineUsers color="#bcb4ff" fontSize={25} />,
        activeLink: false,
      },
    ],
  },
  subLinks: {
    title: "الخدمات الالكترونية",
    links: [
      {
        id: 6,
        title: "item.trade1",
        icon: <TbFiles color="#bcb4ff" fontSize={25} />,
        activeLink: false,
      },
      {
        id: 7,
        title: "item.trade2",
        icon: <TbFiles color="#bcb4ff" fontSize={25} />,
        activeLink: false,
      },
      {
        id: 8,
        title: "item.trade3",
        icon: <TbFiles color="#bcb4ff" fontSize={25} />,
        activeLink: false,
      },
    ],
  },
  subLinks2: {
    title: "روابط اخرى ",
    links: [
      {
        id: 9,
        title: "item.another1",
        icon: false,
        activeLink: false,
      },
      {
        id: 10,
        title: "item.another2",
        icon: false,
        activeLink: false,
      },
      {
        id: 11,
        title: "item.another3",
        icon: false,
        activeLink: false,
      },
    ],
  },
};

export default sidebarLinks;
