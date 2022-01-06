import { Component, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('canvas')
  private canvas: ElementRef<HTMLCanvasElement>;
  private canvasEl: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  isPainting = false;

  constructor() { }

  ngAfterViewInit(): void {
    // this.canvas.nativeElement.width = window.innerWidth;
    // this.canvas.nativeElement.height = window.innerHeight;

    this.canvasEl = this.canvas.nativeElement;
    this.canvasEl.width = this.canvas.nativeElement.clientWidth;
    this.canvasEl.height = this.canvas.nativeElement.clientHeight;
    // this.canvasEl.width = window.innerWidth;
    // this.canvasEl.height = window.innerHeight;
    const ctx = this.canvasEl.getContext('2d');

    if (!ctx) {
      throw new Error("getContext('2d') failed");
    }
    this.ctx = ctx;
  }

  onMouseDown(event: MouseEvent) {
    const x = event.offsetX;
    const y = event.offsetY;

    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.isPainting = true;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isPainting) {
      return;
    }
    const x = event.offsetX;
    const y = event.offsetY;

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  onMouseUp() {
    this.ctx.closePath();
    this.isPainting = false;
  }

  onMouseLeave() {
    this.ctx.closePath();
    this.isPainting = false;
    console.log("mouse leave");
  }
}
