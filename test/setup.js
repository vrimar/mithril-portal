require('jsdom-global')(undefined, { pretendToBeVisual: true });

global.requestAnimationFrame = () => { }
global.cancelAnimationFrame = () => { }
