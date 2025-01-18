export abstract class MovableObject {
    protected x: number;
    protected y: number;
    protected speed: number;

    constructor(x: number, y: number, speed: number) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    abstract update(): void;
    abstract draw(ctx: CanvasRenderingContext2D): void;
} 