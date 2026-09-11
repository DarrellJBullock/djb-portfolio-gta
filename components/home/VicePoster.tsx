import Image from "next/image";

export function VicePoster() {
  return (
    <section className="relative border-y border-steel bg-void-soft py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="hud-frame relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[3/4] w-full sm:aspect-[16/9]">
            <Image
              src="/images/gta-key-art.jpg"
              alt="Vice City style key art: two stylized caricatures of Darrell Bullock beside a convertible and a motorcycle, in front of a Miami sunset skyline"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
              priority={false}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-void to-transparent sm:h-1/3"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-10">
              <p className="console-text mb-1 text-[10px] uppercase tracking-[0.3em] text-cyan sm:mb-2 sm:text-xs">
                Vice City Edition
              </p>
              <h2 className="vice-gradient-text font-display text-2xl leading-none sm:text-5xl">
                Darrell Bullock
              </h2>
              <p className="mt-2 max-w-lg text-xs text-fog-dim sm:mt-3 sm:text-base">
                Same engineer, same track record — reimagined for a city that never stops moving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
