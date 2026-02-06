"use client";

import { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-02-21T10:00:00+05:30') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return (
        <div className="flex flex-wrap justify-center gap-3">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col items-center justify-center rounded-lg bg-white/10 p-3 backdrop-blur-sm min-w-[64px] sm:min-w-[80px]">
                    <span className="font-headline text-3xl font-bold sm:text-5xl">00</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/70">...</span>
                </div>
            ))}
        </div>
    );
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval as keyof typeof timeLeft];
    return (
      <div key={interval} className="flex flex-col items-center justify-center rounded-lg bg-primary/80 p-3 backdrop-blur-sm min-w-[64px] sm:min-w-[80px] border border-primary-foreground/20">
        <span className="font-headline text-3xl font-bold text-primary-foreground sm:text-5xl">
          {String(value).padStart(2, '0')}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-primary-foreground/70">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center gap-4">
      {timerComponents}
    </div>
  );
};

export default Countdown;
