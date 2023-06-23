import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const developer = details.find((developer) => developer.id === parseInt(id));

  if (!developer) {
    return <h1>Developer doesn't exist</h1>;
  }
  const { name, role } = developer;
  return (
    <div style={{ padding: "1rem" }}>
      <h1>{name}</h1>
      <h4>{role}</h4>
    </div>
  );
};

export default Details;
