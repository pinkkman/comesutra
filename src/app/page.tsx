import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, MapPin, Gift, Music, Users, ChevronDown } from 'lucide-react';
import Countdown from '@/components/countdown';
import Faq from '@/components/faq';
import { Button } from '@/components/ui/button';

export default function Home() {
  const eventDetails = [
    {
      icon: <CalendarDays className="h-8 w-8 text-primary" />,
      title: 'Date',
      value: 'August 28, 2024',
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Time',
      value: '7:00 PM Onwards',
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: 'Venue',
      value: 'University Auditorium',
    },
  ];

  const features = [
    {
      icon: <Music className="h-10 w-10 text-accent" />,
      title: 'Live DJ & Music',
      description: 'Dance the night away to the latest tracks.',
    },
    {
      icon: <Gift className="h-10 w-10 text-accent" />,
      title: 'Exciting Giveaways',
      description: 'Win amazing prizes and goodies.',
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: 'Meet New People',
      description: 'A great opportunity to mingle and make new friends.',
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
       <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative text-foreground">
        <main className="flex-1">
          <section className="flex h-screen min-h-[700px] w-full flex-col items-center justify-center space-y-8 px-4 text-center">
            <div className="space-y-4">
              <h1 className="font-headline text-5xl font-black tracking-tight text-white drop-shadow-lg sm:text-7xl lg:text-8xl">
                COME सूत्र
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
                Welcome, Computer Engineering Students! Get ready for an
                unforgettable night of celebration.
              </p>
            </div>
            <Countdown />
             <div className="absolute bottom-10 animate-bounce">
              <a href="#details">
                <ChevronDown className="h-8 w-8 text-white" />
              </a>
            </div>
          </section>

          <section id="details" className="w-full bg-background py-20 sm:py-32">
            <div className="container px-4 md:px-6">
               <div className="mb-12 text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Event Details</h2>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
                  Everything you need to know about the party of the year.
                </p>
              </div>
              <div className="grid gap-10 sm:px-10 md:grid-cols-3 md:gap-16">
                {eventDetails.map((detail) => (
                  <Card
                    key={detail.title}
                    className="flex flex-col items-center border-2 text-center shadow-lg transition-transform hover:scale-105 hover:border-primary"
                  >
                    <CardHeader className="items-center gap-4">
                      {detail.icon}
                      <CardTitle className="font-headline text-2xl">
                        {detail.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">{detail.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="highlights" className="w-full bg-secondary py-20 sm:py-32">
             <div className="container px-4 md:px-6">
                <div className="mb-12 text-center">
                  <h2 className="font-headline text-4xl font-bold tracking-tighter text-secondary-foreground sm:text-5xl">Party Highlights</h2>
                  <p className="mx-auto mt-4 max-w-3xl text-secondary-foreground/80 md:text-xl">
                    Get ready for an evening packed with fun and excitement.
                  </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      {feature.icon}
                      <h3 className="mt-4 font-headline text-xl font-bold text-secondary-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-secondary-foreground/80">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
          </section>

          <section
            id="rsvp"
            className="w-full bg-primary py-20 sm:py-32"
          >
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
                  Don't Miss Out!
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Spots are limited. Register now to confirm your attendance and
                  be part of the biggest party of the year.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEKdPhFvGT-qayxMllW7-N9WYdnNTdfgf4AycpmImtrYU5-A/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full font-bold text-accent-foreground transition-transform hover:scale-105"
                    size="lg"
                    variant="default"
                    style={{backgroundColor: 'hsl(var(--accent))'}}
                  >
                    RSVP Now
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <section id="faq" className="w-full bg-background py-20 sm:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
                    Frequently Asked Questions
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Got questions? We've got answers. Here are some common
                    queries about the event.
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-12 max-w-3xl">
                <Card>
                  <CardContent className="p-6">
                    <Faq />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex w-full shrink-0 flex-col items-center justify-center gap-2 border-t bg-secondary px-4 py-6 sm:flex-row md:px-6">
          <p className="text-xs text-secondary-foreground">
            &copy; 2024 Computer Engineering Department. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
