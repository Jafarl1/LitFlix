import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Router from "./routes/Router";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
