"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  decreaseByOne,
  increaseByOne,
  reset,
} from "@/store/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

interface CardCounterProps {
  value?: number;
}

export const CardCounter = ({ value = 10 }: CardCounterProps) => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <Card className="min-w-72 flex flex-col items-center shadow-2xl">
      <CardHeader>
        <CardTitle>Counter</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center ">
        <span className="text-9xl">{counter}</span>
        <div className="flex flex-row gap-1 w-full">
          <Button onClick={() => dispatch(increaseByOne())} className="w-full">
            +1
          </Button>
          <Button onClick={() => dispatch(decreaseByOne())} className="w-full">
            -1
          </Button>
          <Button onClick={() => dispatch(reset(0))} className="w-full">
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
