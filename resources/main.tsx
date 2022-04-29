import * as React from 'react'
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'

import { parseWork } from '@realsee/five'
import { createFiveProvider } from '@realsee/five/react'

import work from '@realsee/open-works/virtual/81980RNawnbCVaLz0a/work.json'

import './index.css'
import { ResponsiveFiveCanvas } from './components/ResponsiveFiveCanvas'
import { App } from './App'

const FiveProvider = createFiveProvider({
  backgroundColor: 0xf4fffe,
  imageOptions: { size: 512 },
  textureOptions: { size: 512 },
})

const Main = () => (
  <FiveProvider initialWork={parseWork(work)} ref={(ref) => Object.assign(window, { $five: ref?.five })}>
    <ResponsiveFiveCanvas />
    <App />
  </FiveProvider>
)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<Main />)
