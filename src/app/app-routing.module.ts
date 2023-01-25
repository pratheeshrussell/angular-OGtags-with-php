import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGeneratorComponent } from './pages/image-generator/image-generator.component';
import { ImageLinkComponent } from './pages/image-link/image-link.component';

const routes: Routes = [
  {
    path:'image-gen',
    component:ImageGeneratorComponent
  },{
    path:'image-link',
    component:ImageLinkComponent
  },{
    path:'**',
    redirectTo:'image-gen'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
