import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSceen from "./screens/HomeSceen";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <HomeSceen></HomeSceen>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
