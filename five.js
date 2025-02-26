let W = window.innerWidth;
      let H = window.innerHeight;
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");
      const maxConfettis = 150;
      const particles = [];

      const possibleColors = [
        "DodgerBlue",
        "OliveDrab",
        "Gold",
        "Pink",
        "SlateBlue",
        "LightBlue",
        "Gold",
        "Violet",
        "PaleGreen",
        "SteelBlue",
        "SandyBrown",
        "Chocolate",
        "Crimson",
      ];

      function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
      }

      function confettiParticle() {
        this.x = Math.random() * W; // x
        this.y = Math.random() * H - H; // y
        this.r = randomFromTo(11, 33); // radius
        this.d = Math.random() * maxConfettis + 11;
        this.color =
          possibleColors[Math.floor(Math.random() * possibleColors.length)];
        this.tilt = Math.floor(Math.random() * 33) - 11;
        this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
        this.tiltAngle = 0;

        this.draw = function () {
          context.beginPath();
          context.lineWidth = this.r / 2;
          context.strokeStyle = this.color;
          context.moveTo(this.x + this.tilt + this.r / 3, this.y);
          context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
          return context.stroke();
        };
      }

      function Draw() {
        const results = [];
        requestAnimationFrame(Draw);
        context.clearRect(0, 0, W, window.innerHeight);

        for (var i = 0; i < maxConfettis; i++) {
          results.push(particles[i].draw());
        }

        let particle = {};
        for (var i = 0; i < maxConfettis; i++) {
          particle = particles[i];

          particle.tiltAngle += particle.tiltAngleIncremental;
          particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
          particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

          if (particle.y > H) {
            particle.x = Math.random() * W;
            particle.y = -30;
          }
        }
        return results;
      }

      function showPopup() {
        document.getElementById("popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";
      }

      function closePopup() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
      }

      function showConfetti() {
        closePopup();
        document.getElementById("valentine-img").style.display = "block";
        Draw(); // Start the confetti animation
      }

      // Initialize the canvas
      canvas.width = W;
      canvas.height = H;

      for (var i = 0; i < maxConfettis; i++) {
        particles.push(new confettiParticle());
      }

      window.addEventListener(
        "resize",
        function () {
          W = window.innerWidth;
          H = window.innerHeight;
          canvas.width = W;
          canvas.height = H;
        },
        false
      );