import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BookOpen, Gamepad2, Mic, Paintbrush, Star, Text } from "lucide-react";
import { PersonalizedLearningForm } from "@/components/PersonalizedLearningForm";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

const features = [
  {
    icon: BookOpen,
    title: "Introdução ao Alfabeto",
    description: "Apresentação de cada letra com ilustrações cativantes e palavras associadas para facilitar a memorização.",
  },
  {
    icon: Gamepad2,
    title: "Jogos e Atividades",
    description: "Caça-palavras, labirintos e mais para praticar o que foi aprendido de forma interativa e divertida.",
  },
  {
    icon: Mic,
    title: "Rimas e Canções",
    description: "Rimas e músicas que ajudam a fixar os sons das letras e tornam o aprendizado um momento de alegria.",
  },
  {
    icon: Paintbrush,
    title: "Desenhos para Colorir",
    description: "Atividades de colorir relacionadas às letras e palavras para desenvolver a coordenação motora e a criatividade.",
  },
  {
    icon: Text,
    title: "Histórias Curtas",
    description: "Pequenos textos e narrativas simples que despertam o prazer pela leitura e incentivam os primeiros passos.",
  },
  {
    icon: Star,
    title: "Reforço Positivo",
    description: "Nossa metodologia celebra cada conquista, construindo a autoconfiança da criança a cada passo.",
  },
];

const testimonials = [
  {
    name: "Juliana S.",
    role: "Mãe do Lucas, 5 anos",
    quote: "Nunca vi meu filho tão empolgado para aprender! A cartilha é colorida, divertida e as atividades são perfeitas para a idade dele. Recomendo de olhos fechados!",
  },
  {
    name: "Prof.ª Carla M.",
    role: "Professora de Educação Infantil",
    quote: "Um material riquíssimo que uso com meus alunos. A abordagem lúdica realmente funciona e facilita meu trabalho em sala de aula. Os resultados são visíveis!",
  },
  {
    name: "Fernando P.",
    role: "Pai da Sofia, 4 anos",
    quote: "A Sofia pedia para 'brincar' com a cartilha todos os dias. O progresso dela foi incrível em poucas semanas. Valeu cada centavo!",
  },
];

const faqs = [
    {
        question: "Para qual idade a cartilha é recomendada?",
        answer: "A 'Cartilha de Alfabetização Lúdica' é ideal para crianças de 4 a 7 anos, que estão na fase de pré-alfabetização e alfabetização."
    },
    {
        question: "O material é digital ou físico?",
        answer: "Oferecemos a cartilha em formato PDF de alta qualidade. Você pode usar no tablet, computador ou imprimir quantas vezes quiser para usar em casa ou na escola."
    },
    {
        question: "Como receberei o produto após a compra?",
        answer: "Após a confirmação do pagamento, você receberá um e-mail com o link para baixar a cartilha em PDF instantaneamente."
    },
    {
        question: "Posso usar a cartilha na minha escola?",
        answer: "Sim! A cartilha é um excelente recurso para professores de educação infantil e pode ser usada com toda a turma."
    }
];

const sampleImages = ["/1.png", "/2.png", "/3.png"];


export default function Home() {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/yBbmCujmniq4w62ZDkEZ";

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center">
            <Logo className="h-8 w-8 mr-2" />
            <span className="font-bold font-headline">Alphabet Adventures</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
             <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              <Button>Comprar Agora</Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid lg:grid-cols-2 gap-8 items-center py-12 md:py-24">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
              A Aventura de Aprender a Ler Começa Aqui!
            </h1>
            <p className="text-lg text-muted-foreground">
              Transforme a alfabetização em uma jornada mágica e divertida. Com a nossa cartilha lúdica, seu filho(a) vai se apaixonar pelas letras e palavras.
            </p>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg">Quero a Minha Cartilha!</Button>
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="/cartilha.png"
              alt="Capa da Cartilha de Alfabetização Lúdica"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
              priority
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 bg-secondary/50">
          <div className="container">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Um Mundo de Descobertas em Cada Página</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Criamos um método completo que une diversão e pedagogia para garantir um aprendizado eficaz e sem pressão.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="p-4 bg-primary/20 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section id="samples" className="py-12 md:py-24">
            <div className="container">
                <div className="text-center space-y-2 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Espie o que tem dentro!</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Veja algumas das atividades que farão seu filho(a) se apaixonar pelo aprendizado.
                    </p>
                </div>
                <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                        {sampleImages.map((src, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                       <Image 
                                        src={src}
                                        alt={`Página de exemplo ${index + 1}`}
                                        width={400}
                                        height={400}
                                        className="rounded-lg"
                                        data-ai-hint="kids activity page alphabet"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>

        {/* AI Section */}
        <section id="ai-demo" className="py-12 md:py-24 bg-secondary/50">
          <div className="container">
            <PersonalizedLearningForm />
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24">
          <div className="container">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Quem usou, amou e recomenda!</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Veja o que pais e educadores estão dizendo sobre a nossa cartilha.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="p-6 shadow-md">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                            <span className="text-xl font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-12 md:py-24 bg-secondary/50">
          <div className="container">
            <Card className="max-w-md mx-auto text-center p-8 shadow-xl border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Acesso Imediato à Aventura!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-5xl font-bold font-headline">R$ 19,90</p>
                <p className="text-muted-foreground">Pagamento único. Acesso vitalício. Imprima quantas vezes quiser.</p>
                <ul className="text-left space-y-2">
                    <li className="flex items-center"><Star className="w-5 h-5 mr-2 text-primary"/> Material completo em PDF</li>
                    <li className="flex items-center"><Star className="w-5 h-5 mr-2 text-primary"/> Bônus: Flashcards das letras</li>
                </ul>
                 <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full text-lg">Comprar Agora e Começar a Diversão!</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 md:py-24">
            <div className="container max-w-3xl mx-auto">
                <div className="text-center space-y-2 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Dúvidas Frequentes</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
