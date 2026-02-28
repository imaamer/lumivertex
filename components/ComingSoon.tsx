import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <Image
        src="/lumivertex-logo.png"
        alt="Lumivertex — Converging Ideas into Possibilities"
        width={300}
        height={100}
        className="h-20 w-auto max-h-20 object-contain object-left bg-transparent mb-20"
        priority
        unoptimized
      />
      <h1 className="mb-6 max-w-2xl text-center text-4xl font-bold tracking-tight text-foreground md:text-4xl">
        Something Powerful Is Taking Shape
      </h1>
      <p className="mb-6 max-w-xl text-center text-lg leading-relaxed">
        We&apos;re working behind the scenes on technology built to solve real problems and make
        everyday work smarter and simpler. Thoughtfully designed. Carefully built. Almost ready.
      </p>
      <h2 className="text-3xl font-bold text-foreground mb-6">Coming Soon</h2>
      <p className="text-center">
        Stay with us, we can&apos;t wait to show you what&apos;s coming.
      </p>
    </div>
  );
};

export default ComingSoon;
