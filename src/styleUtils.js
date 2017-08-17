export const absoluteCenter = (useMargins = false) => (
  `
    left: 50%;
    position: absolute;
    top: 50%;
    transform: ${!useMargins ? 'translate(-50%, -50%)' : ''};
  `
);
