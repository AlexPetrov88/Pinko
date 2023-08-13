import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gadjet } from 'src/app/interfaces/gadjet';
// import { ga } from '../models/item.model';

@Injectable({
    providedIn: 'root'
})
export class BasketServiceService {
    private basketItemsSubject: BehaviorSubject<Gadjet[]> = new BehaviorSubject<Gadjet[]>([]);
    public basketItems: Observable<Gadjet[]> = this.basketItemsSubject.asObservable();

    private numberOfPurchasesSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public numberОfPurchases: Observable<number> = this.numberOfPurchasesSubject.asObservable();

    constructor() {}

    // updateBasket

    updateBasketItems(items: Gadjet[]): void {
        this.basketItemsSubject.next(items);
    }

    addBasketItem(gadjet: Gadjet): void {
        this.basketItemsSubject.next([...this.basketItemsSubject.value, gadjet]);
    }

    updateNumberOfPurchases(num: number): void {
        this.numberOfPurchasesSubject.next(num);
    }
}
