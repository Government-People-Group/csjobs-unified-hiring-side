var locations2 = [
  "1 Horse Guards Rd, London SW1A 2HQ",
  "70 Whitehall, London SW1A 2AS",
  "35 Great Smith St, London SW1P 3BU",
  "6 Central Square, Cardiff CF10 1EP",
  "3 Glass Wharf, Bristol BS2 0EL",
  "3 Arena Central, Bridge St, Birmingham B1 2AX"
  "19 Saint Johns Road, Northampton NN91 9NY",
  "52 Main Road, Darlington DL0 8CM",
  "149 Broadway, Milton Keynes MK92 0PC",
  "53 The Avenue, Hereford HR73 2IW",
  "6 Mill Road, Edinburgh EH64 1ZE",
  "87 Church Lane, Lincoln LN43 7LP",
  "25 The Crescent, Cardiff CF10 1XC",
  "5 Victoria Street, Kingston Upon Thames KT37 2JH",
  "65 Norwood Rd, Herne Hill, London SE24 9AA"
  ]
  var element = document.querySelector('#locations2')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: locations2})
  
