import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image layout="fixed" src="/assets/404.png" height={400} width={400} />
    </div>
  );
}
