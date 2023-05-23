import "./services.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import DnsIcon from '@mui/icons-material/Dns';
import { useIntersection } from 'react-use';
import { useRef } from 'react';
import { useEffect } from 'react';

function Services() {

  const ref = useRef(null);
  const intersection = useIntersection(ref, { threshold: 0.5 });
  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.5) {
      ref.current.classList.add('cartanime');
    }
  }, [intersection]);

    return ( 
        <div className="services" id="services">
            <div className="header">
                <h1> My <span style={{ color: "yellow",marginLeft: "10px", fontSize:"50px" }}>Services</span></h1>
                <span className="service_line"> DIscover the Services that i offer for my clients and companies. </span>
                <span className="bordered_line" />
            </div>
            <div className="main_body" ref={ref}>
                <div className="mainbody_card">
                    <span className="icon"> <GitHubIcon fontSize="20px" /></span>
                    <span className="Skill_title">WEB DEVELOPMENT</span>
                    <p className="skill_explaination">I will create beautiful Websites and Landing pages for you and your company.You can see my react js projects that i did before.You can contact me through social media.</p>
                </div>


               


                <div className="mainbody_card" ref={ref}>
                    <span className="icon"> <DnsIcon fontSize="20px" /></span>
                    <span className="Skill_title">BAKEND DEVELOPMENT </span>
                    <p className="skill_explaination">I can write a better backend for your websites with Node js and Express js integrated with MongoDb database. You can see my all backend or Fullstack mern apps that i did before .</p>
                </div>


                <div className="mainbody_card" ref={ref}>
                    <span className="icon"> <WebIcon fontSize="20px" /></span>
                    <span className="Skill_title">REACT JS DEVELOPEMENT</span>
                    <p className="skill_explaination">I will love to create beautiful and responsive websites for you or your organisation with most popular framework i.e.., React js. For freelancing i will create at minimum low price..</p>
                </div>






            </div>


        </div>
    )
}

export default Services;