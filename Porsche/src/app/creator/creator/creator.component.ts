import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
    this.test();
  }
  test(){
    var url1 = "https://www.google.com/s?tbm=map&gs_ri=maps&suggest=p&authuser=0&hl=en&gl=in&pb=!2i5!3m5!1m1!1s17.4343648%2C+78.3955874!1m1!1sMadhu%2C+Telangana!2i1!4m9!1m3!1d12568.989119285241!2d78.3731223!3d17.4414422!2m0!3m2!1i1366!2i317!4f13.1!7i20!10b1!12m10!1m1!18b1!2m3!5m1!6e2!20e3!10b1!16b1!20m1!1e6!19m4!2m3!1i360!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m3!1sxElJY8T6GtKRseMPzsKggAI!3b1!7e81!24m70!1m22!13m8!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!18m12!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m4!1m2!3b1!5b1!4b1!89b1!26m4!2m3!1i80!2i92!4i8!34m18!2b1!3b1!4b1!6b1!8m6!1b1!3b1!4b1!5b1!6b1!7b1!9b1!12b1!14b1!20b1!23b1!25b1!26b1!37m1!1e81!47m0!49m5!3b1!6m1!1b1!7m1!1e3!67m2!7b1!10b1!69i622&q=Madhu%2C%20Telangana&pf=t&tch=1&ech=1&psi=xElJY8T6GtKRseMPzsKggAI.1665747399326.1"
  var url2=  "https://www.google.com/maps/search/?api=1&query=centurylink+field"  ;
  console.log("url2",url2)
  this._http.get(url2).subscribe((data) => {
    console.log(data)
      });
    }
  keyword = 'name';
  // public countries = [
  //   {
  //     id: 1,
  //     name: 'Albania',
  //   },
  //   {
  //     id: 2,
  //     name: 'Belgium',
  //   },
  //   {
  //     id: 3,
  //     name: 'Denmark',
  //   },
  //   {
  //     id: 4,
  //     name: 'Montenegro',
  //   },
  //   {
  //     id: 5,
  //     name: 'Turkey',
  //   },
  //   {
  //     id: 6,
  //     name: 'Ukraine',
  //   },
  //   {
  //     id: 7,
  //     name: 'Macedonia',
  //   },
  //   {
  //     id: 8,
  //     name: 'Slovenia',
  //   },
  //   {
  //     id: 9,
  //     name: 'Georgia',
  //   },
  //   {
  //     id: 10,
  //     name: 'India',
  //   },
  //   {
  //     id: 11,
  //     name: 'Russia',
  //   },
  //   {
  //     id: 12,
  //     name: 'Switzerland',
  //   }
  // ];
  
  countries:any;
  selectEvent(item:any) {
      console.log("item",item)
    // do something with selected item
  }

  onChangeSearch(search: string) {
    console.log("search",search)
   var url =  "https://www.google.com/maps/search/?api=1&"+search;
   var url1 = "https://www.google.com/s?tbm=map&gs_ri=maps&suggest=p&authuser=0&hl=en&gl=in&pb=!2i5!3m5!1m1!1s17.4343648%2C+78.3955874!1m1!1sMadhu%2C+Telangana!2i1!4m9!1m3!1d12568.989119285241!2d78.3731223!3d17.4414422!2m0!3m2!1i1366!2i317!4f13.1!7i20!10b1!12m10!1m1!18b1!2m3!5m1!6e2!20e3!10b1!16b1!20m1!1e6!19m4!2m3!1i360!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m3!1sxElJY8T6GtKRseMPzsKggAI!3b1!7e81!24m70!1m22!13m8!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!18m12!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m4!1m2!3b1!5b1!4b1!89b1!26m4!2m3!1i80!2i92!4i8!34m18!2b1!3b1!4b1!6b1!8m6!1b1!3b1!4b1!5b1!6b1!7b1!9b1!12b1!14b1!20b1!23b1!25b1!26b1!37m1!1e81!47m0!49m5!3b1!6m1!1b1!7m1!1e3!67m2!7b1!10b1!69i622&q=Madhu%2C%20Telangana&pf=t&tch=1&ech=1&psi=xElJY8T6GtKRseMPzsKggAI.1665747399326.1"
   console.log(url)
    this._http.get(url1).subscribe((data) => {
  console.log(data)
    });
    // this._http doGetRequest(url) {    
    //   return this._http.get<any>(url); 
    // } 
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e:any) {
    console.log("e",e)
    // do something
  }
  // https://www.google.com/maps/search/?api=1&parameters
}
