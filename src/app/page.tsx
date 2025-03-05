import { getCurrentSession } from "@/actions/auth";

const Home = async() => {
  const {user} = await getCurrentSession();
  return (
    <p className="text-black">
      {JSON.stringify(user)}
    </p>
  );
}

export default Home;