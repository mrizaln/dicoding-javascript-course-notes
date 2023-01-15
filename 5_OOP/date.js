// built-in class: Date

// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate1 = new Date(); 
    
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const dateString = "Jan 12, 2119";
const myDate2 = new Date(dateString); 
    
// #3 parameter dalam bentuk number, misal 87400000
const miliseconds = 324736284328746;
const myDate3 = new Date(miliseconds); 
    
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
let year, month, date, hour, minute, second, millisecond;
const myDate4 = new Date(year,month,date,hour,minute,second,millisecond); 


// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
    
    const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);
    
    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
  };
  
  console.log(myAge('1893-11-22')); // 129 tahun