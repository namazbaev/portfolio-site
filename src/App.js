import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import Statistics from "./components/layout/Statistics/Statistics";
import About from "./components/layout/About/About";
import Services from "./components/layout/Services/Services";
import Clients from './components/layout/Clients/Clients';
import Portfolio from './components/layout/Portfolio/Portfolio';
import Blog from './components/layout/Blog/Blog';
import Partners from './components/layout/Partners/Partners';
import Footer from './components/layout/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Statistics />
      <About />
      <Services />
      <Clients />
      <Portfolio />
      <Blog />
      <Partners />
      <Footer />
    </div>
  );
};
export default App;