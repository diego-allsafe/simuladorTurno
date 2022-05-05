function turno() {
  return prompt("Turnos:: Elegi que dia queres venir:");
}

function agenda(dia) {
  return "El dia que elegistes es " + dia;
}

function salida(dia) {
  alert(dia);
}

salida(agenda(turno()));

function tiempo() {
  return prompt("Listo. Ahora elegi a que hora queres venir:");
}

function reloj(hora) {
  return "La hora que elegistes es " + hora;
}

function salida(hora) {
  alert(hora);
}

salida(reloj(tiempo()));

alert(
  "Tu turno queda asi: " +
    "salida(agenda(turno()))" +
    "salida(reloj(tiempo())))"
);

alert("Gracias. Te espero en ese horario. Saludos");
