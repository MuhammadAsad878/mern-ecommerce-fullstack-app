import NavBar from "../components/Navbar/Navbar";
import "../App.css";

export default function MainLayout({ children }: { children: React.ReactNode}) {
  return (
    <>
      <NavBar />
      <main className="text-3xl font-bold underline" >{children}</main>
    </>
  )
}
