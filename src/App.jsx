/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Cone } from "./components/Cone/Cone";
import styles from "./App.module.css";
import { getQueryKeyPoints } from "./utils/constants";
import { useQuery } from "@tanstack/react-query";
import { pointsConeApi } from "./api/pointsConeApi";

function App() {
  const clientData = {
    heightCone: 20,
    raduisCone: 10,
    numberSegmentsCone: 15,
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: getQueryKeyPoints(),
    queryFn: () => pointsConeApi.getAllBoardgames(clientData),
  });

  console.log(data, isLoading, isError, error, refetch);

  return (
    <main>
      <section className={styles.canvas}>
        <Canvas>
          <ambientLight intensity={0.6} />
          <directionalLight position={[1, 3, 0]} intensity={0.7} />
          <Cone />
        </Canvas>
      </section>
    </main>
  );
}

export default App;
