import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-4 lg:py-0">
      <div className="container mx-auto px-2">
        <div className="flex gap-3 flex-col items-start">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Стандарт ESIS</Badge>
          </div>
          <div className="flex gap-1 flex-col">
            <h2 className="text-2xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Наши услуги
            </h2>
            <p className="text-sm md:text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Комплексная уборка коммерческих помещений с особым вниманием к санитарной обработке и индивидуальным требованиям клиента.
            </p>
          </div>
          <div className="flex gap-4 pt-4 flex-col w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-start lg:grid-cols-3 gap-4 md:gap-8">
              {[
                { title: "Уборка офисов", desc: "Ежедневное и периодическое обслуживание рабочих пространств." },
                { title: "Уборка банков", desc: "Соответствие строгим санитарным требованиям финансовых учреждений." },
                { title: "Торговые помещения", desc: "Поддержание чистоты в магазинах и торговых центрах." },
                { title: "Офисы продаж", desc: "Безупречный вид для встреч с клиентами." },
                { title: "Санитарная обработка", desc: "Дезинфекция поверхностей и воздуха по европейским стандартам." },
                { title: "Долгосрочный сервис", desc: "Регулярное обслуживание по индивидуальному плану." },
              ].map((item, i) => (
                <div key={i} className="flex flex-row gap-3 items-start">
                  <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-0.5">
                    <p className="text-white font-open-sans-custom text-sm md:text-base">{item.title}</p>
                    <p className="text-gray-300 text-xs md:text-sm font-open-sans-custom">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }