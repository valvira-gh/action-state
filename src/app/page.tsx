import RegisterComponent from "@/components/register-form";
import Link from "next/link";
import { getUsers } from "./data/getUsers";

const Home = async () => {
  const users = await getUsers();

  return (
    <main className="flex flex-col items-center m-2">
      <h1 className="text-4xl text-slate-900 m-4 font-bold">
        useActionState()
      </h1>
      <div className="mt-10 border p-4 rounded flex flex-col items-center space-y-2">
        <Link href={"/login"} className="text-blue-500 font-semibold text-xl">
          Login
        </Link>
        <p>or</p>
        <Link
          href={"/register"}
          className="text-blue-500 font-semibold text-xl"
        >
          Register
        </Link>
      </div>
      <div className="mt-10">
        <h2 className="text-xl text-slate-800 font-semibold text-center">
          Users
        </h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
