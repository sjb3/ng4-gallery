import { Injectable, Component } from '@angular/core';

@Injectable()

export class ImageService{

  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id)
  }
}

const IMAGES = [
  {"id": 1, "category": "baroque", "caption": "sleep", "url": "assets/img/sleep.jpg"},
  {"id": 2, "category": "korean", "caption": "beauty", "url": "assets/img/beauty.jpg"},
  {"id": 3, "category": "hiroshima", "caption": "hiroshima", "url": "assets/img/hiroshima.jpg"},
  {"id": 4, "category": "archery", "caption": "archery", "url": "assets/img/archery.jpg"},
  {"id": 5, "category": "sleep2", "caption": "sleep2", "url": "assets/img/sleep2.jpg"}
]
