import styles from "./withQuery.module.css";
import {Loader} from "../Loader/Loader.jsx";

export const withQuery = (WrappedComponent) =>
  function withQueryComponent({ isLoading, isError, error, refetch, ...rest }) {

    if (isError) {
      return (
        <div className={styles.error}>
          Error: {error.message}
          <button onClick={refetch} type="submit">
            try again
          </button>
        </div>
      );
    }
    if (isLoading) {
      return <Loader />;
    }

    return <WrappedComponent {...rest} />;
  };
