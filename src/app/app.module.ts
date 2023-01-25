import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGeneratorComponent } from './pages/image-generator/image-generator.component';
import { ImageLinkComponent } from './pages/image-link/image-link.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGeneratorComponent,
    ImageLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
