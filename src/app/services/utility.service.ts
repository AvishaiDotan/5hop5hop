import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor() { }

    getDistinctValues<T>(array: T[]): T[] {
        return [...new Set(array)];
    }

    distinctBy<T>(array: T[], keyExtractor: (item: T) => any): T[] {
        const seen = new Map<any, boolean>();
        return array.filter(item => {
            const key = keyExtractor(item);
            if (!seen.has(key)) {
                seen.set(key, true);
                return true;
            }
            return false;
        });
    }
}
