export default function Wrap({ children, areaLink }) {
  return (
    <section id={areaLink} className="w-full h-auto">
      {children}
    </section>
  );
}
