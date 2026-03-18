import { highlights, units } from './data/course';

function App() {
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
              Aprende TypeScript con una ruta clara, progresiva y pensada para
              que al terminar realmente lo domines.
            </h1>
            <p className="hero__description">
              EduTypes organiza el aprendizaje por unidades para que cada tema
              construya el siguiente. Sin caos, sin lagunas y con enfoque total
              en convertir teoria en dominio practico.
            </p>

            <div className="hero__actions">
              <a href="#units" className="button button--primary">
                Ver unidades
              </a>
              <a href="#promise" className="button button--ghost">
                Como se aprende aqui
              </a>
            </div>
          </div>

          <aside className="hero__panel">
            <p className="panel__label">Meta del curso</p>
            <strong>
              Que el estudiante termine sabiendo TypeScript de verdad.
            </strong>
            <ul>
              <li>Base solida</li>
              <li>Tipado avanzado</li>
              <li>React con TypeScript</li>
              <li>Proyecto final experto</li>
            </ul>
          </aside>
        </div>
      </header>

      <main>
        <section className="promise" id="promise">
          <div className="section-heading">
            <p className="eyebrow">La promesa de EduTypes</p>
            <h2>Un curso que no solo explica TypeScript: lo instala como criterio.</h2>
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

        <section className="curriculum" id="units">
          <div className="section-heading">
            <p className="eyebrow">Mapa del curso</p>
            <h2>Temas ordenados por unidad</h2>
          </div>

          <div className="curriculum__list">
            {units.map((unit) => (
              <article className="unit-card" key={unit.id}>
                <div className="unit-card__header">
                  <span className="unit-card__number">Unidad {unit.number}</span>
                  <h3>{unit.title}</h3>
                  <p>{unit.focus}</p>
                </div>

                <ul className="unit-card__topics">
                  {unit.contents.map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>

                <p className="unit-card__outcome">{unit.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing">
          <div className="closing__copy">
            <p className="eyebrow">Resultado esperado</p>
            <h2>
              Al terminar, el estudiante debera poder leer, escribir, escalar y
              defender codigo TypeScript con seguridad.
            </h2>
          </div>

          <div className="closing__stats">
            <div>
              <strong>8</strong>
              <span>unidades progresivas</span>
            </div>
            <div>
              <strong>30+</strong>
              <span>bloques tematicos clave</span>
            </div>
            <div>
              <strong>1</strong>
              <span>proyecto final para validar dominio</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
