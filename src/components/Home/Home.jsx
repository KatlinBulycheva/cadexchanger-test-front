/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Cone } from "../Cone/Cone.jsx";
import styles from "./Home.module.css";
import { HEIGHT, RADIUS, SEGMENTS, getQueryKeyPoints } from "../../utils/constants.js";
import { useQuery } from "@tanstack/react-query";
import { pointsConeApi } from "../../api/pointsConeApi.js";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { coneSelector, setValues } from "../../redux/slices/coneSlice.js";
import { initState } from "../../redux/initState.js";

export const Home = () => {
    const dispatch = useDispatch();

    const clientData = useSelector(coneSelector);
    console.log(clientData);

//   const clientData = {
//     heightCone: 1,
//     raduisCone: 2,
//     numberSegmentsCone: 5,
//   };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: getQueryKeyPoints(clientData),
    queryFn: () => pointsConeApi.getAllPoints(clientData),
  });

  console.log(data, isLoading, isError, error, refetch);

  const submitHandler = (values) => {
    dispatch(setValues(values))
  }

  return (
    <main className={styles.main}>
      <section className={styles.wrappedForm}>
        <Formik 
            initialValues={initState.cone}
            onSubmit={submitHandler}
        >
          {({ values }) => {
            return (
              <Form className={styles.form}>

                <div className={styles.wrappedField}>
                  <label htmlFor={HEIGHT}>Height of cone</label>
                  <div className={styles.wrappedRange}>
                    <Field type="range" name={HEIGHT} min="1"/>
                    <span>{values[HEIGHT]}</span>
                  </div>
                </div>

                <div className={styles.wrappedField}>
                    <label htmlFor={RADIUS}>Radius base</label>
                    <div className={styles.wrappedRange}>
                        <Field type="range" name={RADIUS} min="1"/>
                        <span>{values[RADIUS]}</span>
                    </div>
                </div>

                <div className={styles.wrappedField}>
                    <label htmlFor={SEGMENTS}>Number of segments</label>
                    <div className={styles.wrappedRange}>
                        <Field type="range" name={SEGMENTS} min="3"/>
                        <span>{values[SEGMENTS]}</span>
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
