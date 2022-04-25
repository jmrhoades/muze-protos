import {
    animate,
    generatePhysics,
    getRandomInt,
  } from '../helpers';
  
    const factors = [-0.6, -0.3, 0, 0.3, 0.6];
  
  const createElements = (
    root,
    elementCount,
    elementSize,
    zIndex,
    position,
    imageSrc,
  ) =>
    Array.from({ length: elementCount }).map((_, index) => {

      const size =  getRandomInt(elementSize/2, elementSize*2);
      
      //const element = document.createElement('span');
      //element.style['background-color'] = colors[index % colors.length];
      const element = document.createElement('img');
      element.src = imageSrc;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.position = position;
      element.style.zIndex = `${zIndex}`;
      root.appendChild(element);
      return { element, differentiator: getRandomInt(0, factors.length) };
    });
  
  const updateParticle = (
    particle,
    progress,
    decay
  ) => {
    const {
      x,
      y,
      tiltAngle,
      wobble,
      angle2D,
      angle3D,
      velocity,
      differentiator,
    } = particle.physics;
  
    particle.physics.x += Math.cos(angle2D) * velocity;
    particle.physics.y += Math.sin(angle2D) * velocity;
    particle.physics.z += Math.sin(angle3D) * velocity;
    particle.physics.wobble += 0.05;
    particle.physics.velocity *= decay;
    particle.physics.y += 3.5;
    particle.physics.tiltAngle += 0.15;
  
    const wobbleX =
      x +
      (factors[differentiator] * progress * wobble * wobble +
        20 * (differentiator % 2 ? Math.sin(wobble / 4) : Math.cos(wobble / 4)));
  
    const wobbleY = y + 5 * Math.sin(wobble);
  
    particle.element.style.transform = `translate3d(${wobbleX}px, ${wobbleY}px, 0) rotate3d(1, 1, 1, ${
      differentiator % 2 ? tiltAngle : -1 * tiltAngle
    }rad)`;
    particle.element.style.scale = `${1 - 0.2 * progress}`;
  
    if (progress > 0.5) {
      particle.element.style.opacity = `${2 - 2 * progress}`;
    }
  };
  
  export const stickers = (
    root,
    config,
  ) => {
    const options = config || {};
    const {
      elementCount = 24,
      elementSize = 96,
      angle = 90,
      spread = 60,
      decay = 0.94,
      lifetime = 200,
      startVelocity = 35,
      zIndex = 0,
      position = 'absolute',
      onAnimationComplete,
      image = "/stickers/sticker-06.png",
    } = options;
    const spanElements = createElements(
      root,
      elementCount,
      elementSize,
      zIndex,
      position,
      image,
    );
    const particles = spanElements.map(({ element, differentiator }) => ({
      element,
      physics: generatePhysics(angle, spread, startVelocity, differentiator),
    }));
  
    const onFinish = () => {
      if (typeof onAnimationComplete === 'function') {
        onAnimationComplete();
      }
    };
  
    animate({
      root,
      particles,
      decay,
      lifetime,
      updateParticle,
      onFinish,
    });
  };
  