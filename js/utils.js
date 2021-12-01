const expensiveComputation = multiplier => {
  const cpuThrottling = document.getElementById("cpu-throttle").value;
  multiplier = multiplier || 1;
  const min = Math.floor(100000 * cpuThrottling);
  const max = Math.floor(3000000 * cpuThrottling);
  const iterations = Math.floor(Math.random() * (max - min + 1) + min);
  let i = 0;
  while (i < iterations * multiplier) {
    i++;
  }
};

export { expensiveComputation };
