import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'







function MakeRing({startPos=[0,0,0], planetSize=1, speed=1, rotation=[0,0,0], radius=3, label = "temp", numPoints=150}){
  const myRing = useRef()
  useFrame(({ clock }) =>
    {
      myRing.current.rotation.y=rotation[1]
      myRing.current.rotation.x=rotation[0]
      const a = clock.getElapsedTime()
      myRing.current.rotation.z = a * speed


    })
  return (
    <group ref = {myRing}>
      <mesh scale={planetSize} position = {startPos} material = {new THREE.MeshBasicMaterial({color: "blue"})}>
        <sphereGeometry/>
      </mesh>
      <mesh geometry = {new THREE.TorusGeometry(radius,.01,16,numPoints)} rotation = {[0,0,0]} material = {new THREE.MeshBasicMaterial({color: "white"})} />
    </ group>
  )}


export function MyRing() {
  return (
    <div style={{left: "-300px",height: "80%",width: "100%",background: "black",zIndex:"1",position:"fixed",marginLeft: "0",marginRight: "auto"}}>
    <Canvas>
      <directionalLight />
      <color attach="background" args={['black']} />
      <mesh scale={0.5} position = {[0,0,0]} material = {new THREE.MeshBasicMaterial({color: "orange"})}>
        <sphereGeometry />
      </mesh>
      <MakeRing planetSize = {0.1} speed = {0.75} startPos = {[1.5,0,0]} rotation = {[15,45]} label = {"ring1"} radius={1.5}/>
      <MakeRing planetSize = {0.15} speed = {1} startPos = {[2,0,0]} rotation = {[120,20]} label = {"ring2"} radius={2}/>
      <MakeRing planetSize = {0.25} speed = {-1.2} startPos = {[3,0,0]} rotation = {[90,10]} label = {"ring3"} radius={3}/>
      <MakeRing planetSize = {0.21} speed = {-0.8} startPos = {[2.25,0,0]} rotation = {[45,15]} label = {"ring4"} radius={2.25}/>
      <MakeRing planetSize = {0.12} speed = {-0.5} startPos = {[3.5,0,0]} rotation = {[80,170]} label = {"ring4"} radius={3.5}/>
    </Canvas>
    </div>
  )
}