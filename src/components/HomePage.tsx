type HomePageProps = {
  unitOneCompletedLessons: number;
  unitOneTotalLessons: number;
  unitOneCompleted: boolean;
  unitTwoCompletedLessons: number;
  unitTwoTotalLessons: number;
  unitTwoUnlocked: boolean;
  onOpenUnitOne: () => void;
  onOpenUnitTwo: () => void;
};

function HomePage({
  unitOneCompletedLessons,
  unitOneTotalLessons,
  unitOneCompleted,
  unitTwoCompletedLessons,
  unitTwoTotalLessons,
  unitTwoUnlocked,
  onOpenUnitOne,
  onOpenUnitTwo,
}: HomePageProps) {
  return (
    <div className="page-shell page-shell--home">
      <main className="home-stage">
        <article className="home-card">
          <div className="home-card__top">
            <span className="tag">EduTypes</span>
            <span className="home-card__progress">
              {unitOneCompleted ? 'Unidad 1 completa' : `Unidad 1 - ${unitOneCompletedLessons}/${unitOneTotalLessons}`}
            </span>
          </div>

          <div className="home-card__body">
            <p className="eyebrow">Aprender rapido</p>
            <h1>Lee poco. Escribe codigo. Avanza a la derecha.</h1>
            <p className="hero__description">
              Todo queda guardado para que entres, practiques unos minutos y sigas luego.
            </p>
          </div>

          <div className="home-card__meta">
            <div className="mini-pill">Sin pegar codigo</div>
            <div className="mini-pill">Progreso guardado</div>
            <div className="mini-pill">Bloques cortos</div>
          </div>

          <div className="home-card__units">
            <button className="unit-card" onClick={onOpenUnitOne}>
              <strong>Unidad 1</strong>
              <span>{unitOneCompleted ? 'Completada' : `${unitOneCompletedLessons}/${unitOneTotalLessons} lecciones`}</span>
            </button>

            <button
              className={`unit-card ${!unitTwoUnlocked ? 'unit-card--locked' : ''}`}
              disabled={!unitTwoUnlocked}
              onClick={onOpenUnitTwo}
            >
              <strong>Unidad 2</strong>
              <span>
                {unitTwoUnlocked
                  ? `${unitTwoCompletedLessons}/${unitTwoTotalLessons} lecciones`
                  : 'Se desbloquea al completar la Unidad 1'}
              </span>
            </button>
          </div>

          <div className="home-card__actions">
            <button className="button button--primary" onClick={onOpenUnitOne}>
              {unitOneCompleted ? 'Revisar unidad 1' : unitOneCompletedLessons > 0 ? 'Continuar unidad 1' : 'Empezar unidad 1'}
            </button>
            {unitTwoUnlocked ? (
              <button className="button button--secondary" onClick={onOpenUnitTwo}>
                {unitTwoCompletedLessons > 0 ? 'Continuar unidad 2' : 'Empezar unidad 2'}
              </button>
            ) : null}
          </div>
        </article>
      </main>
    </div>
  );
}

export default HomePage;
