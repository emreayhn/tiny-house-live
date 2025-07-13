type Props = {
    isOpen: boolean;
    onClose: () => void;
};

function SideBar({ isOpen, onClose }: Props) {
    if (!isOpen) return null; // Açık değilse hiçbir şey gösterme

    return (
        <>
            {/* Karanlık arka plan - dışarı tıklayınca kapat */}
            <div
                onClick={onClose}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    zIndex: 999,
                }}
            />

            {/* Sidebar menüsü */}
            <div
                onClick={(e) => e.stopPropagation()} // Sidebar'a tıklayınca kapanmasın
                style={{
                    position: "fixed",
                    top: 8,                     // 🔥 En üstten başlasın
                    right: 0,
                    width: "55vw",
                    maxWidth: "150px",
                    height: "30vh",
                    backgroundColor: "#333",
                    color: "#fff",
                    padding: "1.2rem",
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    boxShadow: "-2px 0 10px rgba(0,0,0,0.3)",
                    borderRadius: "1rem 0 0 1rem",
                    alignItems: "center",
                }}
            >
                <h2 style={{ marginTop: 0, }}></h2>
                <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem" }}>
                    <li style={linkItemStyle}>
                        <a href="#products" style={linkStyle} onClick={onClose}>Ürünler</a>
                    </li>
                    <li style={linkItemStyle}>
                        <a href="#about" style={linkStyle} onClick={onClose}>Hakkımızda</a>
                    </li>

                    <li style={linkItemStyle}>
                        <a href="#contact" style={linkStyle} onClick={onClose}>İletişim</a>
                    </li>
                </ul>

            </div>
        </>
    );
}

const linkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.1rem",
};

const linkItemStyle: React.CSSProperties = {
    marginBottom: "1.2rem",
};

export default SideBar;
