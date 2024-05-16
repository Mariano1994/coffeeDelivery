import EmptyMessage from "../components/EmptyMessage";

const EmptyPage = () => {
  return (
    <div className=" flex items-center justify-center w-full h-screen bg-background">
      <EmptyMessage />
    </div>
  );
};

export default EmptyPage;
