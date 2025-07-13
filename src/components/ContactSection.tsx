function ContactSection() {
    return (
        <section style={{ padding: "4rem", backgroundColor: "#f9fafb" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <p style={{ color: "#1e3a8a", fontWeight: "bold", fontSize: "1rem" }}>İletişim</p>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>İletişim Bilgileri</h2>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                    {/* Merkez */}
                    <div style={cardStyle}>
                        <h3 style={titleStyle}>📍 Şirket Merkezi</h3>
                        <p>İçmeler Mahallesi, D-100 Karayolu Caddesi,<br />No:44A 34947 Tuzla/İSTANBUL</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Haritada Gör</a>
                    </div>

                    {/* Telefon */}
                    <div style={cardStyle}>
                        <h3 style={titleStyle}>📞 Telefon</h3>
                        <p>+90 850 206 50 50</p>
                    </div>

                    {/* Fax */}
                    <div style={cardStyle}>
                        <h3 style={titleStyle}>🖨️ Fax</h3>
                        <p>0850 206 40 40</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const cardStyle: React.CSSProperties = {
    flex: "1 1 300px",
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};

const titleStyle: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#1e3a8a",
};

const linkStyle: React.CSSProperties = {
    display: "inline-block",
    marginTop: "1rem",
    color: "#1d4ed8",
    textDecoration: "none",
    fontWeight: "500"
};

export default ContactSection;
