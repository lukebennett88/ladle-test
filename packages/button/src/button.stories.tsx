import { useState } from "react";

import { Button } from "./button";

export function Default() {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
      {count}
    </Button>
  );
}
