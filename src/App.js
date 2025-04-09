import "./pages/tail.css"
import './App.css';
import { Header } from './pages/header';
import { Content } from './pages/content'
import { About } from './pages/about';
import { Proyects } from './pages/proyects';
import { Contact } from './pages/contact_me';

function App() {
  return (
    <div className="over">
      <Header />
      <Content />
      <About />
      <Proyects />
      <Contact />

    </div>
  );
}

export default App;
