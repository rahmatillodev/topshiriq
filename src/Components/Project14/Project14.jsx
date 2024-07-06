import "./Project14.css";

const Project14 = () => {
  return (
    <div className="carta">
      <div className="form">
        <div className="grid-header">
          <h3>Delivery Method</h3>
        </div>
        <div className="grid grid-3">
          <label className="item-label">
            <input
              className="item-input"
              type="radio"
              name="delivery"
              value="standard"
              checked
            />
            <span className="item-info">
              <span id="delivery-0-name" className="item-name">
                Standard
              </span>
              <br />
              <small id="delivery-0-shipping" className="item-shipping">
                5–10 business days
              </small>
            </span>
            <strong id="delivery-0-price" className="item-price">
              $5.00
            </strong>
          </label>
          <label className="item-label">
            <input
              className="item-input"
              type="radio"
              name="delivery"
              value="fast"
              aria-labelledby="delivery-1-name"
              aria-describedby="delivery-1-shipping delivery-1-price"
            />
            <span className="item-info">
              <span id="delivery-1-name" className="item-name">
                Fast
              </span>
              <br />
              <small id="delivery-1-shipping" className="item-shipping">
                2–4 business days
              </small>
            </span>
            <strong id="delivery-1-price" className="item-price">
              $15.00
            </strong>
          </label>
          <label className="item-label">
            <input
              className="item-input"
              type="radio"
              name="delivery"
              value="express"
              aria-labelledby="delivery-2-name"
              aria-describedby="delivery-2-shipping delivery-2-price"
            />
            <span className="item-info">
              <span id="delivery-2-name" className="item-name">
                Express
              </span>
              <br />
              <small id="delivery-2-shipping" className="item-shipping">
                1 business day
              </small>
            </span>
            <strong id="delivery-2-price" className="item-price">
              $25.00
            </strong>
          </label>
        </div>
        <div className="grid-header">
          <h3>Payment Method</h3>
          <button className="btn" type="button">
            Add New Card
          </button>
        </div>
        <div className="grid grid-2">
          <label className="item-label">
            <input
              className="item-input"
              type="radio"
              name="payment"
              value="1234"
              aria-label="Card ending with 1234"
              aria-describedby="payment-0-desc"
              checked
            />
            <span className="item-info">
              <span className="item-name">**** **** **** 1234</span>
              <br />
              <small id="payment-0-desc" className="item-shipping">
                Last used: <time datetime="2024-01-01">January 1, 2024</time>
              </small>
            </span>
          </label>
          <label className="item-label">
            <input
              className="item-input"
              type="radio"
              name="payment"
              value="4567"
              aria-label="Card ending with 5678"
              aria-describedby="payment-1-desc"
            />

            <span className="item-info">
              <span className="item-name">**** **** **** 5678</span>
              <br />
              <small id="payment-1-desc" className="item-shipping">
                Never used
              </small>
            </span>
          </label>
        </div>
        <button className="btn btn-lg btn-success" >
          Place Your Order
        </button>
      </div>
    </div>
  );
};

export default Project14;
