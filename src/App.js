import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Container>
            <Route path="/" component={HomeScreen} exact />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
