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
    <div className="page-shell page-shell--home">
      <main className="home-stage">
        <article className="home-card">
          <div className="home-card__top">
            <span className="tag">EduTypes</span>
            <span className="home-card__progress">
              Unidad 1 - {completedLessons}/{totalLessons}
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

          <div className="home-card__actions">
            <button className="button button--primary" onClick={onOpenUnitOne}>
              {completedLessons > 0 ? 'Continuar unidad 1' : 'Empezar unidad 1'}
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}

export default HomePage;
