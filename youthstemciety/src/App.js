import elina from './elina.png';
import anita from './anita.jpg';
import vanessa from './vanessa.jpg';
import './App.css';

function App() {
return (
  <div className="App">
    <div className="homepage-header">

    </div>
    <div className="founder-letter-div"> {/*styling needed*/}
        <div className="founder-letter">
          <h2>Letter From Our Founders</h2>
          <h3>Insert: mission of npo, why & how npo was started, what npo has achieved, what npo HOPES to achieve</h3>
        </div>
        <div className ="founder-letter-images">
          <img src={elina} className="founder-letter-image" alt="logo" />
          <img src={vanessa} className="founder-letter-image" alt="logo" />
          <img src={anita} className="founder-letter-image" alt="logo" />
        </div>
    </div>
    <div className="horizontal-scroll-offered-resources">

    </div>
    <div className="how-to-be-involved-div">

    </div>
    <div className="instagram-display">

    </div>
    <div className="faq">

    </div>
  </div>
);
}

export default App;
