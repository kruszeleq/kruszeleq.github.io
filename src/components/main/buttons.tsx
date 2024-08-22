import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Buttons({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  const currentPath = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        currentPath === href ? "router-active" : "router-noactive",
        "fadein-bot"
      )}
    >
      {text}
    </Link>
  );
}
