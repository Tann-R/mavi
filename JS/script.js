let activePg="home"
function active(nav) {
  if (nav!=activePg) {
    document.getElementById(activePg).className="nav-inactive";
    document.getElementById(nav).className="nav-active";
    activePg=nav;
    if (nav=="home") {
      document.getElementById("main").innerHTML=home;
    }
    if (nav=="demographics") {
      document.getElementById("main").innerHTML=demographics;
    }
    if (nav=="history") {
      document.getElementById("main").innerHTML=history;
    }
    if (nav=="hooks") {
      document.getElementById("main").innerHTML=hooks;
    }
    if (nav=="ooc") {
      document.getElementById("main").innerHTML=ooc;
    }
  }
}

let home = '<h1>Virtue - Loyalty - Acceptance</h1>' +
    '<h2>"You don\'t need a reason to help people." -Zidane Tribal</h2>' +
    '<img src="./resources/mavi-shirt-pull.jpg" alt="An artistic depiction of a miqo\'te man tugging his shirt collar" title="Mavi Reshef" />' +
    '<div class="textbox">' +
    '<p>I am a content body for holding general or main information.</p>'
    '</div>'

let demographics = '<h1>Virtue - Loyalty - Acceptance</h1>' +
    '<h2>"You don\'t need a reason to help people." -Zidane Tribal</h2>' +
    '<img src="./resources/mavi-aiming.jpg" alt="A closeup of a miqo\'te man looking down the sights of a gun" title="Mavi Reshef" />' +
    '<div class="textbox">' +
    '<table>' +
    '<tr><td><b>Nickname(s) / AKA</b></td><td><b>: </b>tba</td></tr>' +
    '<tr><td><b>Age</b></td><td><b>: </b>tba</td></tr>' +
    '<tr><td><b>Sex / Gender</b></td><td><b>: </b>tba / tba (pronouns: tba)</td></tr>' +
    '<tr><td><b>Orientation</b></td><td><b>: </b>tba' +
    '<tr><td><b>Relationship Status</b></td><td><b>: </b>tba' +
    '<tr><td>&nbsp;</td><td>&nbsp;</td></tr>' +
    '<tr><td><b>Birthplace</b></td><td><b>: </b>tba</td></tr>' +
    '<tr><td><b>Homeland</b></td><td><b>: </b>tba</td></tr>' +
    '<tr><td><b>Residence</b></td><td><b>: </b>tba' +
    '<tr><td>&nbsp;</td><td>&nbsp;</td></tr>' +
    '<tr><td><b>Job</b></td><td><b>: </b> tba</td></tr>' +
    '<tr><td><b>Role</b></td><td><b>: </b>tba</td></tr>' +
    '</table>' +
    '</div>'

let history = '<h1>Virtue - Loyalty - Acceptance</h1>' +
    '<h2>"You don\'t need a reason to help people." -Zidane Tribal</h2>' +
    '<div class="box">' +
    '<img src="./resources/ishgard.jpg" alt="An artistic rendition of the Holy See of Ishgard" title="The Holy See of Ishgard"/>' +
    '<div class="textbox">' +
    '<p>I am a content body for holding history information.</p>' +
    '</div>' +
    '</div>' +
    '<div class="journalbox">' +
    '<p>I am a content body for holding a flavour-text quote.</p>' +
    '</div>' +
    '<div class="box">' +
    '<div class="textbox">' +
    '<p>I am a content body for holding history information.</p>' +
    '</div>' +
    '<img src="./resources/painted-uldah.jpg" alt="A watercolour painting of Ul\'dah, as viewed from high in the air" title="Ul\'dah"/>' +
    '</div>'

let hooks = '<h1>Virtue - Loyalty - Acceptance</h1>' +
    '<h2>"You don\'t need a reason to help people." -Zidane Tribal</h2>' +
    '<img src="./resources/mavi-pouring.jpg" alt="An image of a miqo\'te man pouring a drink" title="Mavi Reshef" />' +
    '<div class="textbox">' +
    '<p>I am a content body for holding hook information.</p>' +
    '</div>'

let ooc = '<h1>Virtue - Loyalty - Acceptance</h1>' +
    '<h2>"You don\'t need a reason to help people." -Zidane Tribal</h2>' +
    '<img src="./resources/ilya-reading.jpg" alt="A miqo\'te woman viewed from behind peruses a book" title="Ilyanith Vhas" />' +
    '<div class="textbox">' +
    '<p>I am a content body for holding OOC information.</p>' +
    '</div>' +
    '<br/><br/>' +
    '<div class="journalbox">' +
    '<p>Thank you for visiting!</p>' +
    '</div>'