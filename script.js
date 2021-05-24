function genText() {
    let word = [

        'Metti il like tattico, ma buttati da un attico',
        "Sono un po' obeso, a scuola mi hanno appeso",
        'I sensi di colpa sono colpa dei sensi',
        "Mia mamma è incazzata come una kazaka",
        "In questo caso le bugie hanno le gambe lunghe, divaricate",
        "Vado da Unieuro e compro 2000 euro di TV con solo pezzi da 20",
        "Succo di cervello 100% polpa",
        "Babilonesi all'ascolto Good morning!",
        "Il dio del progresso era un gambero! Grazie",
        "Ahah (tossisce) ma so le cinque de mattina zio, che cazzo... ahaha",
        "Era meglio se non l'assaggiavo quel black Afghan",
        "Chi ha qualcosa in contrario taccia per sempre, che nessuno metta bocca se non per una pompa",
        "Noi proteggiamo il culo e che loro proteggano i timpani",
        "Mi sono fatto un esame di coscienza e mi hanno bocciato di nuovo",
        "Se sei uno spettro di urlo addosso",
        "Ma tagliatevi i capelli che cosi sembrate Predator",
        "Il sole se ne sta andando la luna diventando piena come le mie palle",
        "È una strada senza uscita ma non se fotto quella moto",
        "Lo saprai mo, nel tuo zaino c'è il segreto del flow",
        "Mi sento come se mi avessero picchiato",
        "Che colpa ne ho se la notte mi sogno i condor",
        "Datemi una banana in testa così mi raddrizzo",
        'Mi ha chiamato la CIA prima di bombardarmi per domandarmi se per caso avessi bisogno di armi, io gli ho risposto: "Se non mi bombardate no" E loro "Bombardatelo"',
        "Ho paura che non mi alzino le mani",
        "Sono HipHopcondriaco",
        '(Drin) si chi è? "Sono la tua coscienza" Ah ne ho una',
        "Non vedevamo un'anima focosa come la tua dai tempi di Mozart",
        "Anch'io la adoro, la odoro",
        "Brucio cosi tanto che se mi tocchi fai AIA!",
        "Devo uccidere Bill Gates",
        "Hardcore non è dire di esserlo (o lo sei o non lo sei)",
        


    ];

    let p = document.querySelector('#jestoText')
    p.innerHTML = word[Math.floor(Math.random()*word.length)];
}