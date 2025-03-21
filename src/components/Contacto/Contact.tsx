import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h1 className='title-project'>&lt;Contacto/&gt;</h1>
            <form className="contact-form" action="https://formspree.io/f/xdkeeydw" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Asunto:</label>
                    <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows={5} maxLength={350} required></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </section>
    );
}