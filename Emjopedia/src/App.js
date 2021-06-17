import React from 'react';
import './App.css';
import Entry from './Entry'
import Title from './Title'
import contents from './Content'
import Footer from './Footer'

function createCard(contents){
  return(
    <Entry
 key={contents.id}
emoji={contents.emoji}
name={contents.name}
   detail= {contents.detail}
    />
    )
}
function App() {
  return (

    <div>
    <Title />
    {
      contents.map(createCard)
    }
    <Footer />
    </div>
  );
}

export default App;
