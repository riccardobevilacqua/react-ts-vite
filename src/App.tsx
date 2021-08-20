/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useState } from 'react'
import logo from './logo.svg'

const headerStyles = css({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
})

const logoStyles = css`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const linkStyles = css({
  color: '#61dafb',
})

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount((count) => count + 1)

  return (
    <div css={{ textAlign: 'center' }}>
      <header css={headerStyles}>
        <img src={logo} css={logoStyles} alt="logo" />
        <p>Hello Vite + React + TypeScript!</p>
        <p>
          <button
            type="button"
            onClick={handleClick}
            css={{ fontSize: 'calc(10px + 2vmin)' }}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            css={linkStyles}
          >
            Learn React
          </a>
          {' | '}
          <a
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
            css={linkStyles}
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
