/**
 * Utility to download an HTML card element as a clean high-resolution PNG image
 */

export async function downloadCardAsPng(elementId: string, filename: string): Promise<boolean> {
  const element = document.getElementById(elementId);
  if (!element) {
    alert('કાર્ડ મળ્યું નથી');
    return false;
  }

  try {
    // Clone element to build SVG ForeignObject for canvas drawing
    const width = element.offsetWidth * 2;
    const height = element.offsetHeight * 2;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return false;

    // Use svg foreignObject method
    const elementClone = element.cloneNode(true) as HTMLElement;
    elementClone.style.transform = 'none';
    elementClone.style.margin = '0';
    elementClone.style.width = `${element.offsetWidth}px`;
    elementClone.style.height = `${element.offsetHeight}px`;

    // Grab all stylesheets
    let cssText = '';
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        const rules = Array.from(sheet.cssRules || []);
        for (const rule of rules) {
          cssText += rule.cssText + '\n';
        }
      } catch {
        // cross-origin stylesheets
      }
    }

    const xml = new XMLSerializer().serializeToString(elementClone);
    const dataUri =
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <style>
          ${cssText}
        </style>
        <foreignObject width="100%" height="100%" transform="scale(2)">
          <div xmlns="http://www.w3.org/1999/xhtml">
            ${xml}
          </div>
        </foreignObject>
      </svg>
    `);

    const img = new Image();
    return new Promise((resolve) => {
      img.onload = () => {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0);

        const a = document.createElement('a');
        a.download = `${filename}.png`;
        a.href = canvas.toDataURL('image/png');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        resolve(true);
      };
      img.onerror = () => {
        // Fallback: trigger print
        window.print();
        resolve(false);
      };
      img.src = dataUri;
    });
  } catch {
    // If browser blocks canvas security, fall back to print dialog
    window.print();
    return false;
  }
}
