export class Like {


constructor(public likesCount:number,public isSelected:boolean){

}

onClick(){

if(this.isSelected){

    this.likesCount--;
    this.isSelected=false;
}
else{

    this.likesCount++;
    this.isSelected=true;
}

}

}