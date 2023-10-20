document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('menu-toggle').addEventListener('click', function () {
      const menus = document.getElementById('menus');
      menus.style.display = menus.style.display === 'block' ? 'none' : 'block';
    });
    
      // Listen for window resize events
      window.addEventListener("resize", () => {
                // Check if the screen is larger than 760px
                if (window.innerWidth > 860) {
                    menus.style.display = 'flex';
                }
                else {
                 menus.style.display = 'none';
                 }
              
            });
})