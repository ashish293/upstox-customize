let text = document.querySelector(".code");

function copyToClipBoard() {
	const textarea = document.createElement("textarea");
	textarea.setAttribute("readonly", "");
	textarea.value = text.innerText;
	textarea.style.position = "absolute";
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}
