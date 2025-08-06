import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Кредитование бизнеса",
      description: "Подбираем оптимальные кредитные продукты для развития вашего бизнеса",
      icon: "CreditCard",
      features: ["Быстрое рассмотрение", "Выгодные условия", "Индивидуальный подход"]
    },
    {
      title: "Маркетинговые услуги",
      description: "Комплексное продвижение и развитие бизнеса в цифровой среде",
      icon: "TrendingUp",
      features: ["Digital-стратегия", "Реклама и PR", "Аналитика результатов"]
    },
    {
      title: "Кадровое агентство",
      description: "Подбор квалифицированных сотрудников для вашей компании",
      icon: "Users",
      features: ["Скрининг кандидатов", "Быстрый подбор", "Гарантия качества"]
    },
    {
      title: "Банковские продукты",
      description: "Консультации по банковским услугам и продуктам для бизнеса",
      icon: "Building",
      features: ["Расчетные счета", "Эквайринг", "Валютные операции"]
    }
  ];

  const advantages = [
    {
      title: "Бесплатно для клиентов",
      description: "Мы получаем вознаграждение от партнеров, поэтому наши услуги бесплатны для вас",
      icon: "Gift"
    },
    {
      title: "Экономия времени",
      description: "Мы берем на себя поиск оптимальных предложений среди наших партнеров",
      icon: "Clock"
    },
    {
      title: "Персональный подход",
      description: "Индивидуальное решение под специфику и потребности вашего бизнеса",
      icon: "Target"
    },
    {
      title: "Проверенные партнеры",
      description: "Работаем только с надежными компаниями с безупречной репутацией",
      icon: "Shield"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Briefcase" size={32} className="text-primary" />
              <h2 className="text-2xl font-bold text-foreground">БизнесКонсалт</h2>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors">Преимущества</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О компании</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Консалтинговые услуги
              <span className="text-primary block mt-2">для вашего бизнеса</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Мы помогаем предпринимателям найти оптимальные решения в сфере кредитования, 
              маркетинга, подбора персонала и банковских услуг. Наши услуги абсолютно бесплатны для клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексная поддержка бизнеса по всем направлениям развития
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Почему предприниматели выбирают именно нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group animate-fade-in">
                <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">О компании</h2>
              <p className="text-xl text-muted-foreground">
                Партнерская модель работы — выгода для всех участников
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Как мы работаем</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</div>
                      <p className="text-muted-foreground">Вы обращаетесь к нам с запросом</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</div>
                      <p className="text-muted-foreground">Обсуждаем ваши потребности и условия</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</div>
                      <p className="text-muted-foreground">Подаем заявки нашим проверенным партнерам</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">4</div>
                      <p className="text-muted-foreground">Предоставляем вам лучшие одобренные предложения</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">5</div>
                      <p className="text-muted-foreground">Передаем вас напрямую выбранному партнеру</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Handshake" size={24} className="text-primary mr-3" />
                      Партнерская модель
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мы получаем агентское вознаграждение от наших партнеров за каждого приведенного клиента. 
                      Это позволяет нам оказывать услуги абсолютно бесплатно для предпринимателей.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Award" size={24} className="text-primary mr-3" />
                      Гарантия качества
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Работаем только с проверенными компаниями с безупречной репутацией. 
                      Ваш успех — наш успех, поэтому мы заинтересованы в долгосрочных отношениях.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать сотрудничество?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Получите персональную консультацию и узнайте, как мы можем помочь развитию вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Бесплатная консультация
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (000) 000-00-00
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Briefcase" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">БизнесКонсалт</h3>
              </div>
              <p className="text-secondary-foreground/80">
                Консалтинговые услуги для развития вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Кредитование бизнеса</li>
                <li>Маркетинговые услуги</li>
                <li>Кадровое агентство</li>
                <li>Банковские продукты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>О нас</li>
                <li>Наши партнеры</li>
                <li>Преимущества</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (000) 000-00-00
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@biznesconsult.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 БизнесКонсалт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;