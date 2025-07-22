//your JS code here. If required.
const output = document.getElementById('output');
function createRandomPromise(name) {
  const delay = Math.random() * 2 + 1;
  const start = performance.now();
  return new Promise(resolve => {
    setTimeout(() => {
      const end = performance.now();
      const timeTaken = ((end - start) / 1000).toFixed(3);
      resolve({ name, time: timeTaken });
    }, delay * 1000);
  });
}
const promises = [
  createRandomPromise('Promise 1'),
  createRandomPromise('Promise 2'),
  createRandomPromise('Promise 3')
];

const startAll = performance.now();

Promise.all(promises).then(results => {
  const endAll = performance.now();
  const totalTime = ((endAll - startAll) / 1000).toFixed(3);

  const loadingRow = document.getElementById('loading-row');
  if (loadingRow) loadingRow.remove();

  results.forEach(result => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${result.name}</td>
      <td>${result.time}</td>
    `;
    output.appendChild(row);
  });

  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime}</strong></td>
  `;
  output.appendChild(totalRow);
});
