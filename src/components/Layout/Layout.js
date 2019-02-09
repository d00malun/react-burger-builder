import React from 'react';
import Frag from '../../hoc/Frag';
import classes from './Layout.module.css';

const layout = (props) => (
  <Frag>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Frag>
);

export default layout;