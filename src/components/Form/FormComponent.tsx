import { Field, Form, Formik } from "formik";
import styles from "./FormComponent.module.css";
import { initState } from "../../redux/initState";
import { setValues } from "../../redux/slices/coneSlice";
import { HEIGHT, RADIUS, SEGMENTS } from "../../utils/constants";
import {FC} from "react";
import { IConeType } from "../../models/ConeTypes";
import { useAppDispatch } from "../../hooks/useAppDispatch";

type FormComponentProps = {
  isLoading: boolean,
}

export const FormComponent: FC<FormComponentProps> = ({isLoading}) => {
    const dispatch = useAppDispatch();

    const submitHandler = (values: IConeType) => {
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
                  <Field type="range" name={HEIGHT} id={HEIGHT} min="1" max="10"/>
                  <span>{values[HEIGHT]}</span>
                </div>
              </div>

              <div className={styles.wrappedField}>
                <label htmlFor={RADIUS}>Radius base</label>
                <div className={styles.wrappedRange}>
                  <Field type="range" name={RADIUS} id={RADIUS} min="1" max="10"/>
                  <span>{values[RADIUS]}</span>
                </div>
              </div>

              <div className={styles.wrappedField}>
                <label htmlFor={SEGMENTS}>Number of segments</label>
                <div className={styles.wrappedRange}>
                  <Field type="range" name={SEGMENTS} id={SEGMENTS} min="3" max="20"/>
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