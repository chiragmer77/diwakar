import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  // Module 1
  modile1: any = [
    { name: 'Wikipedia', type: 'link', url: 'https://en.wikipedia.org' },
    { name: 'Responsive', type: 'link', url: 'http://responsivewebinc.com/templates/responsivewebinc' },
    { name: 'DivyBhaskar', type: 'link', url: 'https://www.divyabhaskar.co.in/' },
    { name: 'Instagram', type: 'link', url: 'https://www.instagram.com/' }
  ];

  // Module 2
  modile2: any = [
    { name: 'Wikipedia', type: 'link', url: 'https://en.wikipedia.org' },
    { name: 'responsive', type: 'link', url: 'http://responsivewebinc.com/templates/responsivewebinc' },
    { name: 'DivyBhaskar', type: 'link', url: 'https://www.divyabhaskar.co.in/' },
    { name: 'Instagram', type: 'link', url: 'https://www.instagram.com/' }
  ];

  // Module 3
  modile3: any = [
    { name: 'Wikipedia', type: 'link', url: 'https://en.wikipedia.org' },
    { name: 'responsive', type: 'link', url: 'http://responsivewebinc.com/templates/responsivewebinc' },
    { name: 'DivyBhaskar', type: 'link', url: 'https://www.divyabhaskar.co.in/' },
    { name: 'Instagram', type: 'link', url: 'https://www.instagram.com/' }
  ];


  vegetables = [
    { name: 'Carrot', type: 'vegetable' },
    { name: 'Onion', type: 'vegetable' },
    { name: 'Potato', type: 'vegetable' },
    { name: 'Capsicum', type: 'vegetable' }];

  fruits = [
    { name: 'Apple', type: 'fruit' },
    { name: 'Orange', type: 'fruit' },
  ];

  // Variables
  droppedFruits: any = [];
  droppedModule: any = [];
  droppedItems: any = [];
  fruitDropEnabled: boolean = true;
  dragEnabled = true;
  selectedLayout: any;
  layoutTitle: any = null;

  getDataFromLocalStorage: any = [];
  buttonDisabled: boolean = true;
  clickedTabId: any;

  searchKeyword: any;

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.getDataFromLocalStorage = this.getLocalStorageData();
    if (this.getDataFromLocalStorage.length > 0) {
      this.clickedTabId = this.getDataFromLocalStorage[0].id;
      setTimeout(() => {
        this.getDataFromLocalStorage.filter((res: any) => {
          res.layout.filter((res: any) => {
            if (res.url.changingThisBreaksApplicationSecurity == undefined) {
              const url = res.url;
              res.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            }
          });
        });
      }, 500);
    }

  }


  /** Select layout */
  selectLayout(type: any) {
    this.buttonDisabled = true;
    let layoutValue: any;
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    if (type == 1) {
      this.selectedLayout = 1;
      this.layoutTitle = null;
      layoutValue = [
        {
          id: s4(), name: '', type: 'link', valid: false, url: ''
        },
      ]

      this.droppedModule = layoutValue;
    } else if (type == 2) {
      this.selectedLayout = 2;
      this.layoutTitle = null;
      this.droppedModule = []
      layoutValue = [
        {
          id: s4(), name: '', type: 'link', valid: false, url: ''
        },
        {
          id: s4(), name: '', type: 'link', valid: false, url: ''
        }
      ]
      this.droppedModule = layoutValue;
    } else if (type == 3) {
      this.selectedLayout = 3;
      this.layoutTitle = null;
      layoutValue = [
        {
          id: s4(), name: '', type: 'link', valid: false, url: ''
        },
        {
          id: s4(), name: '', type: 'link', valid: false, url: ''
        },
        {
          id: s4(), name: '', type: 'link', valid: false, url: ''
        }
      ]
      this.droppedModule = layoutValue;
    } else {
      this.selectedLayout = 4;
      this.layoutTitle = null;
      layoutValue = [
        {
          id: s4(), name: '', type: 'link', valid: false, url: ''
        },
        {
          id: s4(), name: '', type: 'link', valid: false, url: ''
        }
      ]
      this.droppedModule = layoutValue;
    }
  }

  /**Droped module */
  dropModule(e: any, data: any) {
    console.log(e, data)
    if (this.selectedLayout == 1) {
      this.droppedModule.filter((dt: any) => {
        if (dt.id == data.id) {
          dt.name = e.dragData.name
          dt.url = e.dragData.url
          dt.valid = true;
        }
        if (dt.valid && this.layoutTitle) {
          this.buttonDisabled = false;
        }
      });
    } else if (this.selectedLayout == 2) {
      this.droppedModule.filter((dt: any) => {
        if (dt.id == data.id) {
          dt.name = e.dragData.name
          dt.url = e.dragData.url
          dt.valid = true;
        }
        if (dt.valid && this.layoutTitle) {
          this.buttonDisabled = false;
        } else {
          this.buttonDisabled = true;
        }
      });

    } else if (this.selectedLayout == 3) {
      this.droppedModule.filter((dt: any) => {
        if (dt.id == data.id) {
          dt.name = e.dragData.name
          dt.url = e.dragData.url
          dt.valid = true;
        }
        if (dt.valid && this.layoutTitle) {
          this.buttonDisabled = false;
        } else {
          this.buttonDisabled = true;
        }
      });

    } else if (this.selectedLayout == 4) {
      this.droppedModule.filter((dt: any) => {
        if (dt.id == data.id) {
          dt.name = e.dragData.name,
            dt.url = e.dragData.url
          dt.valid = true;
        }
        if (dt.valid && this.layoutTitle) {
          this.buttonDisabled = false;
        } else {
          this.buttonDisabled = true;
        }
      });
    }

    console.log(e)

    console.log(data)

    // this.droppedModule.push(e.dragData);
    this.removeItem(e.dragData, this.vegetables);
  }

  onAnyDrop(e: any) {
    this.droppedItems.push(e.dragData);
    if (e.dragData.type === 'vegetable') {
      this.removeItem(e.dragData, this.vegetables);
    } else {
      this.removeItem(e.dragData, this.fruits);
    }
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }


  /** lunch layout */
  lunchLayout() {

    let makeObject: any = {}

    let makeArray: any = [];

    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    if (this.selectedLayout == 1) {

      console.log(this.getDataFromLocalStorage.length)

      var num: number = this.getDataFromLocalStorage.length

      makeObject.tabView = 'View' + (num + 1)
      makeObject.layoutType = '1';
      makeObject.layoutName = 'Layout 1';
      makeObject.id = s4();
      makeObject.name = this.layoutTitle;
      makeObject.layout = this.droppedModule;

      this.getDataFromLocalStorage.push(makeObject);
      if (localStorage.getItem('dropedLayout') === null) {
        makeArray = [];
        makeArray.push(makeObject);
        localStorage.setItem('dropedLayout', JSON.stringify(makeArray));
      } else {
        makeArray = JSON.parse(localStorage.getItem('dropedLayout') || '');
        makeArray.push(makeObject);
        localStorage.setItem('dropedLayout', JSON.stringify(makeArray));
        this.getDataFromLocalStorage = JSON.parse(localStorage.getItem('dropedLayout') || '');
      }

      this.getDataFromLocalStorage = this.getLocalStorageData();

      console.log("this.getDataFromLocalStorage", this.getDataFromLocalStorage);


    } else if (this.selectedLayout == 2) {
      var num: number = this.getDataFromLocalStorage.length

      makeObject.tabView = 'View' + (num + 1)
      makeObject.layoutType = '2';
      makeObject.layoutName = 'Layout 2';
      makeObject.id = s4();
      makeObject.name = this.layoutTitle;
      makeObject.layout = this.droppedModule;

      this.getDataFromLocalStorage.push(makeObject);
      if (localStorage.getItem('dropedLayout') === null) {
        makeArray = [];
        makeArray.push(makeObject);
        localStorage.setItem('dropedLayout', JSON.stringify(makeArray));
      } else {
        makeArray = JSON.parse(localStorage.getItem('dropedLayout') || '');
        makeArray.push(makeObject);
        localStorage.setItem('dropedLayout', JSON.stringify(makeArray));
      }

      this.getDataFromLocalStorage = this.getLocalStorageData();

    } else if (this.selectedLayout == 3) {
      var num: number = this.getDataFromLocalStorage.length

      makeObject.tabView = 'View' + (num + 1)
      makeObject.layoutType = '3';
      makeObject.layoutName = 'Layout 3';
      makeObject.id = s4();
      makeObject.name = this.layoutTitle;
      makeObject.layout = this.droppedModule;

      this.getDataFromLocalStorage.push(makeObject);
      if (localStorage.getItem('dropedLayout') === null) {
        makeArray = [];
        makeArray.push(makeObject);
        localStorage.setItem('dropedLayout', JSON.stringify(makeArray));
      } else {
        makeArray = JSON.parse(localStorage.getItem('dropedLayout') || '');
        makeArray.push(makeObject);
        localStorage.setItem('dropedLayout', JSON.stringify(makeArray));
      }
      this.getDataFromLocalStorage = this.getLocalStorageData();


    } else if (this.selectedLayout == 4) {
      var num: number = this.getDataFromLocalStorage.length

      makeObject.tabView = 'View' + (num + 1)
      makeObject.layoutType = '4';
      makeObject.layoutName = 'Layout 4';
      makeObject.id = s4();
      makeObject.name = this.layoutTitle;
      makeObject.layout = this.droppedModule;

      this.getDataFromLocalStorage.push(makeObject);
      if (localStorage.getItem('dropedLayout') === null) {
        makeArray = [];
        makeArray.push(makeObject);
        localStorage.setItem('dropedLayout', JSON.stringify(makeArray));
      } else {
        makeArray = JSON.parse(localStorage.getItem('dropedLayout') || '');
        makeArray.push(makeObject);
        localStorage.setItem('dropedLayout', JSON.stringify(makeArray));
      }
      this.getDataFromLocalStorage = this.getLocalStorageData();
    }

    setTimeout(() => {
      this.getDataFromLocalStorage.filter((res: any) => {

        res.layout.filter((res: any) => {
          if (res.url.changingThisBreaksApplicationSecurity == undefined) {
            const url = res.url;
            res.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        });

      });
    }, 500);

    this.clickedTabId = this.getDataFromLocalStorage[0].id;

    console.log("this.clickedTabId", this.clickedTabId);
  }

  /** Get local storage data */
  getLocalStorageData() {
    if (localStorage.getItem('dropedLayout') === null) {
      this.getDataFromLocalStorage = [];
    } else {
      this.getDataFromLocalStorage = JSON.parse(localStorage.getItem('dropedLayout') || '');
    }
    return this.getDataFromLocalStorage;
  }

  /** Model change */
  modelChangeFn($event: any) {
    if ($event) {
      this.droppedModule.filter((dt: any) => {
        if (dt.valid && $event) {
          this.buttonDisabled = false;
        } else {
          this.buttonDisabled = true;
        }
      });
    } else {
      this.buttonDisabled = true;
    }
  }

  /** View clicked */
  viewClicked(view: any) {
    console.log(view);
    this.clickedTabId = view.id;
    setTimeout(() => {
      view.layout.filter((res: any) => {
        console.log(res.url.changingThisBreaksApplicationSecurity);
        if (res.url.changingThisBreaksApplicationSecurity == undefined) {
          const url = res.url;
          res.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      });
    }, 500);

  }

  /** Delete layout */
  delete(data: any) {
    let layout = JSON.parse(localStorage.getItem('dropedLayout') || '');
    for (let i = 0; i < layout.length; i++) {
      if (layout[i].id == data.id) {
        layout.splice(i, 1);
      }
    }
    localStorage.setItem('dropedLayout', JSON.stringify(layout));

    this.getDataFromLocalStorage = this.getLocalStorageData();
  }

  /** Create new layout */
  createnew() {
    this.selectedLayout = null;
    this.layoutTitle = null;
    this.buttonDisabled = true;
    // this.clickedTabId = null;
  }

  /** Search view */
  searchView() {
    this.getDataFromLocalStorage = this.getDataFromLocalStorage.filter((fl: any, index: number) => {
      console.log(fl)
      if (fl.name.toUpperCase() == this.searchKeyword.toUpperCase()) {
        return fl;
      }
    });
  }

  /** Search change */
  modelChangeFnSearch(event: any) {
    if (event) {
    } else {
      this.getDataFromLocalStorage = this.getLocalStorageData();
    }
  }

}
