import { Header } from "./Header/Header";
import { Hero } from "./Main-Page/Hero/Hero";
import { Info } from "./Main-Page/Info/Info";
import { Different } from './Main-Page/Different/Different';
import { Services } from './Main-Page/Services/Services';
import { Coming } from './Main-Page/Comming/Comming';
import { Details } from './Main-Page/Details/Details';
// import { Buy } from './Main-Page/Buy/Buy';
import { Footer } from './Footer/Footer';




// import buy from '../data/main-page/buy.json';
import comming from '../data/main-page/comming.json';
import details from '../data/main-page/details.json';
import different from '../data/main-page/different.json';
import info from '../data/main-page/info.json';
import services from '../data/main-page/services.json';


export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Info info={info}/>
      <Different different={different}/>
      <Services services={services}/>
      <Coming coming={comming}/>
      <Details details={details}/>
      {/* <Buy /> */}
       <Footer />
    </div>
  );
};
