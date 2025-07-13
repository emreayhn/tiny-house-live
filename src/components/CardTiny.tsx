import Tiny2 from '../assets/tiny2.jpg'

function CardTiny() {
    const cards = [
        { title: "Card 1", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum?", image: Tiny2 },
        { title: "Card 2", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum?", image: Tiny2 },
        { title: "Card 3", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum?", image: Tiny2 },
        { title: "Card 4", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum?", image: Tiny2 },
        { title: "Card 3", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum?", image: Tiny2 },
        { title: "Card 4", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum?", image: Tiny2 }
    ];

    return (
        <div style={{ padding: "1rem", marginLeft: "3rem", }}>
            <h2>Tiny House</h2>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "center"
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            flex: "1 1 300px", // büyüyebilir, küçülebilir, başlangıç 300px
                            maxWidth: "450px",
                            minWidth: "250px",
                            padding: "2rem",
                            backgroundColor: "#fff",
                            borderRadius: "25px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                        }}
                    >
                        <h3>{card.title}</h3>
                        <img src={card.image} style={{ maxWidth: "100%", height: "auto" }} />
                        <p>{card.content}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardTiny