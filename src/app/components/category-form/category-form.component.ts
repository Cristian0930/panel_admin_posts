import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryRequest } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  edit: boolean = false;

  category: CategoryRequest = {
    name: ''
  }

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(params);
    
    if (params) {
      this.categoryService.getCategory(params).subscribe(
        resp => {
          console.log(resp);
          this.category = resp;
          this.edit = true;
        }, err => console.log(err)
      );
    }
  }

  submitCategory() {
    this.categoryService.createCategory(this.category).subscribe(
      resp => {
        console.log(resp);
        this.router.navigateByUrl('/categories');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Categoria guardada',
          showConfirmButton: false,
          timer: 1500
        })
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'algo salió mal',
        })
      }
    )
  }

  updateCategory() {
    this.categoryService.updateCategory(this.category.id, this.category).subscribe(
      resp => {
        console.log(resp);
        this.router.navigateByUrl('/categories');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Categoria actualizada',
          showConfirmButton: false,
          timer: 1500
        })
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'algo salió mal',
        })
      }
    )
  }

}
