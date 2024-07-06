import Image from "next/image";
import andora from "/public/andora.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={andora} alt="Andora" width={100} height={100} />
    </Link>
  );
}
