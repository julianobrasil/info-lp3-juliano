import { 
         ChangeDetectionStrategy, 
         Component, 
         forwardRef, 
         HostListener ,
         OnDestroy, 
} from '@angular/core';
import { 
        AbstractControl, 
        ControlValueAccessor, 
        NG_VALIDATORS, 
        NG_VALUE_ACCESSOR, 
        ValidationErrors,
        Validator, 
        FormGroup, 
        FormBuilder, 
        Validators, 
} from '@angular/forms';
import { Subject } from 'rxjs';
import { PessoaFormComponentData } from "./pessoa-form-component.service";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PessoaFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PessoaFormComponent),
      multi: true,
    },
  ],
})

export class PessoaFormComponent implements ControlValueAccessor, OnDestroy, Validator {
  
  _form: FormGroup;

  pessoaData: PessoaFormComponentData;
  
  private _onChange: (data: PessoaFormComponentData) => void;

  @HostListener('focusout') _onTouched: () => void;

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _fb: FormBuilder) { 
    this._form = this._fb.group({
      nome: [null, Validators.required],
      animal: [null, Validators.required],
    });

    this._form.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe((v: any) => {
        if (this._onChange) {
          this._onChange(
            this.pessoaData ? {...v, id: this.pessoaData.id} : v,
          );
        }

        if (this._onTouched) {
          this._onTouched();
        }
      });
  }
  
  ngOnDestroy(): void {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  writeValue(data: PessoaFormComponentData): void {
    this.pessoaData = data;

    if (data) {
      this._form.patchValue({...data});
    } else {
      this._form.reset();
    }
  }

  registerOnChange(fn: (data: PessoaFormComponentData) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this._form.disable();
    } else {
      this._form.enable();
    }
  }
  
  validate(control: AbstractControl): ValidationErrors {
    return this._form.valid ? null : {};
  }
}
