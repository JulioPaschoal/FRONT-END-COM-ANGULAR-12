import { isLoweredSymbol } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdemDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Lorem ipsum",
      foodDetails:"PLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien quam, maximus vitae est ut, cursus molestie felis. Pellentesque vitae magna augue. Proin scelerisque eget eros vel eleifend. Morbi sed gravida erat. Praesent blandit libero non metus accumsan, ac tristique erat auctor. Suspendisse felis est, sagittis placerat pharetra sit amet, auctor in libero. Maecenas lacus ligula, sollicitudin ut turpis in, mattis volutpat nisl.",
      foodPrice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Lorem ipsum",
      foodDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien quam, maximus vitae est ut, cursus molestie felis. Pellentesque vitae magna augue. Proin scelerisque eget eros vel eleifend. Morbi sed gravida erat. Praesent blandit libero non metus accumsan, ac tristique erat auctor. Suspendisse felis est, sagittis placerat pharetra sit amet, auctor in libero. Maecenas lacus ligula, sollicitudin ut turpis in, mattis volutpat nisl.",
      foodPrice:369,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Lorem ipsum",
      foodDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien quam, maximus vitae est ut, cursus molestie felis. Pellentesque vitae magna augue. Proin scelerisque eget eros vel eleifend. Morbi sed gravida erat. Praesent blandit libero non metus accumsan, ac tristique erat auctor. Suspendisse felis est, sagittis placerat pharetra sit amet, auctor in libero. Maecenas lacus ligula, sollicitudin ut turpis in, mattis volutpat nisl.",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Lorem ipsum",
      foodDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien quam, maximus vitae est ut, cursus molestie felis. Pellentesque vitae magna augue. Proin scelerisque eget eros vel eleifend. Morbi sed gravida erat. Praesent blandit libero non metus accumsan, ac tristique erat auctor. Suspendisse felis est, sagittis placerat pharetra sit amet, auctor in libero. Maecenas lacus ligula, sollicitudin ut turpis in, mattis volutpat nisl.",
      foodPrice:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Lorem ipsum",
      foodDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien quam, maximus vitae est ut, cursus molestie felis. Pellentesque vitae magna augue. Proin scelerisque eget eros vel eleifend. Morbi sed gravida erat. Praesent blandit libero non metus accumsan, ac tristique erat auctor. Suspendisse felis est, sagittis placerat pharetra sit amet, auctor in libero. Maecenas lacus ligula, sollicitudin ut turpis in, mattis volutpat nisl.",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Lorem ipsum",
      foodDetails:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien quam, maximus vitae est ut, cursus molestie felis. Pellentesque vitae magna augue. Proin scelerisque eget eros vel eleifend. Morbi sed gravida erat. Praesent blandit libero non metus accumsan, ac tristique erat auctor. Suspendisse felis est, sagittis placerat pharetra sit amet, auctor in libero. Maecenas lacus ligula, sollicitudin ut turpis in, mattis volutpat nisl.",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]
}
