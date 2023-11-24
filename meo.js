class Meo {
    constructor(name, weight, maxSpeed, status) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.status = true;
    }
    meoSay(text){
        console.log("Meo meo")
    }
    catch(chuot){
        if (this.maxSpeed >= chuot.speed)
            console.log (this.name + " da bat duoc " + chuot.name);
    }
    eat(chuot){
        console.log(this.name + " da an " + chuot.name);
        chuot.status = false;
        //tang khoi luong meo
        this.weight += chuot.weight;
        console.log(this.name +" da tang len " + this.weight + "kg")
    }

}

