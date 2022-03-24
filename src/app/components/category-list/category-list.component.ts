import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categories: Category[] = [];
  cargando = true;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      resp => {
        console.log();
        this.categories = resp;
        console.log(this.categories);
        this.cargando = false;
        
      }, error => {
        console.log(error);
        
      }
    )
  }

  deleteCategory(id: number | undefined) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.deleteCategory(id).subscribe(
          resp => {
            console.log(resp)
            this.getCategories()
            Swal.fire(
              'Borrado!',
              'El registro fue borrado',
              'success'
            )
          },
          err => {
            Swal.fire(
              'Ooops!',
              'algo salió mal',
              'error'
            )
          }    
        )
      }
    })

    
  }
}
