import React, { PureComponent } from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

export default class AppTemplate extends PureComponent {
  constructor(props) {
    super(props);
    this.children = props.children;// eslint-disable-line react/prop-types
  }

  render() {
    return (
      <div className="container">
        <h3>Hello from Home</h3>
        <div className="main">
          <p>
            Temporary paragraph while things get built.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel
            elit scelerisque mauris pellentesque. Tellus at urna condimentum mattis. Ante in nibh mauris cursus mattis molestie. In ornare quam
            viverra orci sagittis eu volutpat odio. Amet luctus venenatis lectus magna fringilla. Rhoncus urna neque viverra justo nec. Eu volutpat
            odio facilisis mauris sit amet massa vitae tortor. A condimentum vitae sapien pellentesque habitant morbi tristique. Et tortor consequat
            id porta nibh venenatis cras sed felis. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Eget felis eget nunc
            lobortis mattis aliquam faucibus. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Rutrum quisque non tellus orci.
          </p>
          <p>
            Feugiat sed lectus vestibulum mattis. Arcu risus quis varius quam quisque id diam vel quam. Ornare lectus sit amet est. Lectus vestibulum
            mattis ullamcorper velit sed ullamcorper morbi. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Tincidunt ornare massa
            eget egestas purus viverra. Vestibulum lectus mauris ultrices eros in cursus. Velit aliquet sagittis id consectetur. Nulla malesuada
            pellentesque elit eget gravida. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Nunc non blandit massa enim nec dui nunc
            mattis.
          </p>
        </div>
      </div>
    );
  }
}
