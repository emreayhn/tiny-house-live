

function Map() {
    return (
        <div style={{ display: 'flex', }}>
            <section style={{ padding: "4rem", backgroundColor: "#f5f5f5" }}>
                <h2>İletişim</h2>
                <p>Bize ulaşmak için aşağıdaki haritadan yerimizi görebilirsiniz.</p>

                <div style={{ marginTop: "2rem", width: "100%", maxWidth: "600px", height: "350px" }}>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.7575416788827!2d28.9712181!3d41.0055009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e43857d1c3%3A0x17b3f22b47a0d18!2sTaksim%20Square!5e0!3m2!1sen!2str!4v1628610996480!5m2!1sen!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

        </div>
    );
}

export default Map;
