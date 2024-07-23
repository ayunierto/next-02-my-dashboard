import { CounterWidget } from "@/dashboard";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-xl mb-2">Dashboard</h1>
      <section className="flex">
        <CounterWidget />
      </section>
    </div>
  );
}
