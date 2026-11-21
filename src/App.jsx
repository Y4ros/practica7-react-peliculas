import "./App.css";
import AppRouter from "./routers/AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
