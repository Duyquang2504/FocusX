import { getQuote } from "@/lib/quote.js";
import React, { useState } from "react";

const Header = () => {
  const [quote] = useState(getQuote);
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-4xl font-bold text-transparent bg-primary bg-clip-text">
        FocusX
      </h1>
      <p className="text-muted-foreground">{quote}</p>
    </div>
  );
};

export default Header;
