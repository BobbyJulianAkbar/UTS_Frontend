import Card from "./Card";
import useKomputers from "./hooks/useKomputers";

const Home = () => {
  const { error, isLoading, komputers } = useKomputers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="mt-4 flex flex-col gap-2">
      {komputers?.map((komputer) => {
        return <Card key={komputer.id} komputer={komputer} />;
      })}
    </div>
  );
};

export default Home;
