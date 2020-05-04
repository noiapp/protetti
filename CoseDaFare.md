Ciao a tutti, 

il nostro progetto segue l'evoluzione di quello che succede.  
Siamo partiti con l'app del DP3T e l'abbiamo installata per provarla e abbiamo riscontrato problemi, e sono sorti dubbi sulla sua efficacia.  
Visto che la gente la usava abbiamo anche aggiunto un disaster recovery  
Passo successivo è stato quello di aggiungere funzioni di debug che ora ci sono (e le dobbiamo rilasciare)  
Abbiamo fatto una call per organizzarci come associazione e ieri un seminario tecnico sul BLE.  
Sono sorti dubbi sull'utilità dell'app e abbiamo fatto un simulatore che personalmente A ME ha convinto che l'app serve.  
Allo stato delle cose è certo che l'app non sarà la nostra e come abbiamo detto un milione di volte non siamo in competizione, facciamo quello che pensiamo nel pubblico interesse anche se nessuno ce lo chiede.  
La nostra app allo stato delle cose è uno strumento di test che servirà a verificare il più possibile le possibilità  

Cosa c'è da fare ora?

Primo di tutto rilasciare l'app con il debug e raccogliere il più possibile segnalazioni di issues con un video che mostri l'indirizzo bit.ly/protettibug per segnalare un bug e fate vedere nel video che segnala il modello del telefono

Io adesso aggiungerei altre funzionalità, come una che permette di misurare la distanza minima tra due telefoni che ricevono il segnale, magari con un bottone che manda un messaggio "invia test" e un popup.

Poi è meglio raccogliere i bug dal telefono: Cioè
- sul server ci sarà una nuova chiamata api che raccoglie bug e li salva sul database
- sul telefono aggiungere un bottone "segnala errore" che chiami la funzione del server per raccogliere i bug
- poi si fa una schermata che mostra le segnalazioni


Chiedo almeno un project manager volontario, qualcuno che riesca a dedicare qualche ora del suo tempo per raccogliere e coordinare segnalazioni  
E chiedo un lead developer volontario per android il cui compito sia almeno quello di guardare le PR e coordinarsi con il project manager e con me per scegliere quale accettare.  
In realtà vorrei lasciare liberi i developers (che ora sono almeno 3) di produrre nuove funzionalità e avere qualcuno che si limiti a fare da "hub" raccogliere le PR e testarle (lavoro che ieri ha fatto Pierluigi che però è un devops e non un mobile)

Poi ci stai il simulatore. Li il lead developer è a diritto acquisito Marco Pierobon, ma accetta sicuramente contributi. C'è un canale #simulator per discutere con lui su slack.  


