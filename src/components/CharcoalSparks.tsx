import { useEffect, useRef } from 'react';

interface Spark {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export const CharcoalSparks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create initial sparks - larger and brighter
    const createSpark = (): Spark => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      size: Math.random() * 4 + 2,
      speedY: -(Math.random() * 2 + 0.8),
      speedX: (Math.random() - 0.5) * 1,
      opacity: Math.random() * 0.6 + 0.4,
      life: 0,
      maxLife: Math.random() * 150 + 80,
    });

    // Initialize sparks - more sparks for better visibility
    for (let i = 0; i < 80; i++) {
      sparksRef.current.push(createSpark());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current.forEach((spark, index) => {
        // Update spark position
        spark.y += spark.speedY;
        spark.x += spark.speedX;
        spark.life++;

        // Calculate opacity based on life
        const lifeProgress = spark.life / spark.maxLife;
        const currentOpacity = spark.opacity * (1 - lifeProgress);

        // Draw spark with bright orange/amber glow
        const gradient = ctx.createRadialGradient(
          spark.x, spark.y, 0,
          spark.x, spark.y, spark.size * 3
        );
        gradient.addColorStop(0, `rgba(255, 200, 50, ${currentOpacity})`);
        gradient.addColorStop(0.3, `rgba(255, 165, 0, ${currentOpacity * 0.9})`);
        gradient.addColorStop(0.6, `rgba(217, 119, 6, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, `rgba(217, 119, 6, 0)`);

        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw bright center
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 200, ${currentOpacity})`;
        ctx.fill();

        // Reset spark if it's dead or off screen
        if (spark.life >= spark.maxLife || spark.y < -10) {
          sparksRef.current[index] = createSpark();
        }
      });

      // Randomly add new sparks
      if (sparksRef.current.length < 100 && Math.random() > 0.90) {
        sparksRef.current.push(createSpark());
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
};

export default CharcoalSparks;
