import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="max-w-7xl m-auto">
     <Navbar></Navbar>
     <Header></Header>
     <Products></Products>
    </div>
  );
}

export default App;
