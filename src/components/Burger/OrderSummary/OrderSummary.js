import React, {Component} from 'react';
import Frag from '../../../hoc/Frag/Frag';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

class OrderSummary extends Component {

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('[OrderSummary] WillUpdate');
  }

  render() {

    const ingredientSummary = Object.keys(this.props.ingredients)
      .map((igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>);
      }));

    return (
      <Frag>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
      </Frag>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  purchaseCancel: PropTypes.func.isRequired,
  purchaseContinue: PropTypes.func.isRequired
};

export default OrderSummary;