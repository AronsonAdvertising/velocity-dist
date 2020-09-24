function change(id) {
	var elem = document.getElementById("reveal" + id);
	if (elem.innerHTML == 'Collapse Key Features<span class="retract"></span>') elem.innerHTML = 'Expand Key Features<span class="expand"></span>';
	else elem.innerHTML = 'Collapse Key Features<span class="retract"></span>';
}