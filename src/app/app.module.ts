import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LeafletDemoModule } from './leaflet/leaflet-demo.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LeafletDemoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
