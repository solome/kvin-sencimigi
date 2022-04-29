import { Five } from '@realsee/five'

export const enableModelWireframe = (five: Five, enable = true) => {
  if (!five.model.loaded) {
    return false
  }

  const wireframe = (children?: THREE.Object3D[]) => {
    if (!children) return
    children.forEach((it: any) => {
      if (it.children) {
        wireframe(it.children)
      }

      if (it.material) {
        it.material.forEach((m: { wireframe: boolean }) => {
          m.wireframe = enable
        })
        it.needsRender = true
      }
    })
  }

  wireframe(five.model.children)

  five.needsRender = true

  return true
}