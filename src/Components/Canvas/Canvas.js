import React, { useEffect, useRef } from "react";
import { ContainerCanvas } from "./CanvasContainer";

const Canvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    // get mouse positions

    let mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 90) * (canvas.width / 90),
    };

    window.addEventListener("mousedown", () => {
      window.addEventListener("mousemove", coordinatesXY);
    });

    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", coordinatesXY);
      mouse.x = undefined;
      mouse.y = undefined;
    });

    function coordinatesXY(e) {
      mouse.x = e.x;
      mouse.y = e.y;
    }

    // create Paticle

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.y = y;
        this.x = x;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      // method to draw a individual particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "rgba(100, 255, 218, 0.4)";
        ctx.fill();
      }
      // check particle position, check mouse position, move the particle, draw the particle
      update() {
        // check if particle is still winthin canvas
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // check collision detection - mouse position / particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10;
          }

          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }

          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }

          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
        }

        // move particle
        this.x += this.directionX;
        this.y += this.directionY;
        // draw particle
        this.draw();
      }
    }

    // create particle array

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles * 1.5; i++) {
        let size = Math.random() * 5 + 1;
        let x =
          Math.random() * (window.innerWidth - size * 2 - size * 2 + size * 2);
        let y =
          Math.random() * (window.innerHeight - size * 2 - size * 2 + size * 2);
        let directionX = Math.random() * 5 - 2.5;
        let directionY = Math.random() * 5 - 2.5;
        let color = "#64ffda";

        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // check if particles are close enought to draw a line between them
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = `rgba(100, 255, 218, ${opacityValue - 0.6})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = (canvas.height / 90) * (canvas.width / 90);
    });

    window.addEventListener("mouseout", () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    init();
    animate();

    let array1 = ["a", "b", "c", "d", "e", "f", "g"];

    for (let i = 0; i < array1.length; i++) {
      for (let a = i; a < array1.length; a++) {}
    }
  }, []);

  return <ContainerCanvas ref={canvasRef}></ContainerCanvas>;
};

export default Canvas;
