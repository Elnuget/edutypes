type CourseCatalogItem = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  progressLabel: string;
  actionLabel: string;
  totalUnits: number;
  completedUnits: number;
};

type CourseCatalogPageProps = {
  courses: CourseCatalogItem[];
  onOpenCourse: (courseId: string) => void;
};

function CourseCatalogPage({ courses, onOpenCourse }: CourseCatalogPageProps) {
  return (
    <div className="page-shell page-shell--home">
      <main className="home-stage">
        <article className="home-card home-card--catalog">
          <div className="home-card__top">
            <span className="tag">EduTypes</span>
            <span className="home-card__progress">Cursos listos para abrir</span>
          </div>

          <div className="home-card__body">
            <p className="eyebrow">Ventana principal</p>
            <h1>Elige un curso y entra directo a practicar.</h1>
            <p className="hero__description">
              Cada curso guarda su propio progreso. Empiezas aqui, eliges tema y luego avanzas por unidades cortas.
            </p>
          </div>

          <div className="home-card__meta">
            <div className="mini-pill">Una pantalla a la vez</div>
            <div className="mini-pill">Cursos separados</div>
            <div className="mini-pill">Estado persistente</div>
          </div>

          <div className="catalog-card__courses">
            {courses.map((course) => (
              <button
                key={course.id}
                className="course-link-card"
                onClick={() => onOpenCourse(course.id)}
              >
                <div className="course-link-card__top">
                  <div>
                    <span className="course-link-card__eyebrow">{course.eyebrow}</span>
                    <strong>{course.title}</strong>
                  </div>
                  <span className="course-link-card__progress">{course.progressLabel}</span>
                </div>
                <p>{course.description}</p>
                <div className="course-link-card__footer">
                  <span>
                    {course.completedUnits}/{course.totalUnits} unidades completas
                  </span>
                  <span>{course.actionLabel}</span>
                </div>
              </button>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}

export default CourseCatalogPage;
