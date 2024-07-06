import "./Project15.css";
const Project15 = () => {
  return (
    <div className="hoverScroll">
      <div className="card">
        <h2>
          Scroll Now
          <br />
          Thank Yourself Later
        </h2>
        <button>
          <a href="#footer">Scroll</a>
        </button>
      </div>
      <footer id="footer">
        <div className="col col2">
          <p>About</p>
          <p>Our mission</p>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
        </div>
        <div className="col col3">
          <p>Services</p>
          <p>Products</p>
          <p>Join our team</p>
          <p>Partner with us</p>
        </div>
        <div className="backdrop"></div>
      </footer>
    </div>
  );
};

export default Project15;
