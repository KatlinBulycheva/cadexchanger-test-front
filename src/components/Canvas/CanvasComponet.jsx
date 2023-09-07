/* eslint-disable react/no-unknown-property */
import { Cone } from "../Cone/Cone.jsx";
import { Canvas } from "@react-three/fiber";
import { Controls } from "../Controls/Controls";

export const CanvasComponent = ({ data }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[30, 30, 30]} intensity={0.5} />
      <Cone points={data} />
      <Controls />
    </Canvas>
  );
};
