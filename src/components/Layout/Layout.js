import React from 'react';
import Frag from '../../hoc/Frag';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Frag>
    <Toolbar/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Frag>
);

export default layout;