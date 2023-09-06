/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Cone } from "./components/Cone/Cone";
import styles from "./App.module.css";
import { getQueryKeyPoints } from "./utils/constants";
import { useQuery } from "@tanstack/react-query";
import { pointsConeApi } from "./api/pointsConeApi";

export function App() {
  const clientData = {
    heightCone: 2,
    raduisCone: 1,
    numberSegmentsCone: 10,
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: getQueryKeyPoints(),
    queryFn: () => pointsConeApi.getAllPoints(clientData),
  });

  console.log(data, isLoading, isError, error, refetch);

  return (
    <main>
      <section className={styles.canvas}>
        <Canvas>
          <ambientLight intensity={0.4} />
          <directionalLight position={[-3, -3, 3]} intensity={0.9} />
          <Cone points={data}/>
        </Canvas>
      </section>
    </main>
  );
}
