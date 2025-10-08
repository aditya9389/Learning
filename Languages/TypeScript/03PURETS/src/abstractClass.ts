abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        return 8;
    }
}

//const hc= new TakePhoto("test","test");  cant create object of abstract class
class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number){
            super(cameraMode, filter);
        }
        getSepia(): void{
            console.log("Sepia");
        }
    }

const ig= new Instagram("test","test",4);
ig.getSepia();
console.log(ig.getReelTime());