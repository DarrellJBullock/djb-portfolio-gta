import Image from "next/image";

export function VicePoster() {
  return (
    <section className="relative border-y border-steel bg-void-soft py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="hud-frame relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/gta-key-art.jpg"
              alt="Vice City style key art: two stylized caricatures of Darrell Bullock beside a convertible and a motorcycle, in front of a Miami sunset skyline"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
              priority={false}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="console-text mb-2 text-xs uppercase tracking-[0.3em] text-cyan">
                Vice City Edition
              </p>
              <h2 className="vice-gradient-text font-display text-3xl leading-none sm:text-5xl">
                Darrell Bullock
              </h2>
              <p className="mt-3 max-w-lg text-sm text-fog-dim sm:text-base">
                Same engineer, same track record — reimagined for a city that never stops moving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
