import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './service/user.service';
import { ProductService } from './service/product.service';
import { ImageService } from './service/image.service';
import { LoggerService } from './service/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ImageService]
})
export class AppComponent {
  title = 'angular-DI';
  constructor(
    public httpClient: HttpClient,
    userService: UserService,
    productService: ProductService,
    imageService: ImageService,
    logger: LoggerService
  ) {
    logger.info('hello from LoggerService!')
  }
}
