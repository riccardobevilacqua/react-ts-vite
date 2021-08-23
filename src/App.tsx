import styled from '@emotion/styled'
import React, { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount((count) => count + 1)

  const Container = styled.div`
    text-align: 'center';
  `

  const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    `

  const Logo = styled.img`
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

  const Button = styled.button`
    font-size: calc(10px + 2vmin);
  `

  const Link = styled.a`
    color: #61dafb;
  `

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>Hello Vite + React + TypeScript!</p>
        <p>
          <Button
            type="button"
            onClick={handleClick}
            >
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
          {' | '}
          <Link
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </Link>
        </p>
      </Header>
    </Container>
  )
}

export default App
