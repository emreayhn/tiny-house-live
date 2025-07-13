import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import SideBar from "./SideBar";
import { useState } from "react";

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                    backgroundColor: "#f9fafb",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    borderRadius: "1rem",
                }}
            >

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        flexWrap: "wrap",
                        marginBottom: "0.5rem",
                    }}
                >
                    {/* Sosyal Medya */}
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                        <span style={{ fontSize: "0.9rem" }}>İletişim:</span>
                        <a href="#"><FaInstagram size={20} color="black" /></a>
                        <a href="#"><FaSquareFacebook size={20} color="black" /></a>
                        <a href="#"><FaWhatsapp size={20} color="black" /></a>
                    </div>

                    {/* Hamburger Menü */}
                    <div style={{ cursor: "pointer" }}>
                        <IoReorderThreeOutline
                            size={26}
                            color="black"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        />
                    </div>
                </div>


                <div style={{ textAlign: "center" }}>
                    <h2 style={{ margin: 0, fontSize: "1.5rem" }}>TİNY HOUSE</h2>
                </div>
            </header>

            <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    );
}

export default Header;
