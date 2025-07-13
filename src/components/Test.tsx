

function Test() {
    const cards = [
        { title: "Card 1", content: "Bu birinci kart", image: "" },
        { title: "Card 2", content: "Bu ikinci kart", image: "" },
        { title: "Card 3", content: "Bu üçüncü kart", image: "" },
        { title: "Card 4", content: "Bu dördüncü kart", image: "" }
    ];

    return (
        <div style={{ padding: "1rem" }}>
            <h2>🧩 Responsive Kartlar</h2>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    justifyContent: "center"
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            flex: "1 1 300px", // büyüyebilir, küçülebilir, başlangıç 300px
                            maxWidth: "400px",
                            minWidth: "250px",
                            padding: "1rem",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "8px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                        }}
                    >
                        <h3>{card.title}</h3>
                        <p>{card.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Test