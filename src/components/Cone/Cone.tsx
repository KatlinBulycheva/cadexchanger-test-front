/* eslint-disable react/no-unknown-property */
import { FC, useEffect, useRef } from "react";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";
import { Vector3, Mesh } from "three";
import { useFrame } from "@react-three/fiber";

type PointType = {
  x: number;
  y: number;
  z: number;
};

type ConeProps = {
  points: PointType[];
};

export const Cone: FC<ConeProps> = ({ points }) => {
  const convexRef = useRef<Mesh>(null);

  useEffect(() => {
    if (convexRef.current) {
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
    }
  }, [points]);

  useFrame(() => {
    if (convexRef.current) {
      convexRef.current.rotation.y += 0.008;
      convexRef.current.rotation.x = 0.2;
    }
  });

  return (
    <mesh position={[0, 0, 0]} ref={convexRef}>
      <meshStandardMaterial color={0xf3f3f3} />
    </mesh>
  );
};
