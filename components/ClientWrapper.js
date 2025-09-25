"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3s loader
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loading-bg">
      <Loader />
    </div>
  ) : (
    <div className="container">{children}</div>
  );
}
