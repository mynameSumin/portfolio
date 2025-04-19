export default class Planet {
  x: number;
  y: number;
  r: number;
  opacity: number;

  constructor(x: number, y: number) {
    this.r = 10; //반지름
    this.x = x;
    this.y = y;
    this.opacity = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,               // 중심 (파티클 위치)
      this.x, this.y, this.r * 2      // 반지름 (파티클 반경의 2배 정도)
    );
    gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");    // 가장자리 투명
  
    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.r * 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (this.opacity < 1) {
      this.opacity += 0.01;
    }
  }
}
