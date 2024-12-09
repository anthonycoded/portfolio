const routes = [
  {
    name: 'Home',
    title: 'Home',
    icon: '',
    route: '/',
  },
  {
    name: 'Blog',
    title: 'Blog',
    icon: '',
    route: '/blog',
  },
  {
    name: 'Projects',
    title: 'Projects',
    icon: '',
    route: '/projects',
    children: [
      {
        name: "Shawn's Giftlist",
        title: "Shawn's Giftlist",
        icon: '',
        route: 'https://giftlist-lovat.vercel.app/',
      },
      {
        name: 'Backend-Home',
        title: 'Backend',
        icon: '',
        route: '/projects/backend',
      },
    ],
  },
  {
    name: 'About Me',
    title: 'About Me',
    icon: '',
    route: '/about',
  },
  {
    name: 'Contact',
    title: 'Contact',
    icon: '',
    route: '/contact',
  },
];
export default routes;
