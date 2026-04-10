export type CourseCertificateOptions = {
  studentName: string;
  courseTitle: string;
  unitTitle: string;
  institutionName: string;
  issuerName: string;
  issuerRole: string;
  logoSrc?: string;
};

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('No pude cargar el logo.'));
    image.src = src;
  });
}

function wrapText(
  context: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
) {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const nextLine = currentLine.length === 0 ? word : `${currentLine} ${word}`;

    if (context.measureText(nextLine).width <= maxWidth) {
      currentLine = nextLine;
      continue;
    }

    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    currentLine = word;
  }

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return lines;
}

function drawCenteredParagraph(
  context: CanvasRenderingContext2D,
  text: string,
  startY: number,
  maxWidth: number,
  lineHeight: number,
) {
  const lines = wrapText(context, text, maxWidth);

  lines.forEach((line, index) => {
    context.fillText(line, 800, startY + index * lineHeight);
  });

  return startY + lines.length * lineHeight;
}

export async function downloadCourseCertificate({
  studentName,
  courseTitle,
  unitTitle,
  institutionName,
  issuerName,
  issuerRole,
  logoSrc,
}: CourseCertificateOptions) {
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 1100;

  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('No pude preparar el certificado.');
  }

  context.fillStyle = '#fbf7f1';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.strokeStyle = '#8d1f2d';
  context.lineWidth = 8;
  context.strokeRect(48, 48, canvas.width - 96, canvas.height - 96);

  context.strokeStyle = '#d9c7b0';
  context.lineWidth = 2;
  context.strokeRect(78, 78, canvas.width - 156, canvas.height - 156);

  if (logoSrc) {
    try {
      const logo = await loadImage(logoSrc);
      const logoSize = 150;
      context.drawImage(logo, 725, 95, logoSize, logoSize);
    } catch {
      // Si el logo falla, el certificado sigue saliendo con la marca tipografica.
    }
  }

  context.textAlign = 'center';
  context.fillStyle = '#8d1f2d';
  context.font = '700 26px "Georgia", serif';
  context.fillText(institutionName, 800, 290);

  context.fillStyle = '#17202b';
  context.font = '700 56px "Georgia", serif';
  context.fillText('Certificado de Finalizacion', 800, 360);

  context.font = '400 28px "Georgia", serif';
  context.fillStyle = '#4e5968';
  context.fillText('Se certifica que', 800, 420);

  context.fillStyle = '#17202b';
  context.font = '700 60px "Georgia", serif';
  context.fillText(studentName, 800, 510);

  context.font = '400 28px "Georgia", serif';
  context.fillStyle = '#243346';
  let nextY = drawCenteredParagraph(
    context,
    `ha completado satisfactoriamente la ${unitTitle} del curso ${courseTitle}.`,
    585,
    980,
    42,
  );

  nextY = drawCenteredParagraph(
    context,
    `Este reconocimiento es otorgado por la ${institutionName} y concedido por la ${issuerRole} ${issuerName}.`,
    nextY + 18,
    980,
    40,
  );

  context.strokeStyle = '#c6ae92';
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(520, 900);
  context.lineTo(1080, 900);
  context.stroke();

  context.fillStyle = '#17202b';
  context.font = '700 28px "Georgia", serif';
  context.fillText(issuerName, 800, 945);

  context.fillStyle = '#4e5968';
  context.font = '400 22px "Georgia", serif';
  context.fillText(`${issuerRole} | ${institutionName}`, 800, 980);
  context.fillText(`Emitido el ${new Date().toLocaleDateString('es-EC')}`, 800, 1020);

  const link = document.createElement('a');
  const safeName = studentName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  link.download = `certificado-${safeName || 'estudiante'}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
