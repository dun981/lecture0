import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Hello from './components/Hello.js'
import Message from './components/Message.js'
import Counter from './components/Counter.js'
import FunctionClick from './components/FunctionClick.js'
import ClassClick from './components/ClassClick.js'
import EventBind from './components/EventBind.js'
import ParentComponent from './components/ParentComponent.js'
import UserGreeting from './components/UserGreeting.js'
import NameList from './components/NameList.js'
import Stylesheet from './components/Stylesheet.js'
import Inline from './components/Inline.js'
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
<Inline />
{/*<Stylesheet primary={true} />
<NameList />
<UserGreeting />
<ParentComponent />


{/*<EventBind  />
<ClassClick  />
<FunctionClick></FunctionClick>

<Greet name='Lionel' heroName="Batman"/>
  <Welcome name='Bruce' heroName="Spiderman"/>
 <Counter />
<Message />

  <Greet name='Bruce' heroName="Spiderman">
   <p>This is a props</p>
  </Greet>
  <Greet name='Alan' heroName="Tom and Jerry" />
  <button>Action</button>

  <Welcome name='Alan' heroName="Tom and Jerry"/>
  <Welcome name='Lionel' heroName="Batman"/>*/}

    </div>
  );
}

export default App;
