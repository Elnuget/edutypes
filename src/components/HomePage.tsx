import { highlights, units } from '../data/course';

type HomePageProps = {
  completedLessons: number;
  totalLessons: number;
  onOpenUnitOne: () => void;
};

function HomePage({
  completedLessons,
  totalLessons,
  onOpenUnitOne,
}: HomePageProps) {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <span className="brand">EduTypes</span>
          <span className="tag">TypeScript de 0 a experto</span>
        </nav>

        <div className="hero__content">
          <div className="hero__copy">
            <p className="eyebrow">Plataforma de aprendizaje estructurado</p>
            <h1>
              Aprende TypeScript escribiendo codigo desde la primera unidad.
            </h1>
            <p className="hero__description">
              EduTypes avanza de forma secuencial. Cada unidad abre la siguiente
              habilidad, y cada leccion combina contenido breve con practica
              obligatoria para fijar criterios reales de desarrollo.
            </p>

            <div className="hero__actions">
              <button className="button button--primary" onClick={onOpenUnitOne}>
                Empezar Unidad 1
              </button>
              <a href="#units" className="button button--ghost">
                Ver mapa del curso
              </a>
            </div>
          </div>

          <aside className="hero__panel">
            <p className="panel__label">Sistema de aprendizaje</p>
            <strong>Contenido corto, practica obligatoria y avance secuencial.</strong>
            <ul>
              <li>Progreso guardado en localStorage</li>
              <li>Lecciones desbloqueadas una por una</li>
              <li>Codigo escrito a mano en cada paso</li>
              <li>Unidad 1 ya disponible</li>
            </ul>
          </aside>
        </div>
      </header>

      <main>
        <section className="promise" id="promise">
          <div className="section-heading">
            <p className="eyebrow">La promesa de EduTypes</p>
            <h2>La teoria entra rapido; la practica obliga a dominarla.</h2>
          </div>

          <div className="promise__grid">
            {highlights.map((item) => (
              <article className="promise__card" key={item}>
                <span className="promise__marker" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="featured-unit">
          <div className="section-heading">
            <p className="eyebrow">Disponible ahora</p>
            <h2>Unidad 1: fundamentos del lenguaje</h2>
          </div>

          <div className="featured-unit__card">
            <div>
              <p className="featured-unit__label">Progreso actual</p>
              <strong>
                {completedLessons}/{totalLessons} lecciones completadas
              </strong>
              <p className="featured-unit__text">
                Empiezas con variables, inferencia, funciones, objetos, arrays y
                tuplas. Todo con escritura de codigo obligatoria.
              </p>
            </div>

            <button className="button button--primary" onClick={onOpenUnitOne}>
              {completedLessons > 0 ? 'Continuar unidad' : 'Entrar a la unidad'}
            </button>
          </div>
        </section>

        <section className="curriculum" id="units">
          <div className="section-heading">
            <p className="eyebrow">Mapa del curso</p>
            <h2>Temas ordenados por unidad</h2>
          </div>

          <div className="curriculum__list">
            {units.map((unit) => {
              const isAvailable = unit.id === 'unit-01';

              return (
                <article className="unit-card" key={unit.id}>
                  <div className="unit-card__header">
                    <div className="unit-card__meta">
                      <span className="unit-card__number">Unidad {unit.number}</span>
                      <span
                        className={`unit-card__status ${
                          isAvailable ? 'unit-card__status--open' : ''
                        }`}
                      >
                        {isAvailable ? 'Activa' : 'Proximamente'}
                      </span>
                    </div>
                    <h3>{unit.title}</h3>
                    <p>{unit.focus}</p>
                  </div>

                  <ul className="unit-card__topics">
                    {unit.contents.map((content) => (
                      <li key={content}>{content}</li>
                    ))}
                  </ul>

                  <p className="unit-card__outcome">{unit.outcome}</p>

                  {isAvailable ? (
                    <button className="button button--secondary" onClick={onOpenUnitOne}>
                      Abrir unidad 1
                    </button>
                  ) : (
                    <button className="button button--disabled" disabled>
                      Aun no disponible
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
