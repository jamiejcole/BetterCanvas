/*
    This script automatically clicks the sign in
    button on the following website
    https://canvas.nbcs.nsw.edu.au/
*/

// window.addEventListener('load', main, false);
// function main(event) {
//   // Hiding useless canvas courses
//   var element1 = document.querySelector('[aria-label="CC Student Services Team"]');
//   var element2 = document.querySelector('[aria-label="Secondary Library"]');
//   element1.style.display = 'none';
//   element2.style.display = 'none';

//   // Math Ext 1
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(1) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/RTkJOqS.png')";
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(1) > div > a > div > h3 > span").innerText = "Maths Extension 1";

//   // Math Ext 1
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(2) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/WwO3dJ2.png')";
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(2) > div > a > div > h3 > span").innerText = "Maths Advanced";

//   // English Classwork
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(3) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/kdm18aQ.png')";
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(3) > div > a > div > h3 > span").innerText = "English Advanced";

//   // IPT
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(4) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/Let084a.png')";
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(4) > div > a > div > h3 > span").innerText = "IPT";

//   // SDD
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(5) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/x1FbrJu.png')";
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(5) > div > a > div > h3 > span").innerText = "SDD";

//   // English Assessments
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(6) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/5lxtaRf.png')";
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(6) > div > a > div > h3 > span").innerText = "English Assessments";

//   // Engineering
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(7) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/m1f9Ogn.png')";
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(7) > div > a > div > h3 > span").innerText = "Engineering";

//   // Grade Info
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(7) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/cIDNM7J.png')";
//   document.querySelector("#DashboardCard_Container > div > div > div:nth-child(7) > div > a > div > h3 > span").innerText = "Grade Information";
// }


// ### Old code for running multiple times until completed
// Run main() after the page is loaded
window.addEventListener('load', main, false);
function main(event) {

  // Every 1000 ms, run try_click()
  var timer = setInterval(try_click, 300);
  // Stop trying after 10 attempts.
  var max_attempts = 2;

  function try_click() {
    max_attempts -= 1;
    if (max_attempts > 0) {
      // Hiding useless canvas courses
      var element1 = document.querySelector('[aria-label="CC Student Services Team"]');
      var element2 = document.querySelector('[aria-label="Secondary Library"]');
      element1.style.display = 'none';
      element2.style.display = 'none';

      // Math Ext 1
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(1) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/RTkJOqS.png')";
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(1) > div > a > div > h3 > span").innerText = "Maths Extension 1";

      // Math Ext 1
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(2) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/WwO3dJ2.png')";
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(2) > div > a > div > h3 > span").innerText = "Maths Advanced";

      // English Classwork
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(3) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/kdm18aQ.png')";
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(3) > div > a > div > h3 > span").innerText = "English Advanced";

      // IPT
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(4) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/Let084a.png')";
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(4) > div > a > div > h3 > span").innerText = "IPT";

      // SDD
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(5) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/x1FbrJu.png')";
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(5) > div > a > div > h3 > span").innerText = "SDD";

      // English Assessments
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(6) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/5lxtaRf.png')";
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(6) > div > a > div > h3 > span").innerText = "English Assessments";

      // Engineering
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(7) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/m1f9Ogn.png')";
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(7) > div > a > div > h3 > span").innerText = "Engineering";

      // Grade Info
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(8) > div > div.ic-DashboardCard__header_image ").style.backgroundImage = "url('https://i.imgur.com/cIDNM7J.png')";
      document.querySelector("#DashboardCard_Container > div > div > div:nth-child(8) > div > a > div > h3 > span").innerText = "Grade Information";
    }
  }
}