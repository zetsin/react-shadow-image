import React, {Component} from 'react'
import {render} from 'react-dom'

import ShadowImage from '../../src'
import src from './lena.png'

const example1 = 
`
<ShadowImage src={src}>
  <h2>react-shadow-image Demo</h2>
</ShadowImage>
`
const example2 = 
`
<ShadowImage
  src={src}
  ShadowProps={{
    style: {
      top: 16,
      transform: 'scale(0.92)'
    }
  }}
>
  <h2>react-shadow-image Demo</h2>
</ShadowImage>
`
const example3 = 
`
<ShadowImage
  src={src}
  ShadowProps={{
    style: {
      filter: 'blur(32px)',
    }
  }}
  imgProps={{
    style: {
      padding: 32,
    }
  }}
>
  <h2>react-shadow-image Demo</h2>
</ShadowImage>
`
const example4 = 
`
<ShadowImage
  src={src}
  ShadowProps={{
    style: {
      filter: 'blur(32px)',
    }
  }}
  ImageProps={{
    style: {
      padding: 32,
    }
  }}
>
  <h2>react-shadow-image Demo</h2>
</ShadowImage>
`

class Demo extends Component {
  render() {
    return <div>
      <h1>react-shadow-image Demo</h1>
      <div style={{
        display: 'flex'
      }}>
        <div style={{margin: 32}}>
          <ShadowImage src={src}>
            <h2>react-shadow-image Demo</h2>
          </ShadowImage>
          <pre>{example1}</pre>
        </div>
        <div style={{margin: 32}}>
          <ShadowImage
            src={src}
            ShadowProps={{
              style: {
                top: 16,
                transform: 'scale(0.92)'
              }
            }}
          >
            <h2>react-shadow-image Demo</h2>
          </ShadowImage>
          <pre>{example2}</pre>
        </div>
        <div style={{margin: 32}}>
          <ShadowImage
            src={src}
            ShadowProps={{
              style: {
                filter: 'blur(32px)',
              }
            }}
            imgProps={{
              style: {
                padding: 32,
              }
            }}
          >
            <h2>react-shadow-image Demo</h2>
          </ShadowImage>
          <pre>{example3}</pre>
        </div>
        <div style={{margin: 32}}>
          <ShadowImage
            src={src}
            ShadowProps={{
              style: {
                filter: 'blur(32px)',
              }
            }}
            ImageProps={{
              style: {
                padding: 32,
              }
            }}
          >
            <h2>react-shadow-image Demo</h2>
          </ShadowImage>
          <pre>{example4}</pre>
        </div>
      </div>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
