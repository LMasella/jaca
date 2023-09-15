import { TopNav } from '../components';

const Contact = props => {
    return (
        <>
        <TopNav active="contact" />
        <main className="container d-flex align-items-center text-center" style={{fontSize: "min(3em, 6vw)"}}>
            <div className="mb-5">
            <p>You can reach us on any of our social media outlets or contact us directly through our email:</p>
            <a href='mailto:jaca.bozeman@gmail.com'>Jaca.bozeman@gmail.com</a>
            </div>
        </main>
        </>
    );
}
export default Contact;