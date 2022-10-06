import './App.css';
import MovieTasteTester from './MovieTasteTester';
import MySuggestion from './MySuggestion';
import MyImage from './fire.png';


function App() {
  return (
    <div className='App'>
    <header>
    <img className="App-logo" src={MyImage} alt='logo'/>
    <p className="App-text">Suggestion to Stranger</p>
    </header>
  
    <body>
    <div className='content'>
        <h2>
          Hello Stranger, I am Doga! 	&#128526; &#x1F919; 


        </h2>
        <h4>
        and I think I really have good taste in movies and TV shows. &#128187; &#127916;
        </h4>
        <div className="buttons">
        <MovieTasteTester /> <MySuggestion />
        </div>
    </div>
    </body>
    </div>
  );
}

export default App;
