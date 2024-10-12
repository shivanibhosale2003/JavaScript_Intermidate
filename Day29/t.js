const student = {
    name:"Shivani",
    age:22,
    eng:90,
    phy:98,
    math:91,
    getAvg() {
        console.log(this);
        let avg=(this.eng+this.phy+this.math)/3;
        console.log(avg);
    }
}