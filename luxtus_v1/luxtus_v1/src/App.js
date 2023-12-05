import logo from './logo.svg';
import './App.css';
import Announcement from './components/announcementBar';
import Menubar from './components/Menu.jsx';
import SlideShow from './components/Banner.jsx';

function App() {
  return (
    <>
    <Announcement />
    <Menubar />
    <SlideShow />
    </>
  );
}

export default App;
