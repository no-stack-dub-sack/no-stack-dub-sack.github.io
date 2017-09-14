import { keyframes } from 'styled-components';

export const absoluteCenter = (useMargins = false) => (
  `
    left: 50%;
    position: absolute;
    top: 50%;
    transform: ${!useMargins ? 'translate(-50%, -50%)' : ''};
  `
);

export const flexCenter = () => (
  `
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `
);

export const fadeOutFadeIn = keyframes`
  0% {
    opacity: 0.01;
  }

  100% {
    opacity: 1;
  }
`;

export const fadeOutFadeIn2 = keyframes`
  from {
    opacity: 0.01;
  }

  to {
    opacity: 1;
  }
`;

export const carouselReactTransitions = () => (
  `
    .fromRight-enter {
      left: -100%;
      position: absolute;
      top: 0;
    }

    .fromRight-enter.fromRight-enter-active {
      left: 0;
      position: absolute;
      top: 0;
      transition: left 600ms ease-in;
      z-index: 2;
    }

    .fromRight-leave {
      opacity: 1;
      position: absolute;
      top: 0;
    }

    .fromRight-leave.fromRight-leave-active {
      opacity: 1;
      position: absolute;
      top: 0;
    }

    .fromLeft-enter {
      opacity: 1;
      position: absolute;
      top: 0;
    }

    .fromLeft-enter.fromLeft-enter-active {
      opacity: 1;
      position: absolute;
      top: 0;
    }

    .fromLeft-leave {
      position: absolute;
      left: 0;
      top: 0;
    }

    .fromLeft-leave.fromLeft-leave-active {
      left: -100%;
      position: absolute;
      top: 0;
      transition: left 600ms ease-in;
    }
  `
);
