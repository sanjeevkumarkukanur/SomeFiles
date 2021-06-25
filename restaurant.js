function restaurant(a, b, t) {

  let vacancies = {
    ones: a,
    twos: b,
    semiVacantTwos: 0
  }

  let denied = 0;

  for (let n of t) {
    if (n === 1) {
      if (vacancies.ones > 0) {
        vacancies.ones -= 1;
      }
      else if (vacancies.twos > 0) {
        vacancies.twos -= 1;
        vacancies.semiVacantTwos += 1;
      }
      else if (vacancies.semiVacantTwos > 0) {
        vacancies.semiVacantTwos -= 1;
      } else {
        denied += 1;
      }
    } else {
      if (vacancies.twos > 0) {
        vacancies.twos -= 1;
      } else {
        denied += 2;
      }
    }
  }
  return denied;

}

//console.log(restaurant(1, 2, [1, 2, 1, 1]));

//console.log(restaurant(0, 2, [1, 1, 2]));

//console.log(restaurant(1, 1, [1, 1, 2, 1]));
//console.log(restaurant(2, 1, [2,1,2,2,2,2,1,2,1,2]));

describe("restaurant tests", function() {
  it("basic tests", function() {
    [
      {a:1, b:2, t:[1,2,1,1], ans:0},
      {a:1, b:1, t:[1,1,2,1], ans:2}
    ].forEach(t=>
      Test.assertEquals(restaurant(t.a,t.b,t.t), t.ans, `wrong answer in test a=${t.a}, b=${t.b}, t=[${t.t}]`)
    );
  });
});
