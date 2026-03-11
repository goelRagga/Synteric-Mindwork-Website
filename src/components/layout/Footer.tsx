import Link from "next/link";

const footerLinks = [
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "mailto:info@syntericmindworks.com", label: "Contact" },
];

function SyntericLogo({ className }: { className?: string }) {
  return (
 <img src="./SYNTERIC_LOGO_TEXT.png"    className="h-6 md:h-[50px] w-auto" />
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <SyntericLogo className="h-7 w-auto" />
        </Link>

        {/* Tagline */}
        <p className="text-[#8a8a9a] text-[0.78rem] italic hidden md:block">
          Powering The Next Wave Of Inteligence .
        </p>

        {/* Links */}
        <ul className="flex flex-wrap gap-5">
          {footerLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[#8a8a9a] hover:text-white text-[0.8rem] transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copy */}
        <span className="text-[#8a8a9a] text-[0.75rem] w-full md:w-auto">
          © {new Date().getFullYear()} Synteric Mindworks 
        </span>
      </div>
    </footer>
  );
}