import React, { createContext, useState } from "react";

export const QRCodeScannedContext = createContext();

export function QRCodeScannedProvider({ children }) {
    const [hasScanned, setHasScanned] = useState(false);

  const value = {
    hasScanned,
    setHasScanned,
  };
  return <QRCodeScannedContext.Provider value={value}>{children}</QRCodeScannedContext.Provider>;
}