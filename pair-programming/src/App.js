import './App.css';
import data from './data/data.json';
import ListItem from './components/ListItem'

// const API_KEY = '5dfbcdd753c1449db741e2f537387fef'
// let apiData = {}

let getDate = async () => {
    // let dataFetch = fetch()
    // let data = await(dataFetch);
    // let jsonData = await data.json();
    // apiData = await data;

    console.log(data.articles);
    console.log(data.articles.sort((item) => item.publishedAt))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World1</p>
        <button onClick={() => getDate()} >GetData</button>
        <ul>
            {data.articles.map((item, index) => {
                return(
                    <ListItem key={index} title={item.title} content={item.content} />
                )
            })}
        </ul>
      </header>
    </div>
  );
}

export default App;
