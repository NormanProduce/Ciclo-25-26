// ════════════════════════════════════════════════════════════
//  AUTH GUARD — Protege cada página interna.
//  Si el usuario no tiene sesión Firebase válida Y perfil
//  activo en Firestore, lo redirige al login.
// ════════════════════════════════════════════════════════════
(function () {
  // Ocultar la página hasta confirmar autenticación (evita flash de contenido)
  document.documentElement.style.visibility = 'hidden';

  firebase.auth().onAuthStateChanged(async function (user) {
    if (!user) {
      window.location.replace('index.html');
      return;
    }

    try {
      const doc = await firebase.firestore()
        .collection('usuarios')
        .doc(user.uid)
        .get();

      if (!doc.exists || doc.data().activo === false) {
        // Tiene cuenta Firebase pero sin perfil aprobado en Firestore
        await firebase.auth().signOut();
        window.location.replace('index.html');
        return;
      }
    } catch (e) {
      // Error de red — dejar pasar para no bloquear al usuario por conectividad
    }

    document.documentElement.style.visibility = '';
  });
})();
