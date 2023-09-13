import styles from "./Home.module.css";
import { getQueryKeyPoints } from "../../utils/constants.js";
import { useQuery } from "@tanstack/react-query";
import { pointsConeApi } from "../../api/pointsConeApi.js";
import { useSelector } from "react-redux";
import { coneSelector } from "../../redux/slices/coneSlice.ts";
import { CanvasComponent } from "../Canvas/CanvasComponet.jsx";
import { FormComponent } from "../Form/FormComponent";

export const Home = () => {
  const clientData = useSelector(coneSelector);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: getQueryKeyPoints(clientData),
    queryFn: () => pointsConeApi.getAllPoints(clientData),
  });

  return (
    <main className={styles.main}>
      <section className={styles.wrappedForm}>
        <FormComponent isLoading={isLoading} />
      </section>

      <section className={styles.wrappedCanvas}>
        <CanvasComponent
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          refetch={refetch}
        />
      </section>
    </main>
  );
};
