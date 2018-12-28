import React from "react";
import Header from "../components/Header";

interface ILayoutProps {
  children: any;
}

export default function Layout(props: ILayoutProps) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
