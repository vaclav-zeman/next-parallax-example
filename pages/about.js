import Link from 'next/link'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

export default () => (
  <ParallaxProvider>
    <Link href="/">
      <a>Homepage</a>
    </Link>
    <Link href="/about">
      <a>About page</a>
    </Link>

    <h1>About page</h1>

    <div className="content">
      <Parallax offsetYMin={200} offsetYMax={1500}>
        <h2>Moving A</h2>
      </Parallax>
      <Parallax offsetYMin={-500} offsetYMax={2000}>
        <h2>Moving C</h2>
      </Parallax>
    </div>

    <style jsx>
      {`
        .content {
          margin-top: 300px;
          border: 2px solid grey;
          height: 1500px;
        }
      `}
    </style>
  </ParallaxProvider>
)
