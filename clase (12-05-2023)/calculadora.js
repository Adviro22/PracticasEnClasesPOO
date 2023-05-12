class Calculadora{
    suma(){
        let n1=0, n2=0, s=0
        n1 = parseFloat(document.getElementById("num1").value)
        n2 = parseFloat(document.getElementById("num2").value)
        console.log(n1,n2)
        let resp = document.getElementById("resp")
        console.log("Antes de la suma: ",resp)
        s = n1 + n2
        let men = n1.toString()+" + "+n2.toString()+" = "+s.toString()
        resp.textContent = men
        console.log("Antes de la suma: ",resp)
    }
}

const cal = new Calculadora()