import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "What is the dress code for the party?",
        answer: "•Senior Males-formals \n•Senior Girls saree/lehengaa \n•Junior boys and girls traditionals (except saree/lehenga)",
    },

    {
        question: "Will there be food and drinks?",
        answer: " Yes , we will have an exclusive lunch menu and non alcoholic beverages ",
    },
    {
        question: "Is there an entry fee?",
        answer: "Yes, the entry fees is mentioned in the registration form.",
    },
    {
        question: "What kind of activities are planned?",
        answer: "We have a fun-packed day with Dance performances, musical performances, games, and a jamming session for everyone to enjoy!",
    }
]

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index+1}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base whitespace-pre-line leading-relaxed">
                {item.answer}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
  )
}
