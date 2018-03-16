import React from 'react';
import ReactDOM from 'react-dom';
import BrowserHistory from './BrowserHistory.js';


class Link extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const isLeftClick = event.button === 0;

    // The browser or OS will sometimes implement different behaviors when the
    // user holds a modifier key while clicking
    const isModified = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

    // An `<a>` element's `target` prop lets you specify that the link should
    // be opened in a different window
    const hasNoTarget = !this.props.target;

    // We shouldn't replace the browser's default behavior in special cases
    if (isLeftClick && !isModified && hasNoTarget) {
      // Prevent the browser from navigating
      event.preventDefault();

      // Instead of a normal URL, browserHistory.push() expects an object with
      // `pathname` and `search` properties
      const pathname = this.props.href.split('?')[0];
      const search = this.props.href.slice(pathname.length);
      const location = {pathname, search};

      // Update the browser URL and notify any listeners added
      // via browserHistory.listen()
      BrowserHistory.push(location);
    }
  }

  render() {
    return (
      <a {...this.props} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

export default Link;