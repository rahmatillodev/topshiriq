import "./Project15.css";
const Project15 = () => {
  return (
    <div className="hoverScroll">
      <div class="card">
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
        <div class="col col2">
          <p>About</p>
          <p>Our mission</p>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
        </div>
        <div class="col col3">
          <p>Services</p>
          <p>Products</p>
          <p>Join our team</p>
          <p>Partner with us</p>
        </div>
        <div class="backdrop"></div>
      </footer>
    </div>
  );
};

export default Project15;
