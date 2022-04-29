import * as React from 'react'

import { Five } from '@realsee/five'
import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'

import GridOnIcon from '@mui/icons-material/GridOn'
import Grid4x4Icon from '@mui/icons-material/Grid4x4'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'

import './index.css'
import { enableModelWireframe } from '@/shared-utils/enableModelWireframe'

export function Toolbar() {
  const [fiveState, setFiveState] = useFiveState()
  const [modelWireframeState, setModelWireframeState] = React.useState(false)
  const five = unsafe__useFiveInstance()

  return (
    <div className="toolbar">
      <ul className="toolbar-items">
        <li
          className="toolbar-item"
          onClick={() => {
            setFiveState({ mode: Five.Mode.Floorplan })
            enableModelWireframe(five, !modelWireframeState)
            setModelWireframeState(!modelWireframeState)
          }}
        >
          {modelWireframeState ? <GridOnIcon /> : <Grid4x4Icon />}
          <span className="toolbar-txt">三维网格</span>
        </li>

        <li className="toolbar-item" onClick={() => setFiveState({ mode: Five.Mode.Floorplan })}>
          <ViewInArIcon />
          <span className="toolbar-txt">空间总览</span>
        </li>

        <li className="toolbar-item" onClick={() => setFiveState({ mode: Five.Mode.Panorama })}>
          <DirectionsWalkIcon />
          <span className="toolbar-txt">全景漫游</span>
        </li>

        <li className="toolbar-item" onClick={() => setFiveState({ mode: Five.Mode.Model })}>
          <DirectionsRunIcon />
          <span className="toolbar-txt">模型游走</span>
        </li>
      </ul>
    </div>
  )
}
