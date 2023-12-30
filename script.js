//your JS code here. If required.
function updateSizeInfo() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  const sizeInfoElement = document.getElementById('windowSize');
  sizeInfoElement.textContent = `Width: ${width}px, Height: ${height}px`;
}

// Initial size
updateSizeInfo();

// Event listener for window resize
window.addEventListener('resize', updateSizeInfo);