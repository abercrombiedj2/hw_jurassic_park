const Park = function (name, price) {
    this.name = name;
    this.price = price;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    let index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
};

Park.prototype.findMostVisited = function(){
    let mostVisitedDinosaur = this.dinosaurs[0];
    for (const dinosaur of this.dinosaurs){
        if(dinosaur.guestsAttractedPerDay > mostVisitedDinosaur.guestsAttractedPerDay){
            mostVisitedDinosaur = dinosaur;
        };
    };
    return mostVisitedDinosaur;
};

Park.prototype.findDinosaurBySpecies = function(species){
    const foundDinosaurs = [];
    for (const dinosaur of this.dinosaurs){
        if(dinosaur.species === species){
            foundDinosaurs.push(dinosaur);
        };
    };
    return foundDinosaurs;
};

Park.prototype.calculateVisitorsPerDay = function(){
    let visitorsPerDay = 0;
    for (const dinosaur of this.dinosaurs){
        visitorsPerDay += dinosaur.guestsAttractedPerDay;
    };
    return visitorsPerDay;
};

Park.prototype.calculateVisitorsPerYear = function(){
    let visitorsPerDay = this.calculateVisitorsPerDay();
    let visitorsPerYear = visitorsPerDay * 365;
    return visitorsPerYear;
};

Park.prototype.calculateRevenue = function(){
    let visitors = this.calculateVisitorsPerYear();
    let revenue = visitors * this.price;
    return revenue;
};

Park.prototype.removeDinosaurBySpecies = function(species){
    let dinosaurs = [];
    for (const dinosaur of this.dinosaurs){
        if (dinosaur.species !== species){
            dinosaurs.push(dinosaur);
        };
    };
    this.dinosaurs = dinosaurs;
};

module.exports = Park;