export default function Wrap({ children, areaLink }) {
  return (
    <section id={areaLink} className="relative w-full h-auto">
      {children}
    </section>
  );
}
