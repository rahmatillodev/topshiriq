import "./Project14.css";

const Project14 = () => {
  return (
    <div className="carta">
      <div className="form">
        <div class="grid-header">
          <h3>Delivery Method</h3>
        </div>
        <div class="grid grid-3">
          <label class="item-label">
            <input
              class="item-input"
              type="radio"
              name="delivery"
              value="standard"
              checked
            />
            <span class="item-info">
              <span id="delivery-0-name" class="item-name">
                Standard
              </span>
              <br />
              <small id="delivery-0-shipping" class="item-shipping">
                5–10 business days
              </small>
            </span>
            <strong id="delivery-0-price" class="item-price">
              $5.00
            </strong>
          </label>
          <label class="item-label">
            <input
              class="item-input"
              type="radio"
              name="delivery"
              value="fast"
              aria-labelledby="delivery-1-name"
              aria-describedby="delivery-1-shipping delivery-1-price"
            />
            <span class="item-info">
              <span id="delivery-1-name" class="item-name">
                Fast
              </span>
              <br />
              <small id="delivery-1-shipping" class="item-shipping">
                2–4 business days
              </small>
            </span>
            <strong id="delivery-1-price" class="item-price">
              $15.00
            </strong>
          </label>
          <label class="item-label">
            <input
              class="item-input"
              type="radio"
              name="delivery"
              value="express"
              aria-labelledby="delivery-2-name"
              aria-describedby="delivery-2-shipping delivery-2-price"
            />
            <span class="item-info">
              <span id="delivery-2-name" class="item-name">
                Express
              </span>
              <br />
              <small id="delivery-2-shipping" class="item-shipping">
                1 business day
              </small>
            </span>
            <strong id="delivery-2-price" class="item-price">
              $25.00
            </strong>
          </label>
        </div>
        <div class="grid-header">
          <h3>Payment Method</h3>
          <button class="btn" type="button">
            Add New Card
          </button>
        </div>
        <div class="grid grid-2">
          <label class="item-label">
            <input
              class="item-input"
              type="radio"
              name="payment"
              value="1234"
              aria-label="Card ending with 1234"
              aria-describedby="payment-0-desc"
              checked
            />
            <span class="item-info">
              <span class="item-name">**** **** **** 1234</span>
              <br />
              <small id="payment-0-desc" class="item-shipping">
                Last used: <time datetime="2024-01-01">January 1, 2024</time>
              </small>
            </span>
          </label>
          <label class="item-label">
            <input
              class="item-input"
              type="radio"
              name="payment"
              value="4567"
              aria-label="Card ending with 5678"
              aria-describedby="payment-1-desc"
            />

            <span class="item-info">
              <span class="item-name">**** **** **** 5678</span>
              <br />
              <small id="payment-1-desc" class="item-shipping">
                Never used
              </small>
            </span>
          </label>
        </div>
        <button class="btn btn-lg btn-success" >
          Place Your Order
        </button>
      </div>
    </div>
  );
};

export default Project14;
