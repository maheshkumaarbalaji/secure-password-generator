import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  @ViewChild('passwordGenerator') pwdGenerator: NgForm | undefined;
  public Length: number = 0;
  public UpperCase: boolean = true;
  public LowerCase: boolean = true;
  public Digits: boolean = false;
  public Special: boolean = false;
  public ErrorOccurred: boolean = false;
  public reqdPassword: string = "";
  public passwordGenerated: boolean = false;

  generateUpperCaseString(count: number): string 
  {
    const charString: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let  index: number;
    let finalString: string = "";
    
    for ( index = 1 ; index <= count ; ++index ) 
    {
      const randomNumber: number = Math.floor(Math.random() * 26 );
      finalString += charString.charAt(randomNumber);
    }

    return finalString;
  }

  generateLowerCaseString(count: number): string 
  {
    const charString: string = "abcdefghijklmnopqrstuvwxyz";
    let  index: number;
    let finalString: string = "";
    for ( index = 1 ; index <= count ; ++index ) 
    {
      const randomNumber: number = Math.floor(Math.random() * 26 );
      finalString += charString.charAt(randomNumber);
    }

    return finalString;
  }

  generateDigitsString(count: number): string 
  {
    const charString: string = "0123456789";
    let  index: number;
    let finalString: string = "";
    for ( index = 1 ; index <= count ; ++index ) 
    {
      const randomNumber: number = Math.floor(Math.random() * 10 );
      finalString += charString.charAt(randomNumber);
    }

    return finalString;
  }

  generateSpecialChars(count: number): string 
  {
    const charString: string = "@!~$^#";
    let index: number;
    let finalString: string = "";
    for ( index = 1 ; index <= count ; ++index ) 
    {
      const randomNumber: number = Math.floor(Math.random() * 6 );
      finalString += charString.charAt(randomNumber);
    }

    return finalString;
  }

  closePwdDisplay(): void 
  {
    this.passwordGenerated = false;
  }

  generatePassword(): void 
  {
    this.ErrorOccurred = false;
    this.passwordGenerated = false;
    let count: number = 2;
    let finalString: string = "";
    
    if ( this.Digits ) 
    {
      count++;
    }

    if ( this.Special ) 
    {
      count++;
    }

    if ( count > 2 && this.Length > 6 ) 
    {
      let tempCount: number = this.Length;
      const LowerCaseCount: number = Math.floor(tempCount / 2);
      const LowerCaseString: string = this.generateLowerCaseString(LowerCaseCount);
      finalString += LowerCaseString;
      tempCount -= LowerCaseString.length;
      const UpperCaseCount: number = Math.floor(Math.random() * (tempCount - 2) + 1 );
      const UpperCaseString: string = this.generateUpperCaseString(UpperCaseCount);
      finalString += UpperCaseString;
      tempCount -= UpperCaseString.length;

      if ( this.Digits && this.Special ) 
      {
        const DigitsCount: number = Math.floor(Math.random() * (tempCount - 1) + 1 );
        const DigitsString: string = this.generateDigitsString(DigitsCount);
        finalString += DigitsString;
        tempCount -= DigitsString.length;
        const SpecialCharsCount: number = tempCount;
        const SpecialCharsString: string = this.generateSpecialChars(SpecialCharsCount);
        finalString += SpecialCharsString;
        tempCount -= SpecialCharsString.length;
      }
      else if ( this.Digits ) 
      {
        const DigitsCount: number = tempCount;
        const DigitsString: string = this.generateDigitsString(DigitsCount);
        finalString += DigitsString;
        tempCount -= DigitsString.length;
      }
      else if ( this.Special ) 
      {
        const SpecialCharsCount: number = tempCount;
        const SpecialCharsString: string = this.generateSpecialChars(SpecialCharsCount);
        finalString += SpecialCharsString;
        tempCount -= SpecialCharsString.length;
      }

      let stringArray = finalString.split("");
      let index: number;
      
      for ( index = 0; index < stringArray.length; ++index ) 
      {
        const index1: number = Math.floor(Math.random() * stringArray.length);
        const temp: string = stringArray[index];
        stringArray[index] = stringArray[index1];
        stringArray[index1] = temp;
      }

      finalString = stringArray.join("");
      this.reqdPassword = finalString;
      this.ErrorOccurred = false;
      this.passwordGenerated = true;
      this.Digits = false;
      this.Special = false;
      this.Length = 0;
      window.location.href = "#main_frame";
    }
    else 
    {
      this.ErrorOccurred = true;
    }
  }
}
