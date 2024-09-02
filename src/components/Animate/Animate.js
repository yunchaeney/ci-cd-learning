import CardList from "./CardList";

export default function Animate() {
  return (
    <>
      <section className="w-full bg-neutral-50">
        <div className="py-32 mx-auto max-w-7xl">
          <h1 className="text-center text-3xl font-medium mb-6">
            Now is the time to build your portfolio.
          </h1>
          <h2 className="text-center mx-auto text-lg text-neutral-600">
            With typical market returns, you have to start young to secure your
            future.
            <br />
            With Pocket, it’s never too late to build your nest egg.
          </h2>
          <div className="w-full flex gap-8 mt-20 h-[800px] overflow-hidden relative">
            <div className="absolute w-full h-40 bg-gradient-to-b from-neutral-50 from-10% z-10" />
            <CardList animate={"animate-slide-fast"} />
            <CardList animate={"animate-slide-slow"} />
            <CardList animate={"animate-slide-fast"} />
            <div className="absolute w-full bottom-0 h-40 bg-gradient-to-t from-neutral-50 from-10% z-10" />
          </div>
        </div>
      </section>
    </>
  );
}
