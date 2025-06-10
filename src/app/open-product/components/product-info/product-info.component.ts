import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductDescription} from '../../interfaces/product-description.interface';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {QuestionService} from '../../../../services/question.service';
import {Question} from './interfaces/question.interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
  standalone:false
})
export class ProductInfoComponent implements OnChanges, OnInit {

  @Input() public productDescription: ProductDescription[]=[];
   public activeTab = 'proizvod';
   public productSpecsLeft:string[] = [];
   public productSpecsRight:string[] = [];
   public tempStars: number = 0;
   public limit:number[]=[1,2,3,4,5]
   public questionForm!: FormGroup;

   constructor(private questionService: QuestionService) {
   }

   public ngOnInit(): void {
     this.initForm();
   }

   private initForm():void{
     this.questionForm = new FormGroup({
       email:new FormControl('', [Validators.required,Validators.email]),
       title: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(100),this.sqlInjectionValidator()]),
       content: new FormControl('', [Validators.required,this.sqlInjectionValidator()]),
     })

   }

  private sqlInjectionValidator(): ValidatorFn {
    const forbiddenPatterns = /(select|update|delete|insert|drop|--|;|'|")/i;

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const isInvalid = forbiddenPatterns.test(value);

      console.log('SQL validation', {
        input: value,
        detected: isInvalid
      });

      return isInvalid ? { sqlInjection: true } : null;
    };
  }

  public onSubmit(): void {
    if (this.questionForm.valid) {
      const formData=this.questionForm.value;

      const question: Question = {
        email:formData.email,
        title:formData.title,
        content:formData.content,
        product_id: Number(this.productDescription[0]?.product_id) || 0
      }

      this.questionService.ask(question).subscribe({
        next: (result) => {
          console.log(result);
          this.questionForm.reset();
        },
        error: (error) => {
          console.log(error);
          this.questionForm.reset();
        }
      })


      console.log('Form is valid!', this.questionForm.value);
    } else {
      console.log('Form not valid');
      this.questionForm.markAllAsTouched();
    }
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['productDescription']?.currentValue) {
      this.fillSpecification();
    }
  }

  private fillSpecification() {
    const specs = this?.productDescription[0]?.product_specs?.split('|') || [];
    const mid = Math.ceil(specs.length / 2);
    this.productSpecsLeft = specs.slice(0, mid);
    this.productSpecsRight = specs.slice(mid);
  }
  public setTab(tab: string) {
    this.activeTab = tab;
  }

  public rateStar(index: number) {
    this.tempStars = index;
  }

}
