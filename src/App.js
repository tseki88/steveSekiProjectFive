import React, {useState } from 'react';
import {Header, Radio, Icon, Button} from 'semantic-ui-react';
import Main from './Main';
import Footer from './components/Footer';

export const DarkContext = React.createContext()

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [visible, setVisible] = useState(false)

  return (
    <div className={`app ${darkMode ? "darkMode" : null}`}>
      <header>
      <Button icon="bars" onClick={() => {setVisible(!visible)}} inverted={darkMode} />
        <Header as="h1" inverted>Board Game Toolkit</Header>
        <div className="darkToggle" >
          <Icon name="sun" size="large" color="orange" inverted={darkMode} />
          <Radio className="darkToggleSwitch" toggle size="small" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
          <Icon name="moon" size="large" color="yellow" inverted={darkMode} />
        </div>
      </header>
      <DarkContext.Provider value={darkMode}>
        <Main visible={visible} setVisible={setVisible} />
      </DarkContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
