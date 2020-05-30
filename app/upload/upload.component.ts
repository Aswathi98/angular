import { Component, ViewChild } from '@angular/core';
// import swal from "sweetalert2";
import { SelectedEventArgs} from '@syncfusion/ej2-angular-inputs';
import * as XLSX from 'xlsx';
import { UploaderComponent, RemovingEventArgs } from '@syncfusion/ej2-angular-inputs';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { Exceldata } from './exceldata';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-upload',
 templateUrl: './upload.component.html',
   styleUrls: ['./upload.component.css']
})
export class UploadComponent  {

    XL_row_object: any;
  jsonObj:any
  
  //@ViewChild('defaultupload')
  public uploadObj: UploaderComponent;
  //@ViewChild('grid')
  public gridObj: GridComponent;

  constructor(private http: HttpClient) {

  }

  public path: Object = {
    saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };

  public dropElement: HTMLElement = document.getElementsByClassName('control-fluid')[0] as HTMLElement;

  public onFileRemove(args): void {
    args.cancel = true;

  }
  public json_object: any;

  parseExcel(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let data = (<any>e.target).result;
      let workbook = XLSX.read(data, {
        type: 'binary'
      });
      workbook.SheetNames.forEach((function (sheetName) {

        let XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        this.json_object = JSON.stringify(XL_row_object);
//         this.jsonObj = {};
// for (var i = 0 ; i < this.json_object.length; i++) {
//     this.jsonObj["position" + (i+1)] = this.json_object[i];
// }
      
        this.jsonObj = JSON.parse(this.json_object);
          // console.log(this.jsonObj);
          // for(let i=0;i<this.jsonObj.length;i++){
          // console.log(this.jsonObj[i].dateOfDrive);
          // let latest_date =this.datepipe.transform(this.jsonObj[i].dateOfDrive, 'yyyy-MM-dd');
          // console.log(latest_date);
          // }
      }).bind(this), this);

    };

    reader.onerror = function (ex) {
      // console.log(ex);
    };
    reader.readAsBinaryString(file);
  };

  public onSuccess(args: any): void {
    var files = args.target.files; // FileList object
    this.parseExcel(files[0]);
  }
  xlArray: Exceldata[];

  ngOnInit() {

  }
onPost() {
    // console.log("inside onpost");
    console.log(this.jsonObj);
    // this.xlArray = this.json_object;
    // console.log(this.xlArray);
    this.http.post("http://localhost:8086/upload", this.jsonObj)
      .subscribe(
      (res) => {
        console.log(res);
       alert("Upload successfull......");
       location.reload();
      },
      (err) => {
        console.log(err);
        alert("Please upload a file......");
      }
      )
  }
}

