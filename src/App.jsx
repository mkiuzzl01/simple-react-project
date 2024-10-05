import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <main className="max-w-7xl m-auto">
     <Navbar></Navbar>
     <Header></Header>
     <Products></Products>
    </main>
     <Footer></Footer>
    </div>
  );
}

export default App;
