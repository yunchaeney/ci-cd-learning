import Card from "./Card";

export default function CardList({ animate }) {
  return (
    <div className="flex flex-col">
      <div className={`flex flex-col h-[200rem] ${animate}`}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
