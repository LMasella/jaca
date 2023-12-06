import { TopNav, Role } from '../components';

const About = props => {
    return (
        <>
        <TopNav active="about" />
        <main className='container'>
            <h1>ABOUT US</h1>
            <div className="mt-3">
                <h2>Why we started JACA</h2>
                <p>The company was started by three people that have experienced a wide array of jobs available to them, and this has provided them a broad perspective and a series of individual skills. They saw that something was missing, with regards to the accessibility of someone desiring to be in charge of selling their own skills or work. They set out to create a platform to provide just that. JACA is this platform. It is an application and website that allows businesses, freelance workers, contractors, prospective employees, and serviceable markets to search for work locally or remotely that fits their expertise or desired field. It brings all required information and communication into one easy to use location and allows those providing and searching for said information to negotiate the details and come to a mutually beneficial agreement.</p>
            </div>
            <div>
                <h2 className='py-3 text-center'>OUR TEAM</h2>
                <div className="row justify-content-center row-cols-2 row-cols-sm-3 g-4">
                    <Role imgFile="Narada_Harris.jpg" name="Narada Harris" role="Co-Founder & CFO" />
                    <Role imgFile="Calder_Larsen.jpg" name="Calder Larsen" role="Co-Founder & COO" />
                    <Role imgFile="Julia_Lizeth_Larsen.jpg" name="Julia Lizeth Larsen" role="Co-Founder & CMO" />
                </div>
            </div>
            <div className="mt-3">
                <h2>Ideas into reality</h2>
                <p>JACA is built upon a foundation of connection and easy to use features. It is focused on eliminating redundancies in the process of looking for jobs or looking for employees. It can be used for long term and short term workers. It will integrate documents, schedules, chat for connections, easy to share qualifications, reviews/ratings, simplified searches, and much more. The entire system is designed to be easy to use and to facilitate quick connections. On top of these features, it is dedicated to being a system that allows people or businesses to pay for the services they require. The free version will be limited in features, but open to everyone. The varying tiers that can be upgraded, have more and more helpful features that allow users to expand their business. Each user will choose the subscription that is right for them, and we will provide the services.</p>
            </div>
            <div className='d-flex justify-content-center'>
          <div className="text-center text-lg-start mt-4">
              <a href="https://www.indiegogo.com/projects/jaca-incorporated/" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg px-5">
              Support Us On Indiegogo
              </a>
          </div>
        </div>
        </main>
        </>
    );
}
export default About;