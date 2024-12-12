export type ProjectType = {
  name: string; //'Giftlist';
  title: string; //'Personal Wishlist';
  tags: string[]; // ['E-Commerce', 'Content Management'];
  description: string; //"Are you looking for the perfect holiday gift for Shawn? You're in the right place! Shawn's Giftlist makes it easy to browse a curated list of items from popular retailers like Walmart, Amazon, and Best Buy.";
  images: string[];
  link: string; //'https://giftlist-lovat.vercel.app/';
  stack: string[]; //[

  stackType: string; //'Full Stack';
  technologies: Technologies[]; //
  platforms: string[]; //['Web'];
};
type Technologies = {
  name: string;
  type: string;
};
