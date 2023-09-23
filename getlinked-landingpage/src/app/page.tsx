import Image from 'next/image'
import NavBar from "../Components/NavBar/NavBar.Component";
import purpleLens from "../static/img/purple-lens-flare-png.png"
import metrix from "../static/img/metrix-1.png"
import purpleLens10 from "../static/img/purple-lens-flare-png-10.png"
import line1 from "../static/img/line-1.svg"
import line2 from "../static/img/line-2.svg"
import line3 from "../static/img/line-3.svg"
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Introduction from "../Components/Introduction/Introduction";
import Rules from "../Components/Rules/Rules";
import Criteria from "../Components/Criteria/Criteria";
import  AskedQuestions  from "../Components/AskedQuestions/AskedQuestions";
import Timeline from "../Components/Timeline/Timeline";
import Prize  from "../Components/Prize/Prize";
import Partners from "../Components/Partners/Partners";
import Policy from "../Components/Policy/Policy";
import Footer from "../Components/Footer/Footer";
import "./globals.css"
export default function Home() {
  return (
    <main >

    <div className="getlinked">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <Image
              className="purple-lens-flare"
              alt="Purple lens flare"
              src={purpleLens}
            />
            <Image className="metrix" alt="Metrix" src={metrix} />
            <Image
              className="img"
              alt="Purple lens flare"
              src={purpleLens10}
            />
            <Image className="line" alt="Line" src={line1} />
            <Image className="line-2" alt="Line" src={line2} />
            <Image className="line-3" alt="Line" src={line3} />

            <NavBar />
            <Jumbotron />
            <Introduction />
            <Rules />
            <Criteria />
            <AskedQuestions />
            <Timeline />
            <Prize />
            <Partners />
            <Policy />
            <Footer />
          </div>
        </div>
      </div>
    </div>
</main>
 )
};
