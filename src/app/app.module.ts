import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductImageGalleryComponent } from './components/product-image-gallery/product-image-gallery.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { CurrentTimeComponent } from './layout/hight-header/current-time/current-time.component';
import { HightHeaderCompopnenet } from './layout/hight-header/high-header.component';
import { SearchBarComponent } from './layout/header/serchbar-component/search-bar.component';
import { AccountBag } from './layout/header/accoutn-bag-component/account-bag.component';
import { MainHeaderComponent } from './layout/header/main-header-component/main-header.component.spec';
import { NavsComponent } from './layout/navs/navs.component';
import { SelectionsComponent } from './layout/selections/selections.component';
import { FilterCompopnenet } from './components/filter-component/filter.component';
import { CustomSliderComponent } from './components/filter-component/filter/filter.component';
import { ProductListComponent } from './components/products-components/products.components';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CustomComponent } from './components/products-components/custom-component/custom.component';
import { PaginationComponent } from './components/products-components/products-footer/products.footer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductImagesComponent,
    ProductInfoComponent,
    ProductPageComponent,
    ProductImageGalleryComponent,
    ButtonComponent,
    CurrentTimeComponent,
    HightHeaderCompopnenet,
    SearchBarComponent,
    AccountBag,
    MainHeaderComponent,
    NavsComponent,
    SelectionsComponent,
    FilterCompopnenet,
    CustomSliderComponent,
    ProductListComponent,
    CustomComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSliderModule,
    MatPaginatorModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule{ }
