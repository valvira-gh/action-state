import RegisterComponent from "@/components/register-user";

const Home = () => {
  return (
    <main className="flex flex-col items-center m-2">
      <h1 className="text-4xl font-bold">useActionState()</h1>
      <RegisterComponent />
    </main>
  );
};

export default Home;
