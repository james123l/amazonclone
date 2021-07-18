import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../Reducer/reducer";
import { useStateValue } from "../../StateProvider/StateProvider";

function Subtotal  () {
  // const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          // <>不会增加dom额外的节点
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* onClick={(e) => history.push("/payment")} */}
      <button >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
