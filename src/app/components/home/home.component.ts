import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { RecipeInfo } from 'src/app/service/recipe-info.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  modalForm: FormGroup;
  recipeModel: RecipeInfo = new RecipeInfo();
  recipes: any;
  show = false;
  searchValue: any;

  constructor(private api: HttpService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.modalForm = this.fb.group({
      title: [''],
      time: [''],
      desc: [''],
    });

    this.getAllPosts();
  }

  //GET
  getAllPosts() {
    this.api.getRecipe().subscribe((res) => {
      this.recipes = res;
    });
  }

  //POST
  postRecipe() {
    this.recipeModel.title = this.modalForm.value.title;
    this.recipeModel.time = this.modalForm.value.time;
    this.recipeModel.desc = this.modalForm.value.desc;

    this.api.postRecipe(this.recipeModel).subscribe((res) => {
      console.log(res);
      let ref = document.getElementById('cancle');
      ref?.click();
      this.modalForm.reset();
      this.getAllPosts();
    });
  }

  //DELETE
  deletePost(post: any) {
    this.api.deleteRecipe(post.id).subscribe((res) => {
      alert('Post Deleted');
      this.getAllPosts();
    });
  }
}
