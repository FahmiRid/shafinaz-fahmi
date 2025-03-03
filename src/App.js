import "./App.css";
import Joke from "./components/joke";
import Countdown from "./components/countdown";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/todo";
import Gallery from "./components/gallery";
import RSVPForm from "./components/rsvp";
import Home from "./components/home";
import Intinerary from "./components/intinerary";
import Contact from "./components/contact";
import { AudioProvider } from "./components/audioProvider";
function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intinerary" element={<Intinerary />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rsvp" element={<RSVPForm />} />
        </Routes>
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;
