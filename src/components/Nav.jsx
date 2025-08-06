import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Nav() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
