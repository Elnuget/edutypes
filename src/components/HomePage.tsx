type CourseUnitCard = {
  id: string;
  label: string;
  title: string;
  focus: string;
  completedLessons: number;
  totalLessons: number;
  completed: boolean;
  unlocked: boolean;
  lockedReason: string;
};

type HomePageProps = {
  courseTitle: string;
  courseEyebrow: string;
  heroTitle: string;
  description: string;
  tags: string[];
  progressLabel: string;
  units: CourseUnitCard[];
  onBack: () => void;
  onOpenUnit: (unitId: string) => void;
};

function getUnitActionLabel(unit: CourseUnitCard) {
  if (unit.completed) {
    return `Revisar ${unit.label.toLowerCase()}`;
  }

  if (unit.completedLessons > 0) {
    return `Continuar ${unit.label.toLowerCase()}`;
  }

  return `Empezar ${unit.label.toLowerCase()}`;
}

function HomePage({
  courseTitle,
  courseEyebrow,
  heroTitle,
  description,
  tags,
  progressLabel,
  units,
  onBack,
  onOpenUnit,
}: HomePageProps) {
  const primaryUnit =
    units.find((unit) => unit.unlocked && !unit.completed) ??
    units.find((unit) => unit.unlocked) ??
    units[0];

  return (
    <div className="page-shell page-shell--home">
      <main className="home-stage">
        <article className="home-card">
          <div className="home-card__top">
            <button className="button button--ghost" onClick={onBack}>
              Cursos
            </button>
            <span className="home-card__progress">{progressLabel}</span>
          </div>

          <div className="home-card__body">
            <p className="eyebrow">{courseEyebrow}</p>
            <h1>{heroTitle}</h1>
            <p className="hero__description">{description}</p>
            <p className="home-card__course-name">{courseTitle}</p>
          </div>

          <div className="home-card__meta">
            {tags.map((tag) => (
              <div key={tag} className="mini-pill">
                {tag}
              </div>
            ))}
          </div>

          <div className="home-card__units">
            {units.map((unit) => (
              <button
                key={unit.id}
                className={`unit-card ${!unit.unlocked ? 'unit-card--locked' : ''}`}
                disabled={!unit.unlocked}
                onClick={() => onOpenUnit(unit.id)}
              >
                <strong>
                  {unit.label}: {unit.title}
                </strong>
                <span>
                  {unit.unlocked
                    ? unit.completed
                      ? 'Completada'
                      : `${unit.completedLessons}/${unit.totalLessons} lecciones`
                    : unit.lockedReason}
                </span>
                <small>{unit.focus}</small>
              </button>
            ))}
          </div>

          {primaryUnit ? (
            <div className="home-card__actions">
              {units.filter((unit) => unit.unlocked).map((unit) => (
                <button
                  key={unit.id}
                  className={`button ${primaryUnit.id === unit.id ? 'button--primary' : 'button--secondary'}`}
                  onClick={() => onOpenUnit(unit.id)}
                >
                  {getUnitActionLabel(unit)}
                </button>
              ))}
            </div>
          ) : null}
        </article>
      </main>
    </div>
  );
}

export default HomePage;
