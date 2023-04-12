import { Header } from "./Header/Header";
import { Hero } from "./Main-Page/Hero/Hero";
import { Info } from "./Main-Page/Info/Info";
// import { Diferent } from './Main-Page/Different/Different';
// import { Services } from './Main-Page/Services/Services';
// import { Coming } from './Main-Page/Coming/Coming';
// import { Details } from './Main-Page/Details/Details';
// import { Buy } from './Main-Page/Buy/Buy';
import { Footer } from './Footer/Footer';




// import buy from '../data/main-page/buy.json';
// import coming from '../data/main-page/coming.json';
// import details from '../data/main-page/details.json';
// import different from '../data/main-page/different.json';
import info from '../data/main-page/info.json';
// import services from '../data/main-page/services.json';


export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Info info={info}/>
      {/* <Diferent />
      <Services />
      <Coming />
      <Details />
      <Buy />
      <Footer />
      <Buy />*/}
      <Footer /> 
    </div>
  );
};
