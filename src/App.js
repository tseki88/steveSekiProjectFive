import React, {useState } from 'react';
import {Header, Radio, Icon} from 'semantic-ui-react';
import Main from './Main';
import Footer from './components/Footer';

export const DarkContext = React.createContext()

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`app ${darkMode ? "darkMode" : null}`}>
      <header>
        <Header as="h1" inverted>Board Game Toolkit</Header>
        <div className="darkToggle" >
          <Icon name="sun" size="large" color="orange" inverted={darkMode} />
          <Radio className="darkToggleSwitch" toggle onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
          <Icon name="moon" size="large" color="yellow" inverted={darkMode} />
        </div>
      </header>
      <DarkContext.Provider value={darkMode}>
        <Main />
      </DarkContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
