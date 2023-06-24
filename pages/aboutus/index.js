import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      <h1>This is the about us page</h1>
      <ul>
        <li>
          {" "}
          <Link href="/aboutus/1"> Yash </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/aboutus/2"> Vaibhav </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/aboutus/3"> Suresh </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
