"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useAppSelector } from "@/store/store";
import { Calculator } from "lucide-react";

export const CounterWidget = () => {
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <Card className="min-w-36">
      <CardHeader>
        <CardTitle className="text-lg text-center">Counter</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-3 items-center">
        <Calculator strokeWidth={1.25} size={40} /> {counter}
      </CardContent>
    </Card>
  );
};
