import { useDispatch } from "react-redux";
import { initializeStore } from "../lib/store.ts";
import { initializeApollo } from "../lib/apollo";
import Layout from "../components/Layout";
import Counter from "../features/counter/Counter";
import Submit from "../components/Submit";
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from "../components/PostList";

const IndexPage = () => {
  // Tick the time every second
  const dispatch = useDispatch();

  return (
    <Layout>
      {/* Redux */}
      <Counter />
      <hr />
      {/* Apollo */}
      <Submit />
      <PostList />
    </Layout>
  );
};

export async function getStaticProps() {
  const reduxStore = initializeStore();
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return {
    props: {
      initialReduxState: reduxStore.getState(),
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
