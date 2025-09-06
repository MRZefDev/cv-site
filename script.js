</script>
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Sağ tık devre dışı!");
});

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
    alert("Kaynak görüntüleme engellendi!");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key.toLowerCase() === "s") {
    e.preventDefault();
    alert("Kaydetme devre dışı!");
  }
});
</script>
