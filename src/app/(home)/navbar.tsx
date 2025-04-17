import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const Navbar = () => {
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6">
        <span className={(cn("text-5xl font-semibold"), poppins.className)}>
          Teste
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
