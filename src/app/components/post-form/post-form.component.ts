import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { PostRequest } from 'src/app/interfaces/post';
import { CategoryService } from 'src/app/services/category.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: PostRequest = {
    title: '',
    body: '',
    url_image: '',
    category_id: 1
  }

  cargando = true;

  edit: boolean = false;
  
  categories: Category[] = [];

  constructor(
    private postsService: PostsService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(params);
    
    if (params) {
      this.postsService.getPost(params).subscribe(
        resp => {
          console.log(resp);
          this.post = resp;
          this.edit = true;
        }, err => console.log(err)
      );
    }

    this.getCategories();

    this.cargando = false;
  }

  submitPost() {    
    this.postsService.createPost(this.post).subscribe(
      resp => {
        console.log(resp);
        this.router.navigateByUrl('/posts');
      },
      err => { 
        console.log(err);
      }
    );
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      resp => {
        console.log(resp);
        this.categories = resp;
      }, err => {
        console.log(err);
      }
    )
  }

  updatePost() {
    this.postsService.updatePost(this.post.id, this.post).subscribe(
      resp => {
        console.log(resp);
        this.router.navigateByUrl('/');
      },
      err => {
        console.log(err);
      }
    );
  }

}
