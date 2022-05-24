const easingFn = function (t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
    }
  const options = {
    startVal: 510,
    duration: 10,
    easingFn,
  };
  let demo = new CountUp('myTargetElement', 520, options);
  if (!demo.error) {
    demo.start();
  } else {
    console.error(demo.error);
  }