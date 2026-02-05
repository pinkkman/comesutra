import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin, Gift, Music, Users, Sparkles } from "lucide-react";
import Countdown from "@/components/countdown";
import Faq from "@/components/faq";
import { Button } from "@/components/ui/button";
export default function Home() {
  const eventDetails = [
  {
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    title: "Date",
    value: "March 01, 2026",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Time",
    value: "9:00 AM Onwards",
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Venue",
    value: "Hotel Suncity",
  },
];

const features = [
  {
    icon: <Music className="h-10 w-10 text-accent" />,
    title: "Live DJ & Music",
    description: "Dance the day away to the latest tracks.",
  },
  {
    icon: <Gift className="h-10 w-10 text-accent" />,
    title: "Exciting Giveaways",
    description: "Win amazing prizes and goodies.",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Meet New People",
    description: "Mingle, vibe, and make new friends.",
  },
];

  return (
    <div className="flex min-h-dvh w-full flex-col">
      <main className="flex-1">

        {/* HERO */}
        <section className="relative flex h-dvh min-h-[60vh] md:min-h-[680px] w-full items-center justify-center px-4 text-center">

          {/* Luxury festival overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />

          <div className="pointer-events-none absolute -top-32 left-1/2 hidden sm:block h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[hsl(var(--accent))]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/2 hidden sm:block h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]/25 blur-3xl" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD95A]/40 bg-card/40 px-4 py-2 text-xs font-semibold tracking-widest text-[#FFE6C9] backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#FFD95A]" />
              COMPUTER ENGINEERING • CELEBRATION
            </div>

            {/* Heading */}
            <div className="space-y-4">

              <h1 className="font-headline text-4xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">

                <span className="bg-gradient-to-b from-[#FFD95A] to-[#D4A017] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.3)]">
                  COME
                </span>

                {" "}

                <span className="text-[#F5E6CA] drop-shadow-md">
                  सूत्र
                </span>

              </h1>

              <p className="mx-auto max-w-2xl text-base text-[#FFE082] sm:text-lg">
                Welcome, Computer Engineering students — get ready for a premium celebration with music, energy, and memories.
              </p>

            </div>

            {/* Countdown */}
            <div className="rounded-2xl border border-[#FFD95A]/20 bg-card/50 p-4 shadow-xl backdrop-blur sm:p-6">
              <Countdown />
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-3 sm:flex-row">

              <a href="#details">
                <Button
                  size="lg"
                  className="font-bold bg-[#8B0000] text-[#FFE6C9] hover:bg-[#A11212] transition-all duration-300 shadow-lg"
                >
                  View Details
                </Button>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEKdPhFvGT-qayxMllW7-N9WYdnNTdfgf4AycpmImtrYU5-A/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="font-bold bg-[#C9A27E] text-[#5A0F14] hover:bg-[#D4B091] shadow-md transition-all duration-300"
                >
                  Register Now
                </Button>
              </a>

            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section id="details" className="w-full py-16 sm:py-24">
          <div className="container px-4 md:px-6">

            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold sm:text-5xl text-[#FFE6C9]">
                Event Details
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[#FFE082] sm:text-lg">
                Everything you need to know — clean, clear, and all in one place.
              </p>
            </div>

            <div className="grid gap-6 sm:px-6 md:grid-cols-3 md:gap-8">

              {eventDetails.map((detail) => (
                <Card
                  key={detail.title}
                  className="group border border-[#FFD95A]/15 bg-card/60 text-center shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardHeader className="items-center gap-4">

                    <div className="rounded-2xl border border-primary/15 bg-background/40 p-3 shadow-sm">
                      {detail.icon}
                    </div>

                    <CardTitle className="font-headline text-2xl text-[#FFE6C9]">
                      {detail.title}
                    </CardTitle>

                  </CardHeader>

                  <CardContent className="pb-8">
                    <p className="text-lg font-semibold text-[#FFE082]">
                      {detail.value}
                    </p>
                  </CardContent>
                </Card>
              ))}

            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="w-full py-16 sm:py-24">
          <div className="container px-4 md:px-6">

            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold sm:text-5xl text-[#FFE6C9]">
                Party Highlights
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[#FFE082] sm:text-lg">
                A vibe that’s festive, energetic, and actually well-designed.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group border border-[#FFD95A]/10 bg-card/55 text-center shadow-lg backdrop-blur transition hover:-translate-y-1"
                >
                  <CardContent className="p-8">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FFD95A]/15 bg-background/40 shadow-sm">
                      {feature.icon}
                    </div>

                    <h3 className="mt-5 font-headline text-xl font-bold text-[#FFE6C9]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-[#FFE082]">
                      {feature.description}
                    </p>

                  </CardContent>
                </Card>
              ))}

            </div>
          </div>
        </section>

      </main>
{/* FAQ */}
<section id="faq" className="w-full py-16 sm:py-24">
  <div className="container px-4 md:px-6">

    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#FFE6C9]">
          Frequently Asked Questions
        </h2>
<br />
        <p className="text-[#FFE082] sm:text-lg md:text-xl">
          Got questions? Here are quick answers.
        </p>
      </div>
    </div>

    <div className="mx-auto mt-10 max-w-3xl">
      <Card className="border border-[#FFD95A]/10 bg-card/60 shadow-lg backdrop-blur">
        <CardContent className="p-6">
          <Faq />
        </CardContent>
      </Card>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="flex w-full flex-col items-center justify-center gap-2 border-t border-[#FFD95A]/10 bg-card/40 px-4 py-6 backdrop-blur sm:flex-row">
        <p className="text-xs text-[#FFE082]">
          © 2026 Computer Engineering Department. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
