/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";
import { Vector3 } from "three";

export const Cone = () => {

  const convexRef = useRef();

  useEffect(() => {
    convexRef.current.geometry = new ConvexGeometry(
      Array.from({ length: 20 }).map(
        () => new Vector3(Math.random() * 3, Math.random() * 3, Math.random() * 3)
      )
    );
  }, [])

  return (
    <mesh position={[-2, -1, 0]} ref={convexRef}>
      <boxGeometry />
      <meshStandardMaterial 
        color={0xF3F3F3}
      />
    </mesh>
  );
};
