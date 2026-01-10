import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="M Trading logo"
        width={48}
        height={48}
        className="h-10 w-10 object-contain"
        priority
      />
      <div className="leading-tight">
        <div className="font-semibold text-slate-900">M Trading</div>
        <div className="text-xs text-slate-500">Global Trading Partner</div>
      </div>
    </Link>
  );
}
