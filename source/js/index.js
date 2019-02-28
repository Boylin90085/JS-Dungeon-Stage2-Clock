(function () {
  let d
  let h
  let m
  let s

  let hour = document.getElementById('hour')
  let min = document.getElementById('min')
  let sec = document.getElementById('sec')

  let setClock = () => {
    d = new Date()
    h = d.getHours()
    m = d.getMinutes()
    s = d.getSeconds()
    
    console.log(h, m, s)
    hour.style.transform = `rotate(${((h/12)*360) + ((m/60)*30) + 270}deg)`
    min.style.transform = `rotate(${(m/60)*360 + 180}deg)`
    sec.style.transform = `rotate(${(s/60)*360 + 180}deg)`
  }
  setInterval(setClock, 1000)
})()