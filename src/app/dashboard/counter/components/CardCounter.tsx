"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";

interface CardCounterProps {
  value?: number;
}

export const CardCounter = ({ value = 10 }: CardCounterProps) => {
  const [counter, setcounter] = useState(value);

  return (
    <Card className="min-w-72 flex flex-col items-center shadow-2xl">
      <CardHeader>
        <CardTitle>Counter</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center ">
        <span className="text-9xl">{counter}</span>
        <div className="flex flex-row gap-1 w-full">
          <Button
            onClick={() => setcounter((prev) => prev + 1)}
            className="w-full"
          >
            +1
          </Button>
          <Button
            onClick={() => setcounter((prev) => prev - 1)}
            className="w-full"
          >
            -1
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
