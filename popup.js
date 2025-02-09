document.getElementById('imageForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const generation = document.getElementById('generation').value;
    
    chrome.storage.local.get(['images'], (result) => {
      const images = result.images || [];
      const lastImage = images[images.length - 1];
      lastImage.brand = brand;
      lastImage.model = model;
      lastImage.generation = generation;
     
      chrome.storage.local.set({ images }, () => {
        window.close();
      });
    });
  });