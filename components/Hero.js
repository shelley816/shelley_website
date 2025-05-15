export default function Hero() {
  return (
    <>
      <div id="heroSection" className="w-full h-screen flex justify-center items-center">
        <div className="size-70 md:size-130 rounded-full flex flex-col justify-center items-center bg-[var(--background-secondary)]/80">
          <h2 className="font-[family-name:var(--font-poppins)]">Simple.</h2>
          <p className="text-center">
            從設計到前端，穩紮穩打，
            <br />
            渴望打造實用而有溫度的網站。
          </p>
        </div>
      </div>
    </>
  );
}
