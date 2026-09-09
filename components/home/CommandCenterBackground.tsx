export function CommandCenterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Retro cut sun: classic Vice City horizon motif */}
      <div
        className="absolute left-1/2 top-[-120px] h-[560px] w-[560px] -translate-x-1/2 opacity-60 animate-drift"
        style={{
          background:
            "radial-gradient(circle, #ffcf5c 0%, #ff2e88 48%, #7b2ff7 100%)",
          maskImage:
            "repeating-linear-gradient(to bottom, black 0px, black 5px, transparent 5px, transparent 11px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0px, black 5px, transparent 5px, transparent 11px)",
          filter: "blur(1px)",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl animate-drift" />
      <div className="absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/3 rounded-full bg-amber/10 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/15">
        <div className="absolute inset-8 rounded-full border border-cyan/10" />
        <div className="absolute inset-16 rounded-full border border-cyan/10" />
        <div
          className="absolute inset-0 animate-radar-spin rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(255,46,136,0.28), transparent 22%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />
    </div>
  );
}
