const sumar = require("../index");
const assert = require("assert");
// Asserts = Afirmación
describe("Probar la suma de dos numeros", ()=>{
  //Afirmamos que cinco mas siete es 12
  it("cinco mas siete son 12", ()=>{
    assert.equal(12, sumar(5,7));
  });
  //Afirmamos que cinco mas siete no son 57
  it("cinco mas 7 no son 57", ()=>{
    assert.notEqual("57", sumar(5,7));
  });
});
