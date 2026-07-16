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
        Coming Soon
      </h1>
      <p className="mb-6 max-w-5xl text-center text-lg leading-relaxed">
        We're currently putting the finishing touches on something exciting. Our AI-powered
        automation company is launching soon, bringing intelligent solutions designed to help
        businesses automate workflows, improve efficiency, and unlock new possibilities. Our website
        is temporarily under maintenance while we prepare for launch. Thank you for your patience,
        we can't wait to share what's coming.
      </p>
      <h2 className="text-3xl font-bold text-foreground mb-6">See you soon!</h2>
    </div>
  );
};

export default ComingSoon;
