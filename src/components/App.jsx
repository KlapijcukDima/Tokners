import { Info } from './Main-Page/Info/Info.jsx';

import info from '../data/main-page/info.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Info info={info}/>
    </div>
  );
};
