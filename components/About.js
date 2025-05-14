import Link from "next/link";

export default function About() {
  return (
    <>
      <div id="aboutSection" className="w-full h-screen py-15">
        <h2>About</h2>
        <Link className="color-white" href="../app/about">
          About
        </Link>
      </div>
    </>
  );
}
