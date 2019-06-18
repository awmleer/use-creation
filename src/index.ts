import {useRef} from 'react'

export function useCreation<T>(create: () => T, deps: any[]) {
  const {current} = useRef({
    deps: undefined,
    obj: undefined,
  })
  if (current.obj === undefined || !depsAreSame(current.deps, deps)) {
    current.deps = deps
    current.obj = create()
  }
  return current.obj
}

function depsAreSame(oldDeps: any[], deps: any[]): boolean {
  if (oldDeps === deps) return true // they are both undefined
  for (let i of deps) {
    if (deps[i] !== oldDeps[i]) return false
  }
  return true
}
