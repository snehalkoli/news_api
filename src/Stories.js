import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h1>Loading.......</h1>
      </>
    );
  }

  return (
    <>
      <h1>Snehal Koli.........</h1>
      {hits.map((curPost) => {
        return (
          <>
            <h2>{curPost.title}</h2>
            <>{curPost.author}</>
          </>
        );
      })}
    </>
  );
};

export default Stories;
