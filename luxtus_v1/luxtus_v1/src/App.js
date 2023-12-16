import logo from './logo.svg';
import './App.css';
import Announcement from './components/announcementBar';
import Menubar from './components/Menu.jsx';
import Banner from './components/Banner.jsx';

function App() {
  return (
    <>
      <Announcement />
      <Menubar />
      <Banner />
    </>
    
    
  );
}

export default App;
