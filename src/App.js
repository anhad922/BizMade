import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Cart from "./screens/Cart";
import Wishlist from "./screens/Wishlist";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={Cart} />
            <Route path="/wishlist" component={Wishlist} />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
