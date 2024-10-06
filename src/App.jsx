import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <div className="max-w-7xl m-auto">
     <Navbar></Navbar>
     <Header></Header>
     <Products></Products>
    </div>
     <Footer></Footer>
    </div>
  );
}

export default App;
