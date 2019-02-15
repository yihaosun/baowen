import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides, Content,AlertController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;
  
  thingArray:DicModel<string>[] =[
    {key:'合作案例',value:''},
    {key:'材料介绍',value:''},
    ];
    activity:ActivityDto[]
   test=[
      {
      id:0,
      img:"http://47.99.165.200/www/assets/imgs/baowen1.jpg",
      des:"绍兴市越城区绿洁保温专业从事管道设备保温工程的施工。我们本着以用户至上、质量第一、服务为先的宗旨热忱为您服务。",
     
    },
    {
      id:1,
      img:"http://47.99.165.200/www/assets/imgs/baowen2.jpg",
      des:"绍兴市越城区绿洁保温专业从事管道设备保温工程的施工。我们本着以用户至上、质量第一、服务为先的宗旨热忱为您服务。",
     
    },
    {
      id:2,
      img:".http://47.99.165.200/www/assets/imgs/baowen.jpeg",
      des:"绍兴市越城区绿洁保温专业从事管道设备保温工程的施工。我们本着以用户至上、质量第一、服务为先的宗旨热忱为您服务。",
  
    }, {
      id:3,
      img:"http://47.99.165.200/www/assets/imgs/baowen4.jpg",
      des:"绍兴市越城区绿洁保温专业从事管道设备保温工程的施工。我们本着以用户至上、质量第一、服务为先的宗旨热忱为您服务。",
     
    }
    ]
    test1=[
      {
      id:0,
      img:"http://47.99.165.200/www/assets/imgs/xitu.jpeg",
      des:"ZGT稀土保温材料由精选的矿产原料掺配多种有机、无机及稀土添加剂复合而成的一种保温材料。石棉绒是一种性能良好的保温材料。其产品以石棉绒为主,配稀土添加剂作为主要原料,构成了复合外保温墙体。与其他保温材料相比,具有耐高温性强等优点。可使建筑物采暖能耗大大降低。",
     
    },
    {
      id:1,
      img:"http://47.99.165.200/www/assets/imgs/yanmian.jpeg",
      des:"岩棉产品均采用优质玄武岩、白云石等为主要原材料，经1450℃以上高温熔化后采用国际先进的四轴离心机高速离心成纤维，同时喷入一定量粘结剂、防尘油、憎水剂后经集棉机收集、通过摆锤法工艺，加上三维法铺棉后进行固化、切割，形成不同规格和用途的岩棉产品。",
     
    },
    {
      id:2,
      img:"http://47.99.165.200/www/assets/imgs/guisuan.jpeg",
      des:"硅酸铝的密度为2.8到2.9克/立方厘米，折射率为1.56，其莫氏硬度与矿石类型，含水量有关系，在4.5到7.5之间变化。硅酸铝粉末常用作防火材料，例如在玻璃工业上用作筑玻璃窑。",
     
    },{
      id:4,
      img:"http://47.99.165.200/www/assets/imgs/boli.jpeg",
      des:"高温玻璃棉保温材料是由均匀细长、富有弹性的玻璃纤维和特殊高温粘合剂组成的轻质、耐用、保温性能优越的耐高温保温隔热材料。",
     
    }
    ]
    thingSegment: string = this.thingArray[0].key;
    fixSegment: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,
   ) {
    ;
  }
//生命初始的时候
   ionViewDidLoad() {
    this.activity=this.test
  }
  segmentChanged(segment) {
    switch (segment.value){
      case this.thingArray[0].key:
       this.activity=this.test
         // this.requestlist().then(()=>{});
        break;
      default :
      this.activity=this.test1
        break;
    }
  }
  // async requestlist(status?:number){
  //   (await this.activityService.getActivityInfo(status))
  //   .subscribe(o=>{
  //     if(o.code==200){
  //    // console.log(o);
  //   }
  //   else{
  //     console.log('错误消息');
  //     super.showAlert(this.alertCtrl,o.message);
  //   }
  //   },error=>{
  //     super.showAlert(this.alertCtrl,'服务器异常');
  //   })
  // }
  

}
