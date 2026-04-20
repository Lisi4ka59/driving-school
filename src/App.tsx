import heroImage from './assets/driving-hero.svg'
import lessonImage from './assets/lesson-route.svg'
import { InstructorsShowcase } from './components/InstructorsShowcase'
import './App.css'

const programs = [
  {
    title: 'Старт',
    price: 'от 39 900 ₽',
    description: 'Теория онлайн, базовая практика и сопровождение до внутреннего экзамена.',
    items: ['134 часа теории', '28 часов вождения', 'Личный куратор'],
  },
  {
    title: 'Город',
    price: 'от 49 900 ₽',
    description: 'Больше практики на реальных маршрутах и разбор сложных перекрестков.',
    items: ['40 часов вождения', 'Маршруты ГИБДД', 'Гибкий график'],
    featured: true,
  },
  {
    title: 'Уверенный',
    price: 'от 59 900 ₽',
    description: 'Для тех, кто хочет спокойно сесть за руль сразу после получения прав.',
    items: ['52 часа вождения', 'Парковка и трасса', 'Подготовка к личному авто'],
  },
]

const steps = [
  {
    number: '01',
    title: 'Знакомимся',
    text: 'Выбираем инструктора, расписание и формат теории под ваш ритм.',
  },
  {
    number: '02',
    title: 'Едем',
    text: 'Начинаем с понятной площадки и быстро переходим к городским маршрутам.',
  },
  {
    number: '03',
    title: 'Закрепляем',
    text: 'Разбираем ошибки после каждой поездки и фиксируем прогресс в кабинете.',
  },
  {
    number: '04',
    title: 'Сдаем',
    text: 'Проводим пробные экзамены и сопровождаем до получения водительского удостоверения.',
  },
]

