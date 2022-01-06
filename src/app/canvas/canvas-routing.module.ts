import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from 'src/app/canvas/canvas.component'

const routes: Routes = [
  {path: 'canvas', component: CanvasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CanvasRoutingModule { }
