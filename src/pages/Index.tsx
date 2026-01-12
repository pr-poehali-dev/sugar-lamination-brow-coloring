import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    master: '',
    date: '',
    comment: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', service: '', master: '', date: '', comment: '' });
  };

  const services = [
    {
      title: 'Шугаринг',
      description: 'Безболезненная депиляция натуральной сахарной пастой. Гладкая кожа на 3-4 недели.',
      icon: 'Sparkles',
      price: 'от 800₽'
    },
    {
      title: 'Ламинирование бровей',
      description: 'Длительная укладка и питание бровей. Эффект до 6 недель.',
      icon: 'Eye',
      price: 'от 1500₽'
    },
    {
      title: 'Окрашивание бровей',
      description: 'Стойкое окрашивание профессиональными красителями. Натуральный результат.',
      icon: 'Palette',
      price: 'от 600₽'
    }
  ];

  const portfolio = [
    { id: 1, alt: 'Результат шугаринга', img: 'https://cdn.poehali.dev/projects/9e77f81b-05dc-4be3-a865-d5663c3eefef/files/d562fc49-7b49-47d7-9d52-52746ce4c295.jpg' },
    { id: 2, alt: 'Ламинирование бровей до и после', img: 'https://cdn.poehali.dev/projects/9e77f81b-05dc-4be3-a865-d5663c3eefef/files/5d555535-cfb0-4a37-aa1b-351766625635.jpg' },
    { id: 3, alt: 'Окрашивание бровей', img: 'https://cdn.poehali.dev/projects/9e77f81b-05dc-4be3-a865-d5663c3eefef/files/5d555535-cfb0-4a37-aa1b-351766625635.jpg' },
    { id: 4, alt: 'Интерьер салона', img: 'https://cdn.poehali.dev/projects/9e77f81b-05dc-4be3-a865-d5663c3eefef/files/5e0ef383-690d-40c9-9059-7a65a87d0bce.jpg' }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Потрясающий результат! Брови выглядят естественно и ухоженно. Мастер профессионал своего дела.',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      text: 'Делаю шугаринг уже полгода. Быстро, качественно и практически безболезненно. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена Смирнова',
      text: 'Ламинирование бровей превзошло все ожидания! Теперь не нужно тратить время на укладку каждое утро.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent via-background to-secondary">
      <section id="hero" className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-serif">
              Красота в каждой детали
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональный уход за вашей красотой. Шугаринг, ламинирование и окрашивание бровей в уютной атмосфере
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на процедуру
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 font-serif">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <p className="text-xl font-semibold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item) => (
              <div 
                key={item.id} 
                className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={item.img} 
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg bg-card/80 backdrop-blur animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                  <p className="font-semibold text-foreground">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif">Онлайн-запись</h2>
          <p className="text-center text-muted-foreground mb-12">Выберите услугу и удобное время</p>
          
          <Card className="border-none shadow-2xl bg-card/90 backdrop-blur">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 rounded-xl border-border/50"
                    placeholder="Анна"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 rounded-xl border-border/50"
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-base">Услуга</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="mt-2 rounded-xl border-border/50">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sugaring">Шугаринг</SelectItem>
                      <SelectItem value="lamination">Ламинирование бровей</SelectItem>
                      <SelectItem value="coloring">Окрашивание бровей</SelectItem>
                      <SelectItem value="complex">Комплекс услуг</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="master" className="text-base">Мастер</Label>
                  <Select value={formData.master} onValueChange={(value) => setFormData({ ...formData, master: value })}>
                    <SelectTrigger className="mt-2 rounded-xl border-border/50">
                      <SelectValue placeholder="Выберите мастера" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Любой мастер</SelectItem>
                      <SelectItem value="elena">Елена</SelectItem>
                      <SelectItem value="maria">Мария</SelectItem>
                      <SelectItem value="anna">Анна</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date" className="text-base">Желаемая дата и время</Label>
                  <Input
                    id="date"
                    type="datetime-local"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="mt-2 rounded-xl border-border/50"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="comment" className="text-base">Комментарий</Label>
                  <Textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="mt-2 rounded-xl border-border/50"
                    placeholder="Дополнительные пожелания..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="border-none shadow-lg bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Время работы</h3>
                <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground/5">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">© 2024 Салон красоты. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}