const reviews = [
  {
    name: 'Марина, 31',
    text: 'Боялась перекрестков и плотного потока. Через месяц уже спокойно ездила по центру, экзамен сдала с первого раза.',
  },
  {
    name: 'Артем, 24',
    text: 'Понравилось, что занятия не превращались в лекции. Инструктор сразу показывал, как вести себя в реальном городе.',
  },
  {
    name: 'Ольга, 42',
    text: 'Перешла из другой школы после паузы. Здесь восстановили уверенность и помогли закрыть все слабые места.',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar" aria-label="Главная навигация">
        <a className="brand" href="#top" aria-label="Автошкола Маневр">
          <span className="brand__mark">M</span>
          <span>Маневр</span>
        </a>
        <nav className="nav">
          <a href="#programs">Программы</a>
          <a href="#instructors">Инструкторы</a>
          <a href="#process">Как учим</a>
          <a href="#reviews">Отзывы</a>
          <a href="#request">Заявка</a>
        </nav>
        <a className="topbar__phone" href="tel:+73430000000">
          <span className="topbar__phone-full">+7 343 000-00-00</span>
          <span className="topbar__phone-short">Позвонить</span>
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="Автошкола Маневр">
          <img
            className="hero__image"
            src={heroImage}
            alt="Учебный автомобиль на вечерней городской дороге"
          />
          <div className="hero__shade" />
          <div className="hero__content">
            <p className="eyebrow">Категория B с нуля и после перерыва</p>
            <h1>Права без лишнего стресса</h1>
            <p className="hero__lead">
              Учитесь на понятных маршрутах, видите прогресс после каждого занятия и
              выходите на экзамен с устойчивой уверенностью за рулем.
            </p>
            <div className="hero__actions" aria-label="Основные действия">
              <a className="button button--primary" href="#request">
                Записаться на пробный урок
              </a>
              <a className="button button--ghost" href="#programs">
                Смотреть программы
              </a>
            </div>
            <div className="hero__badges" aria-label="Преимущества">
              <span>Первый выезд за 7 дней</span>
              <span>Онлайн-теория</span>
              <span>Рассрочка без переплаты</span>
            </div>
          </div>
        </section>

        <section className="proof" aria-label="Ключевые показатели">
          <div>
            <strong>4,9 из 5</strong>
            <span>средняя оценка учеников</span>
          </div>
          <div>
            <strong>78%</strong>
            <span>сдают внутренний экзамен с первого раза</span>
          </div>
          <div>
            <strong>18</strong>
            <span>инструкторов с городским стажем</span>
          </div>
          <div>
            <strong>6:30-22:00</strong>
            <span>занятия до работы и после нее</span>
          </div>
        </section>

        <section className="section intro">
          <div className="section__heading">
            <p className="eyebrow">Обучение без хаоса</p>
            <h2>Вы быстро понимаете, что получается</h2>
          </div>
          <div className="intro__grid">
            <article>
              <span>01</span>
              <h3>Маршрут под уровень</h3>
              <p>
                Новички начинают с спокойных улиц, уверенные ученики сразу
                отрабатывают плотный поток, развороты и парковку.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Инструктор объясняет спокойно</h3>
              <p>
                Каждое действие разбирается простым языком: куда смотреть,
                когда тормозить и как принимать решение.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Прогресс видно в кабинете</h3>
              <p>
                После занятия остаются заметки, домашние темы и понятный список
                навыков, которые уже закреплены.
              </p>
            </article>
          </div>
        </section>

        <section className="section programs" id="programs">
          <div className="section__heading">
            <p className="eyebrow">Программы</p>
            <h2>Выберите темп, который выдержите спокойно</h2>
          </div>
          <div className="programs__grid">
            {programs.map((program) => (
              <article
                className={`program-card${program.featured ? ' program-card--featured' : ''}`}
                key={program.title}
              >
                {program.featured && <span className="program-card__label">Чаще выбирают</span>}
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <strong>{program.price}</strong>
                <ul>
                  {program.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="button button--secondary" href="#request">
                  Оставить заявку
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section route">
          <div className="route__media">
            <img src={lessonImage} alt="Схема учебного маршрута с автомобилем" />
          </div>
          <div className="route__copy">
            <p className="eyebrow">Практика в городе</p>
            <h2>Занятия похожи на реальную поездку, а не на круги по площадке</h2>
            <p>
              Учебные маршруты включают дворы, светофоры, кольца, парковки у
              торговых центров и участки с активным потоком.
            </p>
            <ul className="check-list">
              <li>Сначала безопасные улицы, затем сложные сценарии</li>
              <li>Понятные комментарии инструктора во время движения</li>
              <li>Отдельные занятия по парковке, перестроениям и экзамену</li>
            </ul>
          </div>
        </section>

        <InstructorsShowcase />

        <section className="section process" id="process">
          <div className="section__heading">
            <p className="eyebrow">Как это проходит</p>
            <h2>Пошагово доводим до самостоятельного вождения</h2>
          </div>
          <div className="timeline">
            {steps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="section__heading">
            <p className="eyebrow">Отзывы</p>
            <h2>Ученики приходят за правами, а уходят с уверенностью</h2>
          </div>
          <div className="reviews__grid">
            {reviews.map((review) => (
              <article key={review.name}>
                <p>{review.text}</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section request" id="request">
          <div className="request__copy">
            <p className="eyebrow">Пробный урок</p>
            <h2>Подберем программу и инструктора за один звонок</h2>
            <p>
              Оставьте контакты. Администратор уточнит опыт, удобное время и
              предложит ближайшие слоты для первого занятия.
            </p>
          </div>
          <form className="request__form" aria-label="Форма заявки">
            <label>
              Имя
              <input type="text" name="name" placeholder="Как к вам обращаться" />
            </label>
            <label>
              Телефон
              <input type="tel" name="phone" placeholder="+7 ___ ___-__-__" />
            </label>
            <label>
              Опыт
              <select name="experience" defaultValue="">
                <option value="" disabled>
                  Выберите вариант
                </option>
                <option>Учусь с нуля</option>
                <option>Есть перерыв после прав</option>
                <option>Нужно подготовиться к экзамену</option>
              </select>
            </label>
            <button className="button button--primary" type="submit">
              Получить консультацию
            </button>
            <p>Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
