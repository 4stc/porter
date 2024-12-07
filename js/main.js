/* mobile navigation menu */
function nav_menu() {
	var nav = document.getElementById("menu");
	if (nav.style.display === "block")
		nav.style.display = "none";
	else
		nav.style.display = "block";
}

/* menu button click detection */
var btn_nav = document.getElementById("nav-btn");
btn_nav.addEventListener("click",nav_menu);

/* toggle optional form inputs via checkboxes */
function form_mail() {
	var chk_mail = document.getElementById("chk-mail");
	var mail = document.getElementById("mail");
	if (chk_mail.checked == true)
		mail.style.display = "block";
	else
		mail.style.display = "none";
}
function form_phone() {
	var chk_phone = document.getElementById("chk-phone");
	var phone = document.getElementById("phone");
	if (chk_phone.checked == true)
		phone.style.display = "block";
	else
		phone.style.display = "none";
}
function form_website() {
	var chk_website = document.getElementById("chk-website");
	var website = document.getElementById("website");
	if (chk_website.checked == true)
		website.style.display = "block";
	else
		website.style.display = "none";
}

/* checkboxes click detection */
var chk_mail = document.getElementById("chk-mail");
chk_mail.addEventListener("click",form_mail);
var chk_phone = document.getElementById("chk-phone");
chk_phone.addEventListener("click",form_phone);
var chk_website = document.getElementById("chk-website");
chk_website.addEventListener("click",form_website);

/* deselect checkboxes when clearing form */
function form_clear() {
	document.getElementById("mail").style.display = "none"
	document.getElementById("phone").style.display = "none"
	document.getElementById("website").style.display = "none"
}

function progress() {
	var classes = 0;
	var done = 0;
	var have_credits = 0;
	var need_credits = 0;
	var table = document.getElementById("classes")
	for (var i=1,r; r=table.rows[i]; i++) {
		classes++;
		if (r.cells[0].innerHTML === "Yes") {
			done++;
			have_credits += Number(r.cells[3].innerHTML);
			r.cells[0].style.color = "#00E100";
		}else {
			r.cells[0].style.color = "#E10000";
			need_credits += Number(r.cells[3].innerHTML);
		}
	}
	document.getElementById("done").textContent
		+= " " + Math.round(done/classes*100)+'%';
	document.getElementById("credits").textContent
		+= " " + have_credits + " of "
		+ (have_credits+need_credits);
}
