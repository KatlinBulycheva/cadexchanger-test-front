import { Field, Form, Formik } from "formik";
import styles from "./FormComponent.module.css";
import { initState } from "../../redux/initState";
import { useDispatch } from "react-redux";
import { setValues } from "../../redux/slices/coneSlice";
import { HEIGHT, RADIUS, SEGMENTS } from "../../utils/constants";

export const FormComponent = ({isLoading}) => {
    const dispatch = useDispatch()

    const submitHandler = (values) => {
        dispatch(setValues(values));
      };

    return (
        <Formik initialValues={initState.cone} onSubmit={submitHandler}>
        {({ values }) => {
          return (
            <Form className={styles.form}>
              <div className={styles.wrappedField}>
                <label htmlFor={HEIGHT}>Height of cone</label>
                <div className={styles.wrappedRange}>
                  <Field type="range" name={HEIGHT} min="1" max="10"/>
                  <span>{values[HEIGHT]}</span>
                </div>
              </div>

              <div className={styles.wrappedField}>
                <label htmlFor={RADIUS}>Radius base</label>
                <div className={styles.wrappedRange}>
                  <Field type="range" name={RADIUS} min="1" max="10"/>
                  <span>{values[RADIUS]}</span>
                </div>
              </div>

              <div className={styles.wrappedField}>
                <label htmlFor={SEGMENTS}>Number of segments</label>
                <div className={styles.wrappedRange}>
                  <Field type="range" name={SEGMENTS} min="3" max="20"/>
                  <span>{values[SEGMENTS]}</span>
                </div>
              </div>

              <button disabled={isLoading} type="submit">
                {isLoading ? "Is submiting..." : "Submit"}
              </button>
            </Form>
          );
        }}
      </Formik>
    )
}