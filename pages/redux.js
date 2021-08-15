import { useDispatch } from "react-redux";
import { initializeStore } from "../lib/store";
import useInterval from "../lib/useInterval";
import Layout from "../components/Layout";
import Counter from "../features/counter/Counter";

const ReduxPage = () => {
  return (
    <Layout>
      <Counter />
    </Layout>
  );
};

export async function getStaticProps() {
  const reduxStore = initializeStore();

  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
    revalidate: 1,
  };
}

export default ReduxPage;
