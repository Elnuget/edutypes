import { useEffect, useState } from 'react';

type CourseCatalogItem = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  progressLabel: string;
  actionLabel: string;
  totalUnits: number;
  completedUnits: number;
  certificate?: {
    storageKey: string;
    institutionName: string;
    issuerName: string;
    issuerRole: string;
    onDownload: (studentName: string) => Promise<void>;
  };
};

type CourseCatalogPageProps = {
  courses: CourseCatalogItem[];
  onOpenCourse: (courseId: string) => void;
};

function CourseCatalogPage({ courses, onOpenCourse }: CourseCatalogPageProps) {
  const [certificateNames, setCertificateNames] = useState<Record<string, string>>({});
  const [certificateBusyId, setCertificateBusyId] = useState<string | null>(null);
  const [certificateErrorId, setCertificateErrorId] = useState<string | null>(null);
  const [certificateSuccessId, setCertificateSuccessId] = useState<string | null>(null);

  useEffect(() => {
    const nextNames = Object.fromEntries(
      courses
        .filter((course) => course.certificate)
        .map((course) => [
          course.id,
          window.localStorage.getItem(course.certificate?.storageKey ?? '') ?? '',
        ]),
    );

    setCertificateNames(nextNames);
  }, [courses]);

  const handleDownloadCertificate = async (course: CourseCatalogItem) => {
    if (!course.certificate) {
      return;
    }

    const studentName = (certificateNames[course.id] ?? '').trim();

    if (studentName.length < 3) {
      setCertificateSuccessId(null);
      setCertificateErrorId(course.id);
      return;
    }

    setCertificateBusyId(course.id);
    setCertificateErrorId(null);

    try {
      window.localStorage.setItem(course.certificate.storageKey, studentName);
      await course.certificate.onDownload(studentName);
      setCertificateSuccessId(course.id);
    } catch {
      setCertificateSuccessId(null);
      setCertificateErrorId(course.id);
    } finally {
      setCertificateBusyId(null);
    }
  };

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
              <article key={course.id} className="course-link-card">
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
                  <span>{course.certificate ? 'Certificado disponible' : course.actionLabel}</span>
                </div>

                {course.certificate ? (
                  <div className="course-link-card__certificate">
                    <label className="certificate-inline-field">
                      <span>Nombre para el certificado</span>
                      <input
                        className="certificate-inline-field__input"
                        value={certificateNames[course.id] ?? ''}
                        onChange={(event) => {
                          const value = event.target.value;
                          setCertificateErrorId(null);
                          setCertificateSuccessId(null);
                          setCertificateNames((current) => ({
                            ...current,
                            [course.id]: value,
                          }));
                        }}
                        placeholder="Escribe tu nombre completo"
                      />
                    </label>

                    {certificateErrorId === course.id ? (
                      <p className="feedback feedback--error">
                        Escribe tu nombre antes de descargar el certificado.
                      </p>
                    ) : null}

                    {certificateSuccessId === course.id ? (
                      <p className="feedback">Tu certificado ya se descargo.</p>
                    ) : null}

                    <div className="course-link-card__actions">
                      <button
                        className="button button--secondary"
                        onClick={() => onOpenCourse(course.id)}
                      >
                        Abrir curso
                      </button>
                      <button
                        className="button button--primary"
                        disabled={certificateBusyId === course.id}
                        onClick={() => {
                          void handleDownloadCertificate(course);
                        }}
                      >
                        {certificateBusyId === course.id
                          ? 'Generando...'
                          : 'Descargar certificado'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="course-link-card__actions">
                    <button
                      className="button button--primary"
                      onClick={() => onOpenCourse(course.id)}
                    >
                      {course.actionLabel}
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}

export default CourseCatalogPage;
