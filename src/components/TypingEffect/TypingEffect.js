import React, { Component } from 'react';
import styles from '../../styles/TypingEffect.module.css';

class TypingEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      showCursor: true,
    };
  }

  componentDidMount() {
    this.updateContent();
  }

  componentDidUpdate(prevProps) {
    if (this.props.text !== prevProps.text) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.setState({ content: '', showCursor: true }, () => {
        this.updateContent();
      });
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  updateContent() {
    const textArray = Array.from(this.props.text);
    let index = 0;

    const type = () => {
      if (index < textArray.length) {
        this.setState(
          (prevState) => ({ content: textArray.slice(0, index + 1).join('') }),
          () => {
            index++;
            this.timeout = setTimeout(type, 30);
          }
        );
      } else {
        this.setState({ showCursor: false });
      }
    };

    type();
  }

  render() {
    const { content, showCursor } = this.state;

    return (
      <>
        {content}
        {showCursor && content.length !== this.props.text.length && (
          <span className={styles.cursor}>|</span>
        )}
      </>
    );
  }
}

export default TypingEffect;