import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";
import Image from "next/image";
import { redirect } from 'next/navigation'

export default function Home() {
  redirect("/user-dashboard")
  return (
    <div className="bg-white h-screen w-screen">
      <Nav></Nav>
      <NavbarNav></NavbarNav>

    </div>
  );
}
