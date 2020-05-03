# Chi Siamo

##### Ciao a tutti, 

Il nostro progetto segue l'evoluzione di quello che succede nell'ambito delle App per il Contact Tracing per la gestione del COVID-19.

##### Cosa abbiamo fatto sino a qui?

Siamo partiti con l'app del [DP3T](https://github.com/DP-3T/documents) e l'abbiamo installata per provarla.  Grazie a queste prove abbiamo riscontrato alcuni problemi, e sono inoltre sorti dubbi sulla sua efficacia. La community sta approfondendo entrambi gli aspetti e cercando di collaborare con i progetti originali.

Visto che i membri della community ed altri usano l'ambiente di demo reso possibile dalla community, si è aggiunta la gestione del disaster recovery.
 
Il passo successivo è stato quello di aggiungere delle funzioni di debug che ora ci sono (e verranno rilasciate).

Per crescere come community abbiamo iniziato ad organizzare delle call per organizzarci come un associazione e per approfondire gli aspetti tecnici inerenti il progetto (seminario tecnico sul BLE, organizzazione dei gruppi di lavoro sui vari componenti: app, simulatore, backend).

Sono sorti dubbi sull'utilità dell'app e abbiamo fatto un simulatore che personalmente A ME ha convinto che l'app serve.

Allo stato delle cose è certo che l'app che verrà utilizzata dai cittadini non sarà la nostra e, come abbiamo detto un milione di volte, non siamo in competizione, facciamo quello che pensiamo essere corretto nel pubblico interesse, con spirito di servizio alla comunità(estesa inoltre ad altre nazioni considerato che DP3T è alla base delle App che verrano usate anche in altre nazioni europee oltre l'Italia).

La nostra app, allo stato delle cose, è quindi uno strumento di test che servirà a verificare il più possibile DP3-T e in generale le soluzioni di contact tracing.


##### Cosa c'è da fare ora?

Primo di tutto rilasciare l'app con il debug e raccogliere il più possibile segnalazioni di issues con un video che mostri l'indirizzo bit.ly/protettibug per segnalare un bug e fatte vedere nel video che segnala il modello del telefono.

Io adesso aggiungerei altre funzionalità, come una che permette di misurare la distanza minima tra due telefoni che ricevono il segnale, magari con un bottone che manda un messaggio "invia test" e un popup.

Poi è meglio raccogliere i bug dal telefono: Cioè
- sul server ci sarà una nuova chiamata api che raccoglie bug e li salva sul database
- sul telefono si aggiungere un bottone "segnala errore" che chiami la funzione del server per raccogliere i bug
- poi si fa una schermata che mostra le segnalazioni


Chiedo almeno un project manager volontario, qualcuno che riesca a dedicare qualche ora del suo tempo per raccogliere e coordinare segnalazioni
E chiedo un lead developer per android volontario il cui compito sia almeno quello di guardare le PR e coordinarsi con il project manager e con me per scegliere quale accettare.
In realtà vorrei lasciare liberi i developers (che ora sono almeno 3) di produrre nuove funzionalità e avere qualcuno che si limiti a fare da "hub" raccogliere le PR e testarle (lavoro che ieri ha fatto Pierluigi che però è un devops e non un mobile developer)

Poi ci stai il simulatore. Lì il lead developer è a diritto acquisito Marco Pierobon, ma accetta sicuramente contributi. 
Cè un canale #simulator per discutere con lui su slack.


