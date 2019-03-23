import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Frag from '../Frag/Frag';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: false
    };

    constructor(props) {
      super(props);
      axios.interceptors.request.use(req => {
        this.setState({error: false});
        return req;
      });
      axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    errorConfirmHandler = () => {
      this.setState({error: false});
    };

    render() {
      return (
        <Frag>
          <Modal show={this.state.error}
                 modalClosed={this.errorConfirmHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props}/>
        </Frag>
      );
    }

  }
};

export default withErrorHandler;