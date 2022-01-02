import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('canvas') 
  private canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  isPainting = false;

  constructor() { }
  
  ngAfterViewInit(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    canvasEl.width = window.innerWidth;
    canvasEl.height = 700;
    const ctx = canvasEl.getContext('2d');

    if (!ctx) {
      throw new Error("getContext('2d') failed");
    }
    this.ctx = ctx;
  }

  onMouseDown(event: MouseEvent){
    const x = event.offsetX;
    const y = event.offsetY;

    this.ctx.beginPath();
    this.ctx.moveTo(x,y);
    this.isPainting = true;
  }

  onMouseMove(event: MouseEvent){
    if(!this.isPainting){
      return;
    }
    const x = event.offsetX;
    const y = event.offsetY;

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  onMouseUp(){
    this.ctx.closePath();
    this.isPainting = false;
  }

  onMouseLeave(){
    this.ctx.closePath();
    this.isPainting = false;
    console.log("mouse leave");
  }
}
