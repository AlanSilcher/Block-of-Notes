import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";
import Blog from "./Pages/Blog/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Blog />} />
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;
