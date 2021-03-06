var test = require('tape')
var mingo = require('../../dist/mingo')
var samples = require('../support')

test("$skip pipeline operator", function (t) {
  t.plan(1);
  var result = mingo.aggregate(samples.studentsData, [
    { '$skip': 100 }
  ]);
  t.ok(result.length === samples.studentsData.length - 100, "can skip result with $skip");
});