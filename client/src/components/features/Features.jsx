import switch_roles from "../../img/switch_roles.jpg";
import simple_convenient from "../../img/simple_convenient.jpg";
import job_details from "../../img/job_details.jpg";
import service_providers from "../../img/service_providers.jpg";
import Feature from "./Feature";

const Features = (props) => {
  return (
    <div className="container px-4 py-lg-5">
      <Feature
        headline="WORK HARD, PLAY HARD"
        text="Keep your personal passions and business separate with access to two profiles. We all have many talents and JACA enables you to pursue each one."
        image={switch_roles}
        alt="Switch Roles"
      />
      <Feature
        headline="SIMPLE & CONVENIENT"
        text="Easily navigate through our system to check messages, set schedule availability, pending job offers, payment history, file sharing, and many more business tools featured on your account."
        image={simple_convenient}
        alt="Simple and Convenient"
        side="left"
      />
      <Feature
        headline="YOUR TIME IS VALUABLE:"
        subheadline="Negotiate on your terms"
        text="You can quickly customize each job detail to approve, decline, or counter offer contracts to reach a mutual agreement in a timely manner."
        image={job_details}
        alt="Job Details"
      />
      <Feature
        headline="DON'T WAIT IN LIMBO"
        text="You can now contact your potential employer or employee directly for an on-demand interview and hiring process. When time is slim, this allows users to be personable in a healthy professional environment."
        image={service_providers}
        alt="Service Providers"
        side="left"
      />
      <div className="mt-3">
        <h2 className="fw-bold mb-2">Support Us on Indiegogo</h2>
        <p className="text-muted h5 lh-base">
          Help us make JACA a reality by your support through our Indiegogo
          account. There are different levels of support tiers to help us
          develop the application and receive JACA merch and much more in
          return. We want to expand the business sphere, streamline the hiring
          process, and empower your ambition. Put the power of business back in
          your hands by supporting JACA! Your next business opportunity is Just A
          Click Away!
        </p>
        <div className='d-flex justify-content-center'>
          <div className="text-center text-lg-start mt-4">
              <a href="https://www.indiegogo.com/projects/jaca-incorporated/" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg px-5">
              Invest In Us
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
