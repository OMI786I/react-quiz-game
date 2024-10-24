import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const TsParticleComponents = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (containter) => {
    console.log(containter);
  };

  //   const particlesInit = useCallback(async (engine) => {
  //     await loadFull(engine);
  //   }, []);

  //   const particlesLoaded = useCallback(async (container) => {
  //     await console.log(container);
  //   }, []);

  if (init) {
    return (
      <div>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              image: " linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
            },
            particles: {
              number: { value: 10, density: { enable: true, value_area: 600 } },
              color: { value: "#ffffff" },
              shape: {
                type: "square",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
              },
              opacity: {
                value: 0.25,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 29,
                random: true,
                anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
              },
              line_linked: {
                enable: false,
                distance: 300,
                color: "#ffffff",
                opacity: 0,
                width: 0,
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "top",
                straight: true,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: false, mode: "repulse" },
                onclick: { enable: false, mode: "push" },
                resize: true,
              },
              modes: {
                grab: { distance: 800, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 790,
                  size: 79,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: { distance: 400, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
    );
  }
};

export default TsParticleComponents;
