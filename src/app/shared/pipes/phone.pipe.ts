import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(num: string) {
    // rawNum = rawNum.charAt(0) != 0 ? "0" + rawNum : "" + rawNum;
    // let num: string = rawNum.toString();
    let newNum: string ='';
    let newStr = "";
    let i = 0;
  
    if (num?.length == 10){
      newNum = "(" + num.slice(0,3) + ") ";
      newNum += num.slice(3,6) + " ";
      newNum += num.slice(6,10)
    }


    return newNum;
  }
}
