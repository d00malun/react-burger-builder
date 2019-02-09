import React, {Component} from 'react';
import Frag from '../../hoc/Frag';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Frag>
        <Burger/>
        <div>Build Controls</div>
      </Frag>
    );
  }
}

export default BurgerBuilder;