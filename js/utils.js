const expensiveComputation = multiplier => {
  const cpuThrottling = document.getElementById("cpu-throttle").value;
  console.log(cpuThrottling);
  multiplier = multiplier || 1;
  const min = Math.floor(100000 * cpuThrottling);
  const max = Math.floor(3000000 * cpuThrottling);
  console.log(min, max);
  const iterations = Math.floor(Math.random() * (max - min + 1) + min);
  let i = 0;
  while (i < iterations * multiplier) {
    i++;
  }
};

export { expensiveComputation };
