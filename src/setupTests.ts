// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom/extend-expect';
import "jest-styled-components";

global.matchMedia =
  global.matchMedia ||
  function (): unknown {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

global.scrollTo = jest.fn();

Math.random = function (): number {
  return 0;
};

export function setMatched(matched: boolean): void {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: matched,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      };
    });
  }
  