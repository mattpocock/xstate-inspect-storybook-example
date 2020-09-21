import React, { useEffect, useRef } from "react";
import { inspect } from "@xstate/inspect";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => {
    const ref = useRef();
    useEffect(() => {
      inspect({
        iframe: ref.current,
      });
    }, []);
    return (
      <div>
        <iframe ref={ref} width="480px" height="320px" className="mt-6" />
        <Story />
      </div>
    );
  },
];
