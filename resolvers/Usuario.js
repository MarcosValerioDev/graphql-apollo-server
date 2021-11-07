module.exports = {
    salario(usuario) {
        return usuario.salarioReal + 1000.00;
    },
    perfil(usuario) {
        const sel = perfil.filter(perf => perf.id === usuario.perfil_id)
        return sel ? sel[0] : null
    }
}