const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let tyrannosaurus;
  let stegosaurus;
  let triceratops;
  let velociraptor;

  this.beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    tyrannosaurus = new Dinosaur('Tyrannosaurus', 'carnivore', 100);
    stegosaurus = new Dinosaur('Stegosaurus', 'herbivore', 20);
    triceratops = new Dinosaur('Triceratops', 'herbivore', 50);
    velociraptor = new Dinosaur('Velociraptor', 'carnivore', 70);
  });

  it('should have a name', function() {
    const actual = park.name;
    const expected = 'Jurassic Park';
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    const expected = 10;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(tyrannosaurus);
    const actual = park.dinosaurs;
    const expected = [tyrannosaurus];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(stegosaurus);
    park.removeDinosaur(tyrannosaurus);
    const actual = park.dinosaurs;
    const expected = [stegosaurus];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(triceratops);
    park.addDinosaur(velociraptor);
    let mostVisitedDinosaur = park.findMostVisited();
    const actual = mostVisitedDinosaur;
    const expected = tyrannosaurus;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function (){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(triceratops);
    park.addDinosaur(velociraptor);
    let foundDinosaur = park.findDinosaurBySpecies('Stegosaurus');
    const actual = foundDinosaur;
    const expected = [stegosaurus];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(triceratops);
    park.addDinosaur(velociraptor);
    visitorsPerDay = park.calculateVisitorsPerDay();
    const actual = visitorsPerDay;
    const expected = 240;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per year', function (){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(triceratops);
    park.addDinosaur(velociraptor);
    visitorsPerYear = park.calculateVisitorsPerYear();
    const actual = visitorsPerYear;
    const expected = 87600;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total revenue for one year', function (){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(triceratops);
    park.addDinosaur(velociraptor);
    revenue = park.calculateRevenue();
    const actual = revenue;
    const expected = 876000;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove all dinosaurs of a particular species', function (){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(triceratops);
    park.addDinosaur(velociraptor);
    park.removeDinosaurBySpecies('Tyrannosaurus');
    const actual = park.dinosaurs;
    const expected = [stegosaurus, triceratops, velociraptor];
    assert.deepStrictEqual(actual, expected);
  });

});
