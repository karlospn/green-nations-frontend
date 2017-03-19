import { Injectable } from '@angular/core';
import { MenuItem } from '../models/MenuItem';

@Injectable()
export class MenuService {
    
    public Items : Array<MenuItem>;
}