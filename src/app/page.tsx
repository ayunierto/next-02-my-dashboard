import { Dashboard } from "@/components/Dashboard/Dashboard";
import { redirect } from "next/navigation";

export default function Home() {
  // redirect("dashboard/main");
  return <Dashboard></Dashboard>;
}
