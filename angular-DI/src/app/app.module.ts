import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';
import { ImageService } from './service/image.service';
import { LoggerService } from './service/logger.service';
import { BetterLoggerService } from './service/better-logger.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService, UserService, ImageService, LoggerService, {
    provide: LoggerService,
    useClass: BetterLoggerService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
