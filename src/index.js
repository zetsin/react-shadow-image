import React, {Component} from 'react'

export default class extends Component {
  render() {
    const { src, ImageProps={}, imgProps={}, ShadowProps={}, children, ...rest } = this.props
    return <div {...rest} style={{
      position: 'relative',
      ...(rest.style || {})
    }}>
      <div {...ShadowProps} style={{
        background: `url(${src})`,
        top: 0,
        left: 0,
        width: '100%',
        filter: 'blur(16px)',
        height: '100%',
        position: 'absolute',
        backgroundSize: 'cover',
        padding: 'inherit',
        boxSizing: 'border-box',
        ...(ShadowProps.style || {})
      }} />
      <div {...ImageProps} style={{
        position: 'relative',
        ...(ImageProps.style || {})
      }} >
        <img src={src} {...imgProps} style={{
          width: '100%',
          boxSizing: 'border-box',
          borderRadius: 6,
          ...(imgProps.style || {})
        }} />
        <div style={{
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          padding: 'inherit',
          boxSizing: 'border-box',
        }}>
          {children}
        </div>
      </div>
    </div>
  }
}
