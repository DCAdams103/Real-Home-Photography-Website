import './styles/App.css';
import Header from './components/home_page/Header'
import SideBar from './components/SideBar'
import MainContent from './components/home_page/MainContent'
import styles from './styles/MainContent.module.css'

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
