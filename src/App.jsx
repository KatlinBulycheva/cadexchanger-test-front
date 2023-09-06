/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Cone } from "./components/Cone/Cone";
import styles from "./App.module.css";

function App() {
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
