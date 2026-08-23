export default function GrainOverlay() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 z-[1] pointer-events-none light:opacity-0"
        >
            {/* Film grain */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
            />
            {/* Edge vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,0.35) 100%)",
                }}
            />
        </div>
    );
}
