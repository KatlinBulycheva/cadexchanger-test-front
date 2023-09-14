/* eslint-disable react/no-unknown-property */
import { Cone } from "../Cone/Cone.tsx";
import { Canvas } from "@react-three/fiber";
import { Controls } from "../Controls/Controls.tsx";
import { withQuery } from "../HOCs/withQuery.jsx";

export const CanvasComponent = withQuery(({ data }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[30, 30, 30]} intensity={0.5} />
      <Cone points={data} />
      <Controls />
    </Canvas>
  );
})
