import pk from '../assets/kushi.png';
const List_of_user_set = [
  {
    name: 'Ishan Sharma',
    location: 'Asansol west Bengal',
    phone: 8279821731,
    img: "https://imgs.search.brave.com/Qy68j2UtaJIAq4lmlI9qxi7XYbStRPzBCuAqutXfYGg/rs:fit:416:416:1/g:ce/aHR0cHM6Ly9zcGVj/aWFscy1pbWFnZXMu/Zm9yYmVzaW1nLmNv/bS9pbWFnZXNlcnZl/LzViZTBkY2RhNGJi/ZTZmNzhiZGE3MGJj/My80MTZ4NDE2Lmpw/Zz9iYWNrZ3JvdW5k/PTAwMDAwMCZjcm9w/WDE9MTU1JmNyb3BY/Mj0xODExJmNyb3BZ/MT0xMDMmY3JvcFky/PTE3NTk",
    blood: 'A+',
  },
  {
    name: 'Rahul sarkar ',
    location: 'Asansol west Bengal',
    phone: 8279821731,
    img: "https://imgs.search.brave.com/GP1ICAA5Q2MUm-Ij3QnR348MNoOgIgAMp3OoEpqfe6k/rs:fit:600:706:1/g:ce/aHR0cHM6Ly9yYW5r/bXlhZ2VudC5jb20v/bWVkaWEvMjAxOC8w/NC9OaWstU2hhcm1h/LU5ldy1QaG90by1K/dW5lLTIwMTUtY29w/eTEuanBn",
    blood: 'B+',
  },
  {
    name: 'shiva Gupta',
    location: 'Asansol college road west Bengal',
    phone: 8279889731,
    img: "https://imgs.search.brave.com/yBRXXjIcuqKt9HLM9_TYh7Q6MyilWMRBQXyNGzL-NY0/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9kb2N0/aWZ5LmNvbS9wdWJs/aWMvaW1hZ2VzL2F0/aGVuYS11ay9wcmFj/dGljZS9pbWFnZXMv/ZHJfbmlrX3NoYXJt/L2RyX25pa19zaGFy/bS4wLmpwZ19sZy5q/cGc",
    blood: 'A+',
  },
  {
    name: 'Prity Sharma',
    location: ' BNR Road Asansol  west Bengal',
    phone: 9079889731,
    img: "https://imgs.search.brave.com/fJFsVQ2TRGdKPIX9O0R-B35YgHmxV2kxlipvNT88lyQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/YmhPTVJvZU5yak10/T0NSUmlYRnRRSGFI/YSZwaWQ9QXBp",
    blood: 'B+',
  },
  {
    name: 'Raj Gupta',
    location: ' Durgapur Asansol  west Bengal',
    phone: 9078909731,
    img: "https://images.unsplash.com/photo-1599475735868-a8924c458792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBib3l8ZW58MHx8MHx8&w=1000&q=80",
    blood: 'B+',
  },
  {
    name: 'Neetu Singh',
    location: ' Hari Mandir  west Bengal',
    phone: 4579909731,
    img: "https://imgs.search.brave.com/ptKSCnO3757IO41q7kDDrmFlV-VJrZoVEPPKUOEVubc/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/WTFJam1kNXdRNEh0/TGU2SVM5Zk5nSGFM/SCZwaWQ9QXBp",
    blood: 'B+',
  },
  {
    name: 'Sanjita Singh',
    location: ' Hari   west Bengal',
    phone: 4579966731,
    img: "https://imgs.search.brave.com/WvNKRi3JtEsLdNyvbJugpPPtnCAWHVyp_UXpCw9K35M/rs:fit:500:500:1/g:ce/aHR0cHM6Ly93d3cu/cm93bGFuZC5jb20u/YXUvd3AtY29udGVu/dC91cGxvYWRzL05p/ZGhpLUd1cHRhLVdF/Qi01MDAlRUYlODAl/QTE1MDAuanBn",
    blood: 'B+',
  },
  {
    name: 'khushi Singh',
    location: ' Hari  west Bengal',
    phone: 7267799778,
    img: "https://imgs.search.brave.com/mdMf855_cTaDFyGS0yFMYACM-HC4KhqxQG-WcBZyh94/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS81ODE5MDg2/NjI0Mjc2NDgtMTUx/NTc0OTI0NDAyNV9R/NTEyL05pZGhpX0d1/cHRhMjcuanBn",
    blood: 'B+',
  },
  {
    name: 'khushi Singh',
    location: ' Hari  west Bengal',
    phone: 7267799778,
    img: "https://imgs.search.brave.com/mdMf855_cTaDFyGS0yFMYACM-HC4KhqxQG-WcBZyh94/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS81ODE5MDg2/NjI0Mjc2NDgtMTUx/NTc0OTI0NDAyNV9R/NTEyL05pZGhpX0d1/cHRhMjcuanBn",
    blood: 'B+',
  }
];
export default List_of_user_set;