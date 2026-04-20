import { useEffect, useRef, useState } from 'react'
import renaultSanderoPhoto from '../assets/cars/renault-sandero.jpg'
import renaultSanderoStreetPhoto from '../assets/cars/renault-sandero-blue.jpg'
import volkswagenPoloPhoto from '../assets/cars/volkswagen-polo.jpg'
import alexeyPhoto from '../assets/instructors/instructor-alexey.jpg'
import dmitryPhoto from '../assets/instructors/instructor-dmitry.jpg'
import elenaPhoto from '../assets/instructors/instructor-elena.jpg'
import './InstructorsShowcase.css'

type Instructor = {
  id: string
  name: string
  experience: string
  car: string
  carImage: string
  carImagePosition: string
  photo: string
  photoPosition: string
  note: string
  skills: string[]
}

const instructors: Instructor[] = [
  {
    id: 'alexey',
    name: 'Алексей Кузнецов',
    experience: '12 лет за рулем, 7 лет инструктором',
    car: 'Volkswagen Polo',
    carImage: volkswagenPoloPhoto,
    carImagePosition: '50% 54%',
    photo: alexeyPhoto,
    photoPosition: '50% 42%',
    note: 'Спокойно ставит базу: посадка, зеркала, плавный старт и первые городские маршруты без давления.',
    skills: ['Первые занятия', 'МКПП', 'Экзаменационные маршруты'],
  },
  {
    id: 'elena',
    name: 'Елена Морозова',
    experience: '10 лет городского стажа',
    car: 'Renault Sandero',
    carImage: renaultSanderoPhoto,
    carImagePosition: '50% 50%',
    photo: elenaPhoto,
    photoPosition: '22% 48%',
    note: 'Помогает убрать страх плотного потока, перестроений и парковки у торговых центров.',
    skills: ['Парковка', 'Плотный поток', 'АКПП'],
  },
  {
    id: 'dmitry',
    name: 'Дмитрий Орлов',
    experience: '9 лет обучения взрослых водителей',
    car: 'Renault Sandero',
    carImage: renaultSanderoStreetPhoto,
    carImagePosition: '50% 48%',
    photo: dmitryPhoto,
    photoPosition: '52% 34%',
    note: 'Доводит до уверенного экзамена: развороты, сложные перекрестки и принятие решений в движении.',
    skills: ['Экзамен', 'Сложные перекрестки', 'Восстановление навыков'],
  },
]

export function InstructorsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef<Array<HTMLElement | null>>([])
  const activeInstructor = instructors[activeIndex]

  useEffect(() => {
    const items = itemRefs.current.filter((item): item is HTMLElement => item !== null)

    if (!('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visibleEntry) {
          return
        }

        const index = Number((visibleEntry.target as HTMLElement).dataset.instructorIndex)
        setActiveIndex(index)
      },
      {
        rootMargin: '-32% 0px -42% 0px',
        threshold: [0.25, 0.5, 0.75],
      },
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section instructors" id="instructors">
      <div className="section__heading">
        <p className="eyebrow">Инструкторы</p>
        <h2>Выберите человека и машину, с которыми будет спокойно учиться</h2>
      </div>

      <div className="instructors__layout">
        <aside className="instructors__stage" aria-live="polite">
          <div className="instructors__car-wrap" key={`${activeInstructor.id}-car`}>
            <img
              className="instructor-car-photo"
              src={activeInstructor.carImage}
              alt={activeInstructor.car}
              style={{ objectPosition: activeInstructor.carImagePosition }}
            />
            <span>{activeInstructor.car}</span>
          </div>
          <div className="instructors__person" key={`${activeInstructor.id}-person`}>
            <img
              src={activeInstructor.photo}
              alt={activeInstructor.name}
              style={{ objectPosition: activeInstructor.photoPosition }}
            />
            <div>
              <span>{activeInstructor.car}</span>
              <strong>{activeInstructor.name}</strong>
            </div>
          </div>
        </aside>

        <div className="instructors__list">
          {instructors.map((instructor, index) => (
            <article
              className={`instructor-card${index === activeIndex ? ' instructor-card--active' : ''}`}
              data-instructor-index={index}
              key={instructor.id}
              ref={(element) => {
                itemRefs.current[index] = element
              }}
            >
              <span className="instructor-card__count">0{index + 1}</span>
              <h3>{instructor.name}</h3>
              <p>{instructor.experience}</p>
              <strong>{instructor.car}</strong>
              <p>{instructor.note}</p>
              <ul>
                {instructor.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
