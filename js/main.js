function turno(dia, hora) {
  this.dia = dia;
  this.hora = hora;

  this.hablar = () => {
    console.log(
      "Tu turno queda asi: " +
        "" +
        this.dia +
        "" +
        ", a las " +
        "" +
        this.hora +
        "" +
        "hs."
    );
  };
}

const turno1 = new turno(
  prompt("Ingresa que dia queres atenderte:"),
  prompt("Ingresa a que hora podrias atenderte:")
);

turno1.hablar();
alert("Llama por telefono al 555-6666 para reconfirmar");
alert("Gracias!");
