export default function Wrap({ title, children, areaLink }) {
  return (
    <section id={areaLink}>
      <div className="w-full h-auto xl:h-screen py-15">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
