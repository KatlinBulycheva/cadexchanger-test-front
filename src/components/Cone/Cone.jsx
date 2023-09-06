/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";
import { Vector3 } from "three";

export const Cone = ({ points }) => {

  const convexRef = useRef();

  useEffect(() => {
    convexRef.current.geometry = new ConvexGeometry(
      points.map((point) => {
        return new Vector3(Number(point.x), Number(point.y), Number(point.z))
      })
    );
  }, [])

  return (
    <mesh position={[2, 2, 0]} ref={convexRef}>
      <boxGeometry />
      <meshStandardMaterial 
        color={0xF3F3F3}
      />
    </mesh>
  );
};
