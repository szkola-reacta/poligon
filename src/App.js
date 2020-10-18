import React from 'react';

import './App.css';

const yellow = '#f1c40f';

const styles = {
  backgroundColor: '#ecf0f1',
  border: '#95a5a6 1px solid',
  padding: 10,
  para: {
    background: yellow
  }
};

function News({ header, intro }) {
  return (
    <div style={styles}>
      <h2>{header}</h2>
      <p style={styles.para}>{intro}</p>
    </div>
  );
}

// function News({ header, intro }) {
//   return (
//     <div className="News">
//       <h2>{header}</h2>
//       <p>{intro}</p>
//     </div>
//   );
// }

const data = [
  {
    header: 'Nagłówek 1', intro: 'Intro 1',
  }, {
    header: 'Nagłówek 2: Breaking news', intro: 'Intro 2',
  }, {
    header: 'Nagłówek 3: Nie śpię bo trzymam kredens', intro: 'Intro 3',
  }
];

function App() {
  return (
    <div>
      {data.map((elem, index) => (
        <News key={`news-${index}`} header={elem.header} intro={elem.intro} />
      ))}
    </div>
  );
}

export default App;
