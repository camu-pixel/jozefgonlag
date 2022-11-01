window.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('.menu-overlay').forEach(item => {
		item.addEventListener("click", () => {
			const sidebarEl = document.getElementsByClassName("sidebar")[0];
			sidebarEl.classList.toggle("sidebar--isHidden");

			if(sidebarEl.classList.contains("sidebar--isHidden")){
				document.getElementById("toggle").innerHTML = '<i class="fas fa-bars fa-xl"></i>';
				document.getElementById("overlay").style.display = "none";
			}
			else{
				document.getElementById("toggle").innerHTML = '<i class="fas fa-bars fa-xl text-black"></i>';
				document.getElementById("overlay").style.display = "block";
			}
		});
	});
});
