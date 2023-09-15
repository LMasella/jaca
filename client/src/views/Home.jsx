import { TopNav, Carousel, Features } from '../components';

const Home = props => {
    return (
        <>
            <TopNav active="home" />
            <main>
                <Carousel />
                <Features />
            </main>
        </>
    );
}
export default Home;

