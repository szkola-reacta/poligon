import React from 'react';

import News from './pages/Articles';
import './App.css';

const data = [
  { id: 1, author: 'Jan Brzęczek', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, author: 'Jan Brzęczek', title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, author: 'Jan Brzęczek', title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
];

function App() {
  return (
    <div>
      {data.map((elem) => (
        <News
          key={`news-${elem.id}`}
          header={elem.title}
          intro={elem.intro}
          author={elem.author}
        />
      ))}
    </div>
  );
}

export default App;
