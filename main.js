const showAlert = () => {
  Swal.fire({
    title: "Unlocking on <br> <span style='color:#F9CEA9'>23rd Feb</span>",
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Thx for waiting',
        '',
        'success'
      )
    }
  })
}
const showMsg = () => {
  Swal.fire({
    title: 'Pray for him to join <span style="color:#5865F2">Discord</span> 🙏',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Pray',
    denyButtonText: `Deny`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('<span style="color:#A4DC85">+1</span><br>Your pray has been counted 🙏', '', 'success')
    } else if (result.isDenied) {
      Swal.fire("Your sins 're increasing 😡", '', 'info')
    }
  })
}
const ChangeBackground = () => {
  var element = document.body;
  element.classList.toggle("light-mode");
}
String.prototype.equalsIgnoreCase = function(compareString) {
  return this.toUpperCase() === compareString.toUpperCase();
};
const openPage = () => {
  var input = document.getElementById("inputab").value
  if (
    input.equalsIgnoreCase("home") ||
    input.equalsIgnoreCase("home page")
  )
    window.location.href = "https://anonymousparadox890.github.io/rahul-raj/index.html"
  else if (
    input.equalsIgnoreCase("apple") ||
    input.equalsIgnoreCase("apple style page") ||
    input.equalsIgnoreCase("apple styled page") ||
    input.equalsIgnoreCase("apple page")
  )
    window.location.href = "https://anonymousparadox890.github.io/rahul-raj/apple.html"
  else if (
    input.equalsIgnoreCase("insta") ||
    input.equalsIgnoreCase("insta styled page") ||
    input.equalsIgnoreCase("insta style page") ||
    input.equalsIgnoreCase("insta page") ||
    input.equalsIgnoreCase("instagram") ||
    input.equalsIgnoreCase("instagram styled page") ||
    input.equalsIgnoreCase("instagram style page") ||
    input.equalsIgnoreCase("instagram page")
  )
    window.location.href = "https://anonymousparadox890.github.io/rahul-raj/insta.html"
  else if (input === "")
  {
    Swal.fire('Atleast write something')
  }
  else {
    Swal.fire({
      title: "No page as <span style='color:#D14629'>" + input + "</span> found",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Show Pages Name List',
      denyButtonText: `Cancel`,
      footer: "<a style='color:lightblue' href=''>" + new Date().toLocaleString('en-us', { weekday: 'long' }) + " (" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + ")</a>",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('List\n <span style="color:A4DD86">Home\nApple\nInstagram</span>', '', 'success')
      }
    })
  }
}
const searchbar = (key) => {
  let input = document.getElementById("inputab").value;
  if(key.keyCode === 13){
    document.getElementById("submitab").click()
  }
}