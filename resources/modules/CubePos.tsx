import * as React from 'react'
import * as THREE from 'three'
import { useFiveSceneEffect } from '@realsee/five/react'


export function CubePos() {
  useFiveSceneEffect((scene) => {
    // 标签在三维空间中的坐标点
    // const cubePos = [[-1.190790623918923, 0.5846103096603195, -0.378879378171707]]
    const cubePos: [number, number, number][] = []

    // 在模型中标注标签的位置
    cubePos.forEach((pos) => {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
      const cubeMesh = new THREE.Mesh(geometry, material)

      // 确定位置坐标
      cubeMesh.position.set(pos[0], pos[1], pos[2])
      scene.add(cubeMesh)
    })
  }, [])

  return <></>
}
