import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Instay?",
      answer:
        "Instay is a platform that helps students find suitable housing by connecting them with verified landlords and listings.",
    },
    {
      question: "How do I find student housing on Instay?",
      answer:
        "You can search for housing using filters such as location, budget, and amenities. Once you find a suitable place, you can contact the landlord directly.",
    },
    {
      question: "Are all listings on Instay verified?",
      answer:
        "Yes, all listings on Instay are personally verified to ensure that they meet our standards for student housing.",
    },
    {
      question: "How do landlords list their properties on Instay?",
      answer:
        "Landlords can create an account, add their property details, upload photos, and submit their listing for verification before it goes live.",
    },
    {
      question: "Does Instay charge students for using the platform?",
      answer:
        "Instay offers free browsing for students, but requires a subscription to contact landloards.",
    },
    {
      question: "How does Instay help ensure student safety?",
      answer:
        "Instay verifies all listings and landlords before they are listed on the platform to provide a safer housing experience for students.",
    },
    {
      question: "Can I contact the landlord through Instay?",
      answer:
        "Yes, you can contact landlords directly via WhatsApp through the Instay platform.",
    },
    {
      question: "What happens if a listing is no longer available?",
      answer:
        "Landlords are reminded to update availability regularly. If a listing is unavailable, we recommend checking for other options on Instay.",
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        {faqs.map((item, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQ;