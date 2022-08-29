//-----------Global function-----------

function domID(id) {
  return document.getElementById(id);
}
/**
 * Bài tập 1:
 */
function btnSapXep() {
  //input: lay 3 so user nhap
  var a = domID("number1").value * 1;
  var b = domID("number2").value * 1;
  var c = domID("number3").value * 1;
  var ketQua = "";

  //xuly
  if (a < b && b < c) {
    ketQua = "Số thứ 1" + " ," + "Số thứ 2" + " ," + "Số thứ 3";
  } else if (b < a && a < c) {
    ketQua = "Số thứ 2" + " ," + "Số thứ 1" + " ," + "Số thứ 3";
  } else if (a < c && c < b) {
    ketQua = "Số thứ 1" + " ," + "Số thứ 3" + " ," + "Số thứ 2";
  } else if (c < a && a < b) {
    ketQua = "Số thứ 3" + " ," + "Số thứ 1" + " ," + "Số thứ 2";
  } else if (b < c && c < a) {
    ketQua = "Số thứ 2" + " ," + "Số thứ 3" + " ," + "Số thứ 1";
  } else {
    ketQua = "Số thứ 3" + " ," + "Số thứ 2" + " ," + "Số thứ 1";
  }

  //output
  domID("showSapXep").innerHTML = ketQua;
}

/**
 * bài tập 2
 */

function btnChaoHoi() {
  //input: nhan du lieu cua nguoi dung
  var ten = domID("inputChaoHoi").value;

  var showChaoHoi = "";

  //Xu ly
  switch (ten) {
    case "B":
      showChaoHoi = "Xin chào Bố";
      break;
    case "M":
      showChaoHoi = "Xin chào Mẹ";
      break;
    case "A":
      showChaoHoi = "Xin chào Anh trai";
      break;
    default:
      showChaoHoi = "Xin chào Em gái";
  }

  //output
  domID("showChaoHoi").innerHTML = showChaoHoi;
}

/**
 * Bài tập 3
 */

function kiemTraBaiTap3() {
  //input: nhan du lieu user
  var num1 = domID("soThuNhat").value * 1;
  var num2 = domID("soThuHai").value * 1;
  var num3 = domID("soThuBa").value * 1;

  //xu ly
  ketQua = "";
  var soChan = 0;

  if (num1 % 2 === 0) {
    soChan++;
  }
  if (num2 % 2 === 0) {
    soChan++;
  }
  if (num3 % 2 === 0) {
    soChan++;
  }

  var soLeLa = 3 - soChan;
  //output
  domID("showBaiTap3").innerHTML =
    "Có: " + soChan + " số chẵn," + " và " + soLeLa + " số lẻ";
}

/**
 * Bài tập 4
 */

function kiemTraTamGiac() {
  //input: lay du lieu user nhap vao
  var canh1 = domID("canh1").value * 1;
  var canh2 = domID("canh2").value * 1;
  var canh3 = domID("canh3").value * 1;

  ketQua = "";
  //binh phuong cac canh
  var powCanh1 = Math.pow(canh1, 2);
  var powCanh2 = Math.pow(canh2, 2);
  var powCanh3 = Math.pow(canh3, 2);

  //xu ly
  if (canh1 == canh2 && canh2 == canh3) {
    ketQua = "Đây là tam giác đều";
  } else if (
    powCanh1 == powCanh2 + powCanh3 ||
    powCanh2 == powCanh1 + powCanh3 ||
    powCanh3 == powCanh1 + powCanh2
  ) {
    ketQua = "Đây là tam giác vuông";
  } else if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
    ketQua = "Đây là tam giác cân";
  } else {
    ketQua = "Tam giác khác";
  }

  domID("showKetQuaBai4").innerHTML = ketQua;
}

/**
 * Bài tập 5
 */

function baiTap5NgayMai() {
  //input: nhan du lieu user nhap vao
  var day = domID("day").value * 1;
  var month = domID("month").value * 1;
  var year = domID("year").value * 1;

  //xu ly

  var ngayTrongThang = 0;
  var tomorrowDay = 0;
  var tomorrowMonth = 0;

  ketQua = "";
  //ngay thang nam tiep theo
  if (month == 1) {
    ngayTrongThang = 31;
    if (day == 31) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  } else if (month == 2) {
    if (year % 4 === 0) {
      ngayTrongThang = 29;
      if (day == 29) {
        tomorrowDay = 1;
        tomorrowMonth = month + 1;
      } else {
        tomorrowDay = day + 1;
        tomorrowMonth = month;
      }
    }

    if (year % 400 === 0) {
      ngayTrongThang = 29;
      if (day == 29) {
        tomorrowDay = 1;
        tomorrowMonth = month + 1;
      } else {
        tomorrowDay = day + 1;
        tomorrowMonth = month;
      }
    } else {
      ngayTrongThang = 28;
      if (day == 28) {
        tomorrowDay = 1;
        tomorrowMonth = month + 1;
      } else {
        tomorrowDay = day + 1;
        tomorrowMonth = month;
      }
    }
  } else if (month == 3) {
    ngayTrongThang = 31;
    if (day == 31) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  } else if (month == 4) {
    ngayTrongThang = 30;
    if (day == 30) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  } else if (month == 5) {
    ngayTrongThang = 31;
    if (day == 31) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  } else if (month == 6) {
    ngayTrongThang = 30;
    if (day == 30) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  } else if (month == 7) {
    ngayTrongThang = 31;
    if (day == 31) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  } else if (month == 8) {
    ngayTrongThang = 31;
    if (day == 31) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  } else if (month == 9) {
    ngayTrongThang = 30;
    if (day == 30) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  } else if (month == 10) {
    ngayTrongThang = 31;
    if (day == 31) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  } else if (month == 11) {
    ngayTrongThang = 30;
    if (day == 30) {
      tomorrowDay = 1;
      tomorrowMonth = month + 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  } else if (month == 12) {
    ngayTrongThang = 31;
    if (day == 31) {
      tomorrowDay = 1;
      tomorrowMonth = 1;
      year += 1;
    } else {
      tomorrowDay = day + 1;
      tomorrowMonth = month;
    }
  }

  ketQua =
    "Ngày mai là: " + tomorrowDay + " tháng " + tomorrowMonth + " năm " + year;

  //output
  domID("showBaiTap5").innerHTML = ketQua;
}

//NGAY HOM QUA

function baiTap5HomQua() {
  //input: nhan du lieu user nhap vao
  var day = domID("day1").value * 1;
  var month = domID("month1").value * 1;
  var year = domID("year1").value * 1;

  //xu ly

  var yesterday = 0;
  var yesterdayMonth = 0;
  ketQua = "";

  //ngay thang nam hom qua
  if (month == 1) {
    if (day == 1) {
      yesterday = 31;
      yesterdayMonth = 12;
      year = year - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  } else if (month == 2) {
    if (day == 1) {
      yesterday = 31;
      yesterdayMonth = month - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  } else if (month == 3) {
    if (year % 4 === 0) {
      if (day == 1) {
        yesterday = 29;
        yesterdayMonth = month - 1;
      } else {
        yesterday = day - 1;
        yesterdayMonth = month;
      }
    }
    if (year % 400 === 0) {
      if (day == 1) {
        yesterday = 29;
        yesterdayMonth = month - 1;
      } else {
        yesterday = day - 1;
        yesterdayMonth = month;
      }
    } else {
      if (day == 1) {
        yesterday = 28;
        yesterdayMonth = month - 1;
      } else {
        yesterday = day - 1;
        yesterdayMonth = month;
      }
    }
  } else if (month == 4) {
    if (day == 1) {
      yesterday = 31;
      yesterdayMonth = month - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  } else if (month == 5) {
    if (day == 1) {
      yesterday = 30;
      yesterdayMonth = month - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  } else if (month == 6) {
    if (day == 1) {
      yesterday = 31;
      yesterdayMonth = month - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  } else if (month == 7) {
    if (day == 1) {
      yesterday = 30;
      yesterdayMonth = month - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  } else if (month == 8) {
    if (day == 31) {
      yesterday = 1;
      yesterdayMonth = month - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  } else if (month == 9) {
    if (day == 1) {
      yesterday = 31;
      yesterdayMonth = month - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  } else if (month == 10) {
    if (day == 1) {
      yesterday = 30;
      yesterdayMonth = month - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  } else if (month == 11) {
    if (day == 1) {
      yesterday = 31;
      yesterdayMonth = month - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  } else if (month == 12) {
    if (day == 1) {
      yesterday = 30;
      yesterdayMonth = month - 1;
    } else {
      yesterday = day - 1;
      yesterdayMonth = month;
    }
  }

  ketQua =
    "Ngày hôm qua là: " +
    yesterday +
    " tháng " +
    yesterdayMonth +
    " năm " +
    year;

  //output
  domID("showBaiTap5HomQua").innerHTML = ketQua;
}

/**
 * Bài tập 6
 */

function baiTap6() {
  //input: nhan du lieu user nhap vao
  var month = domID("thang").value * 1;
  var year = domID("nam").value * 1;

  ketQua = "";

  //xu ly

  switch (month) {
    case 1:
      ketQua = "Tháng này có 31 ngày";
      break;
    case 2:
      if (year % 4 === 0) {
        ketQua = "Tháng này có 29 ngày";
      }
      if (year % 400 === 0) {
        ketQua = "Tháng này có 29 ngày";
      } else {
        ketQua = "Tháng này có 28 ngày";
      }
      break;
    case 3:
      ketQua = "Tháng này có 31 ngày";
      break;
    case 4:
      ketQua = "Tháng này có 30 ngày";
      break;
    case 5:
      ketQua = "Tháng này có 31 ngày";
      break;
    case 6:
      ketQua = "Tháng này có 30 ngày";
      break;
    case 7:
      ketQua = "Tháng này có 31 ngày";
      break;
    case 8:
      ketQua = "Tháng này có 31 ngày";
      break;
    case 9:
      ketQua = "Tháng này có 30 ngày";
      break;
    case 10:
      ketQua = "Tháng này có 31 ngày";
      break;
    case 11:
      ketQua = "Tháng này có 30 ngày";
      break;
    case 12:
      ketQua = "Tháng này có 31 ngày";
      break;
  }

  //output
  domID("showBaiTap6").innerHTML = ketQua;
}

/**
 * Bài tập 7
 */

function baiTap7() {
  //input: nhan du lieu user nhập vào
  var number = domID("number").value * 1;

  var docSoHangChuc = "";
  var docSoHangTram = "";
  var docSoHangDV = "";

  //xuly
  var soHangChuc = number % 100;
  if (soHangChuc < 0) {
    soHangChuc *= -1;
    var soHangTram = number + soHangChuc;
  } else {
    var soHangTram = number - soHangChuc;
  }

  var soHangDV = soHangChuc % 10;
  var soHangChucLamTron = Math.floor(soHangChuc / 10);

  //xu ly cach goi hang tram, hang chuc, hang don vi
  if (soHangChucLamTron == 0) {
    if (soHangDV == 0) {
      docSoHangChuc = "chẵn";
    } else {
      docSoHangChuc = "lẻ";
    }
  } else if (soHangChucLamTron == 1) {
    if (soHangDV == 0) {
      docSoHangChuc = "lẻ mười";
    } else {
      docSoHangChuc = "mười";
    }
  } else if (soHangChucLamTron == 2) {
    docSoHangChuc = "hai mươi";
  } else if (soHangChucLamTron == 3) {
    docSoHangChuc = "ba mươi";
  } else if (soHangChucLamTron == 4) {
    docSoHangChuc = "bốn mươi";
  } else if (soHangChucLamTron == 5) {
    docSoHangChuc = "năm mươi";
  } else if (soHangChucLamTron == 6) {
    docSoHangChuc = "sáu mươi";
  } else if (soHangChucLamTron == 7) {
    docSoHangChuc = "bảy mươi";
  } else if (soHangChucLamTron == 8) {
    docSoHangChuc = "tám mươi";
  } else if (soHangChucLamTron == 9) {
    docSoHangChuc = "chín mươi";
  }

  switch (soHangDV) {
    case 1:
      docSoHangDV = "một";
      break;
    case 2:
      docSoHangDV = "hai";
      break;
    case 3:
      docSoHangDV = "ba";
      break;
    case 4:
      docSoHangDV = "bốn";
      break;
    case 5:
      docSoHangDV = "năm";
      break;
    case 6:
      docSoHangDV = "sáu";
      break;
    case 7:
      docSoHangDV = "bảy";
      break;
    case 8:
      docSoHangDV = "tám";
      break;
    case 9:
      docSoHangDV = "chín";
      break;
  }

  switch (soHangTram) {
    case -100:
      docSoHangTram = "Âm một trăm";
      break;
    case -200:
      docSoHangTram = "Âm hai trăm";
      break;
    case -300:
      docSoHangTram = "Âm ba trăm";
      break;
    case -400:
      docSoHangTram = "Âm bốn trăm";
      break;
    case -500:
      docSoHangTram = "Âm năm trăm";
      break;
    case -600:
      docSoHangTram = "Âm sáu trăm";
      break;
    case -700:
      docSoHangTram = "Âm bảy trăm";
      break;
    case -800:
      docSoHangTram = "Âm tám trăm";
      break;
    case -900:
      docSoHangTram = "Âm chín trăm";
      break;
    case 100:
      docSoHangTram = "Một trăm";
      break;
    case 200:
      docSoHangTram = "Hai trăm";
      break;
    case 300:
      docSoHangTram = "Ba trăm";
      break;
    case 400:
      docSoHangTram = "Bốn trăm";
      break;
    case 500:
      docSoHangTram = "Năm trăm";
      break;
    case 600:
      docSoHangTram = "Sáu trăm";
      break;
    case 700:
      docSoHangTram = "Bảy trăm";
      break;
    case 800:
      docSoHangTram = "Tám trăm";
      break;
    case 900:
      docSoHangTram = "Chín trăm";
      break;
  }

  //output
  domID("showBaiTap7").innerHTML =
    docSoHangTram + " " + docSoHangChuc + " " + docSoHangDV;
}

/**
 * Bài tập 8
 */

function baiTap8() {
  //input lay du lieu user nhap vao
  var tenA = domID("tenA").value;
  var tenB = domID("tenB").value;
  var tenC = domID("tenC").value;

  //toa do X
  var xA = domID("xA").value * 1;
  var xB = domID("xB").value * 1;
  var xC = domID("xC").value * 1;
  var xT = domID("xT").value * 1;

  //toa do Y
  var yA = domID("yA").value * 1;
  var yB = domID("yB").value * 1;
  var yC = domID("yC").value * 1;
  var yT = domID("yT").value * 1;

  //khoang cach
  var distanceA = 0;
  var distanceB = 0;
  var distanceC = 0;

  ketQua = "";
  // xu ly
  var distanceA = Math.sqrt(Math.pow(xT - xA, 2) + Math.pow(yT - yA, 2));
  var distanceB = Math.sqrt(Math.pow(xT - xB, 2) + Math.pow(yT - yB, 2));
  var distanceC = Math.sqrt(Math.pow(xT - xC, 2) + Math.pow(yT - yC, 2));

  if (distanceA <= distanceB && distanceB < distanceC) {
    ketQua = "Sinh viên " + tenC + " ở xa nhất";
  } else if (distanceC <= distanceA && distanceA < distanceB) {
    ketQua = "Sinh viên " + tenB + " ở xa nhất";
  } else if (distanceC <= distanceB && distanceB < distanceA) {
    ketQua = "Sinh viên " + tenA + " ở xa nhất";
  }

  //output
  domID("showBaiTap8").innerHTML = ketQua;
}
