import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 flex flex-col bg-steelBlue justify-center bg-material-purple">
      <div className="row-start-3 flex gap-2 flex-wrap items-center justify-around  w-full">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 "
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center">
            {/* <Image
              aria-hidden
              src={avatar}
              alt="File icon"
              width={50}
              height={50}
              className="rounded-full"
            /> */}
            <p className="text-center text-white">
              Created by <br></br>
              <span className="font-semibold">Shawn Barbel</span>
            </p>
          </div>
        </a>

        <div className="flex flex-col items-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white font-semibold"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>{' '}
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white font-semibold"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white font-semibold"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            About me
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white font-semibold"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me
          </a>
        </div>
      </div>

      <div className="w-4/5 border border-gray-300 self-center my-8 border-1"></div>

      <div className="flex-1 w-full flex flex-col items-center justify-center text-white">
        <h2>&copy; 2024 Shawn Barbel. All Rights Reserved</h2>
        {/* <p>Shawn&apos;s Giftlist&trade;</p> */}
      </div>
    </footer>
  );
};

export default Footer;
