import './carousel.css';

const Carousel = props => {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="carousel-custom first">
                            <h1>Why Choose JACA?</h1>
                            <p>JACA is a one stop shop that facilitates engagement, communication, contract negotiation, execution, payment, and much more for employers and employees. The JACA system is an easy to use, robust, end to end platform for all employers and employees in the gig economy.</p>
                            {/* <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="carousel-custom">
                            <h1>Invest in your future!</h1>
                            <p>Support JACA and help us reach our goal on Indiegogo and stay up-to-date by following us on Facebook and Instagram.</p>
                            <p><a className="btn btn-lg btn-primary px-5" href="https://www.indiegogo.com/projects/jaca-incorporated" target="_blank" rel="noreferrer">Support Us</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="carousel-custom">
                            <h1>Freelancing Made Easy</h1>
                            <p>Have flexibility in your career and business with JACA. We provide every business tool you need to succeed.</p>
                            {/* <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;