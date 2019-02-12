import React, {Component} from 'react';
import classes from './Modal.module.css';
import Frag from '../../../hoc/Frag/Frag';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';

class Modal extends Component{

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('[Modal] WillUpdate');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Frag>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Frag>
    )
  }

}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired
};

export default Modal;