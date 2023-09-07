/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Cone } from "../Cone/Cone.jsx";
import styles from "./Home.module.css";
import { getQueryKeyPoints } from "../../utils/constants.js";
import { useQuery } from "@tanstack/react-query";
import { pointsConeApi } from "../../api/pointsConeApi.js";
import { Field, Form, Formik } from "formik";

export const Home = () => {
  const clientData = {
    heightCone: 1,
    raduisCone: 2,
    numberSegmentsCone: 5,
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: getQueryKeyPoints(),
    queryFn: () => pointsConeApi.getAllPoints(clientData),
  });

  console.log(data, isLoading, isError, error, refetch);

  const submitHandler = (values) => {
    console.log(values);
  }

  return (
    <main className={styles.main}>
      <section className={styles.wrappedForm}>
        <Formik 
            initialValues={{ height: 1, radius: 2, segments: 5 }}
            onSubmit={submitHandler}
        >
          {({ values }) => {
            return (
              <Form className={styles.form}>

                <div className={styles.wrappedField}>
                  <label htmlFor="height">Height of cone</label>
                  <div className={styles.wrappedRange}>
                    <Field type="range" name="height" min="1" max="3"/>
                    <span>{values.height}</span>
                  </div>
                </div>

                <div className={styles.wrappedField}>
                    <label htmlFor="radius">Radius base</label>
                    <div className={styles.wrappedRange}>
                        <Field type="range" name="radius" min="3" max="20"/>
                        <span>{values.radius}</span>
                    </div>
                </div>

                <div className={styles.wrappedField}>
                    <label htmlFor="radius">Number of segments</label>
                    <div className={styles.wrappedRange}>
                        <Field type="range" name="segments" min="3" max="20"/>
                        <span>{values.segments}</span>
                    </div>
                </div>

                <button disabled={isLoading} type="submit">{isLoading ? 'Is submiting...' : 'Submit'}</button>
              </Form>
            );
          }}
        </Formik>
      </section>

      <section className={styles.wrappedCanvas}>
        <Canvas>
          <ambientLight intensity={0.4} />
          <directionalLight position={[-3, -3, 3]} intensity={0.9} />
          <Cone points={data} />
        </Canvas>
      </section>
    </main>
  );
};
