import * as React from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
    title?: string;
    _site?: any;
    children?: React.ReactNode;
};
  
  const PageLayout = ({
    _site,
    children,
  }: Props) => {
    console.log('site from page layout: ', _site)
    return (
        <div className="min-h-screen">
        <p>{_site.name}</p>
            <Header _site={_site} />
                {children}
            <Footer _site={_site}></Footer>
        </div>
    );
  };

export default PageLayout;