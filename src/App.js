import './App.css';
import Productlist from './Product';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"LAPTOP", price:"250000", img:"phone.jpeg"},{no:"2",name:"BIKE", price:"200000", img:"Car.png"}]}/>
    </div>
  );
}

export default App;