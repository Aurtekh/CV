import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './scss/app.scss';

export const languageContext = React.createContext();

function App() {
  const [state, setState] = React.useState({
    language: 'en',
    name: 'language',
  });

  return (
    <>
      <languageContext.Provider value={{ state, setState }}>
        <Header />
        <Main />
        <Footer />
      </languageContext.Provider>
    </>
  );
}

export default App;
