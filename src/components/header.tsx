import * as React from "react";
import Site from "../types/Site";
import Cta from "../components/cta";

export type Link = {
  label: string;
  url: string;
};

type Props = {
  _site: Site;
};

const links: Link[] = [
    {
      label: "Home",
      url: "/turtlehead-tacos",
    },
    {
      label: "About",
      url: "/about.html",
    },
  ];

const Header = ({_site }: Props) => {

  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));


  return (
    <>
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <img src={_site.logo.image.url} width="75" height="75"></img>
          <div className="text-2xl font-semibold">{_site.name}</div>
          <div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
          <div className="space-x-5">
            <Cta buttonText="Order Pickup" url="#" style="primary-cta"></Cta>
            <Cta
              buttonText="Order Delivery"
              url="#"
              style="secondary-cta"
            ></Cta>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
