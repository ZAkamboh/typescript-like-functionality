import {Like} from './like.component';

 let component=new Like(10,true);

 component.onClick();

 console.log(`likesCount:${component.likesCount},isSelected:${component.isSelected}`);


