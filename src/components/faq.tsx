import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "What is the dress code for the party?",
        answer: "The dress code is smart casual. Feel free to dress your best and be comfortable!",
    },
    {
        question: "Can I bring a guest?",
        answer: "This event is exclusively for the Computer Engineering freshers to help them get to know their batchmates. So, guests are not allowed.",
    },
    {
        question: "Will there be food and drinks?",
        answer: "Yes, we will have a variety of snacks, dinner, and non-alcoholic beverages available for all attendees.",
    },
    {
        question: "Is there an entry fee?",
        answer: "No, the event is completely free for all first-year Computer Engineering students.",
    },
    {
        question: "What kind of activities are planned?",
        answer: "We have a fun-packed evening with a live DJ, dance floor, ice-breaker games, and some surprise giveaways!",
    }
]

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index+1}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                {item.answer}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
  )
}
