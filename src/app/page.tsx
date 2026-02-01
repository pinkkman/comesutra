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
          {/* festival-ish overlay (no new CSS required) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10" />
          <div className="pointer-events-none absolute -top-24 left-1/2 hidden sm:block h-[320px] sm:h-[520px] w-[320px] sm:w-[520px] -translate-x-1/2 rounded-full bg-[hsl(var(--accent))]/25 sm:blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 hidden sm:block h-[320px] sm:h-[520px] w-[320px] sm:w-[520px] -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]/20 sm:blur-3xl" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/40 px-4 py-2 text-xs font-semibold tracking-widest text-foreground backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              COMPUTER ENGINEERING • CELEBRATION
            </div>

            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-black tracking-tight text-primary drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl">
                COME <span className="text-foreground">सूत्र</span>
              </h1>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                Welcome, Computer Engineering students — get ready for a premium celebration with music, energy, and memories.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-card/50 p-4 shadow-xl backdrop-blur sm:p-6">
              <Countdown />
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a href="#details">
                <Button size="lg" className="font-bold">
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
                  variant="outline"
                  className="border-primary/40 bg-card/30 font-bold backdrop-blur hover:bg-card/50"
                >
                  RSVP Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section id="details" className="w-full py-16 sm:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Event Details
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground sm:text-lg md:text-xl">
                Everything you need to know — clean, clear, and all in one place.
              </p>
            </div>

            <div className="grid gap-6 sm:px-6 md:grid-cols-3 md:gap-8">
              {eventDetails.map((detail) => (
                <Card
                  key={detail.title}
                  className="group relative overflow-hidden border border-primary/15 bg-card/60 text-center shadow-lg backdrop-blur transition-transform hover:-translate-y-1"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent))]/15 via-transparent to-[hsl(var(--primary))]/10 opacity-0 transition-opacity group-hover:opacity-100" />

                  <CardHeader className="items-center gap-4">
                    <div className="rounded-2xl border border-primary/15 bg-background/40 p-3 shadow-sm">
                      {detail.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl">
                      {detail.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-8">
                    <p className="text-lg font-semibold">{detail.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section id="highlights" className="w-full py-16 sm:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Party Highlights
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground sm:text-lg md:text-xl">
                A vibe that’s festive, energetic, and actually well-designed.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group border border-primary/10 bg-card/55 text-center shadow-lg backdrop-blur transition-transform hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-background/40 shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="mt-5 font-headline text-xl font-bold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="w-full py-16 sm:py-24">
          <div className="container px-4 md:px-6">
            <Card className="overflow-hidden border border-primary/15 bg-card/60 shadow-xl backdrop-blur">
              <div className="relative p-8 text-center sm:p-12">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/10 via-transparent to-[hsl(var(--accent))]/15" />
                <div className="relative space-y-4">
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Don’t Miss Out
                  </h2>
                  <p className="mx-auto max-w-2xl text-muted-foreground sm:text-lg md:text-xl">
                    Spots are limited. Register now to confirm your attendance.
                  </p>

                  <div className="mx-auto mt-6 w-full max-w-sm">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfEKdPhFvGT-qayxMllW7-N9WYdnNTdfgf4AycpmImtrYU5-A/viewform?usp=publish-editor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="w-full font-bold transition-transform hover:scale-[1.02]"
                        size="lg"
                        style={{ backgroundColor: "hsl(var(--primary))" }}
                      >
                        RSVP Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full py-16 sm:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground sm:text-lg md:text-xl">
                  Got questions? Here are quick answers.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-3xl">
              <Card className="border border-primary/10 bg-card/60 shadow-lg backdrop-blur">
                <CardContent className="p-6">
                  <Faq />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex w-full shrink-0 flex-col items-center justify-center gap-2 border-t border-primary/10 bg-card/40 px-4 py-6 text-center backdrop-blur sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 Computer Engineering Department. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
