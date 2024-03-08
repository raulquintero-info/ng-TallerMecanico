import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavPage } from 'src/app/core/interfaces/nav-page';

@Component({
  selector: 'app-page-bar',
  templateUrl: './page-bar.component.html',
  styleUrls: ['./page-bar.component.css']
})
export class PageBarComponent implements OnInit {

  @Input() navigation: NavPage = {} as NavPage;
  @Output() setNewPage = new EventEmitter<number>();
  leftButtons = [];
  rightButtons = []
  previousPageBtnClass = '';
  nextPageBtnClass = '';

  pagesArray: Array<number> = [1,2,3,4,5];

  ngOnInit(){
    this.pagesArray = this.createRange(this.navigation.totalPages,this.navigation.actualPage, this.navigation.totalPages);

  }

  changePageBtn(newPage: number) {
    // console.log('first', this.navigation);
    // this.previousPageBtnClass = this.navigation.first ? 'disabled' : '';
    // this.nextPageBtnClass = this.navigation.last ? 'disabled' : '';

    this.pagesArray = this.createRange(this.navigation.totalPages,newPage, this.navigation.totalPages);
    console.log('pages',  this.createRange(this.navigation.totalPages,newPage, this.navigation.totalPages));
    this.setNewPage.emit(newPage)
  }

  generateButtons(){

  }


  createRange(nPages: number , actualPg: number, totalPg: number ){

      let arrayTemp = new Array();
      for (let i = actualPg -2; i< (actualPg + 3); i++ ){
        if (i>0  && i<= totalPg) arrayTemp.push(i);
      }

      return arrayTemp;
  }





}
