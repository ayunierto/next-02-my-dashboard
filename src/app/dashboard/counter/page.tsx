import { CardCounter } from "../../../counter";

export const metadata = {
  title: "Counter page",
  description: "A simple counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <CardCounter value={10} />
    </div>
  );
}
