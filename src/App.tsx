import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";
import { HomePage } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { NavBar } from "./Components/NavBar";
import { ShoppingCartProvider } from "./Components/ShoppingCartContext";
function App() {
    return (
      <ShoppingCartProvider>
         <NavBar/>
     <Container className="mb-4">
     
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
     </Container>
      </ShoppingCartProvider>
       
    );
  }
export default App;
