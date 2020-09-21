import React from "react";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
import { LoadingText } from "components/LoadingText";

export default {
  title: "Loading Indicator/Example 1",
};

const machine = createMachine({
  initial: "step1",
  states: {
    step1: {
      after: {
        1000: "step2",
      },
    },
    step2: {
      after: {
        3000: "step3",
      },
    },
    step3: {},
  },
});

export const StatesAndAfter = () => {
  const [state] = useMachine(machine, { devTools: true });
  if (state.matches("step1")) {
    return null;
  }
  if (state.matches("step2")) {
    return <LoadingText>Loading...</LoadingText>;
  }
  if (state.matches("step3")) {
    return <LoadingText>Apologies, this is taking a while...</LoadingText>;
  }
};
