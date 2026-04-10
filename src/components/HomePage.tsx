import { useEffect, useState } from 'react';

type CourseUnitCard = {
  id: string;
  label: string;
  title: string;
  focus: string;
  contentsPreview: string[];
  completedLessons: number;
  totalLessons: number;
  completed: boolean;
  unlocked: boolean;
  lockedReason: string;
};

type HomePageProps = {
  courseId: string;
  courseTitle: string;
  courseEyebrow: string;
  heroTitle: string;
  description: string;
  tags: string[];
  progressLabel: string;
  units: CourseUnitCard[];
  certificate?: {
    storageKey: string;
    institutionName: string;
    issuerName: string;
    issuerRole: string;
    onDownload: (studentName: string) => Promise<void>;
  };
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
  courseId,
  courseTitle,
  courseEyebrow,
  heroTitle,
  description,
  tags,
  progressLabel,
  units,
  certificate,
  onBack,
  onOpenUnit,
}: HomePageProps) {
  const [certificateName, setCertificateName] = useState('');
  const [certificateError, setCertificateError] = useState<string | null>(null);
  const [certificateSuccess, setCertificateSuccess] = useState<string | null>(null);
  const [isGeneratingCertificate, setIsGeneratingCertificate] = useState(false);
  const primaryUnit =
    units.find((unit) => unit.unlocked && !unit.completed) ??
    units.find((unit) => unit.unlocked) ??
    units[0];

  useEffect(() => {
    if (!certificate) {
      return;
    }

    const savedName = window.localStorage.getItem(certificate.storageKey) ?? '';
    setCertificateName(savedName);
  }, [certificate, courseId]);

  useEffect(() => {
    if (!certificate) {
      return;
    }

    window.localStorage.setItem(certificate.storageKey, certificateName);
  }, [certificate, certificateName]);

  const handleDownloadCertificate = async () => {
    const trimmedName = certificateName.trim();

    if (!certificate) {
      return;
    }

    if (trimmedName.length < 3) {
      setCertificateSuccess(null);
      setCertificateError('Escribe tu nombre antes de descargar el certificado.');
      return;
    }

    setIsGeneratingCertificate(true);
    setCertificateError(null);

    try {
      await certificate.onDownload(trimmedName);
      setCertificateSuccess('Tu certificado ya se descargo.');
    } catch {
      setCertificateSuccess(null);
      setCertificateError('No pude generar el certificado en este intento.');
    } finally {
      setIsGeneratingCertificate(false);
    }
  };

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
                <div className="unit-card__topics">
                  {unit.contentsPreview.map((item) => (
                    <span key={`${unit.id}-${item}`} className="unit-card__topic-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {certificate ? (
            <section className="certificate-card">
              <div className="certificate-card__header">
                <div>
                  <p className="eyebrow">Certificado</p>
                  <h2>Descarga tu certificado de finalizacion</h2>
                </div>
                <span className="mini-pill">UDLA</span>
              </div>

              <p className="hero__description">
                Si quieres, puedes completar la unidad. Pero el certificado ya esta disponible
                desde aqui. La {certificate.institutionName} lo emite a tu nombre y es concedido
                por la {certificate.issuerRole} {certificate.issuerName}.
              </p>

              <label className="certificate-card__field">
                <span>Nombre para el certificado</span>
                <input
                  className="certificate-card__input"
                  value={certificateName}
                  onChange={(event) => {
                    setCertificateError(null);
                    setCertificateSuccess(null);
                    setCertificateName(event.target.value);
                  }}
                  placeholder="Escribe tu nombre completo"
                />
              </label>

              {certificateError ? (
                <p className="feedback feedback--error">{certificateError}</p>
              ) : null}

              {certificateSuccess ? (
                <p className="feedback">{certificateSuccess}</p>
              ) : null}

              <button
                className="button button--primary"
                disabled={isGeneratingCertificate}
                onClick={() => {
                  void handleDownloadCertificate();
                }}
              >
                {isGeneratingCertificate ? 'Generando certificado...' : 'Descargar certificado'}
              </button>
            </section>
          ) : null}

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
