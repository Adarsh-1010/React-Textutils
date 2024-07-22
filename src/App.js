import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
// import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About Us"/>
      <div className="container my-3">
      {/* <TextForm heading="Enter the Text Below"/> */}
      <About/>
      </div>

    </>
  );
}

export default App;
