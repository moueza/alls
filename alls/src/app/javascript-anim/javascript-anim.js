//https://stackoverflow.com/questions/41219542/how-to-import-js-modules-into-typescript-file
var JavAnim = function () {
  p1, p2, p3, p4;

  function JavascriptAnim() {
    htG.x = 0;
    htG.x = 0;
    htG.x = 0;
    htG.x = 0;

    pnt1.x;
    pnt1.y;

    pnt2.x;
    pnt2.y;

    pnt3.x;
    pnt3.y;

    pnt4.x;
    pnt4.y;
  }

  //https://www.w3schools.com/js/js_object_prototypes.asp
  //Prototype
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");

  /* function PointMoi(pp1, pp2, pp3, pp4) {
    this.p1 = pp1;
    this.p2 = pp2;
    this.p3 = pp3;
    this.p4 = pp4;
  } */
  function Quadrilatere(pp1, pp2, pp3, pp4) {
    this.p1 = pp1;
    this.p2 = pp2;
    this.p3 = pp3;
    this.p4 = pp4;
  }

  function Vect(xx, y) {
    this.dirPerUnitVect1.x = xx;
    this.dirPerUnitVect1.y = yy;
  }

  function vectMoi(vect1, vect2, vect3, vect4) {
    this.dirPerUnitVect1 = vect1;
  }

  var vector1 = new Vect(2, 3);
  var vector2 = new Vect(5, 2);
  var vector3 = new Vect(-2, 5);
  var vector4 = new Vect(0, 9);

  vectMoi(vector1,vector2,vector3,vector4);

  //'back...
  function unitUpdate(timeRelativeUnit) {
    this.p1;
  }

  //TODO moduloByScreenLimit
};

module.exports = JavAnim;
