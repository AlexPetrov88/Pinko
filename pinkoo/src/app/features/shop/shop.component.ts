
import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Gadjet } from 'src/app/interfaces/gadjet';
import { BasketServiceService } from './basket-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  gadjetsList: Gadjet[] = [];
  // isLoading: boolean = true;

  isClick: boolean = false;
  basketItems: Gadjet[] = [];
  numberОfPurchases: number = 0;
  
  constructor(private basketService: BasketServiceService, private router: Router, private appService: AppService) {}
  
  ngOnInit(): void {
    this.appService.getGadjets().subscribe({
      next: (gadjets) => {
        
        this.gadjetsList = gadjets;
      },
      error: (err) => {
        console.log(`Error ${err}`);
      }
    });

    // this.basketService.basketItems.subscribe(items => {
    //   this.basketItems = items;
    // });
    // this.basketService.numberОfPurchases.subscribe(num => {
    //   this.numberОfPurchases = num;
    // });
  }
  
  // addItem(gadjet: Gadjet) {
  //   const existingItemIndex = this.basketItems.findIndex(basketItem => {
  //     if (basketItem._id === gadjet._id && basketItem.quantity > 0) {
  //       return true;
  //     }
  //     return false;
  //   });

  //   if (existingItemIndex >= 0) {
  //     const updatedBasketItems = [...this.basketItems];
  //     updatedBasketItems[existingItemIndex].quantity += 1;
  //     updatedBasketItems[existingItemIndex].price += gadjet.price;
  //     this.basketService.updateBasketItems(updatedBasketItems);
  //   } else {
  //     this.basketService.addBasketItem({ ...gadjet, quantity: 1 });
  //   }

  //   this.basketService.updateNumberOfPurchases(this.numberОfPurchases + 1);
  // }

  // removeItem(id: number, index: number): void {
  //   const newItems = [...this.basketItems];
  //   const currentItem = newItems.find(item => item._id === id);

  //   if (currentItem?.quantity > 1) {
  //     const subtraction = currentItem.price / currentItem.quantity;
  //     currentItem.price -= subtraction;
  //     currentItem.quantity -= 1;

  //     this.basketService.updateBasketItems(newItems);
  //     this.basketService.updateNumberOfPurchases(this.numberОfPurchases - 1);
  //   } else if (currentItem) {
  //     newItems.splice(index, 1);

  //     this.basketService.updateBasketItems(newItems);
  //     this.basketService.updateNumberOfPurchases(this.numberОfPurchases - 1);
  //   }
  // }

  // calculateTotal(): number {
  //   return this.basketItems.reduce((total, item) => total + item.price, 0);
  // }

  toggleCart(): void {
    this.isClick = !this.isClick;
  }

  // goToCreateShopGadjet(): void {
  //   this.router.navigate(['/createShopGadjet']);
  // }


  // get isLogged(): boolean {
  //     return this.userService.isLogged;
  // }

  // ngOnInit(): void {
  //     this.apiService.getGadjets().subscribe({
  //         next: (gadjets) => {
  //             this.gadjetsList = gadjets;
  //             // this.isLoading = false;
  //         },
  //         error: (err) => {
  //             // this.isLoading = false;
  //             console.log(`Error ${err}`);
  //         }
  //     });
  // }
}




// import { Component } from '@angular/core';
// import { AppService } from 'src/app/app.service';
// import { Gadjet } from 'src/app/interfaces/gadjet';

// @Component({
//   selector: 'app-shop',
//   templateUrl: './shop.component.html',
//   styleUrls: ['./shop.component.css']
// })
// export class ShopComponent {
//   gadjetsList: Gadjet[] = [];
//   // isLoading: boolean = true;

//   constructor(private apiService: AppService) {}

//   // get isLogged(): boolean {
//   //     return this.userService.isLogged;
//   // }

//   ngOnInit(): void {
//       this.apiService.getGadjets().subscribe({
//           next: (gadjets) => {
//               this.gadjetsList = gadjets;
//               // this.isLoading = false;
//           },
//           error: (err) => {
//               // this.isLoading = false;
//               console.log(`Error ${err}`);
//           }
//       });
//   }
// }
