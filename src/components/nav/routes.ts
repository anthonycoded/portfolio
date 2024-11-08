const routes = [
  {
    name: "Home",
    title: "Home",
    icon: "",
    route: "/",
  },
  {
    name: "Blog",
    title: "Blog",
    icon: "",
    route: "/blog",
  },
  {
    name: "Projects",
    title: "Projects",
    icon: "",
    route: "/projects",
    children: [
      {
        name: "frontend-home",
        title: "Frontend",
        icon: "",
        route: "/projects/frontend",
      },
      {
        name: "Backend-Home",
        title: "Backend",
        icon: "",
        route: "/projects/backend",
      },
    ],
  },
  {
    name: "About Me",
    title: "About Me",
    icon: "",
    route: "/about",
  },
  {
    name: "Contact",
    title: "Contact",
    icon: "",
    route: "/contact",
  },
];
export default routes;
