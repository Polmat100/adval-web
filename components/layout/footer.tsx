interface FooterProps {
    logoSrc: string;
}

export const Footer = ({ logoSrc }: FooterProps) => {
    return (
        <footer
        style={{
            background: "var(--footer)",
            color: "var(--titular)",
            borderTop: "1px solid var(--borde)",
            fontFamily: "var(--font-cuerpo), sans-serif",
        }}
        >
            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "44px 36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    flexWrap: "wrap",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <img
                    src={logoSrc}
                    alt="ADVAL"
                    style={{
                        width: 46,
                        height: 46,
                        borderRadius: "50%",
                        boxShadow: "0 0 0 1px rgba(255,255,255,.12)",
                    }}
                    />
                    <div>
                    <div
                        style={{
                        fontFamily: "var(--font-titulo), sans-serif",
                        fontWeight: 600,
                        fontSize: 18,
                        letterSpacing: ".05em",
                        textTransform: "uppercase",
                        }}
                    >
                        ADVAL Global Logistics
                    </div>
                    <div style={{ fontSize: 13, color: "var(--footer-texto)" }}>
                        ADVALURO S.A.C. · Arequipa, Perú
                    </div>
                    </div>
                </div>
                <div style={{ fontSize: 14, color: "var(--footer-texto)", letterSpacing: ".04em" }}>
                    969 195 742 · advalgloballogistics@gmail.com
                </div>
            </div>
        </footer>
    )
}