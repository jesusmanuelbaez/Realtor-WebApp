$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: false,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<span class="title pt-2">#title#</span>',
        labels: {
            previous : 'Anterior',
            next : 'Siguiente',
            finish : 'Enviar',
            current : ''
        }
    });
});
