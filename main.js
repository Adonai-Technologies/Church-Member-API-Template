class Churchmembers{
    constructor(name,location){
       this._name = name
       this.location = location
    }
    get name(){
        return this._name
    }
    joinWelfare(){
        console.log('contributor to warefare')
    }
    present(){
        console.log('Present @ Church today')
    }

    absent(){
        console.log('absent @ church today')
    }
}


class Member extends Churchmembers{
    constructor(name,location,contact){
        super(name)
        this.location = location
        this.contact = contact
    }
}






let newComer = new Member('Akua Konadu','Accra Osu', '0549762969')
console.log(newComer)

