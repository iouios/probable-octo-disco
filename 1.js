function FocusBox(T) {
    T.style.background = "yellow";
  }
  
  function BlurBox(T) {
    T.style.background = "white";
  }
  
  function Submit() {
    let NameInput = document.getElementById("NameInput");
    let Name = NameInput.value;
    console.log(Name);
    let SurnameInput = document.getElementById("SurnameInput");
    let Surname = SurnameInput.value;
    console.log(Surname);
    let Date = document.getElementById("DateInput");
    let BirthDate = DateInput.value;
    console.log(BirthDate);
    let langauge = document.getElementById("menu");
    choose = langauge.value;
    console.log(choose);
  
    let Output = document.getElementById("Output");
    Output.innerHTML =
      '<span style="color: green;">' +
      Name +
      " , " +
      Surname +
      " , " +
      BirthDate +
      " , " +
      choose +
      "</span>";
  }
  
  function removeInstName() {
    document.getElementById("InsertName").innerHTML = "";
  }
  function removeInstSur() {
    document.getElementById("InsertSur").innerHTML = "";
  }
  function removeInstBD() {
    document.getElementById("InsertBD").innerHTML = "";
  }
  function removeSelLang() {
    document.getElementById("SelectLang").innerHTML = "";
  }