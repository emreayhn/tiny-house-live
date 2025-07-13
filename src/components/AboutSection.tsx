import Tiny2 from '../assets/tiny2.jpg'


function AboutSection() {
    return (
        <section style={{ backgroundColor: "#f9fafb", padding: "4rem 1rem" }}>
            <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>

                {/* Başlık */}
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem", color: "#1e3a8a" }}>Hakkımızda</h2>

                {/* Resim */}
                <img
                    src={Tiny2}
                    alt="Tiny House"
                    style={{ maxWidth: "100%", height: "auto", marginBottom: "3rem" }}
                />

                {/* Açıklama Kartları */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
                    {infoBoxes.map((box, index) => (
                        <div key={index} style={{ flex: "1 1 250px", maxWidth: "300px", textAlign: "left" }}>
                            <h3 style={{ fontWeight: "bold", color: "#1e3a8a" }}>{box.title}</h3>
                            <p style={{ color: "#444" }}>{box.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const infoBoxes = [
    {
        title: "Sadelikte Zarafet",
        text: "Gereksiz detaylardan arındırılmış, doğallığı ve konforu bir arada sunan tasarımlar. Yaşam alanınızı sade ama işlevsel tutuyoruz.",
    },
    {
        title: "Rahatlık Garantisi",
        text: "Tiny House modellerimizi denemek için 30 gününüz var. Memnun kalmazsanız sorusuz sualsiz destek sağlıyoruz.",
    },
    {
        title: "Doğadan İlham",
        text: "Doğal malzemeleri öncelikli kullanıyor, doğaya zarar vermeden yaşam kalitenizi artırıyoruz. Geleceği birlikte kuruyoruz.",
    },
];

export default AboutSection;
