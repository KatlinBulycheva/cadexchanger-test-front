/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export const Cone = ({ points }) => {
  const convexRef = useRef();

  useEffect(() => {
    convexRef.current.geometry = new ConvexGeometry(
      points
        ? points.map((point) => {
            return new Vector3(
              Number(point.x),
              Number(point.y),
              Number(point.z)
            );
          })
        : []
    );
  }, [points]);

  useFrame(() => {
    convexRef.current.rotation.y += 0.008;
    convexRef.current.rotation.x = 0.2;
  }, []);

  return (
    <mesh 
      position={[0, 0, 0]} 
      ref={convexRef}
    >
      <meshStandardMaterial color={0xf3f3f3} />
    </mesh>
  );
};
