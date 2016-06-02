import {Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';

@Component({
    selector: 'pagination',
    template: 
    `
        <nav *ngIf="items.length > pageSize">
            <ul class="pagination">
                <li [class.disabled]="currentPage == 1">
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li *ngFor="let page of pages" (click)="onPageChange(page)">
                    <a>{{ page }}
                    </a>
                </li>
                <li [class.disabled]="currentPage == items.length">
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
    </nav>
    `
})

export class PaginationComponent implements OnChanges {
    @Input() items = [];
    @Input() pageSize =  10;
    @Output() pageChange = new  EventEmitter();
    pages: any[];
    currentPage;
    
    ngOnChanges() {
        this.currentPage = 1;
        var pagesCount = this.items.length / this.pageSize;
        this.pages = [];
        for (var i=1; i <= pagesCount; i++) {
            this.pages.push(i);
        }
    }
    
    onPageChange(page) {
        this.currentPage = page;
        this.pageChange.emit(this.currentPage);
    }
    
}