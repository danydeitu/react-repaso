import AcordeonItem from './AcordeonItem';
import './App.css';
import content from './content';

function App() {
  return (
    <div className="container mt-5">
      <h1>Refuerzo de React</h1>
      <h2>Clase 01 | Conceptos de JS</h2>
      <hr />
      <div class="accordion" id="accordionExample">
      
          {
            content.map((item, i) => <AcordeonItem key={item.title + i} {...item} />)
          }
      


      </div>
    </div>
  );
}

export default App;
