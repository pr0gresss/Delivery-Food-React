import { MainTemplate } from "@components/templates";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <MainTemplate>
      <div className={styles.container}>
        <h1>
          Error <span>404</span>: Not found.
        </h1>
        <p>
          The Page you are looking for doesn't exist or an other error occurred.
          <br />
          Go back, or head over to <a href="/">menu</a> to choose a new direction.
        </p>
      </div>
    </MainTemplate>
  );
};

export default NotFoundPage;
