import { Header } from "./Header/Header";
import { Hero } from "./Main-Page/Hero/Hero";
import { Info } from "./Main-Page/Info/Info";
import info from '../data/main-page/info.json';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Info info={info}/>
    </div>
  );
};
