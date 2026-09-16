
// connection sign

console.log("js connnected!!!!!")

var menubar=document.getElementById("menubar").style;

let menu=()=>{

menubar.left="2%";
}
let mn_cls=()=>{
menubar.left="-70%";
}




const API_URL = "https://script.google.com/macros/s/AKfycbzLYm9vZogSx7osKpOXCN84bUeQRpHIf2lCN_vxxxyd8dHzQfltgnTgV6RuovNlhVsG/exec";


async function submitData() {

  const cryptoResult = cryptohash(crypto);

  console.log("Crypto Result:", cryptoResult);

  if (cryptoResult !== true) {
    console.log("Crypto verification failed.");
    return;
  }

  const employeeId = document.getElementById("employeeId").value.trim();
  const employeeName = document.getElementById("employeeName").value.trim();

  if (!employeeId || !employeeName) {
    alert("Employee ID ans Employee Name are required.");
    return;
  }

  const now = new Date();

  const loginDate = now.toLocaleDateString("en-CA");

  const loginTime = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const data = {
    employeeId: employeeId,
    employeeName: employeeName,
    loginTime: loginTime,
    loginDate: loginDate
  };

  try {

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();



    if (result.success) {

      // alert(result.message);

      document.getElementById("employeeId").value = "";
      document.getElementById("employeeName").value = "";
      document.getElementById("").value = "";
    } else {
console.error("ERROR:NETWORK ISSUE: DATASHEET~>404");
    }

  } catch (error) {

    console.error("API Error:", error);
    alert("SERVER ISSUE: Query failed");

  }
}
