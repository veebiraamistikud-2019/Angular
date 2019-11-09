import { Component } from '@angular/core';
import { Todo } from './interfaces/Todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    items: Todo[]
    input: string
    
    ngOnInit() {
        this.items = []
        this.input = ''
    }
    
    _createNewItem(): void {
        if (this.input === '') return
        
        this.items.push({
            id: this.items.length === 0 ? 0 : this.items[this.items.length - 1].id + 1,
            value: this.input,
            done: false,
        })
        
        this.input = ''
    }

    _checkItem(id: number): void {
        for (let item of this.items) {
            if (item.id !== id) continue
            
            item.done = !item.done
            break
        }
    }

    _removeItem(id: number): void {
        this.items.forEach((item, index) => {
            if (item.id === id)
                this.items.splice(index, 1)
        })
    }
}
