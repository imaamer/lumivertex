import Image from "next/image";
import Link from "next/link";

type ServiceCallToActionProps = {
  backgroundSrc: string;
  lineOne: string;
  lineTwo: string;
  buttonLabel: string;
  /** When true, lineOne is the large heading and lineTwo is smaller (used on AI service page only). */
  largeFirstLine?: boolean;
};

export default function ServiceCallToAction({
  backgroundSrc,
  lineOne,
  lineTwo,
  buttonLabel,
  largeFirstLine = false,
}: ServiceCallToActionProps) {
  return (
    <section className="mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-[#0b7b59] px-6 py-12 text-center text-[#f6f7eb] sm:px-10 sm:py-16 lg:px-16">
        <Image src={backgroundSrc} alt="" fill priority className="object-cover" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          {largeFirstLine ? (
            <>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-3xl xl:text-4xl animate-in fade-in slide-in-from-top-4 duration-500">
                {lineOne}
              </h2>
              <p className="max-w-2xl text-base font-normal leading-relaxed text-[#f6f7eb]/90 sm:text-lg animate-in fade-in slide-in-from-top-4 duration-500 delay-100 fill-mode-both">
                {lineTwo}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-normal tracking-tight sm:text-3xl lg:text-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                {lineOne}
              </h2>
              <h2 className="mt-[-15px] text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl animate-in fade-in slide-in-from-top-4 duration-500 delay-100 fill-mode-both">
                {lineTwo}
              </h2>
            </>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#48e5c2] px-7 py-3 text-sm font-semibold text-[#0b4f3b] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#38c9aa] sm:px-9 sm:py-3.5 sm:text-base"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
