import jwlogin from "../../../../assets/screenshots/jaysworld/jwlogin.png";
import jwhome from "../../../../assets/screenshots/jaysworld/jwhome.png";
import player from "../../../../assets/screenshots/jaysworld/player.png";
import verifyinfo from "../../../../assets/screenshots/fostercare/verifyinfo.png";
import landingfc from "../../../../assets/screenshots/fostercare/landingfc.png";
import verification from "../../../../assets/screenshots/fostercare/verification.png";
import homepage from "../../../../assets/screenshots/fostercare/homepage.png";
import loginpage from "../../../../assets/screenshots/milly/loginpage.png";
import millyHome from "../../../../assets/screenshots/milly/millyHome.png";
import commercial from "../../../../assets/screenshots/milly/commercial.png";
import billpay from "../../../../assets/screenshots/milly/billpay.png";

export const data = [
  {
    title: "Jay's World",
    description:
      "Stream, Purchase, and Download the latest songs and beats created by Jay. This app has many features including: music streaming, payment processing, and ecommerce cart",
    images: [jwlogin, jwhome, player],
  },
  {
    title: "Foster Care",
    description:
      "This is a MVP created for Alabama Department of Human Resources. It is an intuitive and efficient way for interested parties to apply, learn, and manage being a foster care parent",
    images: [landingfc, verification, homepage, verifyinfo],
  },
  {
    title: "Milly App",
    description:
      "Mobile banking made easy. This app includes: gamification, commercial, subscription tracking, ID Verification, and many more features.",
    images: [loginpage, millyHome, billpay, commercial],
  },
];
