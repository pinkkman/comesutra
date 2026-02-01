"use client";

import React, { useState, useEffect } from 'react';

const ConfettiPiece = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute h-4 w-2 rounded-sm"
    style={{ ...style, animation: 'confetti-fall 5s linear infinite' }}
  />
);

export default function Confetti() {
  const [pieces, setPieces] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const confettiCount = 75;
    const generatedPieces = Array.from({ length: confettiCount }).map((_, i) => {
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 5}s`,
        backgroundColor: ['#FFA500', '#DC143C', '#FFFFFF', '#F9E79F'][Math.floor(Math.random() * 4)],
        transform: `rotate(${Math.random() * 360}deg)`,
      };
      return <ConfettiPiece key={i} style={style} />;
    });
    setPieces(generatedPieces);
  }, []);

  return <div className="fixed inset-0 z-50 h-full w-full pointer-events-none overflow-hidden">{pieces}</div>;
}